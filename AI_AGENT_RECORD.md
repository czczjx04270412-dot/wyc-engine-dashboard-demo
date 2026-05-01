# AI Code Agent 协作记录

这是本项目使用 AI Code Agent 辅助开发的整理版记录，可以作为投递材料的一部分。

## 目标

在较短时间内做出一个贴合 WYC Capital 招聘要求的前端 Demo：

- 使用 Next.js / React / TypeScript / Tailwind CSS
- 做一个内部交易系统 dashboard
- 体现 data-heavy UI 和 internal tools 的开发能力
- 方便在面试里讲清楚实现思路

## 需求拆解

1. 手动创建 Next.js 项目结构，避免浪费时间在脚手架问题上。
2. 首页直接做成可展示的 dashboard，而不是营销 landing page。
3. 拆出可复用组件：指标卡片、状态标签、PnL 图表。
4. 使用 TypeScript 类型约束策略、订单和状态数据。
5. 页面风格保持克制、清晰、信息密度高，符合内部工具场景。
6. 运行生产构建，确认项目可以正常编译。

## 我如何审查 AI 输出

- 检查页面是否真的符合岗位里的 trading dashboard / internal tools 方向。
- 检查 TypeScript 状态类型是否清晰，比如 `Live`、`Paused`、`Review`、`Rejected`。
- 检查 UI 是否有真实业务状态，而不是只有静态卡片。
- 运行 `npm run build`，确认没有编译错误。
- 把英文页面改成中文，方便自己理解和面试讲解。

## 下一步可以优化

- 接真实后端 API。
- 增加策略状态、市场、PnL 区间筛选。
- 使用 TanStack Query 做自动刷新。
- 加权限控制，比如 trader / admin 角色。
- 用 Recharts 或 TradingView Lightweight Charts 替换当前 SVG 简易图表。
