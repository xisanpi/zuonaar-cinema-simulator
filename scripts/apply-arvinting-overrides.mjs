import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventoryPath = path.join(projectRoot, "app/cinema-inventory.json");
const overridePath = path.join(
  projectRoot,
  "docs/data/arvinting-overrides-20260801.json",
);

const inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
const source = JSON.parse(fs.readFileSync(overridePath, "utf8"));
const overridesByHallId = new Map(
  source.overrides.map((override) => [override.hallId, override]),
);

if (overridesByHallId.size !== source.overrides.length) {
  throw new Error("ArvinTing override file contains duplicate hall IDs.");
}

const applied = [];
for (const hall of inventory) {
  const override = overridesByHallId.get(hall.id);
  if (!override) continue;

  for (const field of ["width", "height", "area", "seats", "projection"]) {
    const value = override[field];
    if (value !== null && value !== undefined) hall[field] = value;
  }

  if (hall.width && hall.height) {
    hall.ratio = `${(hall.width / hall.height).toFixed(2)}:1`;
  }
  hall.sourceUrl = `${source.source.url}?tab=${override.sheetId}`;
  hall.dataSourceId = source.source.id;
  hall.dataSourceSheet = override.sheetId;
  hall.dataSourceRow = override.rowNumber;
  applied.push(hall.id);
}

const missing = source.overrides
  .map((override) => override.hallId)
  .filter((hallId) => !applied.includes(hallId));
if (missing.length) {
  throw new Error(`Unknown hall IDs in override file: ${missing.join(", ")}`);
}

fs.writeFileSync(inventoryPath, JSON.stringify(inventory));
console.log(`Applied ${applied.length} ArvinTing source records.`);
