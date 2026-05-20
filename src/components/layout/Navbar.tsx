interface NavbarProps {
  sections: Array<{ id: string; label: string }>;
}

export function Navbar({ sections }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-smokeBlack/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-umoRed shadow-redGlow" />
          <span className="text-sm font-semibold tracking-wide">UMO Growth Hub</span>
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-xs uppercase tracking-wide text-zinc-300 transition hover:text-fogWhite">
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
