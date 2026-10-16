import { useState, type FormEvent } from 'react';

export function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section className="w-full py-24 bg-dark-bg" id="agendar-demonstracao">
      <div className="max-w-[1600px] mx-auto px-margin">
        <div className="bg-dark-card border border-dark-border rounded-2xl p-space-lg md:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-md text-left">
              <span className="font-code-inline text-code-inline text-brand-red uppercase tracking-wider font-semibold">
                Exclusivo para Lideranças Executivas
              </span>
              <h2 className="font-headline-xl text-headline-xl text-white tracking-tight font-bold">
                Agende um Diagnóstico Pericial Preliminar do seu Ecossistema
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Converse diretamente com as arquitetas de conformidade da t-access. Analisamos uma amostra dos seus
                domínios e apresentamos o mapa de exposição a riscos da LBI e NBR 17255 sem invasão de dados.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 font-body-md text-body-md text-white">
                  <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                    shield
                  </span>
                  <span>Sessão confidencial sob rigoroso acordo de confidencialidade (NDA)</span>
                </div>
                <div className="flex items-center gap-3 font-body-md text-body-md text-white">
                  <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                    timer
                  </span>
                  <span>Apresentação executiva de 30 minutos com dados empíricos</span>
                </div>
                <div className="flex items-center gap-3 font-body-md text-body-md text-white">
                  <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[20px]">
                    task_alt
                  </span>
                  <span>Entrega de parecer preliminar com orientações para a diretoria</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-dark-border flex items-center gap-2 font-code-inline text-code-inline text-on-surface-variant text-[12px]">
                <span aria-hidden="true" className="material-symbols-outlined text-brand-red text-[18px]">
                  lock
                </span>
                <span>Conformidade estrita com a LGPD e sigilo corporativo garantido.</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <form
                className="bg-surface-container-low border border-dark-border p-space-lg rounded-xl flex flex-col gap-space-md"
                id="pericial-demo-form"
                onSubmit={handleSubmit}
              >
                {submitted && (
                  <div
                    aria-live="polite"
                    className="p-4 rounded bg-dark-card border border-tertiary text-white font-body-md text-body-md flex items-start gap-3"
                    id="form-success-banner"
                    role="status"
                    tabIndex={-1}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-tertiary text-[22px]">
                      check_circle
                    </span>
                    <div>
                      <p className="font-semibold text-tertiary">Solicitação de Diagnóstico Registrada</p>
                      <p className="text-body-sm text-on-surface-variant">
                        Nossa assessoria técnica entrará em contato em até 4 horas úteis para formalizar o NDA e
                        confirmar o horário.
                      </p>
                    </div>
                  </div>
                )}
                <Field id="demo-name" name="nome" label="Nome e Sobrenome" required placeholder="Ex: Roberto Silveira" />
                <Field
                  id="demo-email"
                  name="email"
                  label="E-mail Corporativo"
                  required
                  type="email"
                  placeholder="nome@corporativo.com.br"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md text-left">
                  <Field id="demo-company" name="empresa" label="Instituição / Empresa" required placeholder="Empresa S/A" />
                  <Field id="demo-role" name="cargo" label="Função / Diretoria" placeholder="Ex: Diretor Jurídico / CTO" />
                </div>
                <Field
                  id="demo-url"
                  name="url"
                  label="Domínio / URL para Avaliação Amostral"
                  optional
                  type="url"
                  placeholder="https://app.suaempresa.com.br"
                />
                <button
                  className="mt-2 w-full min-h-[48px] h-12 inline-flex items-center justify-center gap-space-sm px-6 rounded-lg bg-brand-red text-white font-label-md text-label-md hover:bg-brand-red-hover transition-all font-bold"
                  type="submit"
                >
                  <span>Solicitar Diagnóstico Pericial</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
                    calendar_month
                  </span>
                </button>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-center pt-1">
                  Ao solicitar, seus dados corporativos são protegidos conforme a LGPD e direcionados com
                  exclusividade aos peritos da t-access.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  required,
  optional,
  type = 'text',
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  optional?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-space-xs text-left">
      <label className="font-label-md text-label-md text-white flex items-center justify-between" htmlFor={id}>
        <span>{label}</span>
        {required ? (
          <span className="font-code-inline text-code-inline text-on-surface-variant text-[11px]">Obrigatório</span>
        ) : optional ? (
          <span className="font-code-inline text-code-inline text-brand-red text-[11px] font-semibold">Opcional</span>
        ) : null}
      </label>
      <input
        aria-required={required || undefined}
        className="min-h-[44px] h-11 px-3 bg-dark-card border border-dark-border rounded text-white font-body-md text-body-md placeholder:text-outline focus-visible:outline-none focus-visible:border-brand-red focus-visible:ring-4 focus-visible:ring-brand-red/40 transition-all"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}
