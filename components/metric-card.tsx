type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  tone: "gain" | "warn" | "neutral";
};

const toneClass: Record<MetricCardProps["tone"], string> = {
  gain: "text-gain",
  warn: "text-warn",
  neutral: "text-ink"
};

export function MetricCard({ label, value, detail, tone }: MetricCardProps) {
  return (
    <section className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className={`mt-3 text-2xl font-bold ${toneClass[tone]}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </section>
  );
}
