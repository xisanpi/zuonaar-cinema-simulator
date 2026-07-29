"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  cinemaListings,
  citySummaries,
  haversineDistanceKm,
  type CinemaListing,
  type PremiumFormat,
} from "./cinema-inventory";

type FormatFilter = "all" | PremiumFormat;
type SortMode = "recommended" | "screen" | "distance";
type LocationMode = "city-center" | "device" | "manual";

type UserLocation = {
  latitude: number;
  longitude: number;
  label: string;
  mode: LocationMode;
};

const defaultCity =
  citySummaries.find((city) => city.name === "北京") ?? citySummaries[0];

function DbxIcon({
  name,
  size = 18,
}: {
  name:
    | "arrow-down"
    | "arrow-right"
    | "building"
    | "close"
    | "filter"
    | "location"
    | "screen"
    | "search"
    | "sort"
    | "video";
  size?: number;
}) {
  return (
    <Image
      className="dbx-icon"
      src={`/dbx-icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      unoptimized
    />
  );
}

function formatArea(value: number | null) {
  if (!value) return "尺寸待补";
  return `${Math.round(value)} ㎡`;
}

function formatDistance(value: number | null) {
  if (value === null) return "距离待补";
  if (value < 1) return `${Math.round(value * 1000)} m`;
  return `${value.toFixed(value < 10 ? 1 : 0)} km`;
}

function getCinemaDistance(
  cinema: CinemaListing,
  location: UserLocation,
) {
  if (cinema.latitude === null || cinema.longitude === null) return null;
  return haversineDistanceKm(location, {
    latitude: cinema.latitude,
    longitude: cinema.longitude,
  });
}

function CinemaRow({
  cinema,
  distance,
}: {
  cinema: CinemaListing;
  distance: number | null;
}) {
  const hall = cinema.featuredHall;
  const needsReview = cinema.halls.some((item) => item.status !== "在册");

  return (
    <article
      className="cinema-result"
      data-dbd-pattern="cinema-result-row"
    >
      <div className="cinema-result-main">
        <div className="cinema-result-heading">
          <div>
            <div className="cinema-name-line">
              <h2>{cinema.name}</h2>
              {needsReview ? (
                <span className="status-tag status-tag-review">需复核</span>
              ) : null}
            </div>
            <p>{cinema.address}</p>
          </div>
          <div className="distance-label">
            <DbxIcon name="location" size={16} />
            <span>{formatDistance(distance)}</span>
          </div>
        </div>

        <div className="format-line" aria-label="影厅制式">
          {cinema.formats.map((format) => (
            <span
              className={`format-tag ${
                format === "Dolby Cinema" ? "format-tag-dolby" : ""
              }`}
              key={format}
            >
              {format === "Dolby Cinema" ? "杜比影院" : "IMAX"}
            </span>
          ))}
          {cinema.halls.length > 1 ? (
            <span className="hall-count">{cinema.halls.length} 个高规格影厅</span>
          ) : null}
        </div>

        <dl className="cinema-specs">
          <div>
            <dt>最大银幕</dt>
            <dd>
              {hall.width && hall.height
                ? `${hall.width.toFixed(1)} × ${hall.height.toFixed(1)} m`
                : formatArea(cinema.largestScreenArea)}
            </dd>
          </div>
          <div>
            <dt>放映技术</dt>
            <dd>{hall.projection || hall.brand}</dd>
          </div>
          <div>
            <dt>银幕比例</dt>
            <dd>{hall.ratio || "待补"}</dd>
          </div>
          <div>
            <dt>座位</dt>
            <dd>{hall.seats ? `${hall.seats} 座` : "待补"}</dd>
          </div>
        </dl>
      </div>

      <div className="cinema-result-action">
        <div>
          <div className="screen-index" aria-label="银幕面积">
            <DbxIcon name="screen" size={19} />
            <span>
              <small>银幕面积</small>
              <strong>{formatArea(cinema.largestScreenArea)}</strong>
            </span>
          </div>
          <a
            className="source-link"
            href={hall.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            查看公开资料
          </a>
        </div>
        <Link
          className="primary-link"
          href={`/cinema/${hall.id}`}
          data-dbd-component="button"
        >
          <span>进入影厅</span>
          <DbxIcon name="arrow-right" size={18} />
        </Link>
      </div>
    </article>
  );
}

export function CinemaFinder() {
  const [cityName, setCityName] = useState(defaultCity.name);
  const [formatFilter, setFormatFilter] = useState<FormatFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("recommended");
  const [query, setQuery] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  const [userLocation, setUserLocation] = useState<UserLocation>({
    ...defaultCity.center,
    label: `${defaultCity.name}市中心`,
    mode: "city-center",
  });
  const locationPanelRef = useRef<HTMLElement>(null);

  const city =
    citySummaries.find((item) => item.name === cityName) ?? defaultCity;

  useEffect(() => {
    const saved = window.localStorage.getItem("zuonaar-user-location");
    if (!saved) return;
    let parsed: UserLocation;
    try {
      parsed = JSON.parse(saved) as UserLocation;
    } catch {
      window.localStorage.removeItem("zuonaar-user-location");
      return;
    }
    if (
      !Number.isFinite(parsed.latitude) ||
      !Number.isFinite(parsed.longitude) ||
      !parsed.label
    ) {
      return;
    }
    const timer = window.setTimeout(() => setUserLocation(parsed), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "zuonaar-user-location",
      JSON.stringify(userLocation),
    );
  }, [userLocation]);

  useEffect(() => {
    if (!locationOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleDialogKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLocationOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const controls = locationPanelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), select:not([disabled]), input:not([disabled]), a[href]',
      );
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleDialogKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleDialogKeys);
    };
  }, [locationOpen]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
    const filtered = cinemaListings
      .filter((cinema) => cinema.city === city.name)
      .filter(
        (cinema) =>
          formatFilter === "all" || cinema.formats.includes(formatFilter),
      )
      .filter(
        (cinema) =>
          !normalizedQuery ||
          `${cinema.name}${cinema.address}`
            .toLocaleLowerCase("zh-CN")
            .includes(normalizedQuery),
      )
      .map((cinema) => ({
        cinema,
        distance: getCinemaDistance(cinema, userLocation),
      }));

    return filtered.sort((left, right) => {
      if (sortMode === "screen") {
        return (
          (right.cinema.largestScreenArea ?? 0) -
          (left.cinema.largestScreenArea ?? 0)
        );
      }
      if (sortMode === "distance") {
        return (
          (left.distance ?? Number.POSITIVE_INFINITY) -
          (right.distance ?? Number.POSITIVE_INFINITY)
        );
      }
      const leftScore =
        (left.cinema.largestScreenArea ?? 0) +
        left.cinema.formats.length * 24 -
        (left.distance ?? 0) * 0.4;
      const rightScore =
        (right.cinema.largestScreenArea ?? 0) +
        right.cinema.formats.length * 24 -
        (right.distance ?? 0) * 0.4;
      return rightScore - leftScore;
    });
  }, [city.name, formatFilter, query, sortMode, userLocation]);

  const selectCity = (nextCityName: string) => {
    const nextCity =
      citySummaries.find((item) => item.name === nextCityName) ?? defaultCity;
    setCityName(nextCity.name);
    setQuery("");
    if (userLocation.mode === "city-center") {
      setUserLocation({
        ...nextCity.center,
        label: `${nextCity.name}市中心`,
        mode: "city-center",
      });
    }
  };

  const useDeviceLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      return;
    }
    setLocationStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          label: "我的当前位置",
          mode: "device",
        });
        setLocationStatus("idle");
        setLocationOpen(false);
        setSortMode("distance");
      },
      () => setLocationStatus("error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  const setLocationFromMap = (
    event: ReactPointerEvent<HTMLButtonElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    setUserLocation({
      latitude: city.bounds.north - y * (city.bounds.north - city.bounds.south),
      longitude: city.bounds.west + x * (city.bounds.east - city.bounds.west),
      label: `${city.name}自选位置`,
      mode: "manual",
    });
    setLocationStatus("idle");
  };

  const markerStyle = {
    left: `${
      ((userLocation.longitude - city.bounds.west) /
        (city.bounds.east - city.bounds.west)) *
      100
    }%`,
    top: `${
      ((city.bounds.north - userLocation.latitude) /
        (city.bounds.north - city.bounds.south)) *
      100
    }%`,
  };

  return (
    <main className="finder-page">
      <header className="finder-topbar" data-dbd-zone="pc-chat-header">
        <Link className="brand" href="/" aria-label="坐哪儿首页">
          <span className="brand-mark">
            <DbxIcon name="video" size={22} />
          </span>
          <span>
            <strong>坐哪儿</strong>
            <small>先选影院，再选座位</small>
          </span>
        </Link>

        <button
          className="location-trigger"
          type="button"
          onClick={() => setLocationOpen(true)}
          data-dbd-component="button"
        >
          <DbxIcon name="location" size={18} />
          <span>
            <small>我的位置</small>
            <strong>{userLocation.label}</strong>
          </span>
          <DbxIcon name="arrow-down" size={16} />
        </button>
      </header>

      <section className="finder-intro" data-dbd-zone="cinema-discovery-header">
        <div className="intro-copy">
          <span className="eyebrow">影院发现</span>
          <h1>在坐下之前，先看清这块银幕。</h1>
          <p>
            按城市查看已收录的 IMAX 与杜比影院，比较银幕、放映技术和距离，再进入真实比例的 3D 影厅。
          </p>
        </div>

        <label className="city-picker">
          <span>先选择城市</span>
          <span className="city-picker-control">
            <DbxIcon name="building" size={21} />
            <select
              aria-label="城市"
              value={city.name}
              onChange={(event) => selectCity(event.target.value)}
            >
              {citySummaries.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} · {item.cinemaCount} 家
                </option>
              ))}
            </select>
          </span>
          <small>
            {city.cinemaCount} 家影院 · {city.hallCount} 个高规格影厅
          </small>
        </label>
      </section>

      <section className="finder-workspace">
        <div className="filter-bar" data-dbd-pattern="cinema-filter-bar">
          <label className="search-field" data-dbd-component="input">
            <DbxIcon name="search" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索影院或商圈"
              aria-label="搜索影院或商圈"
            />
          </label>

          <div className="format-filters" aria-label="放映制式筛选">
            <span className="filter-label">
              <DbxIcon name="filter" size={17} />
              制式
            </span>
            {(
              [
                ["all", "全部"],
                ["IMAX", "IMAX"],
                ["Dolby Cinema", "杜比影院"],
              ] as const
            ).map(([value, label]) => (
              <button
                className={`filter-chip ${
                  formatFilter === value ? "is-selected" : ""
                }`}
                type="button"
                key={value}
                onClick={() => setFormatFilter(value)}
                aria-pressed={formatFilter === value}
                data-dbd-component="button"
              >
                {label}
              </button>
            ))}
          </div>

          <label className="sort-field">
            <DbxIcon name="sort" size={18} />
            <span>排序</span>
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              aria-label="影院排序"
            >
              <option value="recommended">综合推荐</option>
              <option value="screen">银幕从大到小</option>
              <option value="distance">距离从近到远</option>
            </select>
          </label>
        </div>

        <div className="results-heading">
          <div>
            <strong>{city.name}影院</strong>
            <span>{results.length} 个结果</span>
          </div>
          <span>
            距离为直线距离 · 数据库共收录 {cinemaListings.length} 家影院
          </span>
        </div>

        <div className="cinema-results">
          {results.length ? (
            results.map(({ cinema, distance }) => (
              <CinemaRow
                cinema={cinema}
                distance={distance}
                key={cinema.id}
              />
            ))
          ) : (
            <div className="empty-results" role="status">
              <DbxIcon name="search" size={28} />
              <strong>没有符合条件的影院</strong>
              <span>试试清空搜索，或切换其他放映制式。</span>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFormatFilter("all");
                }}
              >
                查看全部
              </button>
            </div>
          )}
        </div>
      </section>

      {locationOpen ? (
        <div
          className="location-overlay"
          role="presentation"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setLocationOpen(false);
          }}
        >
          <section
            className="location-panel"
            ref={locationPanelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-title"
            data-dbd-pattern="panel-sheet"
          >
            <div className="location-panel-header">
              <div>
                <span>设置我的位置</span>
                <h2 id="location-title">计算到影院的直线距离</h2>
              </div>
              <button
                className="icon-button"
                type="button"
                onClick={() => setLocationOpen(false)}
                aria-label="关闭位置设置"
                autoFocus
                data-dbd-component="button"
              >
                <DbxIcon name="close" size={19} />
              </button>
            </div>

            <button
              className="device-location-button"
              type="button"
              onClick={useDeviceLocation}
              disabled={locationStatus === "loading"}
              data-dbd-component="button"
            >
              <DbxIcon name="location" size={19} />
              <span>
                <strong>
                  {locationStatus === "loading"
                    ? "正在获取位置"
                    : "使用设备当前位置"}
                </strong>
                <small>浏览器会询问一次定位权限</small>
              </span>
            </button>

            {locationStatus === "error" ? (
              <p className="location-error" role="alert">
                无法读取设备位置，你仍可在下方地图中点击设定。
              </p>
            ) : null}

            <div className="manual-location">
              <div>
                <strong>或在 {city.name} 范围内点选</strong>
                <span>适合不想开启系统定位时使用</span>
              </div>
              <button
                className="location-map"
                type="button"
                onPointerDown={setLocationFromMap}
                aria-label={`在${city.name}示意地图中点选位置`}
              >
                <span className="map-road map-road-one" />
                <span className="map-road map-road-two" />
                <span className="map-road map-road-three" />
                <span className="map-city-label">{city.name}</span>
                <span className="map-user-marker" style={markerStyle}>
                  <span />
                </span>
              </button>
            </div>

            <div className="location-panel-footer">
              <span>
                当前：<strong>{userLocation.label}</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  setLocationOpen(false);
                  setSortMode("distance");
                }}
                data-dbd-component="button"
              >
                保存并按距离排序
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
