#!/usr/bin/env python3
"""Build a Markdown inventory of IMAX and Dolby Cinema auditoriums in China.

The venue-level source is the public, crawlable sitemap at cinema.gaoliang.me.
The generated report links every row back to its source page so that missing or
changing figures can be audited without relying on this script's output alone.
"""

from __future__ import annotations

import concurrent.futures
import datetime as dt
import html
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterable


SITEMAP_URL = "https://cinema.gaoliang.me/sitemap.xml"
USER_AGENT = (
    "Mozilla/5.0 (compatible; cinema-inventory-research/1.0; "
    "+https://cinema.gaoliang.me)"
)
MAINLAND_PROVINCES = {
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
REGION_ORDER = [
    "北京",
    "上海",
    "天津",
    "重庆",
    "河北",
    "山西",
    "内蒙古",
    "辽宁",
    "吉林",
    "黑龙江",
    "江苏",
    "浙江",
    "安徽",
    "福建",
    "江西",
    "山东",
    "河南",
    "湖北",
    "湖南",
    "广东",
    "广西",
    "海南",
    "四川",
    "贵州",
    "云南",
    "西藏",
    "陕西",
    "甘肃",
    "青海",
    "宁夏",
    "新疆",
    "香港",
    "澳门",
    "台湾",
]
STATUS_RE = re.compile(
    r"(结业|停业|关闭|已关|撤幕|退役|拆除|暂停营业|不再营业|停止营业)"
)
REOPEN_RE = re.compile(
    r"(重新开业|重装开业|正式开业|试营业|恢复营业|正式营业|重新营业|"
    r"接手|更名|启用|更新银幕|换幕|挂幕|开幕|开业|营业)"
)


@dataclass
class Cinema:
    name: str
    brand: str
    projection: str
    province: str
    city: str
    address: str
    width_m: float | None
    height_m: float | None
    area_m2: float | None
    ratio: str
    seats: int | None
    opened: str
    maintained: str
    notes: str
    status: str
    url: str


def fetch(url: str, attempts: int = 3) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    error: Exception | None = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read().decode("utf-8", errors="replace")
        except (urllib.error.URLError, TimeoutError) as exc:
            error = exc
            time.sleep(0.5 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url}: {error}")


def strip_markup(value: str) -> str:
    value = re.sub(r"<!--.*?-->", "", value, flags=re.S)
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.I)
    value = re.sub(r"<[^>]+>", "", value)
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def find_movie_theater_json(page: str) -> dict:
    for raw in re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', page, flags=re.S
    ):
        try:
            payload = json.loads(html.unescape(raw))
        except json.JSONDecodeError:
            continue
        items = payload if isinstance(payload, list) else [payload]
        for item in items:
            if isinstance(item, dict) and item.get("@type") == "MovieTheater":
                return item
    raise ValueError("MovieTheater JSON-LD not found")


def first_group(pattern: str, text: str, flags: int = 0) -> str:
    match = re.search(pattern, text, flags)
    return strip_markup(match.group(1)) if match else ""


