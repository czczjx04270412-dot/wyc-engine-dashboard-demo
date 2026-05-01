# 10-Minute Interview Cheatsheet

## One-Sentence Intro

This is a Next.js internal trading dashboard demo for monitoring strategy PnL, risk alerts, order states and system health.

## How To Explain The Structure

- `app/page.tsx`: main dashboard screen and page composition.
- `lib/mock-data.ts`: typed mock trading data for metrics, strategies, orders and alerts.
- `components/metric-card.tsx`: reusable KPI cards.
- `components/status-pill.tsx`: consistent status display for strategies and orders.
- `components/pnl-chart.tsx`: SVG-based PnL chart without adding chart dependencies.

## Why This Matches WYC

- The UI is an internal tool, not a marketing page.
- It focuses on data scanning, state feedback and operational clarity.
- It includes trading concepts: PnL, exposure, drawdown, strategy, order, risk, market data.
- It uses the requested stack: Next.js, React, TypeScript and Tailwind CSS.

## What To Say About AI Usage

I used Codex as a pair-programming agent. I gave it the hiring requirements, asked it to turn them into a small internal dashboard, then reviewed the output by running a production build. The main thing I controlled was the product direction: data-heavy dashboard, typed mock data, compact UI, risk states and simple components.

## If Asked What You Would Improve

- Add real backend API integration.
- Use TanStack Query for polling live strategy status.
- Add filters for market, strategy state and PnL range.
- Add auth and permissions for internal users.
- Replace the mock chart with Recharts or TradingView Lightweight Charts.

## Commands

```bash
npm install
npm run dev
npm run build
```
