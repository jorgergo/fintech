export function ProgressBar({
  value,
  max = 1,
  tone = "accent",
  showLabel = false,
}: {
  value: number;
  max?: number;
  tone?: "accent" | "positive" | "warning" | "negative";
  showLabel?: boolean;
}) {
  const pct = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  const colorVar =
    tone === "positive"
      ? "var(--color-positive)"
      : tone === "warning"
        ? "var(--color-warning)"
        : tone === "negative"
          ? "var(--color-negative)"
          : "var(--color-accent)";
  return (
    <div className="w-full">
      <div className="h-2 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct * 100}%`, background: colorVar }}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-[var(--color-muted)] mt-1 tabular">
          {(pct * 100).toFixed(1)}%
        </div>
      )}
    </div>
  );
}
