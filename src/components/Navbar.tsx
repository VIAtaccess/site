import { useEffect, useState } from 'react';
import { LOGO_SRC } from '../brand';

const navItems = [
  { href: '#o-problema', label: 'Risco Regulatório' },
  { href: '#pilares-estrategicos', label: '3 Pilares Estratégicos' },
  { href: '#showcase-laudo', label: 'Laudo Pericial SHA-256' },
  { href: '#metodologia-qa', label: 'Metodologia & Rigor' },
  { href: '#dna-autoridade', label: 'Autoridade Fundadoras' },
];

function closeDrawer(setOpen: (v: boolean) => void) {
  setOpen(false);
  document.getElementById('mobile-menu-trigger')?.focus();
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) closeDrawer(setMobileOpen);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 min-h-[44px] inline-flex items-center justify-center focus:bg-brand-red focus:text-white font-label-md text-label-md focus:rounded-lg"
        href="#main-content"
      >
        Pular para o conteúdo principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F141C]/92 backdrop-blur-xl border-b border-dark-border">
        <div className="h-20 max-w-[1600px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <a
            className="flex items-center gap-3 min-h-[44px] px-2 py-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red rounded-lg shrink-0"
            href="#"
          >
            <img
              alt="t-access Logo Oficial"
              className="h-10 w-10 object-contain rounded-full border border-dark-border"
              src={LOGO_SRC}
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md tracking-tight text-white font-bold">t-access</span>
              <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider text-[11px] font-semibold leading-tight flex items-center gap-1">
                Validador VIA <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              </span>
            </div>
          </a>

          <nav aria-label="Navegação Principal" className="hidden xl:flex items-center gap-space-lg min-w-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-white transition-colors min-h-[44px] inline-flex items-center px-2 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red rounded-lg"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-md shrink-0">
            <a
              className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-brand-red text-white font-label-md text-label-md hover:bg-brand-red-hover transition-all font-semibold whitespace-nowrap"
              href="#agendar-demonstracao"
            >
              Diagnóstico Pericial
            </a>
            <div
              aria-label="Acesso corporativo seguro"
              className="hidden sm:flex w-10 h-10 rounded-full bg-dark-card border border-dark-border items-center justify-center"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">shield</span>
            </div>
            <button
              aria-controls="mobile-nav-drawer"
              aria-expanded={mobileOpen}
              aria-label="Abrir menu de navegação"
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-dark-slate focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red min-h-[44px] min-w-[44px]"
              id="mobile-menu-trigger"
              onClick={() => setMobileOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          aria-label="Menu de Navegação Principal"
          aria-modal="true"
          className="fixed inset-0 z-[200] bg-surface-container-lowest flex flex-col p-6"
          id="mobile-nav-drawer"
          role="dialog"
        >
          <div className="flex items-center justify-between pb-6 border-b border-dark-border">
            <div className="flex items-center gap-3">
              <img alt="t-access Logo Oficial" className="h-8 w-8 object-contain rounded-full" src={LOGO_SRC} />
              <span className="font-headline-md text-headline-md text-white font-bold">t-access</span>
            </div>
            <button
              aria-label="Fechar menu de navegação (Pressione Esc)"
              className="inline-flex items-center justify-center p-2 rounded-lg text-on-surface-variant hover:text-white hover:bg-dark-slate min-h-[44px] min-w-[44px]"
              id="mobile-nav-close"
              onClick={() => closeDrawer(setMobileOpen)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <nav aria-label="Navegação Mobile" className="flex flex-col gap-2 py-6 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="font-label-md text-label-md text-white hover:text-brand-red min-h-[44px] flex items-center px-3 py-2 rounded-lg hover:bg-dark-card"
                href={item.href}
                onClick={() => closeDrawer(setMobileOpen)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-dark-border">
            <a
              className="w-full inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg bg-brand-red text-white font-label-md text-label-md font-semibold hover:bg-brand-red-hover"
              href="#agendar-demonstracao"
              onClick={() => closeDrawer(setMobileOpen)}
            >
              Solicitar Diagnóstico Pericial
            </a>
          </div>
        </div>
      )}
    </>
  );
}
