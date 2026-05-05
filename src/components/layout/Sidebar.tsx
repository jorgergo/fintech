"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Dashboard", icon: "▦" },
  { href: "/rebalance", label: "Rebalanceo", icon: "⇆" },
  { href: "/cards", label: "Tarjetas", icon: "▭" },
  { href: "/tax", label: "Deducciones", icon: "₪" },
  { href: "/settings", label: "Ajustes", icon: "⚙" },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-56 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] hidden md:flex flex-col">
      <div className="px-5 py-5 border-b border-[var(--color-border)]">
        <div className="text-sm uppercase tracking-widest text-[var(--color-muted)]">
          FinTech
        </div>
        <div className="text-lg font-semibold mt-0.5">Jorge · PPR</div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {NAV.map((n) => {
          const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                active
                  ? "bg-[var(--color-surface-2)] text-[var(--color-text)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
              }`}
            >
              <span className="w-5 text-center text-[var(--color-accent)]">
                {n.icon}
              </span>
              <span>{n.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-3 text-[10px] text-[var(--color-muted)] border-t border-[var(--color-border)]">
        v0.1 · LISR Art. 151
      </div>
    </aside>
  );
}
