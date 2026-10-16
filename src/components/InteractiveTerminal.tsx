import { useState } from 'react';

type TerminalMode = 'blocked' | 'fixed' | 'interactive';

export function InteractiveTerminal() {
  const [mode, setMode] = useState<TerminalMode>('blocked');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [customCmd, setCustomCmd] = useState('');
  const [interactiveLogs, setInteractiveLogs] = useState<string[]>([
    't-access VIA Engine CLI v3.8.2-enterprise',
    'Digite "via help" ou clique nos atalhos rápidos abaixo para executar diagnósticos.',
  ]);

  const handleApplyFix = () => {
    setIsRunning(true);
    setTimeout(() => {
      setMode('fixed');
      setIsRunning(false);
    }, 850);
  };

  const handleReset = () => {
    setIsRunning(true);
    setTimeout(() => {
      setMode('blocked');
      setIsRunning(false);
    }, 600);
  };

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    setInteractiveLogs((prev) => [...prev, `$ ${trimmed}`]);

    if (trimmed === 'clear' || trimmed === 'cls') {
      setInteractiveLogs(['t-access VIA Engine CLI v3.8.2']);
      setCustomCmd('');
      return;
    }

    if (trimmed.includes('help')) {
      setInteractiveLogs((prev) => [
        ...prev,
        '  via scan --strict-nbr-17255   Varre todo o AST do projeto contra NBR 17255',
        '  via test --a11y-focus         Emula navegação por teclado e foco invisível',
        '  via fix --auto                Aplica patches semânticos em botões e labels',
        '  via report --legal-sha        Gera laudo pericial assinado para o jurídico',
        '  clear                         Limpa o buffer do terminal',
      ]);
    } else if (trimmed.includes('scan')) {
      setInteractiveLogs((prev) => [
        ...prev,
        '-> Carregando 184 arquivos JSX/TSX...',
        '-> Executando headless engine Chromium + WebKit (Axe-core v4.10)...',
        '✓ 183 componentes em conformidade estrita (WCAG 2.2 AAA).',
        '! 1 alerta: CheckoutFlow.tsx:84 target size < 44px.',
        'Código de saída: 1 (Gate bloqueado no pipeline de PR).',
      ]);
    } else if (trimmed.includes('fix')) {
      setInteractiveLogs((prev) => [
        ...prev,
        '-> Analisando AST em CheckoutFlow.tsx:84...',
        '+ Injetado min-h-[48px] min-w-[48px] p-3 no elemento <button>',
        '+ Injetado atributo aria-label descritivo com fallback semântico',
        '+ Adicionado aria-hidden="true" no ícone decorativo',
        '✓ Correção concluída com sucesso! 0 vulnerabilidades restantes.',
      ]);
    } else if (trimmed.includes('report') || trimmed.includes('legal')) {
      setInteractiveLogs((prev) => [
        ...prev,
        '-> Compilando Laudo Pericial de Acessibilidade Digital...',
        '-> Metodologia: ABNT NBR 17255:2024 & LBI Lei nº 13.146/15',
        '-> Hash Criptográfico: 0x9f4ae812c709b3d9e21145ba890123fe88ac (SHA-256)',
        '✓ Laudo homologado salvo em: ./reports/laudo_pericial_taccess.pdf',
      ]);
    } else {
      setInteractiveLogs((prev) => [
        ...prev,
        `Comando não reconhecido: "${trimmed}". Digite "via help" para ver as opções.`,
      ]);
    }

    setCustomCmd('');
  };

  return (
    <div className="bg-[#0D131F] border border-[#25334A] rounded-2xl shadow-2xl overflow-hidden font-mono text-xs shadow-[#000]/60">
      {/* Terminal Header Bar */}
      <div className="bg-[#131A26] px-4 py-3 border-b border-[#25334A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EB4A4C] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#FBBF24] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
          <span className="ml-2 text-white font-semibold text-[13px] tracking-wide">
            via-cli — bash — 80x24 (Strict Quality Gate)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] text-[10px] font-bold border border-[#10B981]/30">
            RUNNER: ACTIVE
          </span>
          <span className="text-[#64748B] text-[11px] hidden sm:inline">ARM64-LINUX</span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="bg-[#0A0E17] px-4 py-2 border-b border-[#1E293B] flex items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            type="button"
            onClick={() => setMode('blocked')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
              mode === 'blocked'
                ? 'bg-[#EB4A4C]/20 text-[#EB4A4C] border border-[#EB4A4C]/40 font-bold'
                : 'text-[#94A3B8] hover:text-white hover:bg-[#131A26]'
            }`}
          >
            [1] Falha & Gate Bloqueado
          </button>
          <button
            type="button"
            onClick={() => setMode('fixed')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
              mode === 'fixed'
                ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-bold'
                : 'text-[#94A3B8] hover:text-white hover:bg-[#131A26]'
            }`}
          >
            [2] Auto-Remediação AST
          </button>
          <button
            type="button"
            onClick={() => setMode('interactive')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
              mode === 'interactive'
                ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 font-bold'
                : 'text-[#94A3B8] hover:text-white hover:bg-[#131A26]'
            }`}
          >
            [3] CLI Interativo
          </button>
        </div>

        {mode === 'blocked' ? (
          <button
            type="button"
            onClick={handleApplyFix}
            disabled={isRunning}
            className="px-2 py-0.5 rounded bg-[#10B981] text-[#0B0F17] hover:bg-[#34D399] transition-all font-bold text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
          >
            {isRunning ? 'Aplicando...' : 'Aplicar Auto-Fix'}
          </button>
        ) : mode === 'fixed' ? (
          <button
            type="button"
            onClick={handleReset}
            disabled={isRunning}
            className="px-2 py-0.5 rounded bg-[#1E293B] text-white hover:bg-[#25334A] transition-all text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
          >
            {isRunning ? 'Carregando...' : 'Simular Bloqueio'}
          </button>
        ) : null}
      </div>

      {/* Terminal Body Content */}
      <div className="p-5 text-[#E2E8F0] space-y-3 font-mono text-[12px] leading-relaxed overflow-x-auto scanline min-h-[340px]">
        {mode === 'blocked' && (
          <>
            <div className="text-[#64748B]">// Iniciando varredura automatizada no hook de pré-push</div>
            <div className="text-white flex items-center gap-2">
              <span className="text-[#38BDF8] font-bold">git-pipeline@t-access:~/enterprise$</span>
              <span className="text-[#FBBF24]">git push origin release/v4.12.0</span>
            </div>
            <div className="text-[#94A3B8]">
              [1/5] Fetching Headless AST DOM Tree... <span className="text-[#10B981]">OK (142ms)</span>
              <br />
              [2/5] Running Axe-core + Custom ABNT NBR 17255 Ruleset... <span className="text-[#10B981]">DONE</span>
              <br />
              [3/5] Simulating Screen Reader Focus Hierarchy (NVDA / VoiceOver)...{' '}
              <span className="text-[#10B981]">DONE</span>
            </div>

            {/* Failure Gate Box */}
            <div className="p-3 bg-[#EB4A4C]/10 border border-[#EB4A4C]/40 rounded-lg">
              <div className="text-[#EB4A4C] font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">cancel</span>
                [VIA::GATE_BLOCKED] 1 Violação Crítica detectada em CheckoutFlow.tsx:84
              </div>
              <div className="text-[#94A3B8] text-[11px] mt-1 pl-6">
                Critério WCAG 2.2 §2.5.8 (Target Size) + ABNT 17255 §7.4: Botão de pagamento &lt; 44x44px e sem
                rótulo acessível explícito.
              </div>
            </div>

            {/* Semantic Auto-Diff */}
            <div className="p-3 bg-[#131A26] border border-[#25334A] rounded-lg">
              <div className="text-[#38BDF8] font-semibold text-[11px] mb-1.5 flex items-center justify-between">
                <span>&gt;&gt; VIA Engine AST Auto-Remediation Sugerida:</span>
                <span className="text-[#10B981] font-bold">+100% Compliant</span>
              </div>
              <div className="text-[#EB4A4C] line-through bg-[#EB4A4C]/10 px-2 py-0.5 rounded overflow-x-auto">
                - &lt;button className="p-1" onClick=&#123;handlePay&#125;&gt;&lt;i className="fa-lock" /&gt;&lt;/button&gt;
              </div>
              <div className="text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded mt-1 overflow-x-auto">
                + &lt;button className="min-h-[48px] min-w-[48px] p-3" aria-label="Confirmar pagamento seguro via Pix"
                onClick=&#123;handlePay&#125;&gt;&lt;i aria-hidden="true" className="fa-lock" /&gt;&lt;/button&gt;
              </div>
            </div>

            {/* Summary Status */}
            <div className="pt-2 flex items-center justify-between border-t border-[#1E293B] text-[11px]">
              <span className="text-[#94A3B8] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                Audit Hash: <span className="text-white font-mono">0x9f4a...e12d (SHA-256)</span>
              </span>
              <span className="text-[#38BDF8] font-bold">Relatório exportado para SIEM / Legal</span>
            </div>
          </>
        )}

        {mode === 'fixed' && (
          <>
            <div className="text-[#64748B]">// Aplicando auto-remediação sintática via AST patcher</div>
            <div className="text-white flex items-center gap-2">
              <span className="text-[#38BDF8] font-bold">git-pipeline@t-access:~/enterprise$</span>
              <span className="text-[#10B981]">via auto-fix --apply-patch-ast CheckoutFlow.tsx</span>
            </div>
            <div className="p-3 bg-[#10B981]/10 border border-[#10B981]/40 rounded-lg">
              <div className="text-[#10B981] font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                [VIA::PATCH_SUCCESS] Patch aplicado: Elemento agora possui 48x48px e aria-label declarativo.
              </div>
              <div className="text-[#E2E8F0] text-[11px] mt-1 pl-6">
                Reavaliando pipeline de CI/CD com runner hermético...
              </div>
            </div>

            <div className="text-[#94A3B8] space-y-1">
              <div>[1/5] AST Semantic Structure Check: <span className="text-[#10B981]">PASSED (100%)</span></div>
              <div>[2/5] Target Size WCAG 2.2 §2.5.8: <span className="text-[#10B981]">PASSED (48x48px &ge; 44px)</span></div>
              <div>[3/5] ABNT NBR 17255 §7.4 Rótulos Explicitos: <span className="text-[#10B981]">PASSED</span></div>
              <div>[4/5] Emulação NVDA/VoiceOver Screen Reader: <span className="text-[#10B981]">PASSED (0 leaks)</span></div>
              <div>[5/5] Quality Gate Exit Code: <span className="text-[#10B981] font-bold">0 (SUCCESS)</span></div>
            </div>

            <div className="p-3 bg-[#131A26] border border-[#10B981]/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-[#10B981] text-[18px]">verified</span>
                <span className="font-bold text-[#10B981]">[VIA::GATE_PASSED]</span>
                <span>Pull Request #849 homologado para merge</span>
              </div>
              <span className="text-[#94A3B8] text-[10px]">Branch: release/v4.12.0</span>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#1E293B] text-[11px]">
              <span className="text-[#94A3B8] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                Laudo Final: <span className="text-white font-mono">0x4b7c...99a0 (Assinatura Digital)</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText('0x4b7c8e912c709b3d9e21145ba890123fe88ac99a0');
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="text-[#38BDF8] hover:text-white underline font-semibold cursor-pointer"
              >
                {copied ? 'Hash copiado!' : 'Copiar Hash SHA-256'}
              </button>
            </div>
          </>
        )}

        {mode === 'interactive' && (
          <div className="flex flex-col h-full justify-between gap-3">
            <div className="space-y-1 terminal-scroll max-h-[220px] overflow-y-auto pr-1">
              {interactiveLogs.map((log, i) => (
                <div
                  key={i}
                  className={
                    log.startsWith('$')
                      ? 'text-[#FBBF24] font-bold'
                      : log.startsWith('✓')
                      ? 'text-[#10B981]'
                      : log.startsWith('!')
                      ? 'text-[#EB4A4C]'
                      : log.startsWith('->') || log.startsWith('+')
                      ? 'text-[#38BDF8]'
                      : 'text-[#94A3B8]'
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Quick shortcuts */}
            <div className="pt-2 border-t border-[#1E293B] flex flex-wrap gap-1.5 text-[10px]">
              <span className="text-[#64748B] py-0.5">Comandos rápidos:</span>
              <button
                type="button"
                onClick={() => handleRunCommand('via scan --strict-nbr-17255')}
                className="px-2 py-0.5 rounded bg-[#131A26] border border-[#25334A] text-[#38BDF8] hover:bg-[#1E293B] cursor-pointer"
              >
                via scan
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('via fix --auto')}
                className="px-2 py-0.5 rounded bg-[#131A26] border border-[#25334A] text-[#10B981] hover:bg-[#1E293B] cursor-pointer"
              >
                via fix
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('via report --legal-sha')}
                className="px-2 py-0.5 rounded bg-[#131A26] border border-[#25334A] text-[#FBBF24] hover:bg-[#1E293B] cursor-pointer"
              >
                via report
              </button>
              <button
                type="button"
                onClick={() => handleRunCommand('clear')}
                className="px-2 py-0.5 rounded bg-[#131A26] border border-[#25334A] text-[#94A3B8] hover:bg-[#1E293B] cursor-pointer"
              >
                clear
              </button>
            </div>

            {/* Input field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunCommand(customCmd);
              }}
              className="flex items-center gap-2 bg-[#070A10] p-2 rounded border border-[#25334A]"
            >
              <span className="text-[#38BDF8] font-bold select-none">$</span>
              <input
                type="text"
                value={customCmd}
                onChange={(e) => setCustomCmd(e.target.value)}
                placeholder="Digite um comando (ex: via scan) e pressione Enter..."
                className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-[#475569]"
              />
              <button
                type="submit"
                className="px-2 py-1 rounded bg-[#38BDF8] text-[#0B0F17] font-bold text-[10px] hover:bg-[#7DD3FC] cursor-pointer shrink-0"
              >
                Executar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
