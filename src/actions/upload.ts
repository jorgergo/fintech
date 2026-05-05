"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { parseGBMPositionPDF, type ParsedStatement } from "@/lib/pdf-parser";

export interface UploadResult {
  success: boolean;
  error?: string;
  data?: ParsedStatement;
  updatedPositions?: number;
}

/**
 * Receives a GBM position PDF via FormData, parses it,
 * and updates portfolio positions in the database.
 */
export async function uploadPositionPDF(formData: FormData): Promise<UploadResult> {
  const file = formData.get("file") as File | null;
  if (!file) {
    return { success: false, error: "No se proporcionó archivo" };
  }

  if (!file.name.endsWith(".pdf")) {
    return { success: false, error: "El archivo debe ser un PDF" };
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const uint8 = new Uint8Array(arrayBuffer);
    const parsed = await parseGBMPositionPDF(uint8);

    if (parsed.positions.length === 0) {
      return {
        success: false,
        error: "No se encontraron posiciones en el PDF. Verifica que sea un estado de posición de GBM.",
      };
    }

    // Update or create each position in the database
    let updatedCount = 0;
    for (const pos of parsed.positions) {
      await prisma.portfolioPosition.upsert({
        where: { ticker: pos.ticker },
        update: {
          titles: pos.titles,
          avgPriceMXN: pos.avgPriceMXN,
          currentPriceMXN: pos.currentPriceMXN,
        },
        create: {
          ticker: pos.ticker,
          titles: pos.titles,
          avgPriceMXN: pos.avgPriceMXN,
          currentPriceMXN: pos.currentPriceMXN,
          isLegacy: false,
          targetPct: 0,
          currency: pos.ticker.endsWith(" N") ? "USD" : "MXN",
        },
      });
      updatedCount++;
    }

    revalidatePath("/");
    revalidatePath("/rebalance");
    revalidatePath("/settings");

    return {
      success: true,
      data: parsed,
      updatedPositions: updatedCount,
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Error desconocido al procesar el PDF";
    return { success: false, error: message };
  }
}
