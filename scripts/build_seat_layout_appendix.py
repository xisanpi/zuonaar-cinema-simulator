#!/usr/bin/env python3
"""Render captured IMAX / Dolby Cinema seat layouts as a Markdown appendix."""

from __future__ import annotations

import json
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INVENTORY_PATH = ROOT / "docs" / "全国_IMAX_杜比影院_银幕与座位数据.json"
LAYOUT_PATH = ROOT / "docs" / "全国_IMAX_杜比影院_座位排列.json"
OUTPUT_PATH = ROOT / "docs" / "全国_IMAX_杜比影院_座位排列.md"


def fmt_block(block: dict) -> str:
    seat_start = block["seatStart"]
    seat_end = block["seatEnd"]
    slot_start = block["slotStart"]
    slot_end = block["slotEnd"]
    seat_text = str(seat_start) if seat_start == seat_end else f"{seat_start}–{seat_end}"
    slot_text = str(slot_start) if slot_start == slot_end else f"{slot_start}–{slot_end}"
    return f"座{seat_text}@槽{slot_text}"


def build_blocks(cells: list[dict]) -> list[dict]:
    """Merge adjacent numeric seat IDs, including right-to-left numbering."""
    merged: list[dict] = []
    direction = 0
    for cell in sorted(cells, key=lambda item: item["slot"]):
        slot = cell["slot"]
        seat_id = cell["seat_id"]
        seat = int(seat_id) if seat_id.isdigit() else None
        if not merged:
            merged.append(
                {
                    "slotStart": slot,
                    "slotEnd": slot,
                    "seatStart": seat_id,
                    "seatEnd": seat_id,
                    "count": 1,
                }
            )
            continue
        current = merged[-1]
        current_seat = (
            int(current["seatEnd"]) if str(current["seatEnd"]).isdigit() else None
        )
        seat_delta = seat - current_seat if seat is not None and current_seat is not None else 0
        contiguous = (
            slot == current["slotEnd"] + 1
            and seat is not None
            and current_seat is not None
            and abs(seat_delta) == 1
        )
        if contiguous and (direction == 0 or seat_delta == direction):
            direction = seat_delta
            current["slotEnd"] = slot
            current["seatEnd"] = seat_id
            current["count"] += 1
        else:
            merged.append(
                {
                    "slotStart": slot,
                    "slotEnd": slot,
                    "seatStart": seat_id,
                    "seatEnd": seat_id,
                    "count": 1,
                }
            )
            direction = 0
    return merged


def fmt_row(row: dict) -> str:
    blocks = "；".join(fmt_block(block) for block in row["blocks"])
    row_label = f"R{row['row']:02d}"
    if str(row["row_id"]) != str(row["row"]):
        row_label += f"/排{row['row_id']}"
    return f"{row_label}  {blocks}  [{row['seats']}座]"


def esc(value: object) -> str:
    return str(value).replace("|", "\\|")


