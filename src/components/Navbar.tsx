import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenScanModal: () => void;
  onToggleA11yMenu?: () => void;
}

export function Navbar({ onOpenScanModal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle escape key to close mobile nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Track active section for navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'o-problema',
        'simulador-risco',
        'o-validador-via',
        'pipeline-cicd',
        'metodologia-qa',
        'inovacao-sentinela',
        'dna-autoridade',
      ];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#o-problema', id: 'o-problema', num: '01.', label: 'Risco & TAC' },
    { href: '#simulador-risco', id: 'simulador-risco', num: '02.', label: 'Simulador Passivo' },
    { href: '#o-validador-via', id: 'o-validador-via', num: '03.', label: 'Motor VIA CLI' },
    { href: '#pipeline-cicd', id: 'pipeline-cicd', num: '04.', label: 'Pipeline DevSecOps' },
    { href: '#metodologia-qa', id: 'metodologia-qa', num: '05.', label: 'QA Especialistas' },
    { href: '#inovacao-sentinela', id: 'inovacao-sentinela', num: '06.', label: 'Sentinela Edge AI' },
    { href: '#dna-autoridade', id: 'dna-autoridade', num: '07.', label: 'DNA de QA' },
  ];

  return (
    <>
      {/* WCAG Skip Link */}
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 min-h-[48px] inline-flex items-center justify-center focus:bg-[#EB4A4C] focus:text-white font-semibold rounded-lg focus:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17]"
        href="#main-content"
      >
        Pular para o conteúdo principal (WCAG Skip Link)
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/90 backdrop-blur-xl border-b border-[#1E293B]">
        <div className="h-20 max-w-[1600px] mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Zone */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              className="flex items-center gap-3 min-h-[48px] px-2 py-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] rounded-lg"
              href="#"
            >
              <img
                alt="t-access Logo Oficial"
                className="h-10 w-10 object-contain rounded-full"
                src="/logo.svg"
              />
              <div className="flex flex-col">
                <span className="font-headline text-xl tracking-tight text-white font-bold leading-tight">
                  t-access
                </span>
                <span className="font-mono text-[11px] text-[#38BDF8] uppercase tracking-wider font-semibold leading-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  devsecops &amp; qa
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Zone */}
          <nav aria-label="Navegação Principal" className="hidden 2xl:flex items-center gap-1 min-w-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={`font-mono text-[12px] min-h-[48px] inline-flex items-center px-2.5 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] ${
                  activeSection === item.id
                    ? 'text-white bg-[#131A26] font-semibold border-b-2 border-[#38BDF8]'
                    : 'text-[#94A3B8] hover:text-[#38BDF8]'
                }`}
                href={item.href}
              >
                <span className="text-[#64748B] mr-1">{item.num}</span> {item.label}
              </a>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenScanModal}
              className="hidden sm:inline-flex items-center justify-center min-h-[48px] px-4 py-2.5 rounded-lg bg-[#EB4A4C] text-white hover:bg-[#D83A3C] transition-all shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] font-semibold cursor-pointer font-mono text-[13px] tracking-wide whitespace-nowrap"
            >
              $ t-access --scan-b2b
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              aria-controls="mobile-nav-drawer"
              aria-expanded={mobileOpen}
              aria-label="Abrir menu de navegação"
              className="2xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17] min-h-[48px] min-w-[48px] cursor-pointer"
              id="mobile-menu-trigger"
              onClick={() => setMobileOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Dialog */}
      {mobileOpen && (
        <div
          aria-label="Menu de Navegação Principal"
          className="fixed inset-0 z-[200] bg-[#0B0F17] flex flex-col p-6"
          id="mobile-nav-drawer"
          role="dialog"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#1E293B]">
            <div className="flex items-center gap-3">
              <img
                alt="t-access Logo Oficial"
                className="h-8 w-8 object-contain rounded-full"
                src="/logo.svg"
              />
              <span className="font-headline text-lg text-white font-bold">t-access DevSecOps</span>
            </div>
            <button
              aria-label="Fechar menu de navegação (Pressione Esc)"
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] min-h-[48px] min-w-[48px] cursor-pointer"
              id="mobile-nav-close"
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          <nav aria-label="Navegação Mobile" className="flex flex-col gap-2 py-6 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="font-mono text-sm text-white hover:text-[#38BDF8] min-h-[48px] flex items-center px-3 py-2 rounded-lg hover:bg-[#131A26] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8]"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-[#64748B] mr-2">{item.num}</span> {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#1E293B]">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg bg-[#EB4A4C] text-white font-mono text-sm font-semibold hover:bg-[#D83A3C] transition-all cursor-pointer"
              onClick={() => {
                setMobileOpen(false);
                onOpenScanModal();
              }}
            >
              Executar Diagnóstico VIA
            </button>
          </div>
        </div>
      )}
    </>
  );
}
