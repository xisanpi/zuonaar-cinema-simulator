#!/usr/bin/env python3
"""Build the auditable target manifest for the first 300 seat layouts."""

from __future__ import annotations

import json
import math
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INVENTORY_PATH = ROOT / "docs" / "全国_IMAX_杜比影院_银幕与座位数据.json"
LAYOUT_PATH = ROOT / "docs" / "全国_IMAX_杜比影院_座位排列.json"
PLF_PATH = ROOT / "docs" / "首批300影厅_精选巨幕目标.json"
OUTPUT_JSON = ROOT / "docs" / "首批300影厅覆盖计划.json"
OUTPUT_MD = ROOT / "docs" / "首批300影厅覆盖计划.md"

UNAVAILABLE_TARGETS = {
    "东莞市科学技术博物馆",
    "山东省科技馆（新馆）",
    "黑龙江省科学技术馆",
    "厦门寰映影城（棕榈城店）",
    "武汉武商摩尔国际电影城",
    "深圳CINESKY新天影院IMAX 壹方天地C区（壹方城）",
    "AMG海上明珠影城（南京雨花客厅IMAX店）",
    "杭州横店电影城（IMAX_CINITY萧山银泰店）",
    "拉萨SFC上影IMAX影城（原天海万达影城）",
}
PROJECTION_SCORE = {
    "IMAX GT Laser": 30,
    "IMAX CoLA": 25,
    "IMAX XT": 19,
    "IMAX Digital Xenon": 10,
    "IMAX GT Dome": 14,
    "IMAX SR Dome": 12,
}
MAINLAND = {
    "安徽",
    "北京",
    "重庆",
    "福建",
    "甘肃",
    "广东",
    "广西",
    "贵州",
    "海南",
    "河北",
    "河南",
    "黑龙江",
    "湖北",
    "湖南",
    "吉林",
    "江苏",
    "江西",
    "辽宁",
    "内蒙古",
    "宁夏",
    "青海",
    "山东",
    "山西",
    "陕西",
    "上海",
    "四川",
    "天津",
    "西藏",
    "新疆",
    "云南",
    "浙江",
}


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def inventory_target(
    record: dict,
    group: str,
    captured_keys: set[tuple],
    priority: dict | None = None,
) -> dict:
    key = (record["brand"], record["name"])
    target = {
        "target_group": group,
        "brand": record["brand"],
        "inventory_name": record["name"],
        "province": record["province"],
        "city": record["city"],
        "projection": record["projection"],
        "inventory_seats": record["seats"],
        "width_m": record["width_m"],
        "height_m": record["height_m"],
        "area_m2": record["area_m2"],
        "inventory_url": record["url"],
        "status": "captured" if key in captured_keys else "pending_match",
    }
    if priority:
        target["priority_rank"] = priority["rank"]
        target["priority_score"] = priority["score"]
        target["priority_components"] = priority["components"]
    return target


def rank_imax(records: list[dict]) -> list[dict]:
    """Rank IMAX halls by user value, without treating every laser hall as essential."""
    city_counts = Counter(record["city"] for record in records)
    max_city_count = max(city_counts.values())

    def components(record: dict) -> dict:
        area = record.get("area_m2") or 190
        seats = record.get("seats") or 300
        return {
            "projection": PROJECTION_SCORE[record["projection"]],
            "city_demand_proxy": round(
                25
                * math.log1p(city_counts[record["city"]])
                / math.log1p(max_city_count),
                2,
            ),
            "screen_area": round(20 * (min(area, 420) / 420) ** 0.8, 2),
            "seat_capacity": round(15 * (min(seats, 650) / 650) ** 0.75, 2),
            "institution_penalty": (
                -15
                if any(token in record["name"] for token in ("科技馆", "博物馆"))
                else 0
            ),
        }

    base = {
        record["name"]: sum(components(record).values())
        for record in records
    }
    best_by_city: dict[str, str] = {}
    best_by_province: dict[str, str] = {}
    for record in records:
        city = record["city"]
        province = record["province"]
        if (
            city not in best_by_city
            or (base[record["name"]], record["name"])
            > (base[best_by_city[city]], best_by_city[city])
        ):
            best_by_city[city] = record["name"]
        if (
            province not in best_by_province
            or (base[record["name"]], record["name"])
            > (base[best_by_province[province]], best_by_province[province])
        ):
            best_by_province[province] = record["name"]

    scored = []
    for record in records:
        values = components(record)
        values["city_representative"] = (
            3 if best_by_city[record["city"]] == record["name"] else 0
        )
        values["province_representative"] = (
            4 if best_by_province[record["province"]] == record["name"] else 0
        )
        values["landmark_bonus"] = (
            18 if "中国电影博物馆" in record["name"] else 0
        )
        scored.append(
            {
                "record": record,
                "score": round(sum(values.values()), 2),
                "components": values,
            }
        )
    scored.sort(
        key=lambda item: (item["score"], item["record"]["name"]),
        reverse=True,
    )
    for rank, item in enumerate(scored, start=1):
        item["rank"] = rank
    return scored


