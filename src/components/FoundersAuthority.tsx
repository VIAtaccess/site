export function FoundersAuthority() {
  return (
    <section className="w-full py-20 bg-[#0D131F]" id="dna-autoridade">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs sm:text-sm text-[#EB4A4C] uppercase tracking-wider font-semibold">
            Credibilidade de Engenharia de Missão Crítica
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mt-2 tracking-tight font-bold">
            Fundada por quem construiu a disciplina de QA no Brasil
          </h2>
          <p className="font-body text-base text-[#94A3B8] mt-4 leading-relaxed">
            Nossas fundadoras lideraram a engenharia de qualidade de software, testes de resiliência e esteiras de
            segurança nos maiores bancos, operadoras e órgãos governamentais por mais de duas décadas.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Co-founder 1: CEO */}
          <div className="bg-[#131A26] border border-[#25334A] p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row gap-5 items-start hover:border-[#EB4A4C] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#182132] border-2 border-[#EB4A4C] flex items-center justify-center text-white shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px] text-[#EB4A4C]">verified_user</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-headline text-lg sm:text-xl text-white font-bold">CEO &amp; Co-Fundadora</h3>
                <span className="px-2 py-0.5 rounded bg-[#EB4A4C]/15 text-[#EB4A4C] font-mono text-[11px] font-semibold border border-[#EB4A4C]/30">
                  20+ Anos de Carreira
                </span>
              </div>
              <span className="font-mono text-xs text-[#10B981] font-semibold">
                Especialista em Gestão de Qualidade de Software, Governança ESG &amp; Compliance Legal
              </span>
              <p className="font-body text-sm text-[#94A3B8] mt-2 leading-relaxed">
                Pioneira na implementação de centros de excelência em testes de software de alta escala para sistemas
                financeiros e corporativos. Responsável pela estratégia de blindagem jurídica e alinhamento com a ABNT
                NBR 17255.
              </p>
            </div>
          </div>

          {/* Co-founder 2: CTO */}
          <div className="bg-[#131A26] border border-[#25334A] p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row gap-5 items-start hover:border-[#38BDF8] transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#182132] border-2 border-[#38BDF8] flex items-center justify-center text-white shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px] text-[#38BDF8]">terminal</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-headline text-lg sm:text-xl text-white font-bold">CTO &amp; Co-Fundadora</h3>
                <span className="px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#38BDF8] font-mono text-[11px] font-semibold border border-[#38BDF8]/30">
                  20+ Anos de Carreira
                </span>
              </div>
              <span className="font-mono text-xs text-[#38BDF8] font-semibold">
                Arquiteta Chefe de Testes de Software, IA Generativa &amp; Automação CI/CD
              </span>
              <p className="font-body text-sm text-[#94A3B8] mt-2 leading-relaxed">
                Criadora da arquitetura do motor VIA e dos algoritmos do Sentinela Inclusivo. Mais de 20 anos
                desenvolvendo frameworks de automação de testes, performance crítica em grande volume e DevSecOps.
              </p>
            </div>
          </div>
        </div>

        {/* Big Numbers Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl text-center">
            <span className="font-headline text-4xl sm:text-5xl text-[#EB4A4C] font-extrabold tracking-tight">
              20+
            </span>
            <div className="font-mono text-xs text-white mt-1.5 font-semibold">Anos Liderando QA</div>
            <p className="text-xs text-[#94A3B8] mt-1">Nos maiores ecossistemas críticos do país</p>
          </div>

          <div className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl text-center">
            <span className="font-headline text-4xl sm:text-5xl text-[#10B981] font-extrabold tracking-tight">
              100%
            </span>
            <div className="font-mono text-xs text-white mt-1.5 font-semibold">Blindagem Legal</div>
            <p className="text-xs text-[#94A3B8] mt-1">Conformidade ABNT NBR 17255 e WCAG 2.2</p>
          </div>

          <div className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl text-center">
            <span className="font-headline text-4xl sm:text-5xl text-[#38BDF8] font-extrabold tracking-tight">
              0%
            </span>
            <div className="font-mono text-xs text-white mt-1.5 font-semibold">Scripts Invasivos</div>
            <p className="text-xs text-[#94A3B8] mt-1">Acessibilidade nativa sem widgets externos</p>
          </div>

          <div className="bg-[#131A26] border border-[#25334A] p-6 rounded-xl text-center">
            <span className="font-headline text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
              10k+
            </span>
            <div className="font-mono text-xs text-white mt-1.5 font-semibold">Componentes Auditados</div>
            <p className="text-xs text-[#94A3B8] mt-1">Em esteiras de CI/CD de missão crítica</p>
          </div>
        </div>
      </div>
    </section>
  );
}
