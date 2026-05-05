"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TITLES: Record<string, string> = {
  "/": "Resumen",
  "/rebalance": "Rebalanceo del PPR",
  "/cards": "Tarjetas de crédito",
  "/tax": "Deducciones fiscales",
  "/settings": "Ajustes",
};

export default function Header() {
  const path = usePathname();
  const title =
    TITLES[path] ??
    Object.entries(TITLES).find(([k]) => k !== "/" && path.startsWith(k))?.[1] ??
    "FinTech";

  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-MX", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setNow(fmt.format(new Date()));
  }, []);

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
      <div className="px-6 lg:px-8 h-14 flex items-center justify-between max-w-[1600px] mx-auto">
        <h1 className="text-base font-semibold tracking-tight">{title}</h1>
        <div className="text-xs text-[var(--color-muted)] tabular">{now}</div>
      </div>
    </header>
  );
}
