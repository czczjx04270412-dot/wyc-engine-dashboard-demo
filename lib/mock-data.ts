export type Strategy = {
  name: string;
  market: string;
  status: "Live" | "Paused" | "Review";
  pnl: number;
  exposure: string;
  drawdown: string;
  winRate: string;
};

export type Order = {
  id: string;
  symbol: string;
  side: "Buy" | "Sell";
  size: string;
  price: string;
  state: "Filled" | "Working" | "Rejected";
  time: string;
};

export const metrics = [
  { label: "Net PnL", value: "+$128,430", detail: "+4.7% vs yesterday", tone: "gain" },
  { label: "Gross Exposure", value: "$4.82M", detail: "62% long / 38% short", tone: "neutral" },
  { label: "Max Drawdown", value: "-2.14%", detail: "inside daily risk limit", tone: "warn" },
  { label: "Live Strategies", value: "12 / 15", detail: "2 paused, 1 in review", tone: "neutral" }
] as const;

export const pnlSeries = [44, 48, 45, 57, 54, 66, 62, 72, 78, 74, 83, 91, 88, 104, 112, 108, 121];

export const strategies: Strategy[] = [
  {
    name: "Mean Reversion US",
    market: "US equities",
    status: "Live",
    pnl: 42810,
    exposure: "$1.22M",
    drawdown: "-0.8%",
    winRate: "57%"
  },
  {
    name: "Momentum Crypto",
    market: "BTC / ETH",
    status: "Live",
    pnl: 31940,
    exposure: "$860K",
    drawdown: "-1.4%",
    winRate: "53%"
  },
  {
    name: "Stat Arb China ADR",
    market: "ADR basket",
    status: "Review",
    pnl: -6240,
    exposure: "$430K",
    drawdown: "-2.1%",
    winRate: "49%"
  },
  {
    name: "Volatility Carry",
    market: "Index options",
    status: "Paused",
    pnl: 18460,
    exposure: "$710K",
    drawdown: "-1.0%",
    winRate: "61%"
  }
];

export const orders: Order[] = [
  { id: "ORD-4821", symbol: "AAPL", side: "Buy", size: "2,400", price: "191.24", state: "Filled", time: "09:42:18" },
  { id: "ORD-4822", symbol: "BTC-PERP", side: "Sell", size: "0.82", price: "64,280", state: "Working", time: "09:43:02" },
  { id: "ORD-4823", symbol: "TSLA", side: "Sell", size: "900", price: "178.66", state: "Rejected", time: "09:44:31" },
  { id: "ORD-4824", symbol: "NVDA", side: "Buy", size: "1,100", price: "874.10", state: "Filled", time: "09:45:07" }
];

export const alerts = [
  "TSLA sell order rejected: price exceeded slippage guard.",
  "Stat Arb China ADR requires review: drawdown is near the daily threshold.",
  "Latency monitor: market-data gateway recovered after 18s spike."
];
