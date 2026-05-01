type PnlChartProps = {
  data: number[];
};

export function PnlChart({ data }: PnlChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 90 - ((value - min) / (max - min)) * 72;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-ink">日内 PnL 曲线</h2>
          <p className="mt-1 text-sm text-slate-500">使用模拟数据，展示交易员常看的收益和风险变化。</p>
        </div>
        <div className="rounded-md bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-gain">趋势 +18.3%</div>
      </div>
      <div className="mt-5 h-64 rounded-md border border-slate-100 bg-panel p-3">
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="PnL line chart">
          <defs>
            <linearGradient id="pnlFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f8b62" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#0f8b62" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#dfe4ea" strokeWidth="0.45" />
          ))}
          <polyline points={`0,95 ${points} 100,95`} fill="url(#pnlFill)" stroke="none" />
          <polyline points={points} fill="none" stroke="#0f8b62" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
