import type { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  meta?: string;
  icon?: ReactNode;
}

export function InfoCard({ title, description, meta, icon }: InfoCardProps) {
  return (
    <article className="rounded-2xl glass p-5 shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-fogWhite">{title}</h3>
        {icon ? <span className="text-umoRed">{icon}</span> : null}
      </div>
      <p className="mt-3 text-sm text-zinc-300">{description}</p>
      {meta ? <p className="mt-4 text-xs uppercase tracking-wide text-metallicGray">{meta}</p> : null}
    </article>
  );
}
