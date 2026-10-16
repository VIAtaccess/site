const rows = [
  {
    criterion: 'Cobertura Real de Acessibilidade',
    generic: '30% a 40% (Apenas tags estáticas simples)',
    genericClass: 'text-on-surface-variant',
    via: 'Cobertura Plena (Automação VIA + QA com Deficiência)',
  },
  {
    criterion: 'Integração a Pipelines CI/CD',
    generic: 'Inexistente ou apenas dashboards pós-deploy',
    genericClass: 'text-on-surface-variant',
    via: 'CLI nativa, blockers em Pull Requests e Quality Gates',
  },
  {
    criterion: 'Validade Pericial em TACs / Judiciário',
    generic: 'Reprovada em juízo (considerada paliativa)',
    genericClass: 'text-brand-red font-semibold',
    via: 'Laudo emitido por especialistas com fé técnica SHA-256',
  },
  {
    criterion: 'Segurança e Privacidade de Dados',
    generic: 'Scripts de terceiros injetados nos clientes',
    genericClass: 'text-on-surface-variant',
    via: 'Zero scripts invasivos, em conformidade estrita com a LGPD',
  },
];

export function Methodology() {
  return (
    <section className="w-full py-24 bg-dark-bg border-b border-dark-border" id="metodologia-qa">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
            A Engenharia Híbrida em Ação
          </span>
          <h2 className="font-headline-xl text-headline-xl text-white mt-2 tracking-tight font-bold">
            Por que scanners automáticos convencionais falham sem a inspeção humana especializada
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            Scanners puramente automáticos conseguem auditar apenas cerca de 30% a 40% das diretrizes de
            acessibilidade. A t-access preenche a lacuna crítica unindo o VIA a testes práticos conduzidos por
            peritos com deficiência.
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse bg-dark-card border border-dark-border rounded-xl overflow-hidden min-w-[720px]">
            <thead>
              <tr className="bg-dark-slate border-b border-dark-border">
                <th className="py-4 px-6 font-label-md text-label-md text-white font-semibold" scope="col">
                  Critério de Auditoria
                </th>
                <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant" scope="col">
                  Soluções Genéricas / Overlays
                </th>
                <th
                  className="py-4 px-6 font-label-md text-label-md text-white bg-brand-red/15 border-l border-brand-red/40 font-bold"
                  scope="col"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-red" /> t-access + VIA Engine
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border font-body-md text-body-md">
              {rows.map((row) => (
                <tr key={row.criterion} className="hover:bg-dark-slate/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white">{row.criterion}</td>
                  <td className={`py-4 px-6 ${row.genericClass}`}>{row.generic}</td>
                  <td className="py-4 px-6 text-white font-medium bg-brand-red/5 border-l border-brand-red/30">
                    <span className="inline-flex items-center gap-2">
                      <span className="text-tertiary font-bold">✓</span> {row.via}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
