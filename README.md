# WYC Engine Dashboard Demo

A small internal-tool style frontend demo for the WYC Capital frontend internship.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Mock trading / risk data

## What It Shows

- Trader-facing dashboard layout
- Strategy monitor table
- Intraday PnL chart
- Risk alerts
- Recent order cards
- System health sidebar
- Responsive UI for data-heavy internal tools

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Interview Talking Points

- I used AI Code Agent as a pair-programming assistant, but kept the product requirement clear: a dashboard for internal traders.
- I split the work into layout, mock data, reusable components, chart visualization, table states and responsive styling.
- I used TypeScript types for strategies and orders so data-heavy UI is less error-prone.
- I intentionally handled positive/negative PnL, paused/review statuses, rejected orders and risk alerts because internal tools need accurate state feedback.
- Next step would be replacing mock data with backend APIs using TanStack Query or server actions.
