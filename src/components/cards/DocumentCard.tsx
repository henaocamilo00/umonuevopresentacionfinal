interface DocumentCardProps {
  title: string;
  category: string;
  description: string;
  date: string;
  status: string;
  link: string;
}

export function DocumentCard({ title, category, description, date, status, link }: DocumentCardProps) {
  return (
    <article className="rounded-2xl glass p-5 shadow-glow">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide">{status}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-wide text-metallicGray">{category} • {date}</p>
      <p className="mt-3 text-sm text-zinc-300">{description}</p>
      <a href={link} className="mt-4 inline-flex rounded-lg border border-umoRed/50 px-3 py-2 text-xs font-medium uppercase tracking-wide text-red-100 transition hover:bg-umoRed/20">
        Abrir recurso
      </a>
    </article>
  );
}