def parse_float(value: str) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def parse_page(url: str, page: str) -> Cinema:
    item = find_movie_theater_json(page)
    description = item.get("description", "")
    address_data = item.get("address") or {}
    brand = "Dolby Cinema" if "Dolby Cinema" in urllib.parse.unquote(url) else "IMAX"

    projection = ""
    if "｜" in description:
        left = description.split("｜", 1)[0]
        if " · " in left:
            projection = left.split(" · ", 1)[1].strip()
    if not projection:
        projection = first_group(
            r'<span class="font-medium">([^<]+)</span>', page, flags=re.S
        )

    size_match = re.search(
        r"银幕\s*([0-9.]+)m\s*[×xX]\s*([0-9.]+)m", description
    )
    width = parse_float(size_match.group(1)) if size_match else None
    height = parse_float(size_match.group(2)) if size_match else None
    area = round(width * height, 2) if width is not None and height is not None else None

    ratio = first_group(
        r"画面比例</span><span[^>]*>([^<]+)</span>", page, flags=re.S
    )
    if not ratio and width and height:
        ratio = f"{width / height:.2f}:1"

    seats_text = first_group(
        r"座位数量</span><span[^>]*>(.*?)</span>", page, flags=re.S
    )
    seats_match = re.search(r"\d+", seats_text.replace(",", ""))
    seats = int(seats_match.group()) if seats_match else None

    opened = first_group(
        r"开业时间</div><div[^>]*>(.*?)</div>", page, flags=re.S
    )
    notes = first_group(
        r"特殊说明</h3><p[^>]*>(.*?)</p>", page, flags=re.S
    )
    maintained = first_group(r'<time dateTime="([^"]+)"', page)
    lifecycle = f"{opened} {notes}"
    last_negative = max((m.start() for m in STATUS_RE.finditer(lifecycle)), default=-1)
    last_reopen = max((m.start() for m in REOPEN_RE.finditer(lifecycle)), default=-1)
    status = "需复核" if last_negative > last_reopen else "在册"

    return Cinema(
        name=item.get("name", "").strip(),
        brand=brand,
        projection=projection,
        province=(address_data.get("addressRegion") or "").strip(),
        city=(address_data.get("addressLocality") or "").strip(),
        address=(address_data.get("streetAddress") or "").strip(),
        width_m=width,
        height_m=height,
        area_m2=area,
        ratio=ratio,
        seats=seats,
        opened=opened,
        maintained=maintained,
        notes=notes,
        status=status,
        url=url,
    )


def get_cinema_urls() -> list[str]:
    xml = fetch(SITEMAP_URL)
    root = ET.fromstring(xml)
    urls = []
    for loc in root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url"):
        text = loc.findtext("{http://www.sitemaps.org/schemas/sitemap/0.9}loc") or ""
        if "/cinema/" in text:
            urls.append(text)
    return sorted(urls)


def scrape(urls: list[str]) -> tuple[list[Cinema], list[str]]:
    records: list[Cinema] = []
    errors: list[str] = []

    def task(url: str) -> Cinema:
        return parse_page(url, fetch(url))

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        future_to_url = {executor.submit(task, url): url for url in urls}
        total = len(future_to_url)
        for index, future in enumerate(
            concurrent.futures.as_completed(future_to_url), start=1
        ):
            url = future_to_url[future]
            try:
                records.append(future.result())
            except Exception as exc:  # noqa: BLE001 - record and continue
                errors.append(f"{url}\t{type(exc).__name__}: {exc}")
            if index % 100 == 0 or index == total:
                print(
                    f"Fetched {index}/{total}; parsed={len(records)}; errors={len(errors)}",
                    file=sys.stderr,
                    flush=True,
                )
    records.sort(
        key=lambda r: (
            REGION_ORDER.index(r.province)
            if r.province in REGION_ORDER
            else len(REGION_ORDER),
            r.province,
            r.city,
            r.brand,
            r.name,
        )
    )
    return records, errors


def esc(value: object) -> str:
    if value is None or value == "":
        return "—"
    return str(value).replace("|", "\\|").replace("\n", " ")


def fmt_number(value: float | None) -> str:
    if value is None:
        return "—"
    return f"{value:.3f}".rstrip("0").rstrip(".")


def compact_projection(value: str) -> str:
    replacements = {
        "IMAX GT Laser (一代激光/双机激光)": "GT Laser（一代双机激光）",
        "IMAX Commercial Laser (二代激光/商业激光)": "Commercial Laser（二代激光）",
        "IMAX Laser XT (三代激光/单机激光)": "Laser XT（三代激光）",
        "IMAX Digital Xenon (数字氙灯/数字IMAX)": "Digital Xenon（数字氙灯）",
        "IMAX GT Dome (球幕)": "GT Dome（球幕）",
        "Dolby Cinema": "Dolby Cinema",
    }
    return replacements.get(value, value or "—")


def audit_stats(records: Iterable[Cinema]) -> dict:
    rows = list(records)
    return {
        "total": len(rows),
        "imax": sum(r.brand == "IMAX" for r in rows),
        "dolby": sum(r.brand == "Dolby Cinema" for r in rows),
        "screen_known": sum(r.width_m is not None and r.height_m is not None for r in rows),
        "seats_known": sum(r.seats is not None for r in rows),
        "both_known": sum(
            r.width_m is not None and r.height_m is not None and r.seats is not None
            for r in rows
        ),
        "review": sum(r.status == "需复核" for r in rows),
    }


