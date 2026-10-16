import { useState } from 'react';

export function SentinelaSection() {
  const [lux, setLux] = useState<number>(418);
  const [dba, setDba] = useState<number>(54);
  const [routeBlocked, setRouteBlocked] = useState<boolean>(false);
  const [shieldActive, setShieldActive] = useState<boolean>(false);

  const toggleSoundSpike = () => {
    if (dba === 54) {
      setDba(82);
      setShieldActive(true);
      setTimeout(() => {
        setDba(58);
      }, 3500);
    } else {
      setDba(54);
      setShieldActive(false);
    }
  };

  const toggleRouteObstacle = () => {
    setRouteBlocked(!routeBlocked);
  };

  return (
    <section className="w-full py-24 bg-[#0B0F17] border-b border-[#1E293B]" id="inovacao-sentinela">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#131A26] border border-[#10B981]/30 text-[#10B981] font-mono text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">radar</span>
              Inovação de Fronteira Física + Digital
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight mt-1">
              Projeto Sentinela Inclusivo: Visão Computacional e Edge AI em Espaços Físicos
            </h2>

            <p className="font-body text-base text-[#94A3B8] leading-relaxed">
              A acessibilidade vai muito além da tela do navegador. O{' '}
              <strong className="text-white">Sentinela Inclusivo</strong> é o projeto de P&amp;D da t-access que
              monitora ambientes físicos em tempo real para proteger pessoas neurodivergentes e com mobilidade
              reduzida.
            </p>

            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                </span>
                <div>
                  <span className="font-headline text-sm sm:text-base text-white font-bold block">
                    Proteção contra Sobrecarga Sensorial (TEA e Neurodivergentes)
                  </span>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Sensores acústicos e fotométricos detectam picos de decibéis e frequências estroboscópicas
                    prejudiciais à regulação sensorial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </span>
                <div>
                  <span className="font-headline text-sm sm:text-base text-white font-bold block">
                    Detecção de Obstrução de Rotas Acessíveis
                  </span>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Modelos de Visão Computacional identificam bloqueios em pisos podotáteis e rampas sem armazenar
                    imagens (LGPD Edge Compliant).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#EB4A4C]/15 border border-[#EB4A4C]/30 flex items-center justify-center text-[#EB4A4C] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                </span>
                <div>
                  <span className="font-headline text-sm sm:text-base text-white font-bold block">
                    Certificação ESG para Aeroportos, Hospitais e Hubs
                  </span>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Telemetria contínua pronta para alimentação em dashboards corporativos e relatórios integrados de
                    sustentabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Edge Sensor Telemetry Terminal */}
          <div className="lg:col-span-6">
            <div className="bg-[#131A26] border border-[#25334A] rounded-2xl p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EB4A4C]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                  <span className="font-mono text-xs text-white font-bold ml-2">
                    SENTINELA::EDGE_TELEMETRY #09
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-mono text-[11px] font-semibold">
                  STATUS: ACTIVE MONITORING
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-lg flex flex-col justify-between">
                  <span className="font-mono text-[11px] text-[#94A3B8] uppercase">Índice Luminotécnico</span>
                  <span className="font-headline text-xl text-[#10B981] font-bold mt-1">{lux} Lux (Normal)</span>
                  <span className="text-[10px] text-[#64748B] font-mono mt-0.5">Flicker Rate: 0.00%</span>
                </div>

                <div className="bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-lg flex flex-col justify-between">
                  <span className="font-mono text-[11px] text-[#94A3B8] uppercase">Pressão Sonora</span>
                  <span
                    className={`font-headline text-xl font-bold mt-1 ${
                      dba > 70 ? 'text-[#EB4A4C]' : 'text-white'
                    }`}
                  >
                    {dba} dBA
                  </span>
                  <span
                    className={`text-[10px] font-mono mt-0.5 ${
                      dba > 70 ? 'text-[#EB4A4C]' : 'text-[#10B981]'
                    }`}
                  >
                    {dba > 70 ? 'Alerta: Atenuação Ativada' : 'Faixa Segura Neurodivergente'}
                  </span>
                </div>
              </div>

              {/* Podotátil Route block */}
              <div className="bg-[#0B0F17] border border-[#1E293B] p-3.5 rounded-lg mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">Rotas Podotáteis &amp; Acessos Livres</span>
                  <span
                    className={`font-bold ${
                      routeBlocked ? 'text-[#EB4A4C]' : 'text-[#10B981]'
                    }`}
                  >
                    {routeBlocked ? 'ALERTA: OBSTRUÇÃO IDENTIFICADA' : '100% DESOBSTRUÍDAS'}
                  </span>
                </div>

                <div className="p-3 bg-[#070A10] rounded border border-[#1E293B] font-mono text-[11px] text-[#94A3B8] space-y-1">
                  <div className="text-[#64748B]">// Edge Vision AI Inferences (FPS: 60 - Latência 8ms):</div>
                  <div className={routeBlocked ? 'text-[#EB4A4C]' : 'text-[#10B981]'}>
                    {routeBlocked
                      ? '[EdgeNode-01] Alerta: Carrinho/bagagem bloqueando piso tátil Setor Norte'
                      : '[EdgeNode-01] Rota Acessível Setor Norte: Fluxo desimpedido'}
                  </div>
                  <div className="text-[#10B981]">
                    [EdgeNode-02] Elevador Preferencial: Chamada por voz operante
                  </div>
                  <div className={shieldActive ? 'text-[#FBBF24] font-semibold' : 'text-[#38BDF8]'}>
                    {shieldActive
                      ? '[SensoryShield] Atenuação de ruído e dimerização acústica acionada!'
                      : '[SensoryShield] Atenuação de iluminação automática aplicada'}
                  </div>
                </div>
              </div>

              {/* Simulation Controls for testing */}
              <div className="mt-3 pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleSoundSpike}
                    className="px-2 py-1 rounded bg-[#1E293B] hover:bg-[#25334A] text-[#38BDF8] text-[11px] cursor-pointer"
                  >
                    {dba > 70 ? 'Normalizar Ruído' : 'Simular Pico dB'}
                  </button>
                  <button
                    type="button"
                    onClick={toggleRouteObstacle}
                    className="px-2 py-1 rounded bg-[#1E293B] hover:bg-[#25334A] text-[#FBBF24] text-[11px] cursor-pointer"
                  >
                    {routeBlocked ? 'Desobstruir Rota' : 'Simular Bloqueio'}
                  </button>
                </div>
                <span className="text-[#EB4A4C] font-semibold text-[11px]">P&amp;D t-access Lab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
