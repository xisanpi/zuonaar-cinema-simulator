import {
  cinemaListings,
  getCinemaListingByHallId,
  inventoryHalls,
  type InventoryHall,
} from "./cinema-inventory";
import seatLayoutsJson from "./seat-layouts.json";

export type SeatStatus = "available" | "occupied";
export type FilmSource = "local-demo" | "imax-countdown";

export type Seat = {
  id: string;
  row: number;
  rowLabel: string;
  number: string;
  gridSlot: number;
  x: number;
  /** Finished floor elevation for this seating row. */
  y: number;
  z: number;
  status: SeatStatus;
};

type CapturedSeatLayout = {
  gridColumns: number;
  physicalSeats: number;
  inventorySeats: number | null;
  countMatchesInventory: boolean | null;
  hallName: string;
  capturedAt: string;
  sourceUrl: string;
  isPriority: boolean;
  priorityRank: number | null;
  priorityScore: number | null;
  rows: Array<{
    label: string;
    cells: Array<[seat: string, slot: number]>;
  }>;
};

const capturedSeatLayouts = seatLayoutsJson.layouts as Record<
  string,
  CapturedSeatLayout
>;

export type Auditorium = {
  id: string;
  cinemaId: string;
  name: string;
  format: string;
  screenWidth: number;
  screenHeight: number;
  screenBottom: number;
  screenZ: number;
  screenAspect: string;
  projectionTechnology: string;
  projectionDetails: string[];
  screenSurface: {
    name: string;
    gain: number;
    halfGainAngle: number;
    perforationMm: number;
    openAreaPercent: number;
    curvatureDepth: number;
  };
  rowCount: number;
  rowSpacing: number;
  rowRise: number;
  firstRowZ: number;
  rowSeatCounts: number[];
  seatingWidth: number;
  seatLayout: CapturedSeatLayout | null;
  sourceNote: string;
};

export type Cinema = {
  id: string;
  city: string;
  name: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
};

export const cinemaSeatGeometry = {
  rowFloorBaseY: 0.4,
  centerGap: 0.9,
  centerSpacing: 0.82,
  cushionCenterAboveFloor: 0.37,
  cushionTopAboveFloor: 0.46,
  backCenterAboveFloor: 0.76,
  backrestReclineRadians: (16 * Math.PI) / 180,
  armrestAboveFloor: 0.65,
  seatedEyeHeightAboveCushion: 0.765,
} as const;

const estimatedRowSpacing = 1.2;
const estimatedFirstRowZ = -3.8;
const targetCenterHorizontalFov = 54;
const minimumFrontDistanceInScreenWidths = 0.55;

function distanceForHorizontalFov(screenWidth: number, horizontalFov: number) {
  return (
    screenWidth /
    (2 * Math.tan((horizontalFov * Math.PI) / 360))
  );
}

function calibratedScreenZ(screenWidth: number, rowCount: number) {
  const centerRow = Math.floor(rowCount / 2);
  const centerRowZ =
    estimatedFirstRowZ + centerRow * estimatedRowSpacing;
  const targetCenterDistance = distanceForHorizontalFov(
    screenWidth,
    targetCenterHorizontalFov,
  );
  const minimumCenterDistance =
    screenWidth * minimumFrontDistanceInScreenWidths +
    centerRow * estimatedRowSpacing;

  return centerRowZ - Math.max(targetCenterDistance, minimumCenterDistance);
}

function approximateRows(hall: InventoryHall) {
  const screenWidth = hall.width ?? 18;
  const sourceSeats = hall.seats ?? 200;
  const rowCount = Math.max(8, Math.min(14, Math.round(sourceSeats / 22)));
  const maximumAcross = Math.max(
    14,
    Math.min(26, Math.round(screenWidth / 1.08)),
  );
  const averageAcross = Math.max(
    14,
    Math.min(maximumAcross, Math.round(sourceSeats / rowCount)),
  );

  return Array.from({ length: rowCount }, (_, row) => {
    const progression = Math.round((row / Math.max(rowCount - 1, 1)) * 4 - 2);
    const count = Math.max(12, Math.min(maximumAcross, averageAcross + progression));
    return count % 2 === 0 ? count : count + 1;
  });
}

