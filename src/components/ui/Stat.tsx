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
      ? "text-[var(--color-positive)]"
      : tone === "negative"
        ? "text-[var(--color-negative)]"
        : tone === "warning"
          ? "text-[var(--color-warning)]"
          : "text-[var(--color-primary)]";
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)] font-[var(--font-mono)] font-bold">
        {label}
      </div>
      <div className={`text-2xl font-[var(--font-heading)] mt-1 tabular ${color}`}>
        {value}
      </div>
      {hint && (
        <div className="text-xs text-[var(--color-muted)] mt-1 tabular font-[var(--font-mono)]">
          {hint}
        </div>
      )}
    </div>
  );
}
