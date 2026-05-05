"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TITLES: Record<string, string> = {
  "/": "RESUMEN",
  "/rebalance": "REBALANCEO DEL PPR",
  "/cards": "TARJETAS DE CREDITO",
  "/tax": "DEDUCCIONES FISCALES",
  "/settings": "AJUSTES",
};

export default function Header() {
  const path = usePathname();
  const title =
    TITLES[path] ??
    Object.entries(TITLES).find(([k]) => k !== "/" && path.startsWith(k))?.[1] ??
    "FINTECH";

  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-MX", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setNow(fmt.format(new Date()).toUpperCase());
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[var(--color-bg)] border-b-3 border-[var(--color-border)]">
      <div className="px-6 lg:px-8 h-16 flex items-center justify-between max-w-[1600px] mx-auto">
        <h1 className="font-[var(--font-heading)] text-base uppercase tracking-wide">
          {title}
        </h1>
        <div className="text-[11px] font-[var(--font-mono)] text-[var(--color-muted)] uppercase tracking-wider tabular">
          {now}
        </div>
      </div>
    </header>
  );
}
