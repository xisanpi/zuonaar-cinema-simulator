"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  FilmSlate,
  Moon,
  Pause,
  Play,
  SunDim,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import {
  auditoriums,
  buildSeats,
  cinemas,
  getAuditoriumById,
  getSeatMetrics,
  type FilmSource,
  type Seat,
} from "./cinema-data";

const CinemaScene = dynamic(
  () => import("./CinemaScene").then((module) => module.CinemaScene),
  {
    ssr: false,
    loading: () => (
      <div className="scene-loading" role="status" aria-live="polite">
        <div className="scene-loading-screen" />
        <span>正在搭建影厅</span>
      </div>
    ),
  },
);

type ViewCommand = {
  yaw: number;
  pitch: number;
  token: number;
};

function getDefaultSeatId(auditoriumId: string) {
  const auditorium =
    auditoriums.find((item) => item.id === auditoriumId) ?? auditoriums[0];
  const seats = buildSeats(auditorium);
  const centerRow = Math.floor(auditorium.rowCount / 2);
  const centerSeat =
    seats
      .filter((seat) => seat.status === "available")
      .sort(
        (left, right) =>
          Math.abs(left.row - centerRow) * 2 +
          Math.abs(left.x) -
          (Math.abs(right.row - centerRow) * 2 + Math.abs(right.x)),
      )[0] ?? seats[0];

  return centerSeat.id;
}

