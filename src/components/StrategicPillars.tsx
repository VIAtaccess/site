const pillars = [
  {
    code: 'PILAR 01',
    icon: 'terminal',
    iconClass: 'text-brand-red',
    codeClass: 'text-brand-red',
    hover: 'hover:border-brand-red',
    title: 'Validador VIA em CI/CD',
    body: 'Motor headless que roda testes de acessibilidade a cada commit e Pull Request. Emula navegação de navegadores reais, detecta falhas na árvore DOM dinâmica de SPAs e barra regressões antes que cheguem a produção.',
    scopeLabel: 'Escopo Técnico:',
    scopeClass: 'text-brand-red',
    scope: 'CLI, GitHub Actions, GitLab CI, AST Checker e Quality Gates personalizáveis.',
    audience: 'Para: Squads & Engenharia',
    audienceIcon: 'code',
  },
  {
    code: 'PILAR 02',
    icon: 'account_balance',
    iconClass: 'text-tertiary',
    codeClass: 'text-tertiary',
    hover: 'hover:border-tertiary',
    title: 'Governança ESG & Consultoria',
    body: 'Suporte consultivo de alta autoridade para conselhos executivos e diretorias jurídicas. Elaboração de Declarações Públicas de Acessibilidade, alinhamento aos critérios da CVM/ESG e emissão de laudos técnicos assinados.',
    scopeLabel: 'Entregáveis:',
    scopeClass: 'text-tertiary',
    scope: 'Laudos de compliance, políticas de procurement de TI e workshops executivos.',
    audience: 'Para: Legal, Compliance & ESG',
    audienceIcon: 'verified_user',
  },
  {
    code: 'PILAR 03',
    icon: 'radar',
    iconClass: 'text-white',
    codeClass: 'text-white',
    hover: 'hover:border-white',
    title: 'Sentinela Inclusivo (Espaços Físicos)',
    body: 'Inovação patenteada que leva a acessibilidade além das telas. Sistema de Visão Computacional e Edge AI em tempo real que monitora barreiras físicas, rotas táteis desobstruídas e zonas de sobrecarga sensorial para neurodivergentes.',
    scopeLabel: 'Aplicação:',
    scopeClass: 'text-white',
    scope: 'Aeroportos, agências bancárias, hospitais, shoppings e prédios corporativos.',
    audience: 'Para: Infraestrutura & Facilities',
    audienceIcon: 'domain',
  },
];

export function StrategicPillars() {
  return (
    <section className="w-full py-24 bg-dark-bg border-b border-dark-border" id="pilares-estrategicos">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
            Abordagem Integrada de Ponta a Ponta
          </span>
          <h2 className="font-headline-xl text-headline-xl text-white mt-2 tracking-tight font-bold">
            Três pilares estratégicos para proteção integral da sua organização
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            Uma estrutura unificada que resolve o ciclo completo: ferramentas de automação para engenharia,
            sustentação de governança corporativa e tecnologia para espaços físicos de atendimento ao público.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pillars.map((pilar) => (
            <article
              key={pilar.code}
              className={`bg-dark-card border border-dark-border p-space-lg rounded-xl flex flex-col justify-between transition-all ${pilar.hover}`}
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-dark-slate border border-dark-border flex items-center justify-center">
                    <span aria-hidden="true" className={`material-symbols-outlined text-[28px] ${pilar.iconClass}`}>
                      {pilar.icon}
                    </span>
                  </div>
                  <span className={`font-code-inline text-code-inline font-semibold text-[12px] ${pilar.codeClass}`}>
                    {pilar.code}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-white font-bold">{pilar.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">{pilar.body}</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded border border-dark-border font-code-inline text-code-inline text-[11px] text-on-surface-variant">
                  <span className={`${pilar.scopeClass} font-semibold`}>{pilar.scopeLabel}</span> {pilar.scope}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-dark-border flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>{pilar.audience}</span>
                <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[18px]">
                  {pilar.audienceIcon}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