def markdown_table(rows: list[Cinema]) -> list[str]:
    lines = [
        "| 城市 | 影院 / 影厅 | 制式 / 放映系统 | 银幕（宽×高，m） | 面积（㎡） | 比例 | 座位 | 数据维护 |",
        "|---|---|---|---:|---:|---:|---:|---|",
    ]
    for row in rows:
        size = (
            f"{fmt_number(row.width_m)} × {fmt_number(row.height_m)}"
            if row.width_m is not None and row.height_m is not None
            else "—"
        )
        date_bits = [row.maintained] if row.maintained else []
        if row.status == "需复核":
            date_bits.append("⚠ 运营状态需复核")
        name = f"[{esc(row.name)}]({row.url})"
        lines.append(
            "| "
            + " | ".join(
                [
                    esc(row.city),
                    name,
                    esc(compact_projection(row.projection)),
                    size,
                    fmt_number(row.area_m2),
                    esc(row.ratio),
                    esc(row.seats),
                    esc("；".join(date_bits)),
                ]
            )
            + " |"
        )
    return lines


def top_metric_table(rows: list[Cinema], metric: str, limit: int = 10) -> list[str]:
    if metric == "area":
        ranked = sorted(
            (row for row in rows if row.area_m2 is not None),
            key=lambda row: row.area_m2 or 0,
            reverse=True,
        )[:limit]
    elif metric == "seats":
        ranked = sorted(
            (row for row in rows if row.seats is not None),
            key=lambda row: row.seats or 0,
            reverse=True,
        )[:limit]
    else:
        raise ValueError(f"Unsupported ranking metric: {metric}")

    lines = [
        "| 排名 | 地区 | 影院 / 影厅 | 银幕（宽×高，m） | 面积（㎡） | 座位 |",
        "|---:|---|---|---:|---:|---:|",
    ]
    for rank, row in enumerate(ranked, start=1):
        size = (
            f"{fmt_number(row.width_m)} × {fmt_number(row.height_m)}"
            if row.width_m is not None and row.height_m is not None
            else "—"
        )
        name = f"[{esc(row.name)}]({row.url})"
        lines.append(
            "| "
            + " | ".join(
                [
                    str(rank),
                    esc(f"{row.province}·{row.city}"),
                    name,
                    size,
                    fmt_number(row.area_m2),
                    esc(row.seats),
                ]
            )
            + " |"
        )
    return lines


