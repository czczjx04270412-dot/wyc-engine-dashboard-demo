import { MetricCard } from "@/components/metric-card";
import { PnlChart } from "@/components/pnl-chart";
import { StatusPill } from "@/components/status-pill";
import { alerts, metrics, orders, pnlSeries, strategies } from "@/lib/mock-data";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">WYC Engine Demo</p>
            <h1 className="mt-1 text-2xl font-bold text-ink">Trading Operations Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-md border border-line bg-panel px-3 py-2 font-medium text-slate-600">Market open</span>
            <span className="rounded-md bg-ink px-3 py-2 font-semibold text-white">Risk healthy</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-lg border border-line bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="space-y-1">
            {["Overview", "Strategies", "Orders", "Risk", "Data Health"].map((item, index) => (
              <button
                key={item}
                className={`w-full rounded-md px-3 py-2 text-left text-sm font-semibold ${
                  index === 0 ? "bg-ink text-white" : "text-slate-600 hover:bg-panel"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-line bg-panel p-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">System heartbeat</p>
            <div className="mt-3 space-y-3 text-sm">
              <HealthRow label="API latency" value="42ms" />
              <HealthRow label="Market data" value="99.98%" />
              <HealthRow label="Order gateway" value="Online" />
            </div>
          </div>
        </aside>

        <section className="space-y-5">
          <div className="grid metric-grid gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
            <PnlChart data={pnlSeries} />
            <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-ink">Risk Alerts</h2>
              <div className="mt-4 space-y-3">
                {alerts.map((alert) => (
                  <div key={alert} className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                    {alert}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-lg border border-line bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-5">
              <div>
                <h2 className="text-base font-semibold text-ink">Strategy Monitor</h2>
                <p className="mt-1 text-sm text-slate-500">Designed for scanning status, exposure, drawdown and PnL quickly.</p>
              </div>
              <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-panel">Export CSV</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead className="bg-panel text-left text-xs uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Strategy</th>
                    <th className="px-5 py-3">Market</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">PnL</th>
                    <th className="px-5 py-3">Exposure</th>
                    <th className="px-5 py-3">Drawdown</th>
                    <th className="px-5 py-3">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {strategies.map((strategy) => (
                    <tr key={strategy.name} className="border-t border-line">
                      <td className="px-5 py-4 font-semibold text-ink">{strategy.name}</td>
                      <td className="px-5 py-4 text-slate-600">{strategy.market}</td>
                      <td className="px-5 py-4"><StatusPill value={strategy.status} /></td>
                      <td className={`px-5 py-4 text-right font-semibold ${strategy.pnl >= 0 ? "text-gain" : "text-loss"}`}>
                        {currencyFormatter.format(strategy.pnl)}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{strategy.exposure}</td>
                      <td className="px-5 py-4 text-slate-600">{strategy.drawdown}</td>
                      <td className="px-5 py-4 text-slate-600">{strategy.winRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-white shadow-sm">
            <div className="border-b border-line p-5">
              <h2 className="text-base font-semibold text-ink">Recent Orders</h2>
            </div>
            <div className="grid gap-3 p-5 md:grid-cols-2">
              {orders.map((order) => (
                <article key={order.id} className="rounded-md border border-line bg-panel p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-ink">{order.symbol}</p>
                      <p className="mt-1 text-sm text-slate-500">{order.id} · {order.time}</p>
                    </div>
                    <StatusPill value={order.state} />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    <OrderFact label="Side" value={order.side} />
                    <OrderFact label="Size" value={order.size} />
                    <OrderFact label="Price" value={order.price} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function HealthRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

function OrderFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-ink">{value}</p>
    </div>
  );
}
