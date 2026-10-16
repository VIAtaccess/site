export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-dark-card via-dark-bg to-dark-bg py-20 md:py-28 border-b border-dark-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[840px] h-[400px] bg-brand-red/10 blur-[160px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 w-[420px] h-[360px] bg-dark-slate/60 blur-[130px] rounded-full"
      />
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary" />
            <span className="font-code-inline text-code-inline uppercase tracking-wider text-on-surface-variant text-[11px] font-semibold">
              Governança Regulatória • WCAG 2.2 • ABNT NBR 17255 • NBR 17060
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl md:text-display text-white tracking-tight font-bold max-w-4xl leading-tight">
            Blindagem jurídica definitiva contra TACs e passivos da Lei Brasileira de Inclusão.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-6 leading-relaxed">
            A <strong className="text-white font-semibold">t-access</strong> assegura conformidade pericial contínua
            para ecossistemas de missão crítica. Combinamos o validador automatizado{' '}
            <strong className="text-white font-semibold">VIA</strong> com auditoria humana especializada de QA,
            emitindo laudos técnicos rastreáveis com validade jurídica irrefutável para conselhos de administração
            e auditorias ESG.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-8">
            <a
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-lg bg-brand-red text-white font-label-md text-label-md hover:bg-brand-red-hover transition-all font-semibold"
              href="#agendar-demonstracao"
            >
              <span>Solicitar Diagnóstico Pericial Preliminar</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-lg bg-dark-card border border-dark-border text-white font-label-md text-label-md hover:bg-dark-slate transition-all"
              href="#showcase-laudo"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                verified
              </span>
              <span>Examinar Modelo de Laudo Pericial</span>
            </a>
          </div>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 font-code-inline text-code-inline text-on-surface-variant text-[12px]">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[18px]">
                verified_user
              </span>
              <span>Laudos com Carimbo Criptográfico SHA-256</span>
            </div>
            <span aria-hidden="true" className="text-dark-border hidden sm:inline">
              •
            </span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[18px]">
                gavel
              </span>
              <span>Blindagem Reconhecida em Perícias Judiciais</span>
            </div>
            <span aria-hidden="true" className="text-dark-border hidden sm:inline">
              •
            </span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="material-symbols-outlined text-brand-red text-[18px]">
                block
              </span>
              <span>Zero Overlays ou Scripts Paliativos</span>
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-5xl mx-auto bg-dark-card border border-dark-border rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-5 border-b border-dark-border gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-dark-slate border border-dark-border flex items-center justify-center text-tertiary">
                <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                  task_alt
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-md text-[17px] text-white font-bold">
                    Certificado de Conformidade Pericial &amp; Laudo Técnico
                  </span>
                  <span className="px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-code-inline text-[11px] font-semibold border border-tertiary/30">
                    ATIVO
                  </span>
                </div>
                <p className="font-code-inline text-code-inline text-[11px] text-on-surface-variant">
                  Protocolo de Auditoria: TAC-MITIGATED-2025/BR-09142
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="block font-code-inline text-code-inline text-on-surface-variant text-[10px] uppercase">
                  Assinatura Digital
                </span>
                <span className="font-code-inline text-code-inline text-white font-semibold text-[11px]">
                  e-CPF ICP-Brasil Perito QA
                </span>
              </div>
              <span
                aria-hidden="true"
                className="w-8 h-8 rounded-full bg-dark-slate border border-dark-border flex items-center justify-center text-white"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-dark-border">
            <Metric label="Aderência NBR 17255" value="100.0%" valueClass="text-tertiary" hint="Zero não-conformidades" />
            <Metric label="WCAG 2.2 Level AA/AAA" value="99.8%" valueClass="text-white" hint="Auditado via DOM + QA Real" />
            <Metric label="Passivo Legal TAC Estimado" value="R$ 0,00" valueClass="text-tertiary" hint="Risco judicial neutralizado" />
            <Metric label="Pipeline DevSecOps" value="Bloqueante" valueClass="text-brand-red" hint="Quality Gate ativo na CI/CD" />
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-on-surface-variant text-[12px] font-code-inline gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-white font-semibold">Hash SHA-256:</span>
              <span className="text-on-surface-variant truncate max-w-xs sm:max-w-md">
                9b2f8a11e0e84b72c91834dfa3f6229b47e5b152d8e9c40384a921d
              </span>
            </div>
            <span className="text-tertiary flex items-center gap-1 font-semibold">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                lock
              </span>
              Auditável por Peritos Judiciais
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  valueClass,
  hint,
}: {
  label: string;
  value: string;
  valueClass: string;
  hint: string;
}) {
  return (
    <div className="bg-surface-container-low border border-dark-border p-3.5 rounded-lg flex flex-col text-left">
      <span className="font-code-inline text-code-inline text-[11px] text-on-surface-variant uppercase">{label}</span>
      <span className={`font-headline-lg text-headline-lg font-bold mt-1 ${valueClass}`}>{value}</span>
      <span className="font-body-sm text-[11px] text-on-surface-variant">{hint}</span>
    </div>
  );
}
