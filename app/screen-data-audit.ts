import auditJson from "./screen-data-audit.json";
import type { InventoryHall } from "./cinema-inventory";

export type ScreenDataConfidence = "high" | "medium" | "low";
export type ScreenDataVerification =
  | "verified"
  | "version_consistent"
  | "needs_review"
  | "conflict";

export type ScreenDataAudit = {
  checkedAt: string;
  confidence: ScreenDataConfidence;
  status: ScreenDataVerification;
  label: string;
  note: string;
  referenceWidth: number;
  referenceHeight: number;
  areaDifferencePercent: number;
  sources: string[];
};

type AuditOverride = {
  confidence: ScreenDataConfidence;
  status: ScreenDataVerification;
  label: string;
  note: string;
  sources: string[];
};

const measurements = auditJson.measurements as unknown as Record<
  string,
  [width: number, height: number]
>;
const overrides = auditJson.overrides as unknown as Record<
  string,
  AuditOverride
>;

function genericAssessment(areaDifferencePercent: number) {
  if (areaDifferencePercent <= 1) {
    return {
      confidence: "medium" as const,
      status: "version_consistent" as const,
      label: "中可信",
      note:
        "站内数据与对比清单的银幕面积差不超过 1%，版本间基本一致；但尚无影院或设备方公布的独立精确尺寸。",
    };
  }

  if (areaDifferencePercent <= 5) {
    return {
      confidence: "low" as const,
      status: "needs_review" as const,
      label: "待复核",
      note:
        "两份公开数据的银幕面积差为 1%–5%，可能来自幕面、画面有效区或测量边界不同，需要影院资料或现场测量确认。",
    };
  }

  return {
    confidence: "low" as const,
    status: "conflict" as const,
    label: "数据冲突",
    note:
      "站内数据与对比清单的银幕面积差超过 5%，不能用普通四舍五入解释，在获得影院资料或现场测量前不应视为精确数据。",
  };
}

export function getScreenDataAudit(
  hall: InventoryHall,
): ScreenDataAudit | null {
  const reference = measurements[hall.id];
  if (!reference || !hall.width || !hall.height) return null;

  const [referenceWidth, referenceHeight] = reference;
  const currentArea = hall.width * hall.height;
  const referenceArea = referenceWidth * referenceHeight;
  const areaDifferencePercent = Math.abs(
    ((currentArea - referenceArea) / referenceArea) * 100,
  );
  const assessment = overrides[hall.id] ?? genericAssessment(areaDifferencePercent);

  return {
    checkedAt: auditJson.checkedAt,
    confidence: assessment.confidence,
    status: assessment.status,
    label: assessment.label,
    note: assessment.note,
    referenceWidth,
    referenceHeight,
    areaDifferencePercent,
    sources: "sources" in assessment ? assessment.sources : [],
  };
}