function projectionDetails(hall: InventoryHall) {
  const details = [
    hall.projection || hall.brand,
    hall.ratio ? `${hall.ratio} 银幕比例` : "银幕比例待补",
    hall.seats ? `${hall.seats} 个登记座位` : "座位数待补",
  ];

  if (hall.brand === "Dolby Cinema") {
    details.push("Dolby Atmos 沉浸式音效");
  } else if (hall.brand === "IMAX") {
    details.push("IMAX 专用音响系统");
  } else {
    details.push("精选高规格巨幕影厅");
  }

  return details;
}

function hallToAuditorium(hall: InventoryHall): Auditorium {
  const cinema = getCinemaListingByHallId(hall.id);
  const screenWidth = hall.width ?? 18;
  const screenHeight =
    hall.height ??
    (hall.ratio
      ? screenWidth /
        Math.max(Number.parseFloat(hall.ratio.split(":")[0]), 1.43)
      : screenWidth / 1.9);
  const seatLayout = capturedSeatLayouts[hall.id] ?? null;
  const rowSeatCounts =
    seatLayout?.rows.map((row) => row.cells.length) ?? approximateRows(hall);
  const seatingColumns =
    seatLayout?.gridColumns ?? Math.max(...rowSeatCounts, 1);
  const seatingWidth =
    seatingColumns * cinemaSeatGeometry.centerSpacing +
    (seatLayout ? 0 : cinemaSeatGeometry.centerGap);
  const capturedCountNote =
    seatLayout && seatLayout.countMatchesInventory === false
      ? `；当前选座图为 ${seatLayout.physicalSeats} 座，与登记容量 ${
          seatLayout.inventorySeats ?? "待补"
        } 座存在版本或统计口径差异`
      : "";
  const rowCount = rowSeatCounts.length;

  return {
    id: hall.id,
    cinemaId: cinema?.id ?? `cinema-${hall.id}`,
    name:
      hall.brand === "Other PLF"
        ? "精选巨幕厅"
        : `${hall.brand} 厅`,
    format: `${hall.brand} · ${hall.projection || "放映技术待补"}`,
    screenWidth,
    screenHeight,
    screenBottom: 1.5,
    screenZ: calibratedScreenZ(screenWidth, rowCount),
    screenAspect: hall.ratio || "比例待补",
    projectionTechnology: hall.projection || hall.brand,
    projectionDetails: projectionDetails(hall),
    screenSurface: {
      name: "高增益穿孔银幕（光学模拟）",
      gain: hall.brand === "IMAX" ? 1.4 : hall.brand === "Other PLF" ? 1.3 : 1.2,
      halfGainAngle: hall.brand === "IMAX" ? 85 : 90,
      perforationMm: 0.9,
      openAreaPercent: 4.16,
      curvatureDepth: Math.min(0.42, screenWidth / 90),
    },
    rowCount,
    rowSpacing: estimatedRowSpacing,
    rowRise: 0.48,
    firstRowZ: estimatedFirstRowZ,
    rowSeatCounts,
    seatingWidth,
    seatLayout,
    sourceNote: seatLayout
      ? `银幕规格与放映制式来自公开数据库；逐排座号和空槽来自猫眼选座网格抓取${capturedCountNote}；厅深按默认中排 54° 水平视角校准，座间距、排距和高差仍为几何估算`
      : "银幕规格、放映制式与容量来自公开数据库；该厅尚无逐排抓取数据，座位排列按容量近似；厅深按默认中排 54° 水平视角校准，不代表影院官方测绘",
  };
}

export const cinemas: Cinema[] = cinemaListings.map((cinema) => ({
  id: cinema.id,
  city: cinema.city,
  name: cinema.name,
  address: cinema.address,
  latitude: cinema.latitude,
  longitude: cinema.longitude,
}));

