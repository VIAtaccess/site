import { useState, useEffect } from 'react';
import type { ScanResult } from '../types';

interface LiveScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTarget?: string;
}

export function LiveScanModal({ isOpen, onClose, defaultTarget = 'https://app.empresa.com.br' }: LiveScanModalProps) {
  const [target, setTarget] = useState(defaultTarget);
  const [scanState, setScanState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultTarget) setTarget(defaultTarget);
  }, [defaultTarget]);

  const steps = [
    'Carregando árvore AST e dependências de Design System...',
    'Executando Headless Chromium (Playwright) + Axe-Core...',
    'Aferindo regras ABNT NBR 17255 & WCAG 2.2 AAA...',
    'Simulando foco sequencial e tecnologias assistivas...',
    'Gerando laudo criptografado com hash SHA-256...',
  ];

  const handleStartScan = () => {
    setScanState('running');
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setScanState('completed');
          return prev;
        }
      });
    }, 700);
  };

  const sampleResult: ScanResult = {
    targetUrl: target || 'https://app.empresa.com.br',
    scanDate: new Date().toLocaleDateString('pt-BR'),
    sha256: '0x9f4ae812c709b3d9e21145ba890123fe88ac6d21',
    score: 96,
    wcagLevel: 'AAA',
    nbr17255Compliant: false,
    totalViolations: 2,
    criticalViolations: 1,
    warnings: 1,
    passedChecks: 142,
    items: [
      {
        id: 'CRIT-01',
        selector: 'button.checkout-submit-btn',
        rule: 'WCAG 2.2 §2.5.8 (Target Size) / ABNT 17255 §7.4',
        severity: 'critical',
        description:
          'O botão de checkout possui área de clique de 32x32px, abaixo dos 44x44px mínimos exigidos por lei para evitar acionamentos acidentais.',
        recommendation: 'Aumentar a área mínima para 48x48px com min-h-[48px] min-w-[48px] e padding compensado.',
        remediationDiff: {
          before: '<button class="p-1 checkout-submit-btn" onClick={submit}>Pagar</button>',
          after: '<button class="min-h-[48px] min-w-[48px] p-3 checkout-submit-btn" aria-label="Confirmar pagamento seguro" onClick={submit}>Pagar</button>',
        },
      },
      {
        id: 'WARN-02',
        selector: 'div.notification-toast',
        rule: 'WCAG 2.2 §4.1.3 (Status Messages)',
        severity: 'moderate',
        description: 'Mensagem de confirmação não possui aria-live="polite", impedindo leitura automática por NVDA.',
        recommendation: 'Adicionar role="status" e aria-live="polite" ao container do aviso.',
        remediationDiff: {
          before: '<div class="notification-toast">{message}</div>',
          after: '<div role="status" aria-live="polite" class="notification-toast">{message}</div>',
        },
      },
    ],
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#131A26] border border-[#25334A] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#EB4A4C]/15 border border-[#EB4A4C]/30 flex items-center justify-center text-[#EB4A4C]">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </span>
            <div>
              <h3 className="font-headline text-lg sm:text-xl text-white font-bold">
                Validador VIA — Scan Diagnóstico Headless
              </h3>
              <span className="font-mono text-xs text-[#38BDF8]">
                Motor de Auditoria Pericial NBR 17255 &amp; WCAG 2.2
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#94A3B8] hover:text-white hover:bg-[#1E293B] cursor-pointer"
            aria-label="Fechar modal de scan"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Input area */}
        {scanState === 'idle' && (
          <div className="py-6 space-y-4">
            <div>
              <label className="font-mono text-xs text-white block mb-1.5" htmlFor="target-input">
                URL da Aplicação ou Repositório Git (Público ou Tokenizado):
              </label>
              <input
                id="target-input"
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Ex: https://checkout.minhaempresa.com.br ou git@github.com:empresa/core.git"
                className="w-full min-h-[48px] px-3.5 bg-[#0B0F17] border border-[#25334A] rounded-lg text-white font-mono text-xs sm:text-sm focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40"
              />
            </div>

            <div className="p-4 bg-[#0B0F17] rounded-xl border border-[#1E293B] space-y-2 text-xs font-mono text-[#94A3B8]">
              <div className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                Parâmetros do Scan Ativo:
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li>Analisador Headless de Árvore DOM e Modais Dinâmicos</li>
                <li>Checagem estrita de contraste, alvos de toque (&ge;44x44px) e :focus-visible</li>
                <li>Emulação sintética de navegação sequencial (NVDA / VoiceOver)</li>
                <li>Exit code 1 para bloqueio de merge em esteiras CI/CD</li>
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-xs font-mono text-[#94A3B8] hover:text-white cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleStartScan}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#EB4A4C] hover:bg-[#D83A3C] text-white font-mono text-xs font-bold shadow-md cursor-pointer"
              >
                <span>Iniciar Varredura VIA</span>
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              </button>
            </div>
          </div>
        )}

        {/* Running Progress */}
        {scanState === 'running' && (
          <div className="py-8 space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 animate-pulse">
              <span className="material-symbols-outlined text-[#38BDF8] text-[32px] animate-spin">
                sync
              </span>
            </div>

            <div>
              <h4 className="font-headline text-lg text-white font-bold">
                Executando Varredura Pericial...
              </h4>
              <p className="font-mono text-xs text-[#38BDF8] mt-1">{steps[currentStep]}</p>
            </div>

            <div className="w-full bg-[#0B0F17] rounded-full h-2.5 border border-[#1E293B] overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#38BDF8] to-[#10B981] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="p-3 bg-[#0B0F17] rounded border border-[#1E293B] font-mono text-[11px] text-[#64748B] text-left">
              <span>Alvo: {target}</span> • <span>Worker: ARM64-NODE-03</span> • <span>Modo: Strict NBR 17255</span>
            </div>
          </div>
        )}

        {/* Completed Results */}
        {scanState === 'completed' && (
          <div className="py-4 flex flex-col max-h-[70vh]">
          <div className="space-y-4 overflow-y-auto pr-1 flex-1 min-h-0">
            <div className="p-4 bg-[#0B0F17] rounded-xl border border-[#25334A] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] text-[#94A3B8] block">DOMÍNIO AUDITADO</span>
                <span className="font-mono text-sm text-white font-bold">{sampleResult.targetUrl}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="font-mono text-[11px] text-[#94A3B8] block">SCORE GLOBAL</span>
                  <span className="font-headline text-xl text-[#38BDF8] font-bold">{sampleResult.score}/100</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] text-[#94A3B8] block">VIOLAÇÕES CRÍTICAS</span>
                  <span className="font-headline text-xl text-[#EB4A4C] font-bold">
                    {sampleResult.criticalViolations}
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Alert Box */}
            <div className="p-3.5 bg-[#EB4A4C]/10 border border-[#EB4A4C]/40 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[#EB4A4C] font-mono text-xs font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">cancel</span>
                  [GATE_REJECTED] 1 Violação Crítica Impede o Deploy
                </span>
                <span className="text-[10px] font-mono text-[#64748B]">ABNT NBR 17255 §7.4</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Elemento interativo com alvo de toque inferior ao limite pericial (&lt; 44x44px). Risco direto de
                autuação em juízo e bloqueio em auditorias ESG.
              </p>
            </div>

            {/* Code Diff Remediation */}
            {sampleResult.items.map((item) => (
              <div key={item.id} className="p-4 bg-[#0B0F17] rounded-xl border border-[#1E293B] space-y-2 text-xs">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white font-bold">{item.id}: {item.rule}</span>
                  <span className="px-2 py-0.5 rounded bg-[#EB4A4C]/20 text-[#EB4A4C] font-bold">
                    {item.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-[#94A3B8]">{item.description}</p>
                <div className="p-2.5 bg-[#070A10] rounded border border-[#25334A] font-mono text-[11px] space-y-1">
                  <div className="text-[#EB4A4C] line-through bg-[#EB4A4C]/10 px-2 py-0.5 rounded overflow-x-auto">
                    - {item.remediationDiff.before}
                  </div>
                  <div className="text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded overflow-x-auto">
                    + {item.remediationDiff.after}
                  </div>
                </div>
              </div>
            ))}

            {/* Cryptographic Proof */}
            <div className="p-3 bg-[#0B0F17] rounded-lg border border-[#1E293B] flex items-center justify-between text-xs font-mono">
              <span className="text-[#94A3B8]">
                Hash Legal SHA-256: <span className="text-white font-bold">{sampleResult.sha256}</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(sampleResult.sha256);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-[#38BDF8] hover:text-white underline cursor-pointer shrink-0"
              >
                {copied ? 'Copiado!' : 'Copiar Hash'}
              </button>
            </div>

            </div>
            <div className="pt-3 mt-2 flex items-center justify-between border-t border-[#1E293B] shrink-0">
              <button
                type="button"
                onClick={() => setScanState('idle')}
                className="px-4 py-2 rounded-lg bg-[#182132] text-[#94A3B8] hover:text-white text-xs font-mono cursor-pointer"
              >
                Novo Scan
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#EB4A4C] text-white hover:bg-[#D83A3C] text-xs font-mono font-bold cursor-pointer"
              >
                Fechar Relatório
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