def main() -> None:
    inventory = json.loads(INVENTORY_PATH.read_text(encoding="utf-8"))
    capture = json.loads(LAYOUT_PATH.read_text(encoding="utf-8"))
    for record in capture["records"]:
        inv = next(
            (
                item
                for item in inventory["records"]
                if item["name"] == record["inventory_name"]
            ),
            {},
        )
        if record["inventory_seats"] is None and inv.get("seats") is not None:
            record["inventory_seats"] = inv["seats"]
            record["count_matches_inventory"] = (
                record["physical_seats"] == record["inventory_seats"]
            )
        elif record["inventory_seats"] is None:
            record["count_matches_inventory"] = None
        for row in record["rows"]:
            row["blocks"] = build_blocks(row["cells"])
    LAYOUT_PATH.write_text(
        json.dumps(capture, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    inventory_by_name = {record["name"]: record for record in inventory["records"]}

    records = []
    for record in capture["records"]:
        merged = dict(record)
        merged["inventory"] = inventory_by_name.get(record["inventory_name"], {})
        records.append(merged)

    brand_counts = Counter(record["brand"] for record in records)
    matches = sum(record["count_matches_inventory"] is True for record in records)
    mismatches = [
        record for record in records if record["count_matches_inventory"] is False
    ]
    no_baseline = sum(
        record["count_matches_inventory"] is None for record in records
    )

    lines = [
        "# 全国高规格影院座位排列（首批 300 厅）",
        "",
        "> 抓取日期：2026-07-29。数据来自登录后的猫眼选座页，只读取页面座位 DOM；未点击、未选择、未锁定任何座位。",
        "> 本文件是[全国银幕与座位总数主表](./全国_IMAX_杜比影院_银幕与座位数据.md)的排列附录；机器可读原始数据见[座位排列 JSON](./全国_IMAX_杜比影院_座位排列.json)。",
        "",
        "## 覆盖与核验",
        "",
        f"- 已采集 **{len(records)}** 个影厅：大陆 Dolby Cinema **{brand_counts['Dolby Cinema']}** 厅（主表 36 厅全部覆盖），IMAX **{brand_counts['IMAX']}** 厅，精选 CINITY / 中国巨幕 / LED **{brand_counts['Other PLF']}** 厅。",
        f"- 当前选座图与主表座位总数完全一致 **{matches}** 厅；存在差异 **{len(mismatches)}** 厅；另有 **{no_baseline}** 厅没有独立主表总数，以选座图实体座位数为准。",
        "- 每排记录实体座号及其在选座网格中的槽位。`座1–8@槽3–10` 表示 1–8 号座占据网格第 3–10 槽。",
        "- 同排多个座位段之间只称为“缺口/空槽”。选座 DOM 不能证明缺口一定是物理过道，因此不作过道推断。",
        "- 场次时间和场次编号仅用于证明抓取来源；余票/已售状态属于动态信息，未写入永久排列。",
        "- 首批 300 厅目标已完成；未进入首批的影院仍按“存在可售场次且能明确匹配”原则增量补充。",
        "",
        "## 总数冲突",
        "",
        "| 制式 | 地区 | 影院 / 影厅 | 主表座位 | 当前排列 | 差值 | 处理 |",
        "|---|---|---|---:|---:|---:|---|",
    ]

    for record in mismatches:
        inv = record["inventory"]
        delta = record["physical_seats"] - record["inventory_seats"]
        lines.append(
            "| {brand} | {region} | {name} | {expected} | {current} | {delta:+d} | "
            "保留两套原始值，待影院确认版本/无障碍位口径 |".format(
                brand=esc(record["brand"]),
                region=esc("·".join(filter(None, [inv.get("province"), inv.get("city")]))),
                name=esc(record["inventory_name"]),
                expected=record["inventory_seats"],
                current=record["physical_seats"],
                delta=delta,
            )
        )

    lines.extend(
        [
            "",
            "## 采集索引",
            "",
            "| 制式 | 地区 | 影院 / 影厅 | 影厅名（选座页） | 排数 | 网格列 | 当前座位 | 主表座位 | 核验 |",
            "|---|---|---|---|---:|---:|---:|---:|---|",
        ]
    )

    for record in records:
        inv = record["inventory"]
        region = "·".join(
            filter(
                None,
                [
                    inv.get("province") or record.get("province"),
                    inv.get("city") or record.get("city"),
                ],
            )
        )
        if record["count_matches_inventory"] is True:
            check = "一致"
        elif record["count_matches_inventory"] is False:
            check = "冲突"
        else:
            check = "无主表基准"
        expected = (
            record["inventory_seats"]
            if record["inventory_seats"] is not None
            else "—"
        )
        lines.append(
            "| {brand} | {region} | [{name}](#{anchor}) | {hall} | {rows} | {cols} | "
            "{current} | {expected} | {check} |".format(
                brand=esc(record["brand"]),
                region=esc(region),
                name=esc(record["inventory_name"]),
                anchor=record["session_seq_no"],
                hall=esc(record["hall_name"]),
                rows=record["row_count"],
                cols=record["grid_cols"],
                current=record["physical_seats"],
                expected=expected,
                check=check,
            )
        )

    for brand in ("Dolby Cinema", "IMAX", "Other PLF"):
        title = {
            "Dolby Cinema": "杜比影院",
            "IMAX": "IMAX",
            "Other PLF": "精选 CINITY / 中国巨幕 / LED",
        }[brand]
        lines.extend(["", f"## {title} 逐排排列", ""])
        for record in (item for item in records if item["brand"] == brand):
            inv = record["inventory"]
            region = "·".join(
                filter(
                    None,
                    [
                        inv.get("province") or record.get("province"),
                        inv.get("city") or record.get("city"),
                    ],
                )
            )
            if record["count_matches_inventory"] is True:
                check = "与主表一致"
            elif record["count_matches_inventory"] is False:
                check = f"与主表 {record['inventory_seats']} 座不一致"
            else:
                check = "无独立主表总数"
            lines.extend(
                [
                    f'<a id="{record["session_seq_no"]}"></a>',
                    f"### {record['inventory_name']}",
                    "",
                    f"- 地区：{region or '—'}",
                    f"- 选座页影院：{record['maoyan_cinema_name']}",
                    f"- 影厅：{record['hall_name']}",
                    f"- 排列：{record['row_count']} 排，最大 {record['grid_cols']} 网格列，"
                    f"当前 {record['physical_seats']} 座（{check}）",
                    f"- 来源场次：{record['session_time']}，`{record['session_seq_no']}`；"
                    f"[选座页]({record['source_url']})",
                    "",
                    "```text",
                    *[fmt_row(row) for row in record["rows"]],
                    "```",
                    "",
                ]
            )

    lines.extend(
        [
            "## 数据解释与复核建议",
            "",
            "1. 选座图是当前售票系统中的实时影厅配置，主表是不同维护时间的资料快照；装修、拆座、无障碍位、情侣座计数和系统配置变更都可能造成总数差异。",
            "2. `网格列` 是网页布局坐标，不等于建筑轴网或实际等距列；只用于重建座位相对位置。",
            "3. 本轮只保留稳定排列，不保留“可选/已售”等动态状态。",
            "4. IMAX 未采集影院并不表示没有座位图，通常只是当前没有可明确匹配的可售 IMAX 场次，或影院名称无法安全对应。",
            "",
        ]
    )

    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")
    print(
        f"Wrote {OUTPUT_PATH} ({len(records)} halls; "
        f"{matches} matched, {len(mismatches)} mismatched)"
    )


if __name__ == "__main__":
    main()
