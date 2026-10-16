import { useState } from 'react';

interface RiskSimulatorProps {
  onOpenScanModal: () => void;
}

export function RiskSimulator({ onOpenScanModal }: RiskSimulatorProps) {
  const [screens, setScreens] = useState<number>(120);
  const [users, setUsers] = useState<number>(500); // in thousands
  const [preset, setPreset] = useState<string>('custom');

  // Formula based on legal precedents of TACs and shift-left savings
  const baseRiskPerScreen = 3800;
  const userFactor = 1 + (users / 1000) * 0.4;
  const totalRisk = Math.round(screens * baseRiskPerScreen * userFactor);
  const totalSaved = Math.round(totalRisk * 0.82);
  const roiMultiplier = (totalSaved / (screens * 450 + 25000)).toFixed(1);

  const formatCurrency = (val: number) => {
    return 'R$ ' + val.toLocaleString('pt-BR');
  };

  const formatUsers = (val: number) => {
    return val >= 1000 ? (val / 1000).toFixed(1) + ' mi' : val + ' mil';
  };

  const applyPreset = (name: string, s: number, u: number) => {
    setPreset(name);
    setScreens(s);
    setUsers(u);
  };

  return (
    <section className="w-full py-16 bg-[#0D131F] border-b border-[#1E293B]" id="simulador-risco">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="bg-[#131A26] border border-[#25334A] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left side: Description & Controls */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#182132] border border-[#38BDF8]/30 text-[#38BDF8] font-mono text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">calculate</span>
                Simulador de Governança e ROI
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight">
                Calcule a exposição ao TAC e a economia com DevSecOps
              </h2>

              <p className="font-body text-sm sm:text-base text-[#94A3B8]">
                Descubra o impacto financeiro de corrigir vulnerabilidades de acessibilidade na esteira CI/CD em vez
                de remediar passivos após autuações do Ministério Público ou TACs civis públicos.
              </p>

              {/* Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] text-[#64748B] w-full mb-0.5">Presets rápidos de setor:</span>
                <button
                  type="button"
                  onClick={() => applyPreset('fintech', 240, 1500)}
                  className={`text-xs px-2.5 py-1 rounded cursor-pointer transition-colors ${
                    preset === 'fintech'
                      ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 font-bold'
                      : 'bg-[#182132] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Fintech / Banco
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('ecommerce', 180, 800)}
                  className={`text-xs px-2.5 py-1 rounded cursor-pointer transition-colors ${
                    preset === 'ecommerce'
                      ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 font-bold'
                      : 'bg-[#182132] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  E-Commerce
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('gov', 350, 1800)}
                  className={`text-xs px-2.5 py-1 rounded cursor-pointer transition-colors ${
                    preset === 'gov'
                      ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 font-bold'
                      : 'bg-[#182132] text-[#94A3B8] hover:text-white'
                  }`}
                >
                  Setor Público / Gov
                </button>
              </div>

              {/* Interactive Sliders */}
              <div className="flex flex-col gap-5 pt-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-white font-medium" htmlFor="slider-screens">
                      Telas / Componentes Críticos:
                    </label>
                    <span className="font-mono font-bold text-[#38BDF8]">{screens} telas</span>
                  </div>
                  <input
                    className="w-full h-2 bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-[#EB4A4C] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    id="slider-screens"
                    max="500"
                    min="20"
                    onChange={(e) => {
                      setScreens(Number(e.target.value));
                      setPreset('custom');
                    }}
                    step="10"
                    type="range"
                    value={screens}
                  />
                  <div className="flex justify-between text-[11px] text-[#64748B] font-mono">
                    <span>20 telas</span>
                    <span>250</span>
                    <span>500 telas</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <label className="text-white font-medium" htmlFor="slider-users">
                      Volume de Acessos Mensais:
                    </label>
                    <span className="font-mono font-bold text-[#10B981]">{formatUsers(users)}</span>
                  </div>
                  <input
                    className="w-full h-2 bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                    id="slider-users"
                    max="2000"
                    min="50"
                    onChange={(e) => {
                      setUsers(Number(e.target.value));
                      setPreset('custom');
                    }}
                    step="50"
                    type="range"
                    value={users}
                  />
                  <div className="flex justify-between text-[11px] text-[#64748B] font-mono">
                    <span>50 mil</span>
                    <span>1 milhão</span>
                    <span>2 milhões</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Calculation Output Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Exposição Potencial de TAC */}
                <div className="bg-[#0B0F17] border border-[#EB4A4C]/40 p-6 rounded-xl flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                    <span className="font-mono text-xs text-[#EB4A4C] font-semibold uppercase flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">warning</span> Risco Legal Estimado
                    </span>
                    <span className="text-[10px] text-[#64748B] font-mono">LBI / NBR 17255</span>
                  </div>
                  <div className="py-5">
                    <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#EB4A4C] tracking-tight">
                      {formatCurrency(totalRisk)}
                    </span>
                    <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                      Passivo médio acumulado em perícias técnicas judiciais, multas diárias de TAC e horas de crise
                      jurídica corporativa.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B] border-t border-[#1E293B] pt-3 flex items-center justify-between">
                    <span>Status de Vulnerabilidade:</span>
                    <span className="text-[#EB4A4C] font-semibold">Exposição Iminente</span>
                  </div>
                </div>

                {/* Card 2: Economia com Motor VIA CI/CD */}
                <div className="bg-[#0B0F17] border border-[#10B981]/40 p-6 rounded-xl flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                    <span className="font-mono text-xs text-[#10B981] font-semibold uppercase flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">savings</span> Economia Operacional
                    </span>
                    <span className="text-[10px] text-[#10B981] font-mono">DevSecOps Shift-Left</span>
                  </div>
                  <div className="py-5">
                    <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#10B981] tracking-tight">
                      {formatCurrency(totalSaved)}
                    </span>
                    <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                      Economia direta ao mitigar quebras semânticas durante a compilação no pipeline em vez de
                      remediações emergenciais pós-deploy.
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-[#38BDF8] border-t border-[#1E293B] pt-3 flex items-center justify-between">
                    <span>Retorno do Investimento:</span>
                    <span className="font-bold text-white">{roiMultiplier}x no 1º Ano</span>
                  </div>
                </div>
              </div>

              {/* Methodology banner with CTA */}
              <div className="mt-4 p-4 bg-[#0B0F17] border border-[#25334A] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[#94A3B8] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#38BDF8] text-[18px]">gavel</span>
                  Metodologia alinhada aos precedentes de TACs do Ministério Público Federal e NBR 17255.
                </span>
                <button
                  type="button"
                  onClick={onOpenScanModal}
                  className="text-[#38BDF8] hover:text-white underline font-semibold shrink-0 cursor-pointer"
                >
                  Emitir Diagnóstico Personalizado →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
