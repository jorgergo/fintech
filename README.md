# FinTech-AI

Personal finance app for managing a PPR (Plan Personal de Retiro) investment portfolio, tracking credit card utilization, and optimizing tax deductions under Mexican tax law (LISR Art. 151).

Single-user tool — no auth, no external APIs, runs locally with SQLite.

## Tech Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **Prisma 6** + SQLite
- **Recharts** for portfolio visualization
- **date-fns** for date calculations

## Getting Started

```bash
# Install dependencies
npm install

# Generate Prisma client + create SQLite database
npx prisma generate
npx prisma db push

# Seed initial data (portfolio, cards, tax config)
npm run db:seed

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Dashboard — portfolio summary, tax progress, card alerts |
| `/rebalance` | PPR rebalancer — greedy whole-title algorithm with commission |
| `/cards` | Credit card utilization tracking and payment calendar |
| `/tax` | Tax deduction tracker (LISR Art. 151, fracción V) |
| `/settings` | User profile, allocation targets, data export/reset |

## Key Features

- **Rebalancing engine**: Greedy algorithm that buys one title at a time of the most underweight instrument, respecting whole-title constraints (SIC) and factoring in 0.87% commission (0.75% + IVA).
- **Tax deduction tracking**: Calculates max deduction as `min(10% × taxable income, 5 × UMA annual)`, splits contributions into deductible vs excess, and estimates ISR refund.
- **Credit card monitoring**: Utilization bars, payment/cut date alerts, color-coded severity.
- **Dark mode** with automatic light mode support.
- **Spanish UI**, MXN currency formatting throughout.

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run db:push      # Push schema to SQLite
npm run db:migrate   # Run migrations
npm run db:seed      # Seed initial data
npm run db:reset     # Reset database (destructive)
```
