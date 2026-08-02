"use client";

import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  Funnel,
  MagnifyingGlass,
  Monitor,
  NavigationArrow,
  SortDescending,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import {
  cinemaListings,
  citySummaries,
  haversineDistanceKm,
  type CinemaListing,
  type PremiumFormat,
} from "./cinema-inventory";
import {
  buildPinyinSearchIndex,
  getPinyinLabel,
  matchesPinyinSearch,
  normalizeSearchValue,
} from "./search-utils.mjs";

type FormatFilter = "all" | PremiumFormat;
type SortMode = "screen" | "distance";

type UserLocation = {
  latitude: number;
  longitude: number;
};

const defaultCity =
  citySummaries.find((city) => city.name === "北京") ?? citySummaries[0];
const cityStorageKey = "zuonaar-selected-city";
const listScrollStorageKey = "zuonaar-cinema-list-scroll-y";
const citySearchIndexes = new Map(
  citySummaries.map((city) => [city.name, buildPinyinSearchIndex(city.name)]),
);
const cinemaSearchIndexes = new Map(
  cinemaListings.map((cinema) => [
    cinema.id,
    buildPinyinSearchIndex(`${cinema.name} ${cinema.address}`),
  ]),
);

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

function getCityForLocation(location: UserLocation) {
  const citiesContainingLocation = citySummaries.filter(
    (city) =>
      location.latitude <= city.bounds.north &&
      location.latitude >= city.bounds.south &&
      location.longitude <= city.bounds.east &&
      location.longitude >= city.bounds.west,
  );
  const candidates = citiesContainingLocation.length
    ? citiesContainingLocation
    : citySummaries;

  return candidates.reduce((nearestCity, candidate) => {
    const nearestDistance = haversineDistanceKm(location, nearestCity.center);
    const candidateDistance = haversineDistanceKm(location, candidate.center);
    return candidateDistance < nearestDistance ? candidate : nearestCity;
  }, candidates[0] ?? defaultCity);
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
    <Link
      className={`cinema-result ${isEntering ? "is-entering" : ""}`}
      href={`/cinema/${defaultHall.id}`}
      aria-label={`进入${cinema.name}影厅`}
      aria-busy={isEntering}
      aria-disabled={isEntering}
      data-dbd-pattern="cinema-result-row"
      data-navigation-state={isEntering ? "loading" : "idle"}
      onClick={(event) => {
        if (isEntering) {
          event.preventDefault();
          return;
        }
        window.sessionStorage.setItem(
          listScrollStorageKey,
          String(window.scrollY),
        );
      }}
      onNavigate={() => setIsEntering(true)}
    >
      <div className="cinema-result-main">
        <div className="cinema-result-heading">
          <div>
            <div className="cinema-name-line">
              <h2>{cinema.name}</h2>
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
              {needsReview ? (
                <span className="status-tag status-tag-review">需复核</span>
              ) : null}
            </div>
            <p>{cinema.address}</p>
          </div>
          {distance !== null ? (
            <div className="distance-label">
              <NavigationArrow size={16} aria-hidden="true" />
              <span>{formatDistance(distance)}</span>
            </div>
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
            <Monitor size={19} aria-hidden="true" />
            <span>
              <small>银幕面积</small>
              <strong>{formatArea(cinema.largestScreenArea)}</strong>
            </span>
          </div>
        </div>
        <span
          className={`primary-link ${isEntering ? "is-loading" : ""}`}
          aria-hidden="true"
          data-dbd-component="button"
        >
          {isEntering ? (
            <>
              <span className="primary-link-spinner" aria-hidden="true" />
              <span>正在进入</span>
            </>
          ) : (
            <>
              <span>进入影厅</span>
              <ArrowRight size={18} aria-hidden="true" />
            </>
          )}
        </span>
      </div>
    </Link>
  );
}

export function CinemaFinder() {
  const [cityName, setCityName] = useState(defaultCity.name);
  const [formatFilter, setFormatFilter] = useState<FormatFilter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("screen");
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeCityIndex, setActiveCityIndex] = useState(0);
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

  useEffect(() => {
    if (!preferencesReady) return;
    const savedScrollY = window.sessionStorage.getItem(listScrollStorageKey);
    if (savedScrollY === null) return;
    const scrollY = Number(savedScrollY);
    if (!Number.isFinite(scrollY)) {
      window.sessionStorage.removeItem(listScrollStorageKey);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: scrollY, behavior: "auto" });
      window.sessionStorage.removeItem(listScrollStorageKey);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [preferencesReady]);

  const cityMatches = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(query);
    if (!normalizedQuery) return [];

    return citySummaries
      .filter((item) =>
        matchesPinyinSearch(citySearchIndexes.get(item.name) ?? "", query),
      )
      .sort((left, right) => {
        const leftIndex = citySearchIndexes.get(left.name) ?? "";
        const rightIndex = citySearchIndexes.get(right.name) ?? "";
        const leftStarts = leftIndex
          .split("|")
          .some((term) => term.startsWith(normalizedQuery));
        const rightStarts = rightIndex
          .split("|")
          .some((term) => term.startsWith(normalizedQuery));
        if (leftStarts !== rightStarts) return leftStarts ? -1 : 1;
        return right.cinemaCount - left.cinemaCount;
      })
      .slice(0, 6);
  }, [query]);

  const results = useMemo(() => {
    const filtered = cinemaListings
      .filter((cinema) => cinema.city === city.name)
      .filter(
        (cinema) =>
          formatFilter === "all" || cinema.formats.includes(formatFilter),
      )
      .filter(
        (cinema) =>
          matchesPinyinSearch(
            cinemaSearchIndexes.get(cinema.id) ?? "",
            query,
          ),
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
    setSearchFocused(false);
  };

  const useDeviceLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      return;
    }
    setLocationStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(nextLocation);
        selectCity(getCityForLocation(nextLocation).name);
        setLocationStatus("idle");
      },
      () => setLocationStatus("error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 },
    );
  };

  return (
    <main className="finder-page">
      <section className="finder-intro" data-dbd-zone="cinema-discovery-header">
        <div className="intro-copy">
          <h1>找到更适合你的电影院。</h1>
          <p>
            按城市查看已收录的 IMAX、杜比影院与精选巨幕，比较银幕与放映技术，再进入真实比例的 3D 影厅。
          </p>
        </div>
      </section>

      <section className="finder-workspace">
        <div className="filter-bar" data-dbd-pattern="cinema-filter-bar">
          <button
            className="location-trigger"
            type="button"
            onClick={useDeviceLocation}
            disabled={locationStatus === "loading"}
            aria-live="polite"
            data-dbd-component="button"
          >
            <NavigationArrow size={18} aria-hidden="true" />
            <strong>
              {locationStatus === "loading"
                ? "定位中…"
                : locationStatus === "error"
                  ? "定位失败，重试"
                  : userLocation
                    ? "已定位"
                    : "定位"}
            </strong>
          </button>

          <label className="city-picker">
            <Buildings size={18} aria-hidden="true" />
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

          <label className="format-field">
            <Funnel size={18} aria-hidden="true" />
            <select
              value={formatFilter}
              onChange={(event) =>
                setFormatFilter(event.target.value as FormatFilter)
              }
              aria-label="放映制式筛选"
            >
              <option value="all">全部影院</option>
              <option value="IMAX">IMAX</option>
              <option value="Dolby Cinema">杜比影院</option>
              <option value="Other PLF">精选巨幕</option>
            </select>
          </label>

          <label className="sort-field">
            <SortDescending size={18} aria-hidden="true" />
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

          <div
            className="search-combobox"
            data-dbd-pattern="pc-command-search"
          >
            <label className="search-field" data-dbd-component="input">
              <MagnifyingGlass size={18} aria-hidden="true" />
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSearchFocused(true);
                  setActiveCityIndex(0);
                }}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onKeyDown={(event) => {
                  if (!cityMatches.length) return;
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setSearchFocused(true);
                    setActiveCityIndex(
                      (current) => (current + 1) % cityMatches.length,
                    );
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setSearchFocused(true);
                    setActiveCityIndex(
                      (current) =>
                        (current - 1 + cityMatches.length) % cityMatches.length,
                    );
                  } else if (event.key === "Enter" && searchFocused) {
                    event.preventDefault();
                    const activeCity = cityMatches[activeCityIndex];
                    if (activeCity) selectCity(activeCity.name);
                  } else if (event.key === "Escape") {
                    setSearchFocused(false);
                  }
                }}
                placeholder="搜索城市、影院或商圈（支持拼音）"
                aria-label="搜索城市、影院或商圈"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={searchFocused && cityMatches.length > 0}
                aria-controls="city-search-suggestions"
                aria-activedescendant={
                  searchFocused && cityMatches.length
                    ? `city-search-option-${activeCityIndex}`
                    : undefined
                }
              />
            </label>

            {searchFocused && cityMatches.length ? (
              <div
                className="city-search-menu"
                id="city-search-suggestions"
                role="listbox"
                aria-label="匹配城市"
                data-dbd-component="menu"
              >
                <span className="city-search-menu-title">切换城市</span>
                {cityMatches.map((item, index) => (
                  <button
                    className={`city-search-option ${
                      index === activeCityIndex ? "is-active" : ""
                    }`}
                    id={`city-search-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={index === activeCityIndex}
                    key={item.name}
                    onPointerDown={(event) => event.preventDefault()}
                    onMouseEnter={() => setActiveCityIndex(index)}
                    onClick={() => selectCity(item.name)}
                    data-dbd-component="button"
                  >
                    <Buildings size={18} aria-hidden="true" />
                    <span className="city-search-option-copy">
                      <strong>{item.name}</strong>
                      <small>{getPinyinLabel(item.name)}</small>
                    </span>
                    <span className="city-search-option-count">
                      {item.cinemaCount} 家
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
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
              <MagnifyingGlass size={28} aria-hidden="true" />
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
