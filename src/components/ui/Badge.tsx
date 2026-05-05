import { ReactNode } from "react";

type Tone = "neutral" | "positive" | "negative" | "warning" | "accent" | "primary";

const TONE_CLASSES: Record<Tone, string> = {
  neutral: "bg-[var(--color-surface-2)] text-[var(--color-muted)] border-[var(--color-border)]",
  positive: "bg-[var(--color-positive)] text-black border-black",
  negative: "bg-[var(--color-negative)] text-black border-black",
  warning: "bg-[var(--color-warning)] text-black border-black",
  accent: "bg-[var(--color-accent)] text-black border-black",
  primary: "bg-[var(--color-primary)] text-black border-black",
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
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider font-[var(--font-mono)] border-2 ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
