interface UpdateCardProps {
  date: string;
  title: string;
  description: string;
  category: string;
  author?: string;
}

export function UpdateCard({ date, title, description, category, author }: UpdateCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-charcoal/40 p-4">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-metallicGray">
        <span>{date}</span>
        <span>•</span>
        <span>{category}</span>
      </div>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
      {author ? <p className="mt-3 text-xs text-zinc-400">Autor: {author}</p> : null}
    </article>
  );
}
