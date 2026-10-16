import { useState } from 'react';
import type { PipelineStep } from '../types';

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 'pre-commit',
    stepNumber: '01. PRE-COMMIT',
    title: 'Linter & Static AST',
    category: 'Linha de Código Local',
    icon: 'commit',
    description:
      'Validação estática de tags semânticas, atributos ARIA obrigatórios e regras de contraste em tempo de digitação.',
    statusText: '✓ Husky + ESLint a11y',
    badgeColor: '#38BDF8',
    ciCommand: 'npx eslint --ext .js,.jsx,.ts,.tsx src/ --rule "jsx-a11y/alt-text: error"',
    details: {
      purpose: 'Interceptar erros no momento exato em que o desenvolvedor redige o código.',
      rulesCovered: ['jsx-a11y/anchor-is-valid', 'jsx-a11y/alt-text', 'jsx-a11y/aria-props', 'jsx-a11y/role-has-required-aria-props'],
      sampleSnippet: `// .husky/pre-commit\n#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nnpx via-validator --staged --strict`,
      exitCodeRule: 'Exit 1 impede a criação do commit local.',
      executionTime: '~120ms',
    },
  },
  {
    id: 'unit-tests',
    stepNumber: '02. UNIT TESTS',
    title: 'Jest + Axe Core',
    category: 'Design Systems & Componentes',
    icon: 'integration_instructions',
    description:
      'Testes unitários nos Design Systems (React, Vue, Angular) com asserções estritas de acessibilidade antes do build.',
    statusText: '✓ Zero DOM isolated leaks',
    badgeColor: '#38BDF8',
    ciCommand: 'npm run test:a11y -- --coverageThreshold=\'{"global":{"lines":95}}\'',
    details: {
      purpose: 'Garantir que cada botão, modal, dropdown e tablist cumpra os padrões WAI-ARIA.',
      rulesCovered: ['axe.run(container, { rules: { "color-contrast": { enabled: true } } })', 'Keyboard navigation trapping', 'Focus restoration on close'],
      sampleSnippet: `import { axe, toHaveNoViolations } from 'jest-axe';\nexpect.extend(toHaveNoViolations);\n\ntest('PaymentModal has no accessibility violations', async () => {\n  const { container } = render(<PaymentModal isOpen={true} />);\n  const results = await axe(container);\n  expect(results).toHaveNoViolations();\n});`,
      exitCodeRule: 'Falha bloqueia o build do artefato.',
      executionTime: '~480ms',
    },
  },
  {
    id: 'e2e-scan',
    stepNumber: '03. E2E SCAN',
    title: 'Playwright Headless',
    category: 'Navegação Completa do Usuário',
    icon: 'travel_explore',
    description:
      'Varredura dinâmica emulando Chromium, Firefox e WebKit com disparo de eventos assíncronos e verificação de foco de teclado.',
    statusText: '✓ Multi-browser emulation',
    badgeColor: '#38BDF8',
    ciCommand: 'npx playwright test --config=playwright.a11y.config.ts',
    details: {
      purpose: 'Auditar fluxos completos ponta a ponta (login, carrinho de compras, formulários de empréstimo).',
      rulesCovered: ['Foco visível (:focus-visible)', 'Skip links funcionais', 'Live regions anunciadas', 'Single Page Application transitions'],
      sampleSnippet: `// tests/checkout.a11y.spec.ts\ntest('Checkout flow accessibility audit', async ({ page }) => {\n  await page.goto('/checkout');\n  await via.auditPage(page, {\n    targetSizeMinimum: 44,\n    standards: ['WCAG2.2AAA', 'ABNT_NBR_17255']\n  });\n});`,
      exitCodeRule: 'Exit 1 gera vídeo e tracing de foco.',
      executionTime: '~3.2s',
    },
  },
  {
    id: 'stress-load',
    stepNumber: '04. STRESS & LOAD',
    title: 'K6 Assistive Load',
    category: 'Estabilidade em Alta Escala',
    icon: 'speed',
    description:
      'Simulação de concorrência com tecnologias assistivas para garantir tempo de resposta estável em anúncios ARIA Live.',
    statusText: '✓ Latência < 200ms',
    badgeColor: '#38BDF8',
    ciCommand: 'k6 run --vus 50 --duration 30s assistive-scenarios.js',
    details: {
      purpose: 'Evitar que sobrecargas no backend atrasem eventos de acessibilidade transmitidos aos leitores de tela.',
      rulesCovered: ['ARIA Live debounce stability', 'WebSocket caption synchronization', 'Server-driven UI accessibility integrity'],
      sampleSnippet: `export const options = {\n  thresholds: {\n    'aria_live_announcement_latency': ['p(95)<200'],\n    'accessibility_tree_hydration_ms': ['p(99)<350'],\n  },\n};`,
      exitCodeRule: 'Latência > 200ms emite flag de degradação.',
      executionTime: '~15s',
    },
  },
  {
    id: 'quality-gate',
    stepNumber: '05. QUALITY GATE',
    title: 'VIA Strict Assertion',
    category: 'Ponto de Bloqueio Intransponível',
    icon: 'shield',
    description:
      'Bloqueio estrito de merges caso qualquer critério crítico ABNT 17255 seja violado. Sem exceções manuais silenciosas.',
    statusText: 'Exit Code 1 = Pull Request Rejeitado',
    badgeColor: '#EB4A4C',
    ciCommand: 'via-gate evaluate --pr-id=$CI_MERGE_REQUEST_IID --fail-on=critical,serious',
    details: {
      purpose: 'Impedir fisicamente que qualquer código inacessível atinja branches de staging ou homologação.',
      rulesCovered: ['Zero regressões permitidas', 'Comentário automatizado no GitHub/GitLab com linha e diff', 'Veto automático no status check do commit'],
      sampleSnippet: `name: VIA Quality Gate\non: [pull_request]\njobs:\n  gate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: t-access/via-gate-action@v2\n        with:\n          strict_abnt_nbr_17255: true\n          fail_on_critical: true`,
      exitCodeRule: 'Exit Code 1 aborta o pipeline.',
      executionTime: '~450ms',
    },
  },
  {
    id: 'production',
    stepNumber: '06. PRODUCTION',
    title: 'Deploy Homologado',
    category: 'Criptografia e Certificação Legal',
    icon: 'verified',
    description:
      'Geração instantânea de Laudo Criptografado com hash imutável pronto para auditorias de compliance e relatórios ESG.',
    statusText: '✓ SHA-256 Legal Sealed',
    badgeColor: '#10B981',
    ciCommand: 'via-notarize --emit-certificate --output-format=pdf,json',
    details: {
      purpose: 'Fornecer ao jurídico e às auditorias Big 4 a prova material de conformidade a cada release.',
      rulesCovered: ['Registro imutável SHA-256', 'Assinatura pericial com certificação ICP-Brasil', 'Conformidade ESG e aderência total à LBI'],
      sampleSnippet: `{\n  "release": "v4.12.0",\n  "audit_hash": "0x9f4ae812c709b3d9e21145ba890123fe88ac",\n  "standard": "ABNT NBR 17255:2024",\n  "wcag": "WCAG 2.2 AAA",\n  "certification_status": "HOMOLOGATED_NO_VIOLATIONS"\n}`,
      exitCodeRule: 'Deploy liberado para Kubernetes / CDN.',
      executionTime: '~200ms',
    },
  },
];

