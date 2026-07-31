"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Moon,
  Pause,
  Play,
  SunDim,
} from "@phosphor-icons/react";
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
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

const idleViewCommand = { yaw: 0, pitch: 0, token: 0 };
type MobilePanelTab = "seats" | "info";

function getPreferredAuditorium(initialAuditoriumId?: string) {
  const requestedAuditorium =
    getAuditoriumById(initialAuditoriumId ?? "") ?? auditoriums[0];

  return (
    auditoriums.find(
      (item) =>
        item.cinemaId === requestedAuditorium.cinemaId &&
        item.name.startsWith("IMAX"),
    ) ?? requestedAuditorium
  );
}

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
  const initialAuditorium = getPreferredAuditorium(initialAuditoriumId);
  const [auditoriumId, setAuditoriumId] = useState(initialAuditorium.id);
  const [selectedSeatId, setSelectedSeatId] = useState(() =>
    getDefaultSeatId(initialAuditorium.id),
  );
  const [filmMode, setFilmMode] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [filmSource, setFilmSource] =
    useState<FilmSource>("imax-countdown");
  const [isSeatPanelCollapsed, setIsSeatPanelCollapsed] = useState(false);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);
  const [mobilePanelTab, setMobilePanelTab] =
    useState<MobilePanelTab>("seats");
  const [isMobile, setIsMobile] = useState(false);

  const auditorium =
    auditoriums.find((item) => item.id === auditoriumId) ?? auditoriums[0];
  const cinema =
    cinemas.find((item) => item.id === auditorium.cinemaId) ?? cinemas[0];
  const cinemaAuditoriums = auditoriums.filter(
    (item) => item.cinemaId === cinema.id,
  );
  const seats = useMemo(() => buildSeats(auditorium), [auditorium]);
  const selectedSeat =
    seats.find((seat) => seat.id === selectedSeatId) ??
    seats.find((seat) => seat.id === getDefaultSeatId(auditorium.id)) ??
    seats[0];
  const metrics = getSeatMetrics(auditorium, selectedSeat);
  const lightActionLabel = filmMode ? "开灯" : "关灯";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => {
      const nextIsMobile = mediaQuery.matches;
      setIsMobile(nextIsMobile);
      if (nextIsMobile) setIsSeatPanelCollapsed(false);
    };
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

  const showMobilePanelTab = (tab: MobilePanelTab) => {
    setMobilePanelTab(tab);
    setIsMobilePanelOpen(true);
  };

  return (
    <main className="cinema-app" data-dbd-zone="cinema-shell">
      <header className="topbar" data-dbd-zone="cinema-topbar">
        <Link
          className="back-to-cinemas"
          href="/"
          aria-label={`返回影院列表，当前影院：${cinema.city} ${cinema.name}`}
        >
          <ArrowLeft size={20} />
          <strong>
            {cinema.city} · {cinema.name}
          </strong>
        </Link>

        <div className="topbar-actions" aria-label="影厅显示设置">
          <button
            className={`projection-toggle ${filmMode ? "is-active" : ""}`}
            type="button"
            data-dbd-component="button"
            data-dbd-variant="plain"
            onClick={toggleFilmMode}
            aria-pressed={filmMode}
            aria-label={lightActionLabel}
            title={lightActionLabel}
          >
            {filmMode ? <SunDim size={19} /> : <Moon size={19} />}
            <span>{lightActionLabel}</span>
          </button>
        </div>
      </header>

      <section
        className={`experience-layout ${
          isSeatPanelCollapsed ? "is-panel-collapsed" : ""
        }`}
        data-dbd-zone="cinema-workspace"
      >
        <div className="scene-shell" data-dbd-zone="cinema-scene">
          <CinemaScene
            auditorium={auditorium}
            seats={seats}
            selectedSeat={selectedSeat}
            filmMode={filmMode}
            playing={playing}
            filmSource={filmSource}
            viewCommand={idleViewCommand}
            isMobile={isMobile}
          />

          <div className="scene-seat-status" aria-live="polite">
            {selectedSeat.rowLabel} 排 {selectedSeat.number} 座
          </div>

          <div className="scene-controls">
            <div className="film-picker" data-dbd-pattern="film-picker">
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
              data-dbd-component="button"
              data-dbd-variant="icon-only"
              onClick={() => {
                if (!filmMode) setFilmMode(true);
                setPlaying((current) => !current);
              }}
              aria-pressed={playing}
              aria-label={
                playing
                  ? "暂停影片"
                  : filmSource === "imax-countdown"
                    ? "播放倒计时"
                    : "播放短片"
              }
              title={
                playing
                  ? "暂停影片"
                  : filmSource === "imax-countdown"
                    ? "播放倒计时"
                    : "播放短片"
              }
            >
              {playing ? (
                <Pause size={20} weight="fill" />
              ) : (
                <Play size={20} weight="fill" />
              )}
            </button>
          </div>

          <p className="gesture-hint">拖动观察银幕，视点固定在当前座位</p>
        </div>

        <aside
          className={`seat-panel ${
            isSeatPanelCollapsed ? "is-collapsed" : ""
          } ${isMobilePanelOpen ? "is-mobile-open" : ""} mobile-tab-${mobilePanelTab}`}
          aria-label="选座与体验指标"
          data-dbd-zone="cinema-seat-panel"
          data-dbd-pattern="panel-sheet"
        >
          <div className="mobile-sheet-header">
            <span className="mobile-sheet-handle" aria-hidden="true" />
            <div className="mobile-sheet-tabs" role="tablist" aria-label="影厅面板">
              <button
                type="button"
                role="tab"
                aria-selected={mobilePanelTab === "seats"}
                aria-controls="mobile-seat-panel"
                className={mobilePanelTab === "seats" ? "is-selected" : ""}
                onClick={() => showMobilePanelTab("seats")}
              >
                选座
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mobilePanelTab === "info"}
                aria-controls="mobile-info-panel"
                className={mobilePanelTab === "info" ? "is-selected" : ""}
                onClick={() => showMobilePanelTab("info")}
              >
                影院信息
              </button>
            </div>
            <button
              className="mobile-sheet-toggle"
              type="button"
              onClick={() => setIsMobilePanelOpen((current) => !current)}
              aria-expanded={isMobilePanelOpen}
              aria-label={isMobilePanelOpen ? "收起影厅面板" : "展开影厅面板"}
            >
              {isMobilePanelOpen ? (
                <CaretDown size={18} />
              ) : (
                <CaretUp size={18} />
              )}
            </button>
          </div>

          <button
            className="panel-collapse-toggle"
            type="button"
            onClick={() => setIsSeatPanelCollapsed((current) => !current)}
            aria-expanded={!isSeatPanelCollapsed}
            aria-label={
              isSeatPanelCollapsed
                ? "展开选座与体验指标"
                : "收起选座与体验指标"
            }
          >
            {isSeatPanelCollapsed ? (
              <CaretLeft size={18} />
            ) : (
              <CaretRight size={18} />
            )}
          </button>

          <div
            className="seat-panel-content"
            hidden={
              isSeatPanelCollapsed || (isMobile && !isMobilePanelOpen)
            }
          >
            <div
              className="panel-info-content"
              id="mobile-info-panel"
              role={isMobile ? "tabpanel" : undefined}
              hidden={isMobile && mobilePanelTab !== "info"}
            >
            <div className="auditorium-heading">
              <div className="auditorium-title-row">
                {cinemaAuditoriums.length > 1 ? (
                  <label
                    className="auditorium-title-switcher"
                    data-dbd-pattern="auditorium-switcher"
                  >
                    <select
                      aria-label="切换影厅"
                      value={auditorium.id}
                      onChange={(event) =>
                        switchAuditorium(event.target.value)
                      }
                    >
                      {cinemaAuditoriums.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <CaretDown
                      className="auditorium-title-caret"
                      size={16}
                      aria-hidden="true"
                    />
                  </label>
                ) : (
                  <h1>{auditorium.name}</h1>
                )}
                <span
                  className={`seat-layout-source-tag ${
                    auditorium.seatLayout ? "is-captured" : "is-estimated"
                  }`}
                  data-dbd-component="tag"
                  role="status"
                >
                  {auditorium.seatLayout ? "真实座位排列" : "估算座位排列"}
                </span>
              </div>
            </div>

            <section
              className="technical-summary"
              aria-label="影厅技术数据"
              data-dbd-pattern="technical-summary"
            >
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
            </div>

            <div
              className="panel-seat-content"
              id="mobile-seat-panel"
              role={isMobile ? "tabpanel" : undefined}
              hidden={isMobile && mobilePanelTab !== "seats"}
            >
            <div className="screen-key">
              <span>银幕</span>
              <small>{auditorium.screenAspect}</small>
            </div>

            <div
              className={[
                "seat-map",
                auditorium.rowCount >= 19
                  ? "is-ultra-dense"
                  : auditorium.rowCount >= 15
                    ? "is-dense"
                    : "",
              ]
                .filter(Boolean)
                .join(" ")}
              role="group"
              aria-label="座位图"
            >
              {Array.from({ length: auditorium.rowCount }, (_, row) => {
                const rowSeats = seats.filter((seat) => seat.row === row);
                return (
                  <div className="seat-row" key={row}>
                    <span className="row-label">{rowSeats[0]?.rowLabel}</span>
                    <div
                      className={`seat-row-buttons ${
                        auditorium.seatLayout ? "has-captured-layout" : ""
                      }`}
                      style={
                        auditorium.seatLayout
                          ? ({
                              gridTemplateColumns: `repeat(${auditorium.seatLayout.gridColumns}, 9px)`,
                              minWidth: `${
                                auditorium.seatLayout.gridColumns * 12
                              }px`,
                            } satisfies CSSProperties)
                          : undefined
                      }
                    >
                      {rowSeats.map((seat, index) => (
                        <button
                          type="button"
                          key={seat.id}
                          className={[
                            "seat-button",
                            seat.id === selectedSeat.id ? "is-selected" : "",
                            seat.status === "occupied" ? "is-occupied" : "",
                            !auditorium.seatLayout &&
                            index === rowSeats.length / 2
                              ? "after-aisle"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          style={
                            auditorium.seatLayout
                              ? { gridColumn: seat.gridSlot }
                              : undefined
                          }
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

            <section
              className="seat-reading"
              data-dbd-pattern="seat-metrics"
            >
              <div className="reading-title">
                <span>
                  {selectedSeat.rowLabel} 排 {selectedSeat.number} 座
                </span>
                <strong>{metrics.verdict}</strong>
              </div>
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
              <p title={metrics.note}>{metrics.note}</p>
            </section>
            </div>

            <p
              className="data-note panel-info-note"
              hidden={isMobile && mobilePanelTab !== "info"}
              title={`模型说明：${auditorium.sourceNote}。指标为几何估算。`}
            >
              模型说明：{auditorium.sourceNote}。指标为几何估算。
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