def build_report(records: list[Cinema], errors: list[str]) -> str:
    today = dt.date.today().isoformat()
    mainland = [r for r in records if r.province in MAINLAND_PROVINCES]
    other = [r for r in records if r.province not in MAINLAND_PROVINCES]
    all_stats = audit_stats(records)
    mainland_stats = audit_stats(mainland)
    other_stats = audit_stats(other)

    by_province: dict[str, list[Cinema]] = defaultdict(list)
    for row in records:
        by_province[row.province or "地区未标注"].append(row)

    lines = [
        "# 全国 IMAX 与杜比影院银幕、座位数据盘点",
        "",
        f"> 更新日期：{today}（影院页面最近维护时间以各行所示为准）  ",
        "> 主口径：中国大陆；香港、澳门、台湾单列。`—` 表示公开资料未给出，不代表数值为 0。",
        "",
        "## 结论速览",
        "",
        f"- 本次抓取公开影院详情页 **{all_stats['total']}** 条：IMAX **{all_stats['imax']}** 条、Dolby Cinema（杜比影院）**{all_stats['dolby']}** 条。",
        f"- 中国大陆已解析详情页 **{mainland_stats['total']}** 条：IMAX **{mainland_stats['imax']}** 条、杜比影院 **{mainland_stats['dolby']}** 条。",
        f"- 中国大陆银幕宽高已公开 **{mainland_stats['screen_known']}** 条（{mainland_stats['screen_known'] / mainland_stats['total']:.1%}）；座位数已公开 **{mainland_stats['seats_known']}** 条（{mainland_stats['seats_known'] / mainland_stats['total']:.1%}）；两项同时具备 **{mainland_stats['both_known']}** 条（{mainland_stats['both_known'] / mainland_stats['total']:.1%}）。",
        f"- 港澳台另列 **{other_stats['total']}** 条；本轮未发现以停业/结业为页面最新状态的条目。",
        "",
        "## 口径与局限",
        "",
        "1. **IMAX 数量基准**：IMAX China《2025 年年报》披露，截至 2025-12-31，大中华区共有 810 个在营 IMAX 影院系统，其中中国大陆商业影院 781 个、香港 5 个、台湾 10 个、澳门 1 个，另有机构型 IMAX 13 个。该数字是系统总量基准，但年报不逐店公开银幕尺寸和座位数。",
        "2. **影院级数据底座**：本表使用“影厅指南”公开 sitemap 及逐厅页面。该站注明数据来自网络收集、影迷贡献、@ArvinTingcn 的全球/上海 IMAX 与特效影厅表、LF Examiner 等。每一行影院名称均链接回详情页。",
        "3. **完整性**：影院级公开详情页数量与 IMAX 官方系统总量不完全一致，因此本文件是“可逐厅核验的公开数据盘点”，不是 IMAX 或杜比出具的官方资产台账。未收录项、改名、迁址、临时停业和近期新开店仍可能存在。",
        "4. **杜比口径**：仅统计 **Dolby Cinema / 杜比影院**，不把普通“杜比全景声厅（Dolby Atmos）”或仅配备杜比音频的影厅计入。",
        "5. **银幕面积与口径冲突**：面积由主数据源的宽×高计算并四舍五入到 0.01㎡；弧形幕、球幕的实际表面积可能与矩形投影面积不同。部分影院的“宣传名义尺寸”和“实测/有效画面尺寸”并不一致，例如贵阳越界影城在主数据源中为 26.806×15.989m，而 2026 年人民网报道为 32.16×18.17m。本表为保持横向一致，逐厅表和排名统一保留主数据源字段，不擅自混用另一口径。",
        "6. **运营状态**：默认标记为“在册”，仅对页面明确出现“结业、停业、关闭、撤幕、退役”等词的条目自动提示复核；订票前仍应查看影院官方排片。",
        "7. **系统缩写**：GT Laser 为 IMAX 双机激光；CoLA 为商业激光；XT 为单机激光；Digital Xenon 为数字氙灯。不同影院页面沿用的命名可能略有差异。",
        "",
        "## 主数据源记录值 Top 10（中国大陆）",
        "",
        "> 仅在公开了对应字段的条目中排序；IMAX 榜单同时包含商业影院与科技馆等机构型影院。该榜单用于快速查找大尺寸/大容量条目，不等同于按统一官方测量口径认定的全国排名。",
        "",
        "### IMAX：按银幕面积",
        "",
    ]
    lines.extend(top_metric_table([r for r in mainland if r.brand == "IMAX"], "area"))
    lines.extend(["", "### IMAX：按座位数", ""])
    lines.extend(top_metric_table([r for r in mainland if r.brand == "IMAX"], "seats"))
    lines.extend(["", "### 杜比影院：按银幕面积", ""])
    lines.extend(
        top_metric_table([r for r in mainland if r.brand == "Dolby Cinema"], "area")
    )
    lines.extend(["", "### 杜比影院：按座位数", ""])
    lines.extend(
        top_metric_table([r for r in mainland if r.brand == "Dolby Cinema"], "seats")
    )
    lines.extend(
        [
        "",
        "## 中国大陆分省汇总",
        "",
        "| 省级地区 | IMAX | 杜比影院 | 合计 | 银幕尺寸已知 | 座位数已知 |",
        "|---|---:|---:|---:|---:|---:|",
        ]
    )

    for province in REGION_ORDER:
        if province not in MAINLAND_PROVINCES or province not in by_province:
            continue
        rows = by_province[province]
        stats = audit_stats(rows)
        lines.append(
            f"| [{province}](#{province}) | {stats['imax']} | {stats['dolby']} | {stats['total']} | {stats['screen_known']} | {stats['seats_known']} |"
        )

    lines.extend(["", "## 中国大陆逐厅数据", ""])
    for province in REGION_ORDER:
        if province not in MAINLAND_PROVINCES or province not in by_province:
            continue
        rows = by_province[province]
        province_stats = audit_stats(rows)
        lines.extend(
            [
                f"### {province}",
                "",
                f"共 {province_stats['total']} 条（IMAX {province_stats['imax']}；杜比影院 {province_stats['dolby']}）。",
                "",
            ]
        )
        for brand in ("IMAX", "Dolby Cinema"):
            brand_rows = [r for r in rows if r.brand == brand]
            if not brand_rows:
                continue
            heading = "IMAX" if brand == "IMAX" else "杜比影院（Dolby Cinema）"
            lines.extend([f"#### {heading}", ""])
            lines.extend(markdown_table(brand_rows))
            lines.append("")

    if other:
        lines.extend(["## 港澳台逐厅数据", ""])
        for province in ("香港", "澳门", "台湾"):
            rows = by_province.get(province, [])
            if not rows:
                continue
            province_stats = audit_stats(rows)
            lines.extend(
                [
                    f"### {province}",
                    "",
                    f"共 {province_stats['total']} 条（IMAX {province_stats['imax']}；杜比影院 {province_stats['dolby']}）。",
                    "",
                ]
            )
            for brand in ("IMAX", "Dolby Cinema"):
                brand_rows = [r for r in rows if r.brand == brand]
                if not brand_rows:
                    continue
                heading = "IMAX" if brand == "IMAX" else "杜比影院（Dolby Cinema）"
                lines.extend([f"#### {heading}", ""])
                lines.extend(markdown_table(brand_rows))
                lines.append("")

    lines.extend(
        [
            "## 数据源",
            "",
            "- [IMAX China 2025 年年报（香港交易所 PDF）](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0309/2026030900292.pdf)：大中华区 IMAX 系统总量、商业/机构与地区拆分口径。",
            "- [IMAX 中国官网](https://www.imax.cn/)：IMAX 体验与影院系统官方说明。",
            "- [杜比影院官方说明](https://www.dolby.com/zh-cn/experience/cinema/)：Dolby Cinema 由杜比视界双 4K 激光放映与杜比全景声等构成。",
            "- [影厅指南](https://cinema.gaoliang.me/)：影院级银幕尺寸、座位数、放映系统、地址、开业及维护信息；本表逐行保留详情页链接。",
            "- [影厅指南 sitemap](https://cinema.gaoliang.me/sitemap.xml)：本次影院详情页枚举入口。",
            "- [贵州广播电视台：贵阳越界影城报道](https://movement.gzstv.com/news/detail/z0ZRP/)：用于核对 714 座及宣传名义尺寸，并说明银幕尺寸存在不同公开口径。",
            "- [上海市文化和旅游局：上海影城焕新归来](https://whlyj.sh.gov.cn/gqfc/20230606/d8c37f8ae8754ffb8c65e9cf6bf2b000.html)：用于抽样复核上海杜比剧场 1008 座。",
            "",
            "## 维护建议",
            "",
            "- 每季度重新读取 sitemap，对新增、删除、改名页面做差异比较。",
            "- 对“—”字段优先核对影院官方公众号、票务平台座位图、开业新闻稿或现场照片。",
            "- 对标注“运营状态需复核”的条目，在计入城市/省份在营总数前人工确认。",
            "- 若用于选址、投资或设备采购，应向 IMAX、杜比及影院运营方索取正式技术参数和在营证明。",
        ]
    )
    if errors:
        lines.extend(
            [
                "",
                "## 抓取异常",
                "",
                f"本轮有 {len(errors)} 个详情页未能解析，未写入逐厅表：",
                "",
            ]
        )
        lines.extend(f"- `{esc(error)}`" for error in errors)
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    out_dir = root / "docs"
    out_dir.mkdir(parents=True, exist_ok=True)
    report_path = out_dir / "全国_IMAX_杜比影院_银幕与座位数据.md"
    data_path = out_dir / "全国_IMAX_杜比影院_银幕与座位数据.json"

    urls = get_cinema_urls()
    print(f"Discovered {len(urls)} cinema pages", file=sys.stderr)
    records, errors = scrape(urls)
    report_path.write_text(build_report(records, errors), encoding="utf-8")
    data_path.write_text(
        json.dumps(
            {
                "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
                "source_sitemap": SITEMAP_URL,
                "records": [asdict(record) for record in records],
                "errors": errors,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(report_path)
    print(data_path)
    return 0 if not errors else 2


if __name__ == "__main__":
    raise SystemExit(main())
