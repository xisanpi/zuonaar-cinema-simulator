export const primaryCinemaDataSource = {
  id: "arvinting-20260801",
  title: "全球 IMAX 及特效影厅分布",
  author: "ArvinTing",
  versionDate: "2026-08-01",
  url: "https://docs.qq.com/sheet/DQ3FEUUZJdklNSWJP",
} as const;

export function DataSourceAttribution({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <p
      className={`source-attribution ${compact ? "is-compact" : ""}`}
      data-dbd-component="data-source-attribution"
    >
      <span>主要数据源</span>
      <a
        href={primaryCinemaDataSource.url}
        target="_blank"
        rel="noreferrer"
      >
        {primaryCinemaDataSource.author}《{primaryCinemaDataSource.title}》
      </a>
      <small>更新至 2026-08-01</small>
    </p>
  );
}
