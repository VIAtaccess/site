export function FoundersAuthority() {
  return (
    <section className="w-full py-24 bg-surface-container-low border-b border-dark-border" id="dna-autoridade">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
            Autoridade &amp; Liderança Técnica
          </span>
          <h2 className="font-headline-xl text-headline-xl text-white mt-2 tracking-tight font-bold">
            Liderada por quem construiu a engenharia de qualidade de software no Brasil
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            A governança da t-access é sustentada por especialistas que lideraram testes de resiliência e esteiras
            de auditoria nos maiores ecossistemas bancários, de telecomunicações e de governo do país.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-xl">
          <article className="bg-dark-card border border-dark-border p-space-lg rounded-xl flex flex-col sm:flex-row gap-space-md items-start hover:border-brand-red transition-colors">
            <div className="w-16 h-16 rounded-xl bg-dark-slate border-2 border-brand-red flex items-center justify-center text-white shrink-0">
              <span aria-hidden="true" className="material-symbols-outlined text-[32px] text-brand-red">
                badge
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-headline-md text-headline-md text-white font-bold">CEO &amp; Co-Fundadora</h3>
                <span className="px-2 py-0.5 rounded bg-brand-red/15 text-brand-red font-code-inline text-[11px] font-semibold border border-brand-red/30">
                  20+ Anos de Carreira
                </span>
              </div>
              <span className="font-label-md text-label-md text-tertiary font-semibold">
                Gestão de Qualidade Corporativa, Blindagem Jurídica &amp; Governança ESG
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Pioneira na condução de programas de auditoria e conformidade em instituições financeiras nacionais.
                Responsável pela estratégia de mitigação de litígios e alinhamento com os novos dispositivos da ABNT
                NBR 17255 e jurisprudência dos tribunais superiores.
              </p>
            </div>
          </article>
          <article className="bg-dark-card border border-dark-border p-space-lg rounded-xl flex flex-col sm:flex-row gap-space-md items-start hover:border-tertiary transition-colors">
            <div className="w-16 h-16 rounded-xl bg-dark-slate border-2 border-tertiary flex items-center justify-center text-white shrink-0">
              <span aria-hidden="true" className="material-symbols-outlined text-[32px] text-tertiary">
                memory
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-headline-md text-headline-md text-white font-bold">CTO &amp; Co-Fundadora</h3>
                <span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-code-inline text-[11px] font-semibold border border-tertiary/30">
                  20+ Anos de Carreira
                </span>
              </div>
              <span className="font-label-md text-label-md text-tertiary font-semibold">
                Arquiteta do Validador VIA, DevSecOps &amp; Visão Computacional
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Mais de duas décadas chefiando engenharia de testes em sistemas de alta criticidade e transações de
                grande volume. Idealizadora do motor automatizado VIA e dos algoritmos de Edge AI do Sentinela
                Inclusivo para ambientes físicos.
              </p>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
          <Stat value="20+" valueClass="text-brand-red" title="Anos de Experiência" hint="Na vanguarda do QA no Brasil" />
          <Stat value="100%" valueClass="text-tertiary" title="Fé Técnica Pericial" hint="Laudos assinados digitalmente" />
          <Stat value="0%" valueClass="text-white" title="Overlays Paliativos" hint="Código limpo e acessível nativo" />
          <Stat value="10k+" valueClass="text-brand-red" title="Componentes Auditados" hint="Em esteiras de grandes bancos" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  valueClass,
  title,
  hint,
}: {
  value: string;
  valueClass: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="bg-dark-card border border-dark-border p-5 rounded-lg text-center">
      <span className={`font-display text-display font-bold ${valueClass}`}>{value}</span>
      <span className="block font-label-md text-white font-semibold mt-1">{title}</span>
      <span className="font-body-sm text-[12px] text-on-surface-variant">{hint}</span>
    </div>
  );
}
