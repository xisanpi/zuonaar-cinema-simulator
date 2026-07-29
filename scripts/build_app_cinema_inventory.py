#!/usr/bin/env python3
"""Create the compact app inventory from the researched cinema dataset."""

from __future__ import annotations

import concurrent.futures
import json
import re
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "全国_IMAX_杜比影院_银幕与座位数据.json"
OUTPUT = ROOT / "app" / "cinema-inventory.json"
USER_AGENT = "Mozilla/5.0 (compatible; zuonaar-cinema-inventory/1.0)"


def coordinates(url: str) -> tuple[float | None, float | None]:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=20) as response:
        page = response.read().decode("utf-8", errors="replace")

    for raw in re.findall(
        r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>',
        page,
        flags=re.S,
    ):
        try:
            payload = json.loads(raw)
        except json.JSONDecodeError:
            continue
        for item in payload if isinstance(payload, list) else [payload]:
            if not isinstance(item, dict) or item.get("@type") != "MovieTheater":
                continue
            geo = item.get("geo") or {}
            try:
                return float(geo["latitude"]), float(geo["longitude"])
            except (KeyError, TypeError, ValueError):
                return None, None
    return None, None


def main() -> None:
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    records = source["records"]

    with concurrent.futures.ThreadPoolExecutor(max_workers=40) as executor:
        futures = {
            executor.submit(coordinates, record["url"]): index
            for index, record in enumerate(records)
        }
        locations: dict[int, tuple[float | None, float | None]] = {}
        for future in concurrent.futures.as_completed(futures):
            index = futures[future]
            try:
                locations[index] = future.result()
            except Exception:
                locations[index] = (None, None)

    compact = []
    for index, record in enumerate(records):
        latitude, longitude = locations[index]
        compact.append(
            {
                "id": f"hall-{index + 1:04d}",
                "name": record["name"],
                "brand": record["brand"],
                "projection": record["projection"],
                "city": record["city"],
                "address": record["address"],
                "width": record["width_m"],
                "height": record["height_m"],
                "area": record["area_m2"],
                "ratio": record["ratio"],
                "seats": record["seats"],
                "status": record["status"],
                "latitude": latitude,
                "longitude": longitude,
                "sourceUrl": record["url"],
            }
        )

    OUTPUT.write_text(
        json.dumps(compact, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    resolved = sum(
        item["latitude"] is not None and item["longitude"] is not None
        for item in compact
    )
    print(f"Wrote {len(compact)} records to {OUTPUT} ({resolved} with coordinates)")


if __name__ == "__main__":
    main()
