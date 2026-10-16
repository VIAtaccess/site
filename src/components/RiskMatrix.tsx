export function RiskMatrix() {
  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-dark-border" id="o-problema">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-space-xl">
          <div className="max-w-3xl">
            <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
              Análise de Impacto Financeiro e Jurídico
            </span>
            <h2 className="font-headline-xl text-headline-xl text-white mt-2 tracking-tight font-bold">
              Matriz de Risco: Exposição à LBI vs. Governança Contínua com o VIA
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              Tratar acessibilidade como 'débito técnico secundário' expõe a organização a multas cumulativas por
              dia de descumprimento, perda de licitações públicas e anulação de ratings ESG institucionais.
            </p>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-white font-code-inline text-code-inline text-[12px] flex items-center gap-2">
              <span className="material-symbols-outlined text-brand-red text-[18px]">balance</span>
              Cálculo de Exposição Legal LBI nº 13.146/15
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <article className="bg-dark-card border border-brand-red/50 rounded-xl p-space-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-bl-full pointer-events-none" />
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-3 border-b border-dark-border gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-red" />
                  <span className="font-code-inline text-code-inline text-brand-red font-semibold text-[13px] uppercase">
                    Cenário de Inação / Soluções Paliativas (Overlays)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-red/15 text-brand-red font-code-inline text-[11px] font-bold shrink-0">
                  Alto Risco
                </span>
              </div>
              <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
                <RiskItem
                  icon="report_problem"
                  iconClass="text-brand-red"
                  title="Multas Diárias e TACs do Ministério Público:"
                  body="Penalidades previstas no Artigo 63 da LBI e ABNT NBR 17255 que podem atingir dezenas de milhares de reais por dia de descumprimento, além de exposição desfavorável de marca na imprensa."
                />
                <RiskItem
                  icon="warning"
                  iconClass="text-brand-red"
                  title="Invalidação em Perícias Judiciais por Uso de Overlays:"
                  body="Widgets flutuantes de terceiros não corrigem a árvore DOM nem satisfazem critérios periciais em juízo. Tribunais brasileiros e internacionais já consideram plugins genéricos insuficientes para afastar culpa corporativa."
                />
                <RiskItem
                  icon="money_off"
                  iconClass="text-brand-red"
                  title="Bloqueio em RFPs e Desqualificação em Ratings ESG:"
                  body="Grandes companhias e fundos institucionais exigem laudos formais de fornecedores. A falta de comprovação técnica bloqueia contratos corporativos multimilionários."
                />
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-dark-border bg-surface-container-low p-3.5 rounded-lg flex items-center justify-between text-body-sm gap-3">
              <span className="font-code-inline text-brand-red font-semibold">Custo Estimado do Passivo:</span>
              <span className="font-headline-md text-white font-bold">R$ 500k a R$ 3M+ / ano</span>
            </div>
          </article>

          <article className="bg-dark-card border border-tertiary/50 rounded-xl p-space-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-bl-full pointer-events-none" />
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-3 border-b border-dark-border gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-tertiary" />
                  <span className="font-code-inline text-code-inline text-tertiary font-semibold text-[13px] uppercase">
                    Blindagem Ativa: Ecossistema t-access + VIA
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-code-inline text-[11px] font-bold shrink-0">
                  Conformidade Plena
                </span>
              </div>
              <ul className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant">
                <RiskItem
                  icon="verified"
                  iconClass="text-tertiary"
                  title="Prevenção Direta no Commit (Pipeline CI/CD):"
                  body="O VIA atua como Quality Gate no GitHub, GitLab ou Jenkins. Nenhuma alteração de interface com regressão de acessibilidade passa para produção, eliminando retrabalho de refatoração em 70%."
                />
                <RiskItem
                  icon="draw"
                  iconClass="text-tertiary"
                  title="Laudo Pericial com Fé Técnica & Assinatura SHA-256:"
                  body="Documento oficial estruturado por especialistas certificadas, pronto para juntada em autos judiciais, comitês de auditoria externa e relatórios públicos de sustentabilidade (GRI / Pacto Global)."
                />
                <RiskItem
                  icon="groups"
                  iconClass="text-tertiary"
                  title="Inspeção Contextual por Especialistas de QA com Deficiência:"
                  body="Além do scanner headless de alta performance, times reais de QA com deficiência testam fluxos com leitores de tela profissionais (NVDA, JAWS, VoiceOver), assegurando usabilidade fática."
                />
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-dark-border bg-surface-container-low p-3.5 rounded-lg flex items-center justify-between text-body-sm gap-3">
              <span className="font-code-inline text-tertiary font-semibold">Retorno em Mitigação de Risco:</span>
              <span className="font-headline-md text-tertiary font-bold">&gt; 12x ROI Direto em Prevenção</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function RiskItem({
  icon,
  iconClass,
  title,
  body,
}: {
  icon: string;
  iconClass: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className={`material-symbols-outlined ${iconClass} text-[20px] shrink-0 mt-0.5`}>{icon}</span>
      <div>
        <strong className="text-white">{title}</strong>
        <p className="text-body-sm text-on-surface-variant mt-0.5">{body}</p>
      </div>
    </li>
  );
}
