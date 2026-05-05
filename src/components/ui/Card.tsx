import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`nb-card p-0 ${className}`}
    >
      {children}
    </section>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between p-5 border-b-3 border-[var(--color-border)]">
      <div>
        <h2 className="font-[var(--font-heading)] text-sm font-black uppercase tracking-wider text-[var(--color-text)]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-[var(--color-muted)] mt-1 font-[var(--font-mono)]">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
