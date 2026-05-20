interface SidebarProps {
  sections: Array<{ id: string; label: string }>;
}

export function Sidebar({ sections }: SidebarProps) {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-56 shrink-0 overflow-auto rounded-2xl glass p-4 xl:block">
      <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Navegación</p>
      <ul className="mt-4 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-fogWhite">
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
