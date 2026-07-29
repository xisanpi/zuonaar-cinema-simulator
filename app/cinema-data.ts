export type SeatStatus = "available" | "occupied";

export type Seat = {
  id: string;
  row: number;
  rowLabel: string;
  number: number;
  x: number;
  y: number;
  z: number;
  status: SeatStatus;
};

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
  rowCount: number;
  rowSpacing: number;
  rowRise: number;
  firstRowZ: number;
  rowSeatCounts: number[];
  sourceNote: string;
};

export type Cinema = {
  id: string;
  city: string;
  name: string;
  address: string;
};

export const cinemas: Cinema[] = [
  {
    id: "cnfm",
    city: "北京",
    name: "中国电影博物馆",
    address: "朝阳区南影路 9 号",
  },
  {
    id: "peace",
    city: "上海",
    name: "和平影都",
    address: "黄浦区西藏中路 290 号",
  },
];

export const auditoriums: Auditorium[] = [
  {
    id: "cnfm-imax",
    cinemaId: "cnfm",
    name: "IMAX GT 厅",
    format: "IMAX GT Laser 1.43:1",
    screenWidth: 27.6,
    screenHeight: 19.3,
    screenBottom: 1.5,
    screenZ: -19,
    screenAspect: "1.43:1 满幅",
    projectionTechnology: "IMAX GT Laser",
    projectionDetails: ["双机 4K 激光", "1.43:1 满幅支持", "12 声道 IMAX 音响"],
    rowCount: 10,
    rowSpacing: 1.85,
    rowRise: 0.52,
    firstRowZ: -3.8,
    rowSeatCounts: [14, 16, 18, 18, 20, 20, 22, 22, 22, 22],
    sourceNote: "公开规格参考与样例座位布局，不代表影院官方测绘",
  },
  {
    id: "peace-imax",
    cinemaId: "peace",
    name: "IMAX 厅",
    format: "IMAX 1.90:1",
    screenWidth: 20.5,
    screenHeight: 10.8,
    screenBottom: 2.2,
    screenZ: -18,
    screenAspect: "1.90:1",
    projectionTechnology: "IMAX Laser",
    projectionDetails: ["4K 激光放映", "1.90:1 画幅", "IMAX 多声道音响"],
    rowCount: 10,
    rowSpacing: 1.7,
    rowRise: 0.46,
    firstRowZ: -4.2,
    rowSeatCounts: [12, 14, 16, 16, 18, 18, 20, 20, 20, 20],
    sourceNote: "公开规格参考与样例座位布局，不代表影院官方测绘",
  },
];

const occupiedSeatIds = new Set([
  "cnfm-imax-C-5",
  "cnfm-imax-C-6",
  "cnfm-imax-F-13",
  "cnfm-imax-G-3",
  "cnfm-imax-H-18",
  "peace-imax-D-4",
  "peace-imax-G-11",
  "peace-imax-H-7",
]);

export function buildSeats(auditorium: Auditorium): Seat[] {
  return auditorium.rowSeatCounts.flatMap((count, row) => {
    const rowLabel = String.fromCharCode(65 + row);
    const centerGap = 1.05;
    const seatSpacing = 1.18;

    return Array.from({ length: count }, (_, index) => {
      const sideOffset = index < count / 2 ? -centerGap / 2 : centerGap / 2;
      const x = (index - (count - 1) / 2) * seatSpacing + sideOffset;
      const id = `${auditorium.id}-${rowLabel}-${index + 1}`;

      return {
        id,
        row,
        rowLabel,
        number: index + 1,
        x,
        y: 0.95 + row * auditorium.rowRise,
        z: auditorium.firstRowZ + row * auditorium.rowSpacing,
        status: occupiedSeatIds.has(id) ? "occupied" : "available",
      };
    });
  });
}

export function getSeatMetrics(auditorium: Auditorium, seat: Seat) {
  const eyeY = seat.y + 1.18;
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