export function PipelineFlowchart() {
  const [selectedStep, setSelectedStep] = useState<PipelineStep | null>(null);

  return (
    <section className="w-full py-24 bg-[#0B0F17] border-b border-[#1E293B]" id="pipeline-cicd">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs sm:text-sm text-[#38BDF8] uppercase tracking-wider font-semibold">
              Shift-Left Accessibility Architecture
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mt-2 tracking-tight font-bold">
              A Esteira DevSecOps de Acessibilidade: Da Linha de Código ao Deploy Homologado
            </h2>
            <p className="font-body text-base text-[#94A3B8] mt-3">
              Cada etapa do pipeline atua como uma barreira intransponível contra regressões de conformidade,
              integrando testes sintéticos, navegadores headless e validação pericial.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-2 rounded-lg bg-[#131A26] border border-[#25334A] text-white font-mono text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              GitHub Actions • GitLab • Azure DevOps • Jenkins
            </span>
          </div>
        </div>

        {/* 6 Step Interactive Flowchart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {PIPELINE_STEPS.map((step) => {
            const isBlockedGate = step.id === 'quality-gate';
            const isProd = step.id === 'production';

            return (
              <div
                key={step.id}
                onClick={() => setSelectedStep(step)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedStep(step);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                className={`rounded-xl p-4 flex flex-col justify-between transition-all cursor-pointer text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] ${
                  isBlockedGate
                    ? 'bg-[#182132] border-2 border-[#EB4A4C] shadow-lg shadow-[#EB4A4C]/15 hover:border-white'
                    : isProd
                    ? 'bg-[#131A26] border border-[#10B981] hover:border-[#34D399]'
                    : 'bg-[#131A26] border border-[#25334A] hover:border-[#38BDF8]'
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between pb-3 border-b ${
                      isBlockedGate ? 'border-[#25334A]' : 'border-[#1E293B]'
                    }`}
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: step.badgeColor }}
                    >
                      {step.stepNumber}
                    </span>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ color: step.badgeColor }}
                    >
                      {step.icon}
                    </span>
                  </div>

                  <h3 className="font-headline text-base text-white font-bold mt-3">
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      isBlockedGate ? 'text-[#E2E8F0]' : 'text-[#94A3B8]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-2 border-t font-mono text-[11px] ${
                    isBlockedGate
                      ? 'border-[#25334A] text-[#EB4A4C] font-semibold'
                      : isProd
                      ? 'border-[#1E293B] text-[#10B981]'
                      : 'border-[#1E293B] text-[#10B981]'
                  }`}
                >
                  {step.statusText}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-[#64748B] font-mono">
            Dica: Clique em qualquer etapa acima para inspecionar os scripts de CI/CD, snippets YAML e parâmetros de bloqueio.
          </p>
        </div>
      </div>

      {/* Step Detail Modal */}
      {selectedStep && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-[#131A26] border border-[#25334A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <span
                  className="p-2 rounded-lg bg-[#0B0F17] border border-[#25334A] material-symbols-outlined text-[24px]"
                  style={{ color: selectedStep.badgeColor }}
                >
                  {selectedStep.icon}
                </span>
                <div>
                  <span className="font-mono text-xs text-[#38BDF8] font-bold">
                    {selectedStep.stepNumber} • {selectedStep.category}
                  </span>
                  <h3 className="font-headline text-xl text-white font-bold">
                    {selectedStep.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="p-1 rounded text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors cursor-pointer"
                aria-label="Fechar detalhes da etapa"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm font-body">
              <div>
                <span className="font-mono text-xs text-[#94A3B8] block mb-1">FINALIDADE DA ETAPA</span>
                <p className="text-white leading-relaxed">{selectedStep.details.purpose}</p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#94A3B8] block mb-1">REGRAS E DIRETRIZES COBERTAS</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStep.details.rulesCovered.map((rule, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#0B0F17] border border-[#1E293B] text-xs font-mono text-[#38BDF8]"
                    >
                      {rule}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-[#94A3B8] block mb-1">SNIPPET DE EXECUÇÃO CI/CD</span>
                <div className="bg-[#070A10] border border-[#25334A] rounded-lg p-3 font-mono text-xs text-[#10B981] overflow-x-auto">
                  <pre>{selectedStep.details.sampleSnippet}</pre>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B]">
                  <span className="text-[11px] font-mono text-[#64748B] block">REGRA DE BLOQUEIO</span>
                  <span className="text-xs font-mono text-[#EB4A4C] font-semibold mt-0.5 block">
                    {selectedStep.details.exitCodeRule}
                  </span>
                </div>
                <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B]">
                  <span className="text-[11px] font-mono text-[#64748B] block">TEMPO MÉDIO DE EXECUÇÃO</span>
                  <span className="text-xs font-mono text-[#38BDF8] font-semibold mt-0.5 block">
                    {selectedStep.details.executionTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E293B] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="px-4 py-2 rounded-lg bg-[#1E293B] text-white hover:bg-[#25334A] transition-colors font-mono text-xs cursor-pointer"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
