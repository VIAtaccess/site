export function Footer() {
  return (
    <footer className="w-full bg-[#0B0F17] border-t border-[#1E293B] pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E293B]">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="t-access Logo Oficial"
                className="h-8 w-8 object-contain rounded-full"
                src="/logo.svg"
              />
              <span className="font-headline text-xl text-white font-bold">t-access</span>
            </div>
            <p className="font-body text-sm text-[#94A3B8] max-w-md leading-relaxed">
              Infraestrutura líder em governança digital, conformidade e engenharia de acessibilidade web.
              Desenvolvedora do ecossistema e validador proprietário VIA.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#131A26] border border-[#10B981] text-[#10B981] font-mono text-[11px]">
                WCAG 2.2 AAA
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#131A26] border border-[#25334A] text-white font-mono text-[11px]">
                ABNT NBR 17255
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#131A26] border border-[#25334A] text-white font-mono text-[11px]">
                ABNT NBR 17060
              </span>
            </div>
          </div>

          {/* Col 1 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-xs text-white mb-2 font-bold uppercase tracking-wider">
              Plataforma VIA
            </h2>
            <ul className="flex flex-col gap-2 font-body text-xs text-[#94A3B8]">
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#o-validador-via">
                  Validador VIA B2B
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#pipeline-cicd">
                  Inspeção Contínua CI/CD
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#metodologia-qa">
                  Metodologia &amp; QA Automatizado
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#o-problema">
                  Auditoria Heurística
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-xs text-white mb-2 font-bold uppercase tracking-wider">
              Serviços Especializados
            </h2>
            <ul className="flex flex-col gap-2 font-body text-xs text-[#94A3B8]">
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#agendar-demonstracao">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#agendar-demonstracao">
                  Capacitação Corporativa
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#metodologia-qa">
                  Testes Assistivos com Especialistas
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#dna-autoridade">
                  Certificação Institucional
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-xs text-white mb-2 font-bold uppercase tracking-wider">
              Governança &amp; ESG
            </h2>
            <ul className="flex flex-col gap-2 font-body text-xs text-[#94A3B8]">
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#o-problema">
                  Declaração de Acessibilidade
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#o-problema">
                  Conformidade Legal &amp; LGPD
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#inovacao-sentinela">
                  Impacto Social &amp; Diversidade
                </a>
              </li>
              <li>
                <a className="hover:text-[#38BDF8] transition-colors" href="#dna-autoridade">
                  Canal de Integridade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-[#94A3B8]">
          <p>© 2026 t-access Soluções em Acessibilidade Digital Ltda. Todos os direitos reservados. Validador VIA é uma marca registrada.</p>
          <div className="flex items-center gap-6">
            <a
              className="min-h-[48px] inline-flex items-center px-2 hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] rounded-lg"
              href="#"
            >
              Política de Privacidade
            </a>
            <a
              className="min-h-[48px] inline-flex items-center px-2 hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] rounded-lg"
              href="#"
            >
              Termos de Serviço
            </a>
            <a
              className="min-h-[48px] inline-flex items-center px-2 hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] rounded-lg"
              href="#"
            >
              Relatório de Transparência
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
