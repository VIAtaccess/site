import { useState } from 'react';

export function RiskAgitation() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <section className="w-full py-20 bg-[#0D131F]" id="o-problema">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm text-[#EB4A4C] uppercase tracking-wider font-semibold">
              Vulnerabilidade Jurídica &amp; Governança
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mt-2 tracking-tight font-bold">
              O custo corporativo de tratar acessibilidade como cosmético ou ignorar a NBR 17255
            </h2>
            <p className="font-body text-base sm:text-lg text-[#94A3B8] mt-4 leading-relaxed">
              Acessibilidade não é opcional e não se resolve com plugins de sobreposição ("overlays"). O Ministério
              Público e auditorias ESG hoje realizam perícias técnicas profundas no código-fonte das aplicações.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLegalModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#131A26] border border-[#25334A] text-xs font-mono text-[#38BDF8] hover:bg-[#182132] transition-colors cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span>Ver Base Jurídica (LBI &amp; NBR)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Passivo Jurídico */}
          <article className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-[#EB4A4C] transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#EB4A4C]/15 border border-[#EB4A4C]/30 flex items-center justify-center text-[#EB4A4C]">
                <span aria-hidden="true" className="material-symbols-outlined text-[28px]">
                  gavel
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-[#EB4A4C] font-semibold uppercase">
                  Exposição a TAC e Litígio
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                  Passivo Jurídico &amp; Multas da LBI
                </h3>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  Notificações do Ministério Público e TACs têm como base a <strong>ABNT NBR 17255</strong> e a Lei nº
                  13.146/15 (LBI, Art. 63). Cada elemento inacessível no checkout ou autenticação serve como prova
                  técnica material em juízo.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#EB4A4C] font-medium">
              <span>Risco: Multas diárias e bloqueio judicial</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                warning
              </span>
            </div>
          </article>

          {/* Card 2: A armadilha dos Overlays */}
          <article className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-[#FBBF24] transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#FBBF24]/15 border border-[#FBBF24]/30 flex items-center justify-center text-[#FBBF24]">
                <span aria-hidden="true" className="material-symbols-outlined text-[28px]">
                  code_off
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-[#FBBF24] font-semibold uppercase">
                  Falso Compliance
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                  A Falácia dos Plugins Overlays
                </h3>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  Widgets flutuantes de acessibilidade não corrigem a árvore DOM subjacente, injetam vulnerabilidades
                  de scripts terceiros, quebram leitores de tela reais e são rejeitados de imediato em perícias forenses
                  judiciais e auditorias independentes.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#FBBF24]">
              <span>Reprovação sumária em auditorias técnicas</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                lock_open
              </span>
            </div>
          </article>

          {/* Card 3: ESG e Perda de RFPs */}
          <article className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl shadow-md flex flex-col justify-between hover:border-[#10B981] transition-all group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                <span aria-hidden="true" className="material-symbols-outlined text-[28px]">
                  query_stats
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-[#10B981] font-semibold uppercase">
                  Barreira Comercial
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                  Bloqueio em RFPs e Ratings ESG
                </h3>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                  Contratos com grandes multinacionais e órgãos governamentais agora exigem laudos comprobatórios WCAG
                  2.2 AAA. Quem não audita código perde licitações, sofre rebaixamento de índice ESG e veto em due
                  diligence de M&amp;A.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#10B981]">
              <span>Impacto: Desclassificação em editais B2B</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
                trending_down
              </span>
            </div>
          </article>
        </div>
      </div>

      {/* Legal Reference Modal */}
      {legalModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLegalModalOpen(false)}
        >
          <div
            className="bg-[#131A26] border border-[#25334A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#EB4A4C] text-[24px]">gavel</span>
                <div>
                  <h3 className="font-headline text-xl text-white font-bold">
                    Quadro Regulatório &amp; Fundamentação Legal
                  </h3>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    Legislação Brasileira e Normas Técnicas Oficiais
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="p-1 rounded text-[#94A3B8] hover:text-white hover:bg-[#1E293B] cursor-pointer"
                aria-label="Fechar janela"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs font-body text-[#94A3B8] max-h-[60vh] overflow-y-auto pr-2">
              <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B]">
                <span className="font-mono font-bold text-white block mb-1">
                  1. Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência - LBI), Artigo 63:
                </span>
                <p className="leading-relaxed">
                  "É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou
                  representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência,
                  garantindo-se-lhe pleno acesso às informações disponíveis, conforme as melhores práticas e
                  diretrizes de acessibilidade adotadas internacionalmente."
                </p>
              </div>

              <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B]">
                <span className="font-mono font-bold text-white block mb-1">
                  2. ABNT NBR 17255:2024 (Acessibilidade na Web):
                </span>
                <p className="leading-relaxed">
                  Fixa os requisitos arquiteturais e algorítmicos para aplicações digitais no Brasil, incorporando
                  critérios atualizados da WCAG 2.2 (critérios de alvo de toque mínimo de 44x44px, foco não
                  obscurecido por modais flutuantes e prevenção de autenticação cognitiva).
                </p>
              </div>

              <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B]">
                <span className="font-mono font-bold text-white block mb-1">
                  3. Precedentes do Ministério Público Federal e Termos de Ajustamento de Conduta (TAC):
                </span>
                <p className="leading-relaxed">
                  Perícias do MPF consideram comprovada a materialidade de dano coletivo quando serviços essenciais
                  (checkout, pagamento, agendamento de consultas e emissão de extratos) não suportam leitores de tela
                  nativos como NVDA e JAWS de forma independente.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E293B] flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#EB4A4C] text-white hover:bg-[#D83A3C] transition-colors font-mono text-xs font-bold cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
