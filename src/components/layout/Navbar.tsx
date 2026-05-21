import { Menu, PanelLeft, PanelLeftClose } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  navItems: Array<{ to: string; label: string }>;
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
  sidebarVisible: boolean;
}

export function Navbar({ navItems, onToggleSidebar, onToggleMobileSidebar, sidebarVisible }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-smokeBlack/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="rounded-lg border border-white/15 bg-white/5 p-2 text-zinc-200 lg:hidden"
            aria-label="Abrir navegación"
          >
            <Menu size={16} />
          </button>
          <button
            type="button"
            onClick={onToggleSidebar}
            className="hidden rounded-lg border border-white/15 bg-white/5 p-2 text-zinc-200 lg:inline-flex"
            aria-label="Mostrar u ocultar barra lateral"
          >
            {sidebarVisible ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
          </button>
          <div className="h-3 w-3 rounded-full bg-umoRed shadow-redGlow" />
          <span className="text-sm font-semibold tracking-wide text-fogWhite">UMO Growth Hub</span>
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.slice(0, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-1 text-xs uppercase tracking-wide transition ${
                  isActive ? 'bg-umoRed/25 text-red-100' : 'text-zinc-300 hover:bg-white/10 hover:text-fogWhite'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
