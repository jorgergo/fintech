import { ReactNode } from "react";

type Tone = "neutral" | "positive" | "negative" | "warning" | "accent";

const TONE_CLASSES: Record<Tone, string> = {
  neutral: "bg-[var(--color-surface-2)] text-[var(--color-muted)] border-[var(--color-border)]",
  positive: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  negative: "bg-red-500/10 text-red-400 border-red-500/20",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  accent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border tabular ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
