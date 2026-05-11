export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white pt-32 text-slate-950">
      <section className="relative overflow-hidden px-6 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#e0f2fe,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Contato
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Fale com a Pedra Norte.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Entre em contato com nossa equipe para solicitar orçamento,
              informações sobre produtos, serviços ou atendimento comercial.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100">
                <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                  Atendimento comercial
                </span>

                <h2 className="mt-3 text-2xl font-bold text-slate-950">
                  Solicite uma proposta
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Nossa equipe está pronta para atender empresas, obras,
                  construtoras, órgãos públicos e parceiros comerciais.
                </p>

                <a
                  href="https://wa.me/556899851248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
                  <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                    Telefone
                  </span>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    (68) 99999-9999
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Atendimento em horário comercial.
                  </p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
                  <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                    E-mail
                  </span>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    contato@pedranorte.com.br
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Envie sua solicitação ou proposta comercial.
                  </p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
                  <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                    Sede administrativa
                  </span>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    Rio Branco - Acre
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Atendimento administrativo e comercial.
                  </p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
                  <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                    Unidade mineradora
                  </span>
                  <p className="mt-3 text-lg font-bold text-slate-950">
                    Rondônia
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Produção mineral e fornecimento de agregados.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <h2 className="text-2xl font-bold text-slate-950">
                Envie uma mensagem
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Preencha os dados abaixo e nossa equipe entrará em contato.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="telefone"
                      type="text"
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    className="w-full rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="orcamento">Solicitar orçamento</option>
                    <option value="produtos">Produtos e agregados</option>
                    <option value="concreto">Concreto usinado</option>
                    <option value="pavimentacao">Pavimentação</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={6}
                    placeholder="Descreva sua solicitação..."
                    className="w-full resize-none rounded-xl border border-sky-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Enviar mensagem
                </button>

                <p className="text-center text-sm text-slate-500">
                  No momento, este formulário é apenas visual. Depois podemos
                  conectar com e-mail, WhatsApp ou banco de dados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm shadow-sky-100">
            <div className="p-8">
              <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                Localização
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Atendimento regional
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                A Pedra Norte possui sede administrativa em Rio Branco, Acre, e
                atuação ligada à mineração e fornecimento de produtos na região
                amazônica.
              </p>
            </div>

            <div className="h-80 bg-sky-100">
              <iframe
                title="Mapa Pedra Norte"
                src="https://www.google.com/maps?q=Rio%20Branco%20Acre&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}