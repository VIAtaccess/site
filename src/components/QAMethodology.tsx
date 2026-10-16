export function QAMethodology() {
  const comparisonRows = [
    {
      criterion: 'Cobertura Real de Falhas Críticas',
      generic: 'Superficial: limita-se a tags HTML estáticas (~35%)',
      taccess: '100% de cobertura (Automação VIA + Perícia Humana Especialista)',
      highlight: true,
    },
    {
      criterion: 'Tecnologias Assistivas Reais',
      generic: 'Não simula fluxo de navegação real com leitores de tela',
      taccess: 'Testes com NVDA, JAWS e VoiceOver por pessoas cegas usuárias nativas',
      highlight: true,
    },
    {
      criterion: 'Injeção de Scripts (Overlays)',
      generic: 'Sim (painéis externos invasivos que ferem segurança e LGPD)',
      isGenericDanger: true,
      taccess: 'Zero scripts invasivos. Correção profunda no repositório',
      highlight: true,
    },
    {
      criterion: 'Validade Pericial em Notificações',
      generic: 'Logs genéricos desconsiderados por peritos judiciais',
      taccess: 'Laudo emitido por especialistas com mais de 20 anos de experiência em QA',
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-24 bg-[#0D131F]" id="metodologia-qa">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs sm:text-sm text-[#EB4A4C] uppercase tracking-wider font-semibold">
            Engenharia Híbrida de Precisão
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mt-2 tracking-tight font-bold">
            A convergência entre algoritmos no CI/CD e auditoria manual pericial
          </h2>
          <p className="font-body text-base text-[#94A3B8] mt-4 leading-relaxed">
            Softwares automáticos detectam cerca de 35% das falhas contextuais. A t-access alia a velocidade estrita
            do validador VIA a testes práticos conduzidos por engenheiros e especialistas de QA com deficiência.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse bg-[#131A26] border border-[#25334A] rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#182132] border-b border-[#25334A]">
                <th className="py-4 px-6 font-mono text-xs text-white uppercase font-bold" scope="col">
                  Critério de Auditoria
                </th>
                <th className="py-4 px-6 font-mono text-xs text-[#94A3B8] uppercase" scope="col">
                  Validadores Genéricos de Mercado
                </th>
                <th
                  className="py-4 px-6 font-mono text-xs text-[#10B981] uppercase bg-[#182132]/80 border-l border-[#25334A] font-bold"
                  scope="col"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Plataforma t-access + VIA CI/CD
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B] font-body text-sm">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#182132]/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white whitespace-nowrap">{row.criterion}</td>
                  <td className={`py-4 px-6 ${row.isGenericDanger ? 'text-[#EB4A4C] font-semibold' : 'text-[#94A3B8]'}`}>
                    {row.generic}
                  </td>
                  <td className="py-4 px-6 text-white font-medium bg-[#10B981]/5 border-l border-[#25334A]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#10B981] font-bold">✓</span>
                      <span>{row.taccess}</span>
                    </div>
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
