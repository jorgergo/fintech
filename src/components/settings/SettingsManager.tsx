"use client";

import { useState, useTransition } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatPct } from "@/lib/format";
import { updateProfile, resetDatabase } from "@/actions/profile";
import {
  updatePositionTargets,
  upsertPosition,
  deletePosition,
} from "@/actions/portfolio";

interface Profile {
  id: number;
  birthYear: number;
  retirementAge: number;
  monthlyContribution: number;
  taxRegime: string;
  hasW8Ben: boolean | null;
  commissionRate: number;
}

interface Position {
  id: number;
  ticker: string;
  titles: number;
  avgPriceMXN: number;
  currentPriceMXN: number;
  isLegacy: boolean;
  targetPct: number;
  currency: string;
  description: string | null;
}

export default function SettingsManager({
  profile,
  positions,
}: {
  profile: Profile | null;
  positions: Position[];
}) {
  const [pending, startTransition] = useTransition();

  const [birthYear, setBirthYear] = useState(profile?.birthYear ?? 2002);
  const [retirementAge, setRetirementAge] = useState(profile?.retirementAge ?? 65);
  const [monthlyContribution, setMonthlyContribution] = useState(
    profile?.monthlyContribution ?? 5500,
  );
  const [taxRegime, setTaxRegime] = useState(profile?.taxRegime ?? "SUELDOS_Y_SALARIOS");
  const [hasW8Ben, setHasW8Ben] = useState<string>(
    profile?.hasW8Ben === null || profile?.hasW8Ben === undefined
      ? "unknown"
      : profile.hasW8Ben
        ? "yes"
        : "no",
  );
  const [commissionRate, setCommissionRate] = useState(profile?.commissionRate ?? 0.0087);

  const [targets, setTargets] = useState(
    positions.map((p) => ({ id: p.id, targetPct: p.targetPct, isLegacy: p.isLegacy })),
  );

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTicker, setNewTicker] = useState("");
  const [newCurrency, setNewCurrency] = useState("USD");
  const [newTarget, setNewTarget] = useState(0);
  const [newDesc, setNewDesc] = useState("");

  const [confirmReset, setConfirmReset] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [targetsSaved, setTargetsSaved] = useState(false);

  function handleSaveProfile() {
    setProfileSaved(false);
    startTransition(async () => {
      await updateProfile({
        birthYear,
        retirementAge,
        monthlyContribution,
        taxRegime,
        hasW8Ben: hasW8Ben === "unknown" ? null : hasW8Ben === "yes",
        commissionRate,
      });
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 2000);
    });
  }

  function handleSaveTargets() {
    setTargetsSaved(false);
    startTransition(async () => {
      await updatePositionTargets(targets);
      setTargetsSaved(true);
      setTimeout(() => setTargetsSaved(false), 2000);
    });
  }

  function handleAddInstrument() {
    if (!newTicker.trim()) return;
    startTransition(async () => {
      await upsertPosition({
        ticker: newTicker.trim().toUpperCase(),
        titles: 0,
        avgPriceMXN: 0,
        currentPriceMXN: 0,
        isLegacy: false,
        targetPct: newTarget,
        currency: newCurrency,
        description: newDesc || undefined,
      });
      setShowAddForm(false);
      setNewTicker("");
      setNewTarget(0);
      setNewDesc("");
    });
  }

  function handleDeletePosition(id: number) {
    startTransition(async () => {
      await deletePosition(id);
    });
  }

  function handleReset() {
    startTransition(async () => {
      await resetDatabase();
      setConfirmReset(false);
    });
  }

  function handleExport() {
    const data = { profile: { birthYear, retirementAge, monthlyContribution, taxRegime, hasW8Ben, commissionRate }, positions };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fintech-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const inputClass = "nb-input w-full px-3 py-2 text-sm tabular";
  const selectClass = "nb-input w-full px-3 py-2 text-sm";

  return (
    <div className="space-y-6">
      {/* Profile */}
      <Card>
        <CardHeader title="Perfil del usuario" />
        <CardBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                Ano de nacimiento
              </label>
              <input type="number" value={birthYear} onChange={(e) => setBirthYear(+e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                Edad de retiro
              </label>
              <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(+e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                Aportacion mensual (MXN)
              </label>
              <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(+e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                Regimen fiscal
              </label>
              <select value={taxRegime} onChange={(e) => setTaxRegime(e.target.value)} className={selectClass}>
                <option value="SUELDOS_Y_SALARIOS">Sueldos y salarios</option>
                <option value="ACTIVIDAD_EMPRESARIAL">Actividad empresarial</option>
                <option value="HONORARIOS">Honorarios</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                W-8BEN
              </label>
              <select value={hasW8Ben} onChange={(e) => setHasW8Ben(e.target.value)} className={selectClass}>
                <option value="unknown">Sin confirmar</option>
                <option value="yes">Si</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">
                Comision efectiva
              </label>
              <input type="number" step="0.0001" value={commissionRate} onChange={(e) => setCommissionRate(+e.target.value)} className={inputClass} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={handleSaveProfile} disabled={pending} className="nb-btn px-5 py-2.5 bg-[var(--color-primary)] text-black font-[var(--font-heading)] text-sm uppercase disabled:opacity-50">
              GUARDAR PERFIL
            </button>
            {profileSaved && <Badge tone="positive">GUARDADO</Badge>}
          </div>
        </CardBody>
      </Card>

      {/* Allocation targets */}
      <Card>
        <CardHeader
          title="Portafolio e instrumentos"
          action={
            <button onClick={() => setShowAddForm(!showAddForm)} className="nb-btn px-3 py-1.5 text-xs font-[var(--font-mono)] font-bold uppercase bg-[var(--color-surface-2)] text-[var(--color-text)]">
              {showAddForm ? "CANCELAR" : "+ AGREGAR"}
            </button>
          }
        />
        <CardBody>
          {showAddForm && (
            <div className="mb-4 p-4 border-3 border-dashed border-[var(--color-border)] bg-[var(--color-surface-2)] space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">Ticker</label>
                  <input value={newTicker} onChange={(e) => setNewTicker(e.target.value)} placeholder="e.g. QQQM N" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">Moneda</label>
                  <select value={newCurrency} onChange={(e) => setNewCurrency(e.target.value)} className={selectClass}>
                    <option value="USD">USD</option>
                    <option value="MXN">MXN</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">Target %</label>
                  <input type="number" step="0.01" value={newTarget} onChange={(e) => setNewTarget(+e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-[11px] text-[var(--color-muted)] font-[var(--font-mono)] uppercase tracking-wider font-bold mb-1">Descripcion</label>
                  <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} className={inputClass} />
                </div>
              </div>
              <button onClick={handleAddInstrument} disabled={pending || !newTicker.trim()} className="nb-btn px-4 py-2 bg-[var(--color-primary)] text-black font-[var(--font-heading)] text-xs uppercase disabled:opacity-50">
                AGREGAR
              </button>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-[var(--font-mono)]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-[var(--color-muted)] border-b-3 border-[var(--color-border)]">
                  <th className="py-2 pr-4">Ticker</th>
                  <th className="py-2 pr-4">Moneda</th>
                  <th className="py-2 pr-4">Titulos</th>
                  <th className="py-2 pr-4">Legacy</th>
                  <th className="py-2 pr-4">Target %</th>
                  <th className="py-2 pr-4"></th>
                </tr>
              </thead>
              <tbody>
                {positions.map((p) => {
                  const t = targets.find((tt) => tt.id === p.id);
                  return (
                    <tr key={p.id} className="border-b border-[var(--color-border)]">
                      <td className="py-2 pr-4 font-bold">{p.ticker}</td>
                      <td className="py-2 pr-4">{p.currency}</td>
                      <td className="py-2 pr-4 tabular">{p.titles}</td>
                      <td className="py-2 pr-4">
                        <input
                          type="checkbox"
                          checked={t?.isLegacy ?? p.isLegacy}
                          onChange={(e) =>
                            setTargets((prev) =>
                              prev.map((tt) =>
                                tt.id === p.id ? { ...tt, isLegacy: e.target.checked } : tt,
                              ),
                            )
                          }
                        />
                      </td>
                      <td className="py-2 pr-4">
                        <input
                          type="number"
                          step="0.01"
                          value={t?.targetPct ?? p.targetPct}
                          onChange={(e) =>
                            setTargets((prev) =>
                              prev.map((tt) =>
                                tt.id === p.id ? { ...tt, targetPct: +e.target.value } : tt,
                              ),
                            )
                          }
                          className="nb-input w-24 px-2 py-1 text-xs tabular"
                        />
                      </td>
                      <td className="py-2">
                        {p.titles === 0 && (
                          <button
                            onClick={() => handleDeletePosition(p.id)}
                            disabled={pending}
                            className="text-xs text-[var(--color-negative)] font-bold hover:underline uppercase"
                          >
                            Eliminar
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={handleSaveTargets} disabled={pending} className="nb-btn px-5 py-2.5 bg-[var(--color-primary)] text-black font-[var(--font-heading)] text-sm uppercase disabled:opacity-50">
              GUARDAR TARGETS
            </button>
            {targetsSaved && <Badge tone="positive">GUARDADO</Badge>}
          </div>
        </CardBody>
      </Card>

      {/* Data management */}
      <Card>
        <CardHeader title="Datos" />
        <CardBody>
          <div className="flex flex-wrap gap-3">
            <button onClick={handleExport} className="nb-btn px-4 py-2.5 bg-[var(--color-surface-2)] text-[var(--color-text)] font-[var(--font-mono)] text-xs font-bold uppercase">
              EXPORTAR JSON
            </button>
            {!confirmReset ? (
              <button onClick={() => setConfirmReset(true)} className="nb-btn px-4 py-2.5 bg-[var(--color-negative)] text-black font-[var(--font-mono)] text-xs font-bold uppercase">
                RESETEAR DB
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-negative)] font-[var(--font-mono)] font-bold">ESTO BORRA TODO.</span>
                <button onClick={handleReset} disabled={pending} className="nb-btn px-3 py-2 bg-[var(--color-negative)] text-black font-[var(--font-mono)] text-xs font-bold uppercase">
                  CONFIRMAR
                </button>
                <button onClick={() => setConfirmReset(false)} className="nb-btn px-3 py-2 bg-[var(--color-surface-2)] text-[var(--color-text)] font-[var(--font-mono)] text-xs font-bold uppercase">
                  CANCELAR
                </button>
              </div>
            )}
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted)] font-[var(--font-mono)]">
            Despues de resetear, ejecuta <code className="bg-[var(--color-surface-2)] border-2 border-[var(--color-border)] px-1.5 py-0.5">npm run db:seed</code> para re-poblar.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
