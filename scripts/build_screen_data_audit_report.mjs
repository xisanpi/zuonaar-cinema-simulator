#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventory = JSON.parse(
  fs.readFileSync(path.join(root, "app/cinema-inventory.json"), "utf8"),
);
const audit = JSON.parse(
  fs.readFileSync(path.join(root, "app/screen-data-audit.json"), "utf8"),
);

function assessment(id, difference) {
  if (audit.overrides[id]) return audit.overrides[id];
  if (difference <= 1) {
    return {
      confidence: "medium",
      status: "version_consistent",
      label: "中可信",
      note: "两个数据版本的面积差不超过 1%，但缺少官方精确尺寸。",
      sources: [],
    };
  }
  if (difference <= 5) {
    return {
      confidence: "low",
      status: "needs_review",
      label: "待复核",
      note: "两个数据版本的面积差为 1%–5%，可能存在测量边界差异。",
      sources: [],
    };
  }
  return {
    confidence: "low",
    status: "conflict",
    label: "数据冲突",
    note: "两个数据版本的面积差超过 5%，不能用普通四舍五入解释。",
    sources: [],
  };
}

const rows = inventory
  .filter((hall) => audit.measurements[hall.id])
  .map((hall) => {
    const [referenceWidth, referenceHeight] = audit.measurements[hall.id];
    const referenceArea = referenceWidth * referenceHeight;
    const currentArea = hall.width * hall.height;
    const difference = Math.abs(((currentArea - referenceArea) / referenceArea) * 100);
    return {
      ...hall,
      referenceWidth,
      referenceHeight,
      referenceArea,
      currentArea,
      difference,
      assessment: assessment(hall.id, difference),
    };
  })
  .sort((left, right) => right.currentArea - left.currentArea);

const counts = rows.reduce((result, row) => {
  result[row.assessment.label] = (result[row.assessment.label] ?? 0) + 1;
  return result;
}, {});

const shortName = (name) => name.replace(/^上海/, "");
const value = (width, height) => `${width} × ${height} m`;
const lines = [
  "# 上海 IMAX 银幕数据可信度核验",
  "",
  `- 核验日期：${audit.checkedAt}`,
  `- 范围：${audit.scope}，共 ${rows.length} 家`,
  `- 对比来源：${audit.referenceSource}`,
  `- 结果：${Object.entries(counts)
    .map(([label, count]) => `${label} ${count} 家`)
    .join("；")}`,
  "",
  "## 判定标准",
  "",
  "- **已核实**：有 IMAX 中国、影院或可追溯的同期权威报道公布精确长宽，且与展示值一致。",
  "- **中可信**：两个版本的银幕面积差不超过 1%，但还没有独立官方精确尺寸。",
  "- **待复核**：面积差为 1%–5%，或来源自身标注待测量。",
  "- **数据冲突**：面积差超过 5%，且暂无足够的独立证据裁决。",
  "",
  "> 搜索引擎缓存页曾显示与实时页不同的数值；本次已直接读取项目引用数据库的 2026-07-30 实时页面复核。该站明确说明数据来自网络与影迷贡献，并引用 ArvinTing 的表格，因此不把同源转载当成独立交叉验证。",
  "",
  "## 逐家结果",
  "",
  "| 影院 | 当前展示 | 对比清单 | 面积差 | 标注 | 可信度 |",
  "| --- | ---: | ---: | ---: | --- | --- |",
  ...rows.map(
    (row) =>
      `| ${shortName(row.name)} | ${value(row.width, row.height)} | ${value(
        row.referenceWidth,
        row.referenceHeight,
      )} | ${row.difference.toFixed(1)}% | ${row.assessment.label} | ${
        row.assessment.confidence === "high"
          ? "高"
          : row.assessment.confidence === "medium"
            ? "中"
            : "低"
      } |`,
  ),
  "",
  "## 重点说明",
  "",
  ...rows
    .filter((row) => audit.overrides[row.id])
    .flatMap((row) => [
      `### ${shortName(row.name)}`,
      "",
      row.assessment.note,
      ...(row.assessment.sources.length
        ? [
            "",
            ...row.assessment.sources.map(
              (source, index) => `- [证据 ${index + 1}](${source})`,
            ),
          ]
        : []),
      "",
    ]),
  "## 下一步补证优先级",
  "",
  "1. 优先复核面积差超过 10% 且会影响排名的影院：浦江万达、九亭星轶、青浦万达、宝山龙湖、周浦万达等。",
  "2. 要求对方提供原始证据：影厅参数牌、建筑/改造图、IMAX 或影院公告，或包含测量过程的现场照片。",
  "3. 现场测量时必须记录口径：银幕物理外延、可见幕面还是实际画面有效区，否则同一影厅仍会得到不同数字。",
  "",
];

const output = path.join(root, "docs/上海_IMAX_银幕数据可信度核验.md");
fs.writeFileSync(output, `${lines.join("\n")}\n`);
console.log(`Wrote ${rows.length} records to ${output}`);
