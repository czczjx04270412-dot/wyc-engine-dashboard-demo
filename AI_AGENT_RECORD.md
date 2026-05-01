# AI Code Agent Work Record

This is a cleaned summary of the AI-assisted workflow used to build the demo.

## Goal

Build a WYC Capital style frontend demo in about two hours:

- Next.js / React / TypeScript / Tailwind CSS
- Internal trading dashboard
- Data-heavy UI
- Easy to explain in an interview

## Requirement Breakdown

1. Create a Next.js project manually to avoid wasting time on scaffolding.
2. Build the first screen as the actual dashboard, not a landing page.
3. Add reusable components for metrics, status pills and chart display.
4. Use typed mock data for strategy status, orders, alerts and PnL.
5. Keep the UI restrained, dense and suitable for an internal trading tool.
6. Run a production build and fix issues before publishing.

## AI Review Notes

- Avoided overcomplicated dependencies so the project is easy to run.
- Used TypeScript types to prevent mismatched status values.
- Added empty/error-like states through alerts, rejected orders and paused/review strategy statuses.
- Kept visual design practical: tables, compact cards, status pills, chart and operational sidebar.

## What I Would Improve Next

- Replace mock data with real API calls.
- Add filtering by strategy status and market.
- Add authentication and role-based permissions.
- Add TanStack Query for polling strategy state.
- Replace the SVG mock chart with Recharts or TradingView Lightweight Charts.
