# 10 分钟面试速记

## 一句话介绍

这是一个用 Next.js 做的内部交易系统 dashboard Demo，用来监控策略 PnL、风险告警、订单状态和系统健康情况。

## 代码结构怎么讲

- `app/page.tsx`：主页面，把所有模块组合成 dashboard。
- `lib/mock-data.ts`：模拟交易数据，包括指标、策略、订单和告警。
- `components/metric-card.tsx`：顶部指标卡片。
- `components/status-pill.tsx`：状态标签，比如运行中、已暂停、已成交、已拒绝。
- `components/pnl-chart.tsx`：用 SVG 画出来的日内 PnL 曲线。

## 为什么匹配 WYC 岗位

- 不是普通静态网页，而是内部工具 dashboard。
- 页面重点是数据展示、状态反馈和风险信息。
- 覆盖了岗位里提到的交易概念：PnL、Exposure、Drawdown、Strategy、Order、Risk。
- 技术栈匹配：Next.js、React、TypeScript、Tailwind CSS。

## 面试被问 AI 怎么用，可以这样说

我把 Codex 当成 pair-programming 工具使用。先把招聘 JD 和目标说清楚，然后让它帮我拆成 dashboard 页面、mock 数据、组件、图表和表格几个任务。代码生成后，我没有直接当成完成，而是跑了生产构建，并把英文文案改成中文，确保自己能理解每个模块。

## 如果被问后续怎么改

- 接入真实后端 API。
- 用 TanStack Query 做策略状态轮询。
- 增加策略筛选和订单筛选。
- 加登录和权限控制。
- 用 Recharts 或 TradingView Lightweight Charts 做更专业的图表。

## 常用命令

```bash
npm install
npm run dev
npm run build
```
