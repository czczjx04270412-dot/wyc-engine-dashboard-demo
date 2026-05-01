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
  { label: "净 PnL", value: "+$128,430", detail: "较昨日 +4.7%", tone: "gain" },
  { label: "总敞口 Exposure", value: "$4.82M", detail: "多头 62% / 空头 38%", tone: "neutral" },
  { label: "最大回撤 Drawdown", value: "-2.14%", detail: "仍在日内风控线内", tone: "warn" },
  { label: "运行中策略", value: "12 / 15", detail: "2 个暂停，1 个待复核", tone: "neutral" }
] as const;

export const pnlSeries = [44, 48, 45, 57, 54, 66, 62, 72, 78, 74, 83, 91, 88, 104, 112, 108, 121];

export const strategies: Strategy[] = [
  {
    name: "美股均值回归",
    market: "美股股票池",
    status: "Live",
    pnl: 42810,
    exposure: "$1.22M",
    drawdown: "-0.8%",
    winRate: "57%"
  },
  {
    name: "加密动量策略",
    market: "BTC / ETH",
    status: "Live",
    pnl: 31940,
    exposure: "$860K",
    drawdown: "-1.4%",
    winRate: "53%"
  },
  {
    name: "中概 ADR 统计套利",
    market: "ADR 组合",
    status: "Review",
    pnl: -6240,
    exposure: "$430K",
    drawdown: "-2.1%",
    winRate: "49%"
  },
  {
    name: "波动率 Carry",
    market: "指数期权",
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
  "TSLA 卖出订单被拒：委托价格超过滑点保护范围。",
  "中概 ADR 统计套利需要复核：回撤接近日内风控阈值。",
  "延迟监控：行情数据网关出现 18 秒波动后已恢复。"
];
