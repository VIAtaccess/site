import { LOGO_SRC } from '../brand';

export function LaudoShowcase() {
  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-dark-border" id="showcase-laudo">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
              Fé Pública Técnica &amp; Evidência Probatória
            </span>
            <h2 className="font-headline-xl text-headline-xl text-white tracking-tight font-bold">
              O Laudo Técnico que sustenta a sua defesa em qualquer comitê regulatório
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Diferente de dashboards genéricos de plugins comerciais, o Laudo emitido pela{' '}
              <strong className="text-white font-semibold">t-access</strong> é um documento pericial formal, assinado
              por especialistas certificadas com mais de duas décadas em engenharia crítica e auditoria de sistemas.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Check
                title="Válido perante Ministério Público e Órgãos Reguladores"
                body="Estruturado nos moldes periciais para resposta a termos de ajustamento de conduta (TACs) e notificações administrativas."
              />
              <Check
                title="Auditoria Híbrida: Algoritmo VIA + Analistas com Deficiência"
                body="Combinação de asserção sintática de 100% do DOM com validação heurística de usabilidade com leitores de tela em situações do mundo real."
              />
              <Check
                title="Relatório Executivo Pronto para Conselhos de Administração"
                body="Traduz parâmetros complexos de código em métricas executivas de solvência, redução de risco e governança ESG."
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8 relative">
              <div className="flex items-center justify-between pb-4 border-b border-dark-border gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <img alt="t-access Logo Oficial" className="h-8 w-8 object-contain rounded-full shrink-0" src={LOGO_SRC} />
                  <div className="min-w-0">
                    <span className="font-headline-md text-[16px] text-white font-bold block">
                      Relatório Oficial de Conformidade Técnica #841-BR
                    </span>
                    <span className="block font-code-inline text-code-inline text-[11px] text-on-surface-variant">
                      Emitido por: t-access Soluções em Engenharia de Acessibilidade Ltda.
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-tertiary/15 text-tertiary font-code-inline text-[11px] font-semibold border border-tertiary/30 shrink-0">
                  Laudo Válido
                </span>
              </div>
              <div className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-dark-border text-left">
                <Fact label="Target Auditado" value="portal.bancario.com.br" valueClass="text-white" />
                <Fact label="Grau de Conformidade" value="99.8% (Aprovado Pleno)" valueClass="text-tertiary font-bold" />
                <Fact label="Normas de Referência" value="ABNT 17255 / WCAG 2.2" valueClass="text-white" />
              </div>
              <div className="py-5 flex flex-col gap-3">
                <span className="font-label-md text-label-md text-white font-semibold">Resumo Pericial Circunstanciado:</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "A infraestrutura digital avaliada foi submetida a varredura contínua via Validador VIA v3.8 em
                  integração CI/CD e a ensaios práticos assistivos conduzidos por peritos com deficiência visual e
                  motora. Não foram encontradas barreiras impeditivas à navegação ou transação monetária. Os
                  componentes atendem integralmente ao disposto nos Artigos 63 e seguintes da Lei 13.146/2015 e
                  critérios técnicos da ABNT NBR 17255."
                </p>
              </div>
              <div className="pt-4 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">fingerprint</span>
                  <div>
                    <span className="font-code-inline text-code-inline text-[11px] text-white block">
                      Assinatura Digital ICP-Brasil: 7A41...D89C
                    </span>
                    <span className="font-code-inline text-code-inline text-[10px] text-on-surface-variant">
                      Carimbo de Tempo Seguro (RFC 3161)
                    </span>
                  </div>
                </div>
                <a
                  className="px-4 py-2 rounded-lg bg-dark-slate border border-dark-border text-white font-label-sm text-label-sm hover:bg-dark-border transition-all inline-flex items-center gap-1.5"
                  href="#agendar-demonstracao"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Baixar Amostra de Laudo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">check_circle</span>
      <div>
        <span className="font-label-md text-label-md text-white font-semibold">{title}</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{body}</p>
      </div>
    </div>
  );
}

function Fact({ label, value, valueClass }: { label: string; value: string; valueClass: string }) {
  return (
    <div className="bg-surface-container-low p-3 rounded border border-dark-border">
      <span className="font-code-inline text-code-inline text-[10px] text-on-surface-variant uppercase">{label}</span>
      <span className={`font-code-inline text-code-inline text-[12px] block font-semibold truncate mt-1 ${valueClass}`}>
        {value}
      </span>
    </div>
  );
}
