import { useState, useEffect } from 'react';

export function A11yToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('contrast-125');
    } else {
      document.documentElement.classList.remove('contrast-125');
    }
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.remove('text-[15px]', 'text-[17px]', 'text-[19px]');
    if (fontSize === 'large') {
      document.documentElement.classList.add('text-[17px]');
    } else if (fontSize === 'xlarge') {
      document.documentElement.classList.add('text-[19px]');
    } else {
      document.documentElement.classList.add('text-[15px]');
    }
  }, [fontSize]);

  useEffect(() => {
    if (underlineLinks) {
      document.body.classList.add('underline-links-mode');
    } else {
      document.body.classList.remove('underline-links-mode');
    }
  }, [underlineLinks]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="bg-[#131A26] border border-[#25334A] rounded-2xl p-4 shadow-2xl text-left w-64 mb-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
            <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">accessibility</span>
              Acessibilidade
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-[#94A3B8] hover:text-white cursor-pointer"
              aria-label="Fechar painel de acessibilidade"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="py-3 space-y-3 text-xs font-body">
            {/* Font size */}
            <div>
              <span className="text-[#94A3B8] block mb-1 font-mono text-[11px]">Tamanho do Texto</span>
              <div className="grid grid-cols-3 gap-1 bg-[#0B0F17] p-1 rounded border border-[#1E293B]">
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`py-1 rounded text-center cursor-pointer ${
                    fontSize === 'normal' ? 'bg-[#38BDF8] text-[#0B0F17] font-bold' : 'text-[#94A3B8]'
                  }`}
                >
                  Padrão
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`py-1 rounded text-center cursor-pointer ${
                    fontSize === 'large' ? 'bg-[#38BDF8] text-[#0B0F17] font-bold' : 'text-[#94A3B8]'
                  }`}
                >
                  +15%
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`py-1 rounded text-center cursor-pointer ${
                    fontSize === 'xlarge' ? 'bg-[#38BDF8] text-[#0B0F17] font-bold' : 'text-[#94A3B8]'
                  }`}
                >
                  +30%
                </button>
              </div>
            </div>

            {/* Contrast toggle */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[#E2E8F0] font-medium">Alto Contraste</span>
              <button
                type="button"
                onClick={() => setHighContrast(!highContrast)}
                className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                  highContrast ? 'bg-[#10B981]' : 'bg-[#1E293B]'
                }`}
                aria-pressed={highContrast}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    highContrast ? 'left-5' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Underline links */}
            <div className="flex items-center justify-between">
              <span className="text-[#E2E8F0] font-medium">Sublinhar Links</span>
              <button
                type="button"
                onClick={() => setUnderlineLinks(!underlineLinks)}
                className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${
                  underlineLinks ? 'bg-[#10B981]' : 'bg-[#1E293B]'
                }`}
                aria-pressed={underlineLinks}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    underlineLinks ? 'left-5' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1E293B] text-[10px] text-[#64748B] font-mono text-center">
            Padrão WCAG 2.2 AAA &amp; NBR 17255
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir opções de acessibilidade da página"
        className="w-12 h-12 rounded-full bg-[#131A26] border border-[#38BDF8]/40 hover:border-[#38BDF8] text-[#38BDF8] hover:text-white flex items-center justify-center shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8]"
      >
        <span className="material-symbols-outlined text-[24px]">accessibility_new</span>
      </button>
    </div>
  );
}
