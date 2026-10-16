import { useState, type FormEvent } from 'react';

interface ScanRequestSectionProps {
  onStartLiveScan: (target: string) => void;
}

export function ScanRequestSection({ onStartLiveScan }: ScanRequestSectionProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    cargo: '',
    url: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLaunchDirectScan = () => {
    onStartLiveScan(formData.url || 'https://app.suaempresa.com.br');
  };

  return (
    <section className="w-full py-24 bg-[#0B0F17]" id="agendar-demonstracao">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="bg-[#131A26] border border-[#25334A] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Pitch */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-mono text-xs sm:text-sm text-[#38BDF8] uppercase tracking-wider font-semibold">
                Análise Técnica Sob Demanda
              </span>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight font-bold">
                Solicite um Scan Diagnóstico do seu Repositório ou Domínio
              </h2>

              <p className="font-body text-base text-[#94A3B8] leading-relaxed">
                Nossa equipe de engenharia e perícia jurídica executará uma varredura demonstrativa com o{' '}
                <strong className="text-white">VIA</strong> no seu sistema, identificando vulnerabilidades críticas
                antes da sua próxima release.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 font-body text-sm text-white">
                  <span className="material-symbols-outlined text-[#10B981] text-[20px] shrink-0">verified</span>
                  <span>Varredura não invasiva (zero acesso a dados confidenciais de usuários)</span>
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-white">
                  <span className="material-symbols-outlined text-[#10B981] text-[20px] shrink-0">timer</span>
                  <span>Apresentação técnica de 30 minutos com dados reais do seu ecossistema</span>
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-white">
                  <span className="material-symbols-outlined text-[#10B981] text-[20px] shrink-0">description</span>
                  <span>Modelo de Laudo Técnico Pericial alinhado com a ABNT NBR 17255</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
                <span className="material-symbols-outlined text-[#EB4A4C] text-[18px]">lock</span>
                <span>Proteção total sob NDA formal e aderência integral à LGPD.</span>
              </div>
            </div>

            {/* High Precision Lead Form */}
            <div className="lg:col-span-6">
              <form
                className="bg-[#0B0F17] border border-[#25334A] p-6 sm:p-8 rounded-xl flex flex-col gap-4 shadow-inner"
                onSubmit={handleSubmit}
              >
                {submitted && (
                  <div
                    aria-live="polite"
                    className="p-4 rounded-lg bg-[#131A26] border border-[#10B981] text-white font-body text-sm flex flex-col gap-3"
                    role="status"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#10B981] text-[22px] shrink-0">
                        check_circle
                      </span>
                      <div>
                        <p className="font-semibold text-[#10B981]">Solicitação de Scan VIA recebida!</p>
                        <p className="text-xs text-[#94A3B8] mt-0.5">
                          Nossa engenharia entrará em contato para agendar o diagnóstico seguro da sua aplicação.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleLaunchDirectScan}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-[#38BDF8] text-[#0B0F17] font-mono text-xs font-bold hover:bg-[#7DD3FC] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">play_circle</span>
                      <span>Executar Simulação de Scan Interativa Agora</span>
                    </button>
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-white flex items-center justify-between" htmlFor="demo-name">
                    <span>Nome do Responsável</span>
                    <span className="text-[#64748B]">[Obrigatório]</span>
                  </label>
                  <input
                    aria-required="true"
                    className="min-h-[48px] px-3 bg-[#131A26] border border-[#25334A] rounded text-white font-body text-sm placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40 transition-all"
                    id="demo-name"
                    name="nome"
                    placeholder="Ex: Roberto Albuquerque"
                    required
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-white flex items-center justify-between" htmlFor="demo-email">
                    <span>E-mail Corporativo</span>
                    <span className="text-[#64748B]">[Obrigatório]</span>
                  </label>
                  <input
                    aria-required="true"
                    className="min-h-[48px] px-3 bg-[#131A26] border border-[#25334A] rounded text-white font-body text-sm placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40 transition-all"
                    id="demo-email"
                    name="email"
                    placeholder="roberto@suaempresa.com.br"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Company & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-white" htmlFor="demo-company">
                      Empresa / Organização
                    </label>
                    <input
                      aria-required="true"
                      className="min-h-[48px] px-3 bg-[#131A26] border border-[#25334A] rounded text-white font-body text-sm placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40 transition-all"
                      id="demo-company"
                      name="empresa"
                      placeholder="Empresa S.A."
                      required
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-mono text-xs text-white" htmlFor="demo-role">
                      Cargo / Disciplina
                    </label>
                    <input
                      className="min-h-[48px] px-3 bg-[#131A26] border border-[#25334A] rounded text-white font-body text-sm placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40 transition-all"
                      id="demo-role"
                      name="cargo"
                      placeholder="Ex: VP Eng / Legal / ESG"
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    />
                  </div>
                </div>

                {/* URL / Repo Target */}
                <div className="flex flex-col gap-1">
                  <label className="font-mono text-xs text-white flex items-center justify-between" htmlFor="demo-url">
                    <span>URL ou Repositório Alvo</span>
                    <span className="text-[#38BDF8]">[Para Diagnóstico Preliminar]</span>
                  </label>
                  <input
                    className="min-h-[48px] px-3 bg-[#131A26] border border-[#25334A] rounded text-white font-body text-sm placeholder:text-[#64748B] focus-visible:outline-none focus-visible:border-[#38BDF8] focus-visible:ring-4 focus-visible:ring-[#38BDF8]/40 transition-all"
                    id="demo-url"
                    name="url"
                    placeholder="https://app.suaempresa.com.br"
                    type="url"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  className="mt-2 w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 rounded-lg bg-[#EB4A4C] text-white font-mono text-sm hover:bg-[#D83A3C] transition-all shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#38BDF8] font-bold cursor-pointer"
                  type="submit"
                >
                  <span>EXECUTAR ANÁLISE DE REPOSITÓRIO</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>

                <p className="font-body text-[11px] text-[#64748B] text-center">
                  Dados protegidos sob rigoroso acordo de confidencialidade técnica (NDA).
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
