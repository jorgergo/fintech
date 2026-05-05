import { ReactNode } from "react";

export function Stat({
  label,
  value,
  hint,
  tone = "neutral",
}: {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  tone?: "neutral" | "positive" | "negative" | "warning";
}) {
  const color =
    tone === "positive"
      ? "text-emerald-400"
      : tone === "negative"
        ? "text-red-400"
        : tone === "warning"
          ? "text-amber-400"
          : "text-[var(--color-text)]";
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </div>
      <div className={`text-2xl font-semibold mt-1 tabular ${color}`}>{value}</div>
      {hint && (
        <div className="text-xs text-[var(--color-muted)] mt-1 tabular">{hint}</div>
      )}
    </div>
  );
}
