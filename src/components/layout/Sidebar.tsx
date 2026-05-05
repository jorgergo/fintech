"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ArrowLeftRight, CreditCard, Receipt, Settings } from "lucide-react";

const NAV = [
  { href: "/", label: "DASHBOARD", icon: LayoutDashboard },
  { href: "/rebalance", label: "REBALANCEO", icon: ArrowLeftRight },
  { href: "/cards", label: "TARJETAS", icon: CreditCard },
  { href: "/tax", label: "DEDUCCIONES", icon: Receipt },
  { href: "/settings", label: "AJUSTES", icon: Settings },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-60 shrink-0 border-r-3 border-[var(--color-border)] bg-[var(--color-surface)] hidden md:flex flex-col">
      <div className="px-5 py-5 border-b-3 border-[var(--color-border)]">
        <div className="font-[var(--font-heading)] text-xl text-[var(--color-primary)] uppercase">
          FINTECH
        </div>
        <div className="text-xs font-[var(--font-mono)] text-[var(--color-muted)] mt-1 uppercase tracking-wider">
          Jorge · PPR
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {NAV.map((n) => {
          const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center gap-3 px-3 py-2.5 text-xs font-[var(--font-mono)] font-bold uppercase tracking-wider transition-colors transition-transform transition-shadow ${
                active
                  ? "bg-[var(--color-primary)] text-black border-3 border-black shadow-[3px_3px_0px_#000000] translate-x-0"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] border-3 border-transparent"
              }`}
            >
              <span className={`w-5 text-center ${active ? "text-black" : "text-[var(--color-primary)]"}`} aria-hidden="true">
                <n.icon size={16} strokeWidth={2.5} />
              </span>
              <span>{n.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t-3 border-[var(--color-border)]">
        <div className="text-[10px] font-[var(--font-mono)] text-[var(--color-muted)] uppercase tracking-wider">
          v0.1 · LISR Art. 151
        </div>
      </div>
    </aside>
  );
}