export function CinemaExperience({
  initialAuditoriumId,
}: {
  initialAuditoriumId?: string;
}) {
  const initialAuditorium =
    getAuditoriumById(initialAuditoriumId ?? "") ?? auditoriums[0];
  const [auditoriumId, setAuditoriumId] = useState(initialAuditorium.id);
  const [selectedSeatId, setSelectedSeatId] = useState(() =>
    getDefaultSeatId(initialAuditorium.id),
  );
  const [filmMode, setFilmMode] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [filmSource, setFilmSource] = useState<FilmSource>("local-demo");
  const [viewCommand, setViewCommand] = useState<ViewCommand>({
    yaw: 0,
    pitch: 0,
    token: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  const auditorium =
    auditoriums.find((item) => item.id === auditoriumId) ?? auditoriums[0];
  const cinema =
    cinemas.find((item) => item.id === auditorium.cinemaId) ?? cinemas[0];
  const seats = useMemo(() => buildSeats(auditorium), [auditorium]);
  const selectedSeat =
    seats.find((seat) => seat.id === selectedSeatId) ??
    seats.find((seat) => seat.id === getDefaultSeatId(auditorium.id)) ??
    seats[0];
  const metrics = getSeatMetrics(auditorium, selectedSeat);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const switchAuditorium = (nextAuditoriumId: string) => {
    setAuditoriumId(nextAuditoriumId);
    setSelectedSeatId(getDefaultSeatId(nextAuditoriumId));
  };

  const selectSeat = (seat: Seat) => {
    if (seat.status === "occupied") return;
    setSelectedSeatId(seat.id);
  };

  const toggleFilmMode = () => {
    setFilmMode((current) => {
      const next = !current;
      setPlaying(next);
      return next;
    });
  };

  const nudgeView = (yaw: number, pitch: number) => {
    setViewCommand((current) => ({
      yaw,
      pitch,
      token: current.token + 1,
    }));
  };

  return (
    <main className="cinema-app">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="返回坐哪儿影院列表">
          <span className="brand-mark">
            <FilmSlate size={22} weight="fill" />
          </span>
          <span>
            <strong>坐哪儿</strong>
            <small>影院视野模拟器</small>
          </span>
        </Link>

        <div
          className="venue-controls detail-controls"
          aria-label="当前影院与影厅"
        >
          <Link className="back-to-cinemas" href="/">
            <ArrowLeft size={18} />
            <span>
              <small>返回</small>
              <strong>
                {cinema.city} · {cinema.name}
              </strong>
            </span>
          </Link>
          <label className="select-field">
            <span>影厅</span>
            <select
              value={auditorium.id}
              onChange={(event) => switchAuditorium(event.target.value)}
            >
              {auditoriums
                .filter((item) => item.cinemaId === cinema.id)
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} · {item.format}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <button
          className={`projection-toggle ${filmMode ? "is-active" : ""}`}
          type="button"
          onClick={toggleFilmMode}
          aria-pressed={filmMode}
        >
          {filmMode ? <Moon size={19} /> : <SunDim size={19} />}
          <span>{filmMode ? "放映中" : "散场灯光"}</span>
        </button>
      </header>

      <section className="experience-layout">
        <div className="scene-shell">
          <CinemaScene
            auditorium={auditorium}
            seats={seats}
            selectedSeat={selectedSeat}
            filmMode={filmMode}
            playing={playing}
            filmSource={filmSource}
            viewCommand={viewCommand}
            isMobile={isMobile}
            onSelectSeat={selectSeat}
          />

          <div className="scene-status" aria-live="polite">
            <span>{cinema.name}</span>
            <strong>
              {selectedSeat.rowLabel} 排 {selectedSeat.number} 座
            </strong>
          </div>

          <div className="scene-controls">
            <div className="direction-pad" aria-label="调整视线">
              <span />
              <button
                type="button"
                aria-label="视线向上"
                onClick={() => nudgeView(0, 0.08)}
              >
                <ArrowUp size={17} />
              </button>
              <span />
              <button
                type="button"
                aria-label="视线向左"
                onClick={() => nudgeView(0.09, 0)}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="视线向下"
                onClick={() => nudgeView(0, -0.08)}
              >
                <ArrowDown size={17} />
              </button>
              <button
                type="button"
                aria-label="视线向右"
                onClick={() => nudgeView(-0.09, 0)}
              >
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="film-picker">
              <label htmlFor="film-source">影片</label>
              <select
                id="film-source"
                aria-label="影片"
                value={filmSource}
                onChange={(event) => {
                  setFilmSource(event.target.value as FilmSource);
                  setPlaying(false);
                  setFilmMode(false);
                }}
              >
                <option value="local-demo">自然演示片</option>
                <option value="imax-countdown">
                  IMAX Laser Countdown（在线）
                </option>
              </select>
              {filmSource === "imax-countdown" && (
                <a
                  href="https://www.youtube.com/watch?v=n5HbQ7vCvDY"
                  target="_blank"
                  rel="noreferrer"
                >
                  IMAX 官方原片 ↗
                </a>
              )}
            </div>

            <button
              className="play-control"
              type="button"
              onClick={() => {
                if (!filmMode) setFilmMode(true);
                setPlaying((current) => !current);
              }}
              aria-pressed={playing}
            >
              {playing ? (
                <Pause size={20} weight="fill" />
              ) : (
                <Play size={20} weight="fill" />
              )}
              <span>
                {playing
                  ? "暂停"
                  : filmSource === "imax-countdown"
                    ? "播放倒计时"
                    : "播放短片"}
              </span>
            </button>
          </div>

          <p className="gesture-hint">拖动观察银幕，视点固定在当前座位</p>
        </div>

        <aside className="seat-panel" aria-label="选座与体验指标">
          <div className="auditorium-heading">
            <div>
              <span>{cinema.city}</span>
              <h1>{auditorium.name}</h1>
            </div>
            <strong>{auditorium.format}</strong>
          </div>

          <section className="technical-summary" aria-label="影厅技术数据">
            <div>
              <span>银幕数据</span>
              <strong>
                {auditorium.screenWidth.toFixed(1)} ×{" "}
                {auditorium.screenHeight.toFixed(1)} m
              </strong>
              <small>
                {(auditorium.screenWidth * auditorium.screenHeight).toFixed(0)}
                ㎡ · {auditorium.screenAspect}
              </small>
            </div>
            <div>
              <span>放映技术</span>
              <strong>{auditorium.projectionTechnology}</strong>
              <small>{auditorium.projectionDetails.join(" / ")}</small>
            </div>
            <div className="screen-surface-spec">
              <span>幕面光学模型</span>
              <strong>{auditorium.screenSurface.name}</strong>
              <small>
                增益 {auditorium.screenSurface.gain.toFixed(1)} / 半增益角{" "}
                {auditorium.screenSurface.halfGainAngle}° / 数字微孔{" "}
                {auditorium.screenSurface.perforationMm.toFixed(1)} mm
              </small>
            </div>
          </section>

          <div className="screen-key">
            <span>银幕</span>
            <small>{auditorium.screenAspect}</small>
          </div>

          <div className="seat-map" role="group" aria-label="座位图">
            {Array.from({ length: auditorium.rowCount }, (_, row) => {
              const rowSeats = seats.filter((seat) => seat.row === row);
              return (
                <div className="seat-row" key={row}>
                  <span className="row-label">{rowSeats[0]?.rowLabel}</span>
                  <div className="seat-row-buttons">
                    {rowSeats.map((seat, index) => (
                      <button
                        type="button"
                        key={seat.id}
                        className={[
                          "seat-button",
                          seat.id === selectedSeat.id ? "is-selected" : "",
                          seat.status === "occupied" ? "is-occupied" : "",
                          index === rowSeats.length / 2 ? "after-aisle" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => selectSeat(seat)}
                        disabled={seat.status === "occupied"}
                        aria-label={`${seat.rowLabel} 排 ${seat.number} 座${
                          seat.status === "occupied" ? "，不可选" : ""
                        }`}
                        aria-pressed={seat.id === selectedSeat.id}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="seat-legend" aria-label="图例">
            <span>
              <i className="legend-available" /> 可选
            </span>
            <span>
              <i className="legend-selected" /> 当前
            </span>
            <span>
              <i className="legend-occupied" /> 不可选
            </span>
          </div>

          <section className="seat-reading">
            <div className="reading-title">
              <span>
                {selectedSeat.rowLabel} 排 {selectedSeat.number} 座
              </span>
              <strong>{metrics.verdict}</strong>
            </div>
            <p>{metrics.note}</p>
            <dl>
              <div>
                <dt>水平视角</dt>
                <dd>{metrics.horizontalFov.toFixed(0)}°</dd>
              </div>
              <div>
                <dt>仰角</dt>
                <dd>{metrics.verticalAngle.toFixed(0)}°</dd>
              </div>
              <div>
                <dt>距银幕</dt>
                <dd>{metrics.distance.toFixed(1)} m</dd>
              </div>
            </dl>
          </section>

          <p className="data-note">
            模型说明：{auditorium.sourceNote}。指标为几何估算。
          </p>
        </aside>
      </section>
    </main>
  );
}
