import { ProgressBar } from '../ui/ProgressBar';

interface MetricCardProps {
  title: string;
  value: number;
  goal: number;
  status: string;
  category: string;
}

export function MetricCard({ title, value, goal, status, category }: MetricCardProps) {
  const progress = goal === 0 ? 0 : Math.round((value / goal) * 100);

  return (
    <article className="rounded-2xl glass p-5 shadow-glow">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wide text-zinc-200">{status}</span>
      </div>
      <p className="mt-3 text-2xl font-bold text-fogWhite">{value}</p>
      <p className="text-xs text-metallicGray">Meta: {goal}</p>
      <div className="mt-3">
        <ProgressBar value={progress} />
      </div>
      <p className="mt-2 text-xs uppercase tracking-wide text-zinc-400">{category} • {progress}%</p>
    </article>
  );
}
