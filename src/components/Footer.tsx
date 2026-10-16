import { LOGO_SRC } from '../brand';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-dark-border pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-12 border-b border-dark-border">
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-3 mb-2">
              <img alt="t-access Logo Oficial" className="h-8 w-8 object-contain rounded-full" src={LOGO_SRC} />
              <span className="font-headline-md text-headline-md text-white font-bold">t-access</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Autoridade nacional em governança digital, conformidade pericial e engenharia de acessibilidade.
              Desenvolvedora do ecossistema e validador contínuo VIA.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-dark-card border border-tertiary text-tertiary font-code-inline text-code-inline text-[11px]">
                WCAG 2.2 AAA
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-dark-card border border-dark-border text-white font-code-inline text-code-inline text-[11px]">
                ABNT NBR 17255
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-dark-card border border-dark-border text-white font-code-inline text-code-inline text-[11px]">
                ABNT NBR 17060
              </span>
            </div>
          </div>
          <FooterCol
            title="Soluções VIA"
            links={[
              ['#pilares-estrategicos', 'Validador VIA CI/CD'],
              ['#pilares-estrategicos', 'Inspeção Contínua Headless'],
              ['#showcase-laudo', 'Auditoria Pericial Especializada'],
              ['#pilares-estrategicos', 'Sentinela Inclusivo (Físico)'],
            ]}
          />
          <FooterCol
            title="Governança & Compliance"
            links={[
              ['#showcase-laudo', 'Laudo Técnico Pericial'],
              ['#o-problema', 'Mitigação de TACs e Riscos LBI'],
              ['#metodologia-qa', 'Treinamento Executivo & Squads'],
              ['#dna-autoridade', 'Auditoria ESG - Pilar Social'],
            ]}
          />
          <FooterCol
            title="Institucional"
            links={[
              ['#dna-autoridade', 'Sobre as Fundadoras'],
              ['#o-problema', 'Declaração de Acessibilidade'],
              ['#agendar-demonstracao', 'Canal de Governança e Ética'],
              ['#agendar-demonstracao', 'Políticas de Segurança e LGPD'],
            ]}
          />
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>
            © 2026 t-access Soluções em Acessibilidade Digital Ltda. Todos os direitos reservados. VIA® é uma marca
            registrada.
          </p>
          <div className="flex items-center gap-6">
            <a className="min-h-[44px] inline-flex items-center px-2 hover:text-brand-red transition-colors rounded-lg" href="#">
              Privacidade &amp; Termos
            </a>
            <a className="min-h-[44px] inline-flex items-center px-2 hover:text-brand-red transition-colors rounded-lg" href="#">
              Segurança da Informação
            </a>
            <a className="min-h-[44px] inline-flex items-center px-2 hover:text-brand-red transition-colors rounded-lg" href="#agendar-demonstracao">
              Fale com Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-space-xs">
      <h2 className="font-label-md text-label-md text-white mb-2 font-bold">{title}</h2>
      <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
        {links.map(([href, label]) => (
          <li key={label}>
            <a className="hover:text-brand-red transition-colors" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
