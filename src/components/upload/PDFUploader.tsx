"use client";

import { useState, useRef } from "react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatMXN, formatPct } from "@/lib/format";
import { uploadPositionPDF, type UploadResult } from "@/actions/upload";

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
    // Reset so the same file can be re-uploaded
    e.target.value = "";
  }

  return (
    <Card>
      <CardHeader
        title="Importar posición GBM"
        subtitle="Sube el PDF de 'Consulta de posición' para actualizar el portafolio"
      />
      <CardBody>
        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition
            ${dragOver
              ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
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
          />
          <div className="text-3xl mb-2">
            {uploading ? "⏳" : "📄"}
          </div>
          <p className="text-sm text-[var(--color-text)]">
            {uploading
              ? "Procesando PDF..."
              : "Arrastra el PDF aquí o haz clic para seleccionar"}
          </p>
          <p className="text-xs text-[var(--color-muted)] mt-1">
            gbm_position_*.pdf
          </p>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-4">
            {result.success ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge tone="positive">Importado</Badge>
                  <span className="text-sm text-[var(--color-muted)]">
                    {result.updatedPositions} posiciones actualizadas
                    {result.data?.date && ` · ${result.data.date}`}
                  </span>
                </div>

                {result.data && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="text-left text-[var(--color-muted)] border-b border-[var(--color-border)]">
                          <th className="py-1.5 pr-3">Instrumento</th>
                          <th className="py-1.5 pr-3 text-right">Títulos</th>
                          <th className="py-1.5 pr-3 text-right">Precio</th>
                          <th className="py-1.5 pr-3 text-right">Valor</th>
                          <th className="py-1.5 pr-3 text-right">+/-</th>
                          <th className="py-1.5 text-right">% Port.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.data.positions.map((p) => (
                          <tr key={p.ticker} className="border-b border-[var(--color-border)]/50">
                            <td className="py-1.5 pr-3 font-mono">{p.ticker}</td>
                            <td className="py-1.5 pr-3 text-right tabular">{p.titles}</td>
                            <td className="py-1.5 pr-3 text-right tabular">{formatMXN(p.currentPriceMXN)}</td>
                            <td className="py-1.5 pr-3 text-right tabular">{formatMXN(p.valueMXN)}</td>
                            <td className={`py-1.5 pr-3 text-right tabular ${p.gainLossMXN >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                              {formatPct(p.gainLossPct / 100)}
                            </td>
                            <td className="py-1.5 text-right tabular">{p.portfolioPct.toFixed(2)}%</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t border-[var(--color-border)]">
                          <td className="py-1.5 pr-3 font-medium">Total</td>
                          <td></td>
                          <td></td>
                          <td className="py-1.5 pr-3 text-right tabular font-medium">
                            {formatMXN(result.data.totalValueMXN)}
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                        {result.data.cashMXN > 0 && (
                          <tr>
                            <td className="py-1.5 pr-3 text-[var(--color-muted)]">Liquidez</td>
                            <td></td>
                            <td></td>
                            <td className="py-1.5 pr-3 text-right tabular text-[var(--color-muted)]">
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
              <div className="flex items-center gap-2">
                <Badge tone="negative">Error</Badge>
                <span className="text-sm text-red-400">{result.error}</span>
              </div>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
