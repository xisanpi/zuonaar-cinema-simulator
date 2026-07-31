"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  cinemaListings,
  citySummaries,
  haversineDistanceKm,
  type CinemaListing,
  type PremiumFormat,
} from "./cinema-inventory";

type FormatFilter = "all" | PremiumFormat;
type SortMode = "screen" | "distance";

type UserLocation = {
  latitude: number;
  longitude: number;
};

const defaultCity =
  citySummaries.find((city) => city.name === "北京") ?? citySummaries[0];
const cityStorageKey = "zuonaar-selected-city";

function DbxIcon({
  name,
  size = 18,
}: {
  name:
    | "arrow-down"
    | "arrow-right"
    | "building"
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

function formatLabel(format: PremiumFormat) {
  if (format === "Dolby Cinema") return "杜比影院";
  if (format === "Other PLF") return "精选巨幕";
  return "IMAX";
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
  const [isEntering, setIsEntering] = useState(false);
  const hall = cinema.featuredHall;
  const defaultHall =
    cinema.halls.find((item) => item.brand === "IMAX") ?? hall;
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
              {cinema.priorityRank !== null ? (
                <span className="status-tag status-tag-priority">
                  首批重点 #{cinema.priorityRank}
                </span>
              ) : null}
              {needsReview ? (
                <span className="status-tag status-tag-review">需复核</span>
              ) : null}
            </div>
            <p>{cinema.address}</p>
          </div>
          {distance !== null ? (
            <div className="distance-label">
              <DbxIcon name="location" size={16} />
              <span>{formatDistance(distance)}</span>
            </div>
          ) : null}
        </div>

        <div className="format-line" aria-label="影厅制式">
          {cinema.formats.map((format) => (
            <span
              className={`format-tag ${
                format === "Dolby Cinema" ? "format-tag-dolby" : ""
              }`}
              key={format}
            >
              {formatLabel(format)}
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
          className={`primary-link ${isEntering ? "is-loading" : ""}`}
          href={`/cinema/${defaultHall.id}`}
          aria-busy={isEntering}
          aria-disabled={isEntering}
          data-navigation-state={isEntering ? "loading" : "idle"}
          data-dbd-component="button"
          onClick={(event) => {
            if (isEntering) event.preventDefault();
          }}
          onNavigate={() => setIsEntering(true)}
        >
          {isEntering ? (
            <>
              <span className="primary-link-spinner" aria-hidden="true" />
              <span>正在进入</span>
            </>
          ) : (
            <>
              <span>进入影厅</span>
              <DbxIcon name="arrow-right" size={18} />
            </>
          )}
        </Link>
      </div>
    </article>
  );
}

export function CinemaFinder() {
  const [cityName, setCityName] = useState(defaultCity.name);
  const [formatFilter, setFormatFilter] = useState<FormatFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("screen");
  const [query, setQuery] = useState("");
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [preferencesReady, setPreferencesReady] = useState(false);

  const city =
    citySummaries.find((item) => item.name === cityName) ?? defaultCity;

  useEffect(() => {
    const savedCityName = window.localStorage.getItem(cityStorageKey);
    const savedCity = citySummaries.find(
      (item) => item.name === savedCityName,
    );
    if (savedCityName && !savedCity) {
      window.localStorage.removeItem(cityStorageKey);
    }

    const timer = window.setTimeout(() => {
      if (savedCity) setCityName(savedCity.name);
      setPreferencesReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!preferencesReady) return;
    window.localStorage.setItem(cityStorageKey, city.name);
  }, [city.name, preferencesReady]);

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
        distance: userLocation
          ? getCinemaDistance(cinema, userLocation)
          : null,
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
      return 0;
    });
  }, [city.name, formatFilter, query, sortMode, userLocation]);

  const selectCity = (nextCityName: string) => {
    const nextCity =
      citySummaries.find((item) => item.name === nextCityName) ?? defaultCity;
    setCityName(nextCity.name);
    setQuery("");
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
        });
        setLocationStatus("idle");
      },
      () => setLocationStatus("error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
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
          onClick={useDeviceLocation}
          disabled={locationStatus === "loading"}
          aria-live="polite"
          data-dbd-component="button"
        >
          <DbxIcon name="location" size={18} />
          <strong>
            {locationStatus === "loading"
              ? "定位中…"
              : locationStatus === "error"
                ? "定位失败，重试"
                : userLocation
                  ? "已定位"
                  : "定位距离"}
          </strong>
        </button>
      </header>

      <section className="finder-intro" data-dbd-zone="cinema-discovery-header">
        <div className="intro-copy">
          <span className="eyebrow">影院发现</span>
          <h1>先看视野，再决定坐哪儿。</h1>
          <p>
            按城市查看已收录的 IMAX、杜比影院与精选巨幕，比较银幕与放映技术，再进入真实比例的 3D 影厅。
          </p>
        </div>
      </section>

      <section className="finder-workspace">
        <div className="filter-bar" data-dbd-pattern="cinema-filter-bar">
          <label className="city-picker">
            <DbxIcon name="building" size={18} />
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
          </label>

          <div className="format-filters" aria-label="放映制式筛选">
            {(
              [
                ["all", "全部"],
                ["IMAX", "IMAX"],
                ["Dolby Cinema", "杜比影院"],
                ["Other PLF", "精选巨幕"],
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
            <select
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
              aria-label="影院排序"
            >
              <option value="screen">银幕从大到小</option>
              <option value="distance" disabled={!userLocation}>
                距离从近到远
              </option>
            </select>
          </label>

          <label className="search-field" data-dbd-component="input">
            <DbxIcon name="search" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索影院或商圈"
              aria-label="搜索影院或商圈"
            />
          </label>
        </div>

        <div className="results-heading">
          <div>
            <strong>{city.name}影院</strong>
            <span>{results.length} 个结果</span>
          </div>
          <span>
            {userLocation ? "距离为直线距离 · " : ""}
            数据库共收录 {cinemaListings.length} 家影院
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
    </main>
  );
}