export const auditoriums: Auditorium[] = inventoryHalls.map(hallToAuditorium);

export function getAuditoriumById(id: string) {
  const legacyId = id === "cnfm-imax" ? "hall-0019" : id;
  return auditoriums.find((auditorium) => auditorium.id === legacyId);
}

const occupiedSeatIds = new Set([
  "hall-0019-C-5",
  "hall-0019-C-6",
  "hall-0019-F-13",
  "hall-0019-G-3",
  "hall-0019-H-18",
]);

export function buildSeats(auditorium: Auditorium): Seat[] {
  if (auditorium.seatLayout) {
    const centerSlot = (auditorium.seatLayout.gridColumns + 1) / 2;

    return auditorium.seatLayout.rows.flatMap((layoutRow, row) =>
      layoutRow.cells.map(([seatNumber, gridSlot]) => {
        const id = `${auditorium.id}-${layoutRow.label}-${seatNumber}`;

        return {
          id,
          row,
          rowLabel: layoutRow.label,
          number: seatNumber,
          gridSlot,
          x:
            (gridSlot - centerSlot) *
            cinemaSeatGeometry.centerSpacing,
          y:
            cinemaSeatGeometry.rowFloorBaseY +
            row * auditorium.rowRise,
          z: auditorium.firstRowZ + row * auditorium.rowSpacing,
          status: "available",
        };
      }),
    );
  }

  return auditorium.rowSeatCounts.flatMap((count, row) => {
    const rowLabel = String.fromCharCode(65 + row);

    return Array.from({ length: count }, (_, index) => {
      const sideOffset =
        index < count / 2
          ? -cinemaSeatGeometry.centerGap / 2
          : cinemaSeatGeometry.centerGap / 2;
      const x =
        (index - (count - 1) / 2) * cinemaSeatGeometry.centerSpacing +
        sideOffset;
      const id = `${auditorium.id}-${rowLabel}-${index + 1}`;

      return {
        id,
        row,
        rowLabel,
        number: String(index + 1),
        gridSlot: index + 1,
        x,
        y:
          cinemaSeatGeometry.rowFloorBaseY +
          row * auditorium.rowRise,
        z: auditorium.firstRowZ + row * auditorium.rowSpacing,
        status: occupiedSeatIds.has(id) ? "occupied" : "available",
      };
    });
  });
}

export function getSeatEyeY(seat: Seat) {
  return (
    seat.y +
    cinemaSeatGeometry.cushionTopAboveFloor +
    cinemaSeatGeometry.seatedEyeHeightAboveCushion
  );
}

export function getSeatMetrics(auditorium: Auditorium, seat: Seat) {
  const eyeY = getSeatEyeY(seat);
  const screenCenterY = auditorium.screenBottom + auditorium.screenHeight / 2;
  const distance = Math.abs(seat.z - auditorium.screenZ);
  const horizontalFov =
    (2 * Math.atan(auditorium.screenWidth / (2 * distance)) * 180) / Math.PI;
  const verticalAngle =
    (Math.atan2(screenCenterY - eyeY, distance) * 180) / Math.PI;

  let verdict = "均衡";
  let note = "银幕占比和仰角都比较自然，适合大多数影片。";

  if (horizontalFov > 84) {
    verdict = "强沉浸";
    note = "银幕会占满视野，动作场面很有冲击力，字幕阅读更费力。";
  } else if (horizontalFov > 69) {
    verdict = "沉浸";
    note = "画面包围感明显，仍能比较轻松地覆盖整块银幕。";
  } else if (horizontalFov < 47) {
    verdict = "全景";
    note = "容易看清完整构图，沉浸感相对克制。";
  }

  if (Math.abs(seat.x) > auditorium.screenWidth * 0.3) {
    note = "侧向观看感较明显，人物和字幕会产生一定透视变形。";
  }

  return {
    distance,
    horizontalFov,
    verticalAngle,
    verdict,
    note,
  };
}
