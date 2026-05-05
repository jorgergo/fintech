-- CreateTable
CREATE TABLE "PortfolioPosition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticker" TEXT NOT NULL,
    "titles" INTEGER NOT NULL,
    "avgPriceMXN" REAL NOT NULL,
    "currentPriceMXN" REAL NOT NULL,
    "isLegacy" BOOLEAN NOT NULL DEFAULT false,
    "targetPct" REAL NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'MXN',
    "description" TEXT,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "titles" INTEGER NOT NULL,
    "pricePerTitle" REAL NOT NULL,
    "commissionMXN" REAL NOT NULL,
    "totalCostMXN" REAL NOT NULL,
    "isDeductible" BOOLEAN NOT NULL DEFAULT true,
    "executedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    CONSTRAINT "Transaction_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "PortfolioPosition" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "creditLimit" REAL NOT NULL,
    "currentBalance" REAL NOT NULL DEFAULT 0,
    "cutDay" INTEGER NOT NULL DEFAULT 0,
    "paymentDay" INTEGER NOT NULL DEFAULT 0,
    "isSecured" BOOLEAN NOT NULL DEFAULT false,
    "annualRate" REAL NOT NULL DEFAULT 0,
    "notes" TEXT,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TaxContribution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "amountMXN" REAL NOT NULL,
    "deductibleAmount" REAL NOT NULL,
    "excessAmount" REAL NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TaxConfig" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "annualGrossIncome" REAL NOT NULL,
    "annualTaxableIncome" REAL NOT NULL,
    "marginalTaxRate" REAL NOT NULL,
    "umaAnnualValue" REAL NOT NULL,
    "maxDeduction" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "PositionSnapshot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "ticker" TEXT NOT NULL,
    "titles" INTEGER NOT NULL,
    "avgPriceMXN" REAL NOT NULL,
    "currentPriceMXN" REAL NOT NULL,
    "valueMXN" REAL NOT NULL,
    "gainLossMXN" REAL NOT NULL,
    "portfolioPct" REAL NOT NULL,
    "totalValueMXN" REAL NOT NULL,
    "cashMXN" REAL NOT NULL DEFAULT 0,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "birthYear" INTEGER NOT NULL DEFAULT 2002,
    "retirementAge" INTEGER NOT NULL DEFAULT 65,
    "monthlyContribution" REAL NOT NULL DEFAULT 5500,
    "taxRegime" TEXT NOT NULL DEFAULT 'SUELDOS_Y_SALARIOS',
    "hasW8Ben" BOOLEAN,
    "commissionRate" REAL NOT NULL DEFAULT 0.0087
);

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioPosition_ticker_key" ON "PortfolioPosition"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_name_key" ON "CreditCard"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TaxContribution_year_month_key" ON "TaxContribution"("year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "TaxConfig_year_key" ON "TaxConfig"("year");

-- CreateIndex
CREATE INDEX "PositionSnapshot_year_month_idx" ON "PositionSnapshot"("year", "month");

-- CreateIndex
CREATE UNIQUE INDEX "PositionSnapshot_year_month_ticker_key" ON "PositionSnapshot"("year", "month", "ticker");
