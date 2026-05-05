export function ProgressBar({
  value,
  max = 1,
  tone = "accent",
  showLabel = false,
}: {
  value: number;
  max?: number;
  tone?: "accent" | "positive" | "warning" | "negative" | "primary";
  showLabel?: boolean;
}) {
  const pct = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  const colors: Record<string, string> = {
    accent: "var(--color-accent)",
    positive: "var(--color-positive)",
    warning: "var(--color-warning)",
    negative: "var(--color-negative)",
    primary: "var(--color-primary)",
  };
  const color = colors[tone] || colors.accent;

  return (
    <div className="w-full">
      <div className="h-4 border-3 border-[var(--color-border)] bg-[var(--color-surface-2)] overflow-hidden">
        <div
          className="h-full transition-all"
          style={{ width: `${pct * 100}%`, background: color }}
        />
      </div>
      {showLabel && (
        <div className="text-xs text-[var(--color-muted)] mt-1 tabular font-[var(--font-mono)]">
          {(pct * 100).toFixed(1)}%
        </div>
      )}
    </div>
  );
}
