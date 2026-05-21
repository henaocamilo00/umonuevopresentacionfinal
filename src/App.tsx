import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { CompanyProductPage } from './pages/CompanyProductPage';
import { ComparativeEnvironmentsPage } from './pages/ComparativeEnvironmentsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { EconomicPage } from './pages/EconomicPage';
import { HomePage } from './pages/HomePage';
import { IndicatorsPage } from './pages/IndicatorsPage';
import { MarketStatesPage } from './pages/MarketStatesPage';
import { StrategyPage } from './pages/StrategyPage';
import { ViabilityPage } from './pages/ViabilityPage';

const navItems = [
  {
    to: '/',
    label: 'Inicio',
    hint: 'Contexto ampliado, resumen y mapa del proyecto.'
  },
  {
    to: '/empresa-producto',
    label: 'Empresa y Producto',
    hint: 'Capacidades de UMO y ficha del producto objetivo.'
  },
  {
    to: '/mercado-estados',
    label: 'Mercado y Estados',
    hint: 'Oportunidades, DOFA y comparación Iowa/Nebraska.'
  },
  {
    to: '/viabilidad',
    label: 'Viabilidad',
    hint: 'Lectura estratégica de entrada internacional.'
  },
  {
    to: '/entorno-economico',
    label: 'Entorno Económico',
    hint: 'Series históricas y tendencias clave del mercado.'
  },
  {
    to: '/entornos-comparativos',
    label: 'Entornos 2-6',
    hint: 'Comparativos social, tecnológico, legal, comercio e inversión.'
  },
  {
    to: '/estrategia',
    label: 'Estrategia',
    hint: 'Ruta de ejecución, sostenibilidad y cierre estratégico.'
  },
  {
    to: '/indicadores',
    label: 'Indicadores',
    hint: 'KPIs con filtros y vista analítica.'
  },
  {
    to: '/documentos',
    label: 'Documentos',
    hint: 'Biblioteca y actualizaciones del proyecto.'
  }
];

function App() {
  const location = useLocation();
  const [desktopSidebarVisible, setDesktopSidebarVisible] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location.pathname]);

  const activeItem = useMemo(
    () => navItems.find((item) => item.to === location.pathname) ?? navItems[0],
    [location.pathname]
  );

  return (
    <div className="min-h-screen text-fogWhite">
      <Navbar
        navItems={navItems}
        onToggleSidebar={() => setDesktopSidebarVisible((prev) => !prev)}
        onToggleMobileSidebar={() => setMobileSidebarOpen(true)}
        sidebarVisible={desktopSidebarVisible}
      />

      <div className="mx-auto flex max-w-[1500px] gap-6 px-4 py-6 md:px-6">
        {desktopSidebarVisible ? (
          <div className="sticky top-20 hidden h-[calc(100vh-6rem)] w-72 shrink-0 overflow-auto lg:block">
            <Sidebar navItems={navItems} />
          </div>
        ) : null}

        <main className="min-w-0 flex-1">
          <article className="mb-5 rounded-2xl border border-white/10 bg-charcoal/40 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-metallicGray">Vista activa</p>
            <h1 className="mt-2 text-2xl font-semibold text-fogWhite">{activeItem.label}</h1>
            <p className="mt-1 text-sm text-zinc-300">{activeItem.hint}</p>
          </article>

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/empresa-producto" element={<CompanyProductPage />} />
                <Route path="/mercado-estados" element={<MarketStatesPage />} />
                <Route path="/viabilidad" element={<ViabilityPage />} />
                <Route path="/entorno-economico" element={<EconomicPage />} />
                <Route path="/entornos-comparativos" element={<ComparativeEnvironmentsPage />} />
                <Route path="/estrategia" element={<StrategyPage />} />
                <Route path="/indicadores" element={<IndicatorsPage />} />
                <Route path="/documentos" element={<DocumentsPage />} />

                <Route path="/empresa" element={<Navigate to="/empresa-producto" replace />} />
                <Route path="/producto" element={<Navigate to="/empresa-producto" replace />} />
                <Route path="/mercado" element={<Navigate to="/mercado-estados" replace />} />
                <Route path="/estados" element={<Navigate to="/mercado-estados" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          <Footer />
        </main>
      </div>

      <div className={`fixed inset-0 z-50 lg:hidden ${mobileSidebarOpen ? '' : 'pointer-events-none'}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition ${mobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Cerrar navegación"
        />

        <div
          className={`absolute left-0 top-0 h-full w-[85vw] max-w-sm border-r border-white/15 bg-smokeBlack/95 p-4 backdrop-blur-xl transition-transform ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-fogWhite">Navegación</p>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="rounded-lg border border-white/15 bg-white/5 p-2 text-zinc-200"
              aria-label="Cerrar menú"
            >
              <X size={16} />
            </button>
          </div>
          <Sidebar navItems={navItems} onNavigate={() => setMobileSidebarOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
