import { useState } from 'react';

export function EnginePillars() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const pillars = [
    {
      code: 'MODULE::DOM_INSPECTOR',
      index: '01 / 04',
      dotColor: '#38BDF8',
      title: 'Varredura Headless do DOM Dinâmico e SPAs',
      description:
        'Intercepta mutações assíncronas do DOM, Shadow DOM em Web Components, micro-frontends e modais dinâmicos em React, Vue e Next.js que escapam de analisadores estáticos comuns.',
      labelKey: 'CAPACIDADE:',
      labelVal: 'Aferição de contrastes dinâmicos e estados de foco (:focus-visible)',
      techInfo: 'Suporta React 19, Next.js App Router, Vue 3, Angular e Lit Web Components.',
    },
    {
      code: 'MODULE::RULES_NBR_17255',
      index: '02 / 04',
      dotColor: '#10B981',
      title: 'Motor Parametrizado ABNT NBR 17255 & WCAG 2.2',
      description:
        'Algoritmos desenhados especificamente para as novas regras de alvos de toque mínimos (Target Size 2.5.8), foco não obscurecido (2.4.11) e autenticação sem sobrecarga cognitiva (3.3.8).',
      labelKey: 'COMPLIANCE:',
      labelVal: 'Cobertura estrita de Níveis A, AA e AAA da WCAG 2.2',
      techInfo: 'Parametrização específica das normas técnicas brasileiras para laudos judiciais.',
    },
    {
      code: 'MODULE::CI_QUALITY_GATE',
      index: '03 / 04',
      dotColor: '#EB4A4C',
      title: 'Quality Gate com Bloqueio de Merge em Pull Requests',
      description:
        'Integração com GitHub Actions, GitLab CI e Bitbucket. Defina limiares intransponíveis: nenhum commit com regressão de acessibilidade passa para staging ou produção.',
      labelKey: 'DEVSECOPS:',
      labelVal: 'Retorno de exit code configurável e comentários automáticos em PRs',
      techInfo: 'Comentários com inline code diff direto no PR apontando a linha culpada.',
    },
    {
      code: 'MODULE::LEGAL_AUDIT_LOG',
      index: '04 / 04',
      dotColor: '#FFFFFF',
      title: 'Dashboard Executivo & Laudo Pericial Assinado',
      description:
        'Gere laudos periciais formais com hash criptográfico, prontos para resposta a notificações judiciais, auditorias externas Big 4 e relatórios ESG trimestrais.',
      labelKey: 'DOCUMENTAÇÃO:',
      labelVal: 'Exportação instantânea em PDF Assinado, JSON Schema e SIEM logs',
      techInfo: 'Auditoria pericial digital aceita pelo Ministério Público e comitês de auditoria.',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#0B0F17] border-b border-[#1E293B]" id="o-validador-via">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm text-[#38BDF8] uppercase tracking-wider font-semibold">
              Tecnologia Proprietária t-access
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mt-2 tracking-tight font-bold">
              Engine de Validação VIA: Acelerador Técnico para Times de Engenharia
            </h2>
            <p className="font-body text-base text-[#94A3B8] mt-4">
              Arquitetura construída para rodar em segundos no terminal de cada dev e nos runners de CI/CD, com
              telemetria contínua e integração com sistemas de monitoramento.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-2 rounded-lg bg-[#131A26] border border-[#25334A] text-[#38BDF8] font-mono text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              REST API • Webhook • CLI Dockerized
            </span>
          </div>
        </div>

        {/* 4 Pillars in IDE/Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={p.code}
              onClick={() => setActiveModule(activeModule === idx ? null : idx)}
              className="bg-[#131A26] border border-[#25334A] rounded-xl p-6 flex flex-col justify-between hover:border-[#38BDF8] transition-colors relative overflow-hidden cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: p.dotColor }}
                    ></span>
                    <span className="font-mono text-xs text-white font-semibold">{p.code}</span>
                  </div>
                  <span className="font-mono text-[11px]" style={{ color: p.dotColor }}>
                    {p.index}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-headline text-lg sm:text-xl text-white font-bold group-hover:text-[#38BDF8] transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-[#94A3B8] mt-2.5 leading-relaxed">{p.description}</p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B] font-mono text-[11px] text-[#94A3B8] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold" style={{ color: p.dotColor }}>
                    {p.labelKey}
                  </span>
                  <span>{p.labelVal}</span>
                </div>

                {activeModule === idx && (
                  <div className="p-3 bg-[#070A10] rounded-lg border border-[#38BDF8]/40 text-xs font-mono text-[#38BDF8] animate-fadeIn">
                    <span className="font-bold text-white block mb-0.5">Detalhe de Arquitetura:</span>
                    {p.techInfo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Micro-grid */}
        <div className="mt-8 bg-[#131A26] border border-[#25334A] rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            STACK HOMOLOGADA:
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[#94A3B8]">
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[#38BDF8]">
              Playwright Headless
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-white">
              Axe-core Engine
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[#10B981]">
              Jest &amp; Vitest Hooks
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[#EB4A4C]">
              K6 Load Tester
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[#38BDF8]">
              Grafana Observability
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-[#10B981]">
              RAG com LLMs Especializadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
