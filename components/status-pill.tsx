type StatusPillProps = {
  value: "Live" | "Paused" | "Review" | "Filled" | "Working" | "Rejected";
};

const styles: Record<StatusPillProps["value"], string> = {
  Live: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Paused: "bg-slate-100 text-slate-700 border-slate-200",
  Review: "bg-amber-100 text-amber-800 border-amber-200",
  Filled: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Working: "bg-blue-100 text-blue-800 border-blue-200",
  Rejected: "bg-red-100 text-red-800 border-red-200"
};

export function StatusPill({ value }: StatusPillProps) {
  return (
    <span className={`inline-flex min-w-[76px] items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[value]}`}>
      {value}
    </span>
  );
}
