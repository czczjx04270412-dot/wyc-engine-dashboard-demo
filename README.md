# WYC Engine 交易看板 Demo

这是一个用于 WYC Capital 前端实习投递的内部交易系统前端 Demo。

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- 模拟交易 / 风控数据

## 页面展示了什么

- 交易员内部使用的 dashboard 布局
- 策略监控表格
- 日内 PnL 曲线
- 风险告警
- 最近订单卡片
- 系统健康状态侧栏
- 适合数据密集型内部工具的响应式 UI

## 本地运行

```bash
npm install
npm run dev
```

然后打开 `http://localhost:3000`。

## 面试时可以怎么讲

- 这是一个模拟内部交易系统的前端看板，用来展示策略状态、PnL、敞口、回撤、订单状态和风险告警。
- 我把页面拆成了指标卡片、状态标签、PnL 图表、策略表格和订单卡片几个模块。
- `lib/mock-data.ts` 里放的是模拟数据，并且用 TypeScript 定义了策略和订单的数据类型。
- 我特别关注了内部工具常见的状态反馈，比如运行中、暂停、待复核、已成交、挂单中、已拒绝。
- 下一步可以把 mock 数据替换成真实后端 API，并用 TanStack Query 做轮询刷新。
