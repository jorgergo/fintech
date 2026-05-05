"use client";

import { useState, useRef } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatMXN, formatPct } from "@/lib/format";
import { uploadPositionPDF, type UploadResult } from "@/actions/upload";
import { FileUp, Loader2, TrendingUp, TrendingDown } from "lucide-react";

export default function PDFUploader() {
  const [result, setResult] = useState<UploadResult | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setResult(null);
    const formData = new FormData();
    formData.append("file", file);
    const res = await uploadPositionPDF(formData);
    setResult(res);
    setUploading(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <Card>
      <CardHeader
        title="Importar posicion GBM"
        subtitle="Sube el PDF de 'Consulta de posicion' para actualizar el portafolio"
      />
      <CardBody>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current?.click(); } }}
          role="button"
          tabIndex={0}
          aria-label="Subir archivo PDF de posicion GBM"
          className={`
            border-3 border-dashed p-10 text-center cursor-pointer transition-colors transition-shadow
            ${dragOver
              ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5 shadow-[inset_0_0_30px_rgba(255,217,61,0.05)]"
              : "border-[var(--color-border)] hover:border-[var(--color-muted)]"
            }
            ${uploading ? "opacity-50 pointer-events-none" : ""}
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            onChange={handleInputChange}
            className="hidden"
            aria-label="Seleccionar archivo PDF"
          />
          <div className="text-4xl mb-3">
            {uploading ? <Loader2 size={36} className="animate-spin text-[var(--color-primary)] mx-auto" /> : <FileUp size={36} className="text-[var(--color-muted)] mx-auto" />}
          </div>
          <p className="text-sm font-[var(--font-body)] text-[var(--color-text)] font-semibold uppercase">
            {uploading
              ? "Procesando PDF\u2026"
              : "Arrastra el PDF aqui o haz clic para seleccionar"}
          </p>
          <p className="text-xs text-[var(--color-muted)] mt-2 font-[var(--font-mono)]">
            gbm_position_*.pdf
          </p>
        </div>

        {result && (
          <div className="mt-5" aria-live="polite">
            {result.success ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge tone="positive">IMPORTADO</Badge>
                  <span className="text-sm text-[var(--color-muted)] font-[var(--font-mono)]">
                    {result.updatedPositions} posiciones actualizadas
                    {result.data?.date && ` · ${result.data.date}`}
                  </span>
                </div>

                {result.data && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs font-[var(--font-mono)]">
                      <thead>
                        <tr className="text-left text-[var(--color-muted)] border-b-3 border-[var(--color-border)] uppercase tracking-wider">
                          <th className="py-2 pr-3">Instrumento</th>
                          <th className="py-2 pr-3 text-right">Titulos</th>
                          <th className="py-2 pr-3 text-right">Precio</th>
                          <th className="py-2 pr-3 text-right">Valor</th>
                          <th className="py-2 pr-3 text-right">+/- $</th>
                          <th className="py-2 pr-3 text-right">+/- %</th>
                          <th className="py-2 text-right">% Port.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.data.positions.map((p) => (
                          <tr key={p.ticker} className="border-b border-[var(--color-border)]">
                            <td className="py-2 pr-3 font-bold">{p.ticker}</td>
                            <td className="py-2 pr-3 text-right tabular">{p.titles}</td>
                            <td className="py-2 pr-3 text-right tabular">{formatMXN(p.currentPriceMXN)}</td>
                            <td className="py-2 pr-3 text-right tabular">{formatMXN(p.valueMXN)}</td>
                            <td className={`py-2 pr-3 text-right tabular ${p.gainLossMXN >= 0 ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"}`}>
                              {formatMXN(p.gainLossMXN)}
                            </td>
                            <td className={`py-2 pr-3 text-right tabular ${p.gainLossMXN >= 0 ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"}`}>
                              <span className="inline-flex items-center justify-end gap-1">
                                {p.gainLossMXN >= 0
                                  ? <TrendingUp size={12} strokeWidth={3} />
                                  : <TrendingDown size={12} strokeWidth={3} />
                                }
                                {formatPct((p.currentPriceMXN - p.avgPriceMXN) / p.avgPriceMXN)}
                              </span>
                            </td>
                            <td className="py-2 text-right tabular">{p.portfolioPct.toFixed(2)}%</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t-3 border-[var(--color-border)]">
                          <td className="py-2 pr-3 font-bold">TOTAL</td>
                          <td></td>
                          <td></td>
                          <td className="py-2 pr-3 text-right tabular font-bold text-[var(--color-primary)]">
                            {formatMXN(result.data.totalValueMXN)}
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                        {result.data.cashMXN > 0 && (
                          <tr>
                            <td className="py-2 pr-3 text-[var(--color-muted)]">LIQUIDEZ</td>
                            <td></td>
                            <td></td>
                            <td className="py-2 pr-3 text-right tabular text-[var(--color-muted)]">
                              {formatMXN(result.data.cashMXN)}
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                        )}
                      </tfoot>
                    </table>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Badge tone="negative">ERROR</Badge>
                <span className="text-sm text-[var(--color-negative)] font-[var(--font-mono)]">{result.error}</span>
              </div>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
