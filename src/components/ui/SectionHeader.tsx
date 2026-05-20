interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold text-fogWhite md:text-3xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-sm text-zinc-300 md:text-base">{description}</p> : null}
    </header>
  );
}
