import { NavLink } from 'react-router-dom';

interface SidebarProps {
  navItems: Array<{ to: string; label: string; hint?: string }>;
  onNavigate?: () => void;
}

export function Sidebar({ navItems, onNavigate }: SidebarProps) {
  return (
    <aside className="h-full rounded-2xl glass p-4 shadow-glow">
      <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Navegación</p>
      <ul className="mt-4 space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 transition ${
                  isActive ? 'bg-umoRed/20 text-red-100' : 'text-zinc-300 hover:bg-white/10 hover:text-fogWhite'
                }`
              }
            >
              <p className="text-sm font-medium">{item.label}</p>
              {item.hint ? <p className="mt-1 text-xs text-zinc-400">{item.hint}</p> : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
