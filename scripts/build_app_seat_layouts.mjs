#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = path.join(root, "app", "cinema-inventory.json");
const sourcePath = path.join(
  root,
  "docs",
  "全国_IMAX_杜比影院_座位排列.json",
);
const outputPath = path.join(root, "app", "seat-layouts.json");

const inventory = JSON.parse(await readFile(inventoryPath, "utf8"));
const capture = JSON.parse(await readFile(sourcePath, "utf8"));
const hallsBySourceKey = new Map(
  inventory.map((hall) => [`${hall.name}::${hall.brand}`, hall]),
);

const layouts = {};
const missing = [];

for (const record of capture.records) {
  const sourceKey = `${record.inventory_name}::${record.brand}`;
  const hall = hallsBySourceKey.get(sourceKey);
  if (!hall) {
    missing.push(sourceKey);
    continue;
  }

  layouts[hall.id] = {
    gridColumns: record.grid_cols,
    physicalSeats: record.physical_seats,
    inventorySeats: record.inventory_seats,
    countMatchesInventory: record.count_matches_inventory,
    hallName: record.hall_name,
    capturedAt: capture.generated_at,
    sourceUrl: record.source_url,
    rows: record.rows.map((row) => ({
      label: String(row.row_id),
      cells: row.cells.map((cell) => [
        String(cell.seat_id),
        cell.slot,
      ]),
    })),
  };
}

if (missing.length) {
  throw new Error(`Unmatched captured halls:\n${missing.join("\n")}`);
}

const orderedLayouts = Object.fromEntries(
  Object.entries(layouts).sort(([left], [right]) =>
    left.localeCompare(right),
  ),
);
const output = {
  generatedAt: capture.generated_at,
  source: "登录猫眼选座页读取的稳定座位网格；不含实时可售状态",
  layouts: orderedLayouts,
};

await writeFile(outputPath, `${JSON.stringify(output)}\n`, "utf8");
console.log(
  `Wrote ${Object.keys(orderedLayouts).length} captured layouts to ${outputPath}`,
);
