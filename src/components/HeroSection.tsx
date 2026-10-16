import { useState } from 'react';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroSectionProps {
  onOpenScanModal: () => void;
}

export function HeroSection({ onOpenScanModal }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const cliSnippet = 'npx via-validator --repo git@github.com:corp/core-app.git --strict-nbr-17255';

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(cliSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0F17] py-16 md:py-24 border-b border-[#1E293B] tech-grid-pattern">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 -translate-x-1/2 w-[720px] h-[360px] bg-[#38BDF8]/10 blur-[150px] rounded-full"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-32 w-[520px] h-[360px] bg-[#EB4A4C]/15 blur-[160px] rounded-full"
      ></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#131A26] border border-[#25334A] shadow-sm">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#38BDF8] font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                DEVSECOPS PIPELINE READY • NBR 17255 • WCAG 2.2 AAA
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[3.25rem] text-white tracking-tight font-extrabold max-w-2xl leading-[1.12]">
              Acessibilidade como{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38BDF8] to-[#10B981]">
                Código Executável
              </span>{' '}
              e Quality Gate no CI/CD.
            </h1>

            <p className="font-body text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Esqueça widgets cosméticos e multas retroativas de TACs. O{' '}
              <strong className="text-white font-semibold">VIA</strong> compila asserções periciais de acessibilidade
              direto no pipeline de engenharia, intercepta quebras de navegação assistiva antes do commit e transforma
              conformidade em SLA contínuo.
            </p>

            {/* CLI Command Badge Box */}
            <div className="bg-[#131A26] border border-[#25334A] rounded-xl p-3 flex items-center justify-between gap-3 max-w-xl shadow-inner">
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap min-w-0 text-[#E2E8F0] font-mono text-xs sm:text-sm py-1">
                <span className="text-[#EB4A4C] font-bold select-none">$</span>
                <span className="text-[#38BDF8]">npx via-validator</span>
                <span className="text-white">--repo git@github.com:corp/core-app.git</span>
                <span className="text-[#10B981]">--strict-nbr-17255</span>
              </div>
              <button
                aria-label="Copiar comando de instalação do VIA"
                className="p-2 rounded hover:bg-[#1E293B] text-[#94A3B8] hover:text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] cursor-pointer relative"
                onClick={handleCopyCommand}
                title="Copiar comando"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied && (
                  <span className="absolute -top-7 right-0 bg-[#10B981] text-[#0B0F17] text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                    Copiado!
                  </span>
                )}
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenScanModal}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-lg bg-[#EB4A4C] text-white font-semibold hover:bg-[#D83A3C] transition-all shadow-lg shadow-[#EB4A4C]/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] cursor-pointer"
              >
                <span>Solicitar Auditoria do Repositório</span>
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                  terminal
                </span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-lg bg-[#182132] border border-[#25334A] text-white hover:bg-[#1E293B] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] font-medium"
                href="#simulador-risco"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[#38BDF8] text-[20px]">
                  calculate
                </span>
                <span>Simular Passivo de Risco</span>
              </a>
            </div>

            {/* Tech Specs Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Exit-code 1 para falha de acessibilidade
              </div>
              <span className="text-[#334155]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]"></span> Zero AST overhead em produção
              </div>
              <span className="text-[#334155]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EB4A4C]"></span> Laudo pericial com hash SHA-256
              </div>
            </div>
          </div>

          {/* Hero Right Column: Interactive Terminal CLI */}
          <div className="lg:col-span-6 relative">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
