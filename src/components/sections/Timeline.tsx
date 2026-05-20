import type { StrategyStep } from '../../data/types';

interface TimelineProps {
  steps: StrategyStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => (
        <article key={step.step} className="rounded-2xl glass p-4">
          <p className="text-xs uppercase tracking-wide text-metallicGray">Paso {step.step}</p>
          <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
          <span className="mt-4 inline-block rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{step.status}</span>
        </article>
      ))}
    </div>
  );
}
