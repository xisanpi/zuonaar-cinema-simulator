#!/usr/bin/env node
/**
 * Match the 300-hall target manifest to current Maoyan IMAX sessions.
 *
 * This script only uses public cinema/search/show metadata. Seat layouts remain
 * a separate, logged-in, read-only browser step.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const planPath = path.join(root, "docs", "首批300影厅覆盖计划.json");
const outputPath = path.join(root, "docs", "首批300影厅_猫眼匹配.json");
const apiBase = "https://apis.netstart.cn/maoyan";
const headers = { "user-agent": "Mozilla/5.0" };
const futureDate = "2026-07-30";
const limitArg = process.argv.indexOf("--limit");
const limit =
  limitArg >= 0 ? Number.parseInt(process.argv[limitArg + 1], 10) : Infinity;
const retryUnmatched = process.argv.includes("--retry-unmatched");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function normalizeName(value) {
  return value
    .toUpperCase()
    .replace(/IMAX|LASER|GT|COLA|XT|4K|双激光|单激光|激光|数字|氙灯/g, "")
    .replace(/国际|影城|影院|电影城|旗舰店|店|万达广场|购物中心|广场/g, "")
    .replace(/[（）()【】[\]·\-—_/+\s]/g, "");
}

function bigrams(value) {
  if (value.length < 2) return new Set([value]);
  return new Set(Array.from({ length: value.length - 1 }, (_, i) => value.slice(i, i + 2)));
}

function branchName(value) {
  const matches = [...value.matchAll(/[（(]([^）)]+)[）)]/g)];
  const branch = matches.at(-1)?.[1] || value;
  return normalizeName(
    branch
      .replace(/IMAX.*$/i, "")
      .replace(/CINITY.*$/i, "")
      .replace(/杜比.*$/i, ""),
  );
}

function nameScore(target, candidate) {
  const a = normalizeName(target);
  const b = normalizeName(candidate);
  if (!a || !b) return 0;
  if (a === b) return 1;
  const shorter = a.length <= b.length ? a : b;
  const longer = a.length > b.length ? a : b;
  const contains = longer.includes(shorter) ? 0.35 : 0;
  const aa = bigrams(a);
  const bb = bigrams(b);
  const intersection = [...aa].filter((item) => bb.has(item)).length;
  const union = new Set([...aa, ...bb]).size || 1;
  const targetBranch = branchName(target);
  const candidateBranch = branchName(candidate);
  const branchContains =
    targetBranch.length >= 2 &&
    candidateBranch.length >= 2 &&
    (targetBranch.includes(candidateBranch) ||
      candidateBranch.includes(targetBranch))
      ? 0.3
      : 0;
  return Math.min(1, intersection / union + contains + branchContains);
}

async function getJson(url, attempts = 3) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url, { headers });
      if (response.ok) return await response.json();
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(300 * (attempt + 1));
  }
  throw lastError;
}

async function searchCinemas(query) {
  const url = new URL(`${apiBase}/search/cinemas`);
  url.searchParams.set("keyword", query);
  url.searchParams.set("ci", "1");
  const payload = await getJson(url);
  return Array.isArray(payload) ? payload : [];
}

function allSessions(payload) {
  return (payload?.data?.movies || []).flatMap((movie) =>
    (movie.shows || []).flatMap((show) => show.plist || []),
  );
}

async function getImaxSession(cinemaId) {
  const url = new URL(`${apiBase}/cinema/shows`);
  url.searchParams.set("cinemaId", String(cinemaId));
  url.searchParams.set("ci", "1");
  url.searchParams.set("channelId", "4");
  const payload = await getJson(url);
  const sessions = allSessions(payload)
    .filter((session) => session.dt >= futureDate)
    .filter((session) =>
      /IMAX/i.test(`${session.th || ""} ${session.tp || ""}`),
    )
    .sort((a, b) => `${a.dt}${a.tm}`.localeCompare(`${b.dt}${b.tm}`));
  return {
    cinemaName: payload?.data?.cinemaName || "",
    session: sessions[0] || null,
  };
}

function compactSession(session) {
  if (!session) return null;
  return {
    date: session.dt,
    time: session.tm,
    hall_name: session.th,
    format: session.tp,
    seq_no: session.seqNo,
  };
}

async function matchTarget(target) {
  const query = `${target.city} ${target.inventory_name}`;
  const fallbackQuery = `${target.city} ${branchName(target.inventory_name)}`;
  const rawSearchResults = [
    ...(await searchCinemas(query)),
    ...(fallbackQuery !== query ? await searchCinemas(fallbackQuery) : []),
  ];
  const seenCinemaIds = new Set();
  const searchResults = rawSearchResults.filter(
    (item) => item?.id && !seenCinemaIds.has(item.id) && seenCinemaIds.add(item.id),
  );
  if (searchResults.length === 0) {
    return {
      target_id: target.target_id,
      inventory_name: target.inventory_name,
      status: "no_search_result",
      query,
    };
  }

  const ranked = searchResults
    .map((item) => ({
      item,
      score: nameScore(target.inventory_name, item.info?.name || ""),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const checked = await Promise.all(
    ranked.map(async ({ item, score }) => {
      try {
        const show = await getImaxSession(item.id);
        return { item, score, show, error: "" };
      } catch (error) {
        return { item, score, show: null, error: String(error) };
      }
    }),
  );
  const withSession = checked
    .filter((candidate) => candidate.show?.session)
    .sort((a, b) => b.score - a.score);
  const best = withSession[0];

  if (!best) {
    const top = checked[0];
    return {
      target_id: target.target_id,
      inventory_name: target.inventory_name,
      status: "no_imax_session",
      query,
      best_candidate: top
        ? {
            cinema_id: top.item.id,
            cinema_name: top.item.info?.name || "",
            address: top.item.info?.address || "",
            score: Number(top.score.toFixed(3)),
          }
        : null,
    };
  }

  return {
    target_id: target.target_id,
    inventory_name: target.inventory_name,
    status: best.score >= 0.48 ? "matched_ready" : "needs_review",
    query,
    cinema_id: best.item.id,
    cinema_name: best.show.cinemaName || best.item.info?.name || "",
    address: best.item.info?.address || "",
    score: Number(best.score.toFixed(3)),
    session: compactSession(best.show.session),
    alternatives: withSession.slice(1, 3).map((candidate) => ({
      cinema_id: candidate.item.id,
      cinema_name:
        candidate.show.cinemaName || candidate.item.info?.name || "",
      score: Number(candidate.score.toFixed(3)),
      session: compactSession(candidate.show.session),
    })),
  };
}

async function main() {
  const plan = JSON.parse(await fs.readFile(planPath, "utf8"));
  let previous = { records: [] };
  try {
    previous = JSON.parse(await fs.readFile(outputPath, "utf8"));
  } catch {
    // First run.
  }
  const previousByName = new Map(
    previous.records.map((record) => [record.inventory_name, record]),
  );
  const pending = plan.records
    .filter((record) => record.brand === "IMAX")
    .filter((record) => record.status !== "captured")
    .filter((record) => {
      const previousRecord = previousByName.get(record.inventory_name);
      if (!previousRecord) return true;
      return retryUnmatched && previousRecord.status !== "matched_ready";
    })
    .slice(0, limit);

  let completed = 0;
  for (let offset = 0; offset < pending.length; offset += 6) {
    const batch = pending.slice(offset, offset + 6);
    const results = await Promise.all(batch.map(matchTarget));
    for (const result of results) previousByName.set(result.inventory_name, result);
    completed += results.length;
    const records = [...previousByName.values()].sort(
      (a, b) => a.target_id - b.target_id,
    );
    const payload = {
      generated_at: new Date().toISOString(),
      future_date_floor: futureDate,
      records,
    };
    await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    console.log(`matched ${completed}/${pending.length}`);
    await sleep(250);
  }

  const records = [...previousByName.values()];
  const counts = Object.groupBy(records, (record) => record.status);
  console.log(
    JSON.stringify(
      Object.fromEntries(
        Object.entries(counts).map(([key, value]) => [key, value.length]),
      ),
    ),
  );
}

await main();