def select_imax(ranked: list[dict], count: int) -> list[dict]:
    """Take the national top list, then guarantee one useful hall per province."""
    selected = ranked[:count]
    selected_names = {item["record"]["name"] for item in selected}
    province_best: dict[str, dict] = {}
    for item in ranked:
        province_best.setdefault(item["record"]["province"], item)
    missing = [
        item for item in province_best.values()
        if item["record"]["name"] not in selected_names
    ]
    if not missing:
        return selected

    protected = {item["record"]["name"] for item in province_best.values()}
    replaceable = [
        item for item in reversed(selected)
        if item["record"]["name"] not in protected
    ]
    for addition, removal in zip(missing, replaceable):
        selected.remove(removal)
        selected.append(addition)
    return sorted(
        selected,
        key=lambda item: (item["score"], item["record"]["name"]),
        reverse=True,
    )


def main() -> None:
    inventory = read_json(INVENTORY_PATH)["records"]
    layouts = read_json(LAYOUT_PATH)["records"]
    plf = read_json(PLF_PATH)["records"]
    captured_keys = {(record["brand"], record["inventory_name"]) for record in layouts}

    mainland = [record for record in inventory if record["province"] in MAINLAND]
    dolby = [record for record in mainland if record["brand"] == "Dolby Cinema"]
    eligible_imax = [
        record
        for record in mainland
        if record["brand"] == "IMAX"
        and record["name"] not in UNAVAILABLE_TARGETS
    ]
    ranked_imax = rank_imax(eligible_imax)
    selected_imax = select_imax(ranked_imax, 238)

    targets = [
        *[
            inventory_target(record, "dolby_all", captured_keys)
            for record in sorted(dolby, key=lambda item: (item["province"], item["name"]))
        ],
        *[
            inventory_target(
                item["record"],
                "imax_priority",
                captured_keys,
                item,
            )
            for item in selected_imax
        ],
    ]

    for record in plf:
        targets.append(
            {
                "target_group": "curated_plf",
                "brand": "Other PLF",
                "inventory_name": record["cinema_name"],
                "province": "",
                "city": record["city"],
                "projection": record["format"],
                "inventory_seats": None,
                "width_m": None,
                "height_m": None,
                "area_m2": None,
                "inventory_url": "",
                "status": (
                    "captured"
                    if ("Other PLF", record["cinema_name"]) in captured_keys
                    else "pending_capture"
                ),
                "maoyan_cinema_id": record["cinema_id"],
                "maoyan_cinema_name": record["cinema_name"],
                "hall_name": record["hall_name"],
                "session_time": f"{record['session_date']} {record['session_time']}",
                "session_seq_no": record["seq_no"],
            }
        )

    assert len(dolby) == 36, len(dolby)
    assert len(selected_imax) == 238, len(selected_imax)
    assert {item["record"]["province"] for item in selected_imax} == {
        record["province"] for record in eligible_imax
    }
    assert len(plf) == 26, len(plf)
    assert len(targets) == 300, len(targets)
    assert len({(target["brand"], target["inventory_name"]) for target in targets}) == 300

    for index, target in enumerate(targets, start=1):
        target["target_id"] = index

    counts = Counter(target["target_group"] for target in targets)
    status_counts = Counter(target["status"] for target in targets)
    previous_focus = {
        record["inventory_name"]
        # The first 300 records are the completed pre-ranking capture batch.
        # Later records are additive captures made by this importance refresh.
        for record in layouts[:300]
        if record["brand"] == "IMAX"
    }
    current_focus = {
        item["record"]["name"]
        for item in selected_imax
    }
    projection_counts = Counter(
        item["record"]["projection"] for item in selected_imax
    )
    payload = {
        "generated_at": "2026-07-29",
        "target_total": 300,
        "selection": {
            "dolby_all": counts["dolby_all"],
            "imax_priority": counts["imax_priority"],
            "curated_plf": counts["curated_plf"],
        },
        "importance_model": {
            "projection_max": 30,
            "city_demand_proxy_max": 25,
            "screen_area_max": 20,
            "seat_capacity_max": 15,
            "city_representative_bonus": 3,
            "province_representative_bonus": 4,
            "institution_penalty": -15,
            "landmark_exception": "中国电影博物馆 +18",
            "selection_constraint": "每个有 IMAX 的中国大陆省级地区至少保留 1 个代表厅",
            "projection_mix": dict(projection_counts),
        },
        "priority_refresh": {
            "added_to_focus": sorted(current_focus - previous_focus),
            "removed_from_focus_but_data_retained": sorted(
                previous_focus - current_focus
            ),
        },
        "operational_substitutions": {
            "removed": sorted(UNAVAILABLE_TARGETS),
            "reason": "无商业选座入口、无公开匹配、渠道无权限或双厅无法准确对应，不进入可用于选座工具的首批重点范围。",
        },
        "status": dict(status_counts),
        "records": targets,
    }
    OUTPUT_JSON.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    group_labels = {
        "dolby_all": "杜比影院全量",
        "imax_priority": "重要性排序 IMAX",
        "curated_plf": "精选 CINITY / 中国巨幕 / LED",
    }
    lines = [
        "# 首批 300 个高规格影厅覆盖计划",
        "",
        "> 目标：为 300 个高规格影厅维护可复核的逐排座位排列；目录中的其他影院仍可保留银幕和座位总数，但不进入首批精确排列。",
        "",
        "## 构成",
        "",
        "| 分组 | 数量 | 选择规则 |",
        "|---|---:|---|",
        "| 杜比影院全量 | 36 | 中国大陆主表中的 Dolby Cinema 全部收录 |",
        "| 重要性排序 IMAX | 238 | 技术规格、城市需求代理、银幕面积、座位规模与区域代表性统一评分 |",
        "| 精选 CINITY / 中国巨幕 / LED | 26 | 重点城市各选一厅，选座页必须明确显示制式 |",
        "| **合计** | **300** | — |",
        "",
        "## 重要性判断",
        "",
        "- 技术规格最高 30 分：GT Laser、CoLA、XT、数字氙灯分档；不再把所有激光厅自动视为必选。",
        "- 城市需求代理最高 25 分：使用该城市高规格影厅数量的对数值，避免北上广深无限挤占名额。",
        "- 银幕面积最高 20 分、座位规模最高 15 分；大体量传统 IMAX 可以超过小体量激光厅。",
        "- 每座城市第一名加 3 分、每省第一名加 4 分；并强制每个有 IMAX 的大陆省级地区至少保留 1 厅。",
        "- 科技馆 / 博物馆默认减 15 分并要求有商业选座入口；中国电影博物馆作为持续商业放映地标单独加 18 分。",
        "",
        "## 当前进度",
        "",
        f"- 已有精确排列：**{status_counts['captured']}** 厅。",
        f"- 重点范围完整度：**{status_counts['captured']} / 300**。",
        f"- 待匹配或抓取：**{300 - status_counts['captured']}** 厅。",
        f"- 本轮调入重点范围：**{len(current_focus - previous_focus)}** 厅；调出重点范围但保留既有数据：**{len(previous_focus - current_focus)}** 厅。",
        "- 无商业选座入口或无法准确对应影厅的对象不进入首批工具范围，排除名单保留在 JSON 中。",
        "",
        "## 目标清单",
        "",
        "| ID | 分组 | 地区 | 影院 / 影厅 | 制式 | 优先分 | 主表座位 | 状态 |",
        "|---:|---|---|---|---|---:|---:|---|",
    ]
    for target in targets:
        region = "·".join(
            filter(None, [target.get("province"), target.get("city")])
        )
        seats = target["inventory_seats"] if target["inventory_seats"] is not None else "—"
        lines.append(
            f"| {target['target_id']} | {group_labels[target['target_group']]} | "
            f"{region or '—'} | {target['inventory_name']} | "
            f"{target['projection']} | {target.get('priority_score', '—')} | "
            f"{seats} | {target['status']} |"
        )
    OUTPUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(
        f"Wrote {OUTPUT_JSON} and {OUTPUT_MD}: "
        f"{len(targets)} targets, {status_counts['captured']} captured"
    )


if __name__ == "__main__":
    main()
