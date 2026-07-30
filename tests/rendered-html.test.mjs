import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the cinema discovery page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>坐哪儿 \| 影院视野模拟器<\/title>/i);
  assert.match(html, /先选择城市/);
  assert.match(html, /银幕从大到小/);
  assert.match(html, /距离从近到远/);
  assert.match(html, /杜比影院/);
  assert.match(html, /精选巨幕/);
  assert.match(html, /进入影厅/);
  assert.match(html, /aria-busy="false"/);
  assert.match(html, /data-navigation-state="idle"/);
  assert.match(html, /href="\/cinema\/hall-0018"/);
  assert.doesNotMatch(html, /href="\/cinema\/hall-0003"/);
  assert.match(html, /中国电影博物馆/);
  assert.match(html, /我的位置/);
  assert.match(html, /先看视野，再决定坐哪儿。/);
  assert.doesNotMatch(html, /在坐下之前，先看清这块银幕。/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /Your site is taking shape/);
});

test("server-renders a selected auditorium simulator", async () => {
  const response = await render("/cinema/hall-0019");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /影院视野模拟器/);
  assert.match(html, /中国电影博物馆/);
  assert.match(html, /幕面光学模型/);
  assert.match(html, /IMAX Laser Countdown（在线）/);
  assert.match(html, /真实座位排列/);
  assert.match(html, /role="tab"[^>]*>选座</);
  assert.match(html, /role="tab"[^>]*>影院信息</);
  assert.match(html, /role="switch"[^>]*aria-checked="false"/);
  assert.match(html, />坐人</);
  assert.doesNotMatch(html, /逐排座号、空槽与过道来自实际选座页面/);
  assert.doesNotMatch(html, /返回坐哪儿影院列表/);
  assert.match(html, /返回/);
  assert.doesNotMatch(html, /自由视角/);
  assert.doesNotMatch(html, /从这里看/);
  assert.doesNotMatch(html, />全厅</);
});

test("multi-format cinemas default to IMAX and use the title as the switcher", async () => {
  const response = await render("/cinema/hall-0045");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /aria-label="切换影厅"/);
  assert.match(html, /data-dbd-pattern="auditorium-switcher"/);
  assert.match(html, /<option value="hall-0076" selected="">IMAX 厅<\/option>/);
  assert.match(html, /25\.9/);
  assert.match(html, /13\.5/);
});

test("labels captured seat layouts explicitly", async () => {
  const response = await render("/cinema/hall-0010");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /真实座位排列/);
  assert.doesNotMatch(html, /逐排座号、空槽与过道来自实际选座页面/);
});

test("unknown auditoriums return not found", async () => {
  const response = await render("/cinema/not-a-real-hall");
  assert.equal(response.status, 404);
});

test("captured seat layouts map cleanly to inventory halls", async () => {
  const [inventory, seatLayoutData] = await Promise.all([
    readFile(new URL("../app/cinema-inventory.json", import.meta.url), "utf8"),
    readFile(new URL("../app/seat-layouts.json", import.meta.url), "utf8"),
  ]).then((files) => files.map((file) => JSON.parse(file)));
  const inventoryIds = new Set(inventory.map((hall) => hall.id));
  const layouts = Object.entries(seatLayoutData.layouts);

  assert.equal(
    layouts.filter(([, layout]) => layout.isPriority).length,
    300,
    "exactly 300 captured layouts should be in the first-priority scope",
  );
  assert.ok(
    layouts.length >= 300,
    "retained lower-priority captures should not reduce first-priority coverage",
  );

  for (const [hallId, layout] of layouts) {
    assert.equal(inventoryIds.has(hallId), true, `${hallId} is not in inventory`);
    assert.equal(
      layout.rows.reduce((total, row) => total + row.cells.length, 0),
      layout.physicalSeats,
      `${hallId} physical seat count differs from its rows`,
    );

    for (const row of layout.rows) {
      const slots = row.cells.map(([, slot]) => slot);
      assert.equal(
        new Set(slots).size,
        slots.length,
        `${hallId} has duplicate slots`,
      );
      assert.equal(
        slots.every((slot) => slot >= 1 && slot <= layout.gridColumns),
        true,
        `${hallId} has a slot outside its grid`,
      );
    }
  }
});
