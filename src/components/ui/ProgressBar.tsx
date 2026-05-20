interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-700/70">
      <div
        className="h-full rounded-full bg-gradient-to-r from-darkRed to-umoRed transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
