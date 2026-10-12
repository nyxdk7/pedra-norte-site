"use client";

import type { FormEvent } from "react";

const whatsappNumero = "5568999851248";

function enviarPeloWhatsApp(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formulario = new FormData(event.currentTarget);
  const nome = String(formulario.get("nome") ?? "").trim();
  const telefone = String(formulario.get("telefone") ?? "").trim();
  const email = String(formulario.get("email") ?? "").trim();
  const assunto = String(formulario.get("assunto") ?? "").trim();
  const mensagem = String(formulario.get("mensagem") ?? "").trim();

  if (!nome || !telefone || !assunto || !mensagem) return;

  const texto = [
    "Olá! Gostaria de entrar em contato com a MSM Industrial / Pedra Norte.",
    "",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    ...(email ? [`E-mail: ${email}`] : []),
    `Assunto: ${assunto}`,
    `Mensagem: ${mensagem}`,
  ].join("\n");

  // O envio é confirmado pelo usuário dentro do WhatsApp.
  window.location.assign(`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(texto)}`);
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white pt-32 text-slate-950">
      <section className="relative overflow-hidden px-6 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#eaf0ff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              Contato
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Fale com a MSM Industrial.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Entre em contato com nossa equipe para solicitar orçamento,
              informações sobre produtos, serviços ou atendimento comercial.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#dbe5ff] bg-white p-8 shadow-sm shadow-[#dbe5ff]">
                <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
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
                  href="https://wa.me/5568999851248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-[#143987] px-6 py-3 font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["WhatsApp", "(68) 99985-1248", "Atendimento comercial pelo WhatsApp."],
                  ["E-mail", "pedranorte@msmind.com.br", "Envie sua solicitação ou proposta comercial."],
                  ["Sede administrativa", "Rio Branco - Acre", "Atendimento administrativo e comercial."],
                  ["Atuação", "Região Norte", "Soluções para obras, engenharia e infraestrutura."],
                ].map(([titulo, valor, descricao], index) => (
                  <div
                    key={titulo}
                    className={`rounded-3xl border border-[#dbe5ff] p-6 shadow-sm shadow-[#dbe5ff] ${
                      index === 0 ? "bg-[#eaf0ff]" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                      {titulo}
                    </span>
                    <p className="mt-3 text-lg font-bold text-slate-950">
                      {valor}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{descricao}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#dbe5ff] bg-white p-6 shadow-sm shadow-[#dbe5ff]">
              <h2 className="text-2xl font-bold text-slate-950">
                Envie uma mensagem
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Preencha os dados abaixo para preparar sua mensagem de atendimento pelo WhatsApp.
              </p>

              <form onSubmit={enviarPeloWhatsApp} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full rounded-xl border border-[#dbe5ff] bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#143987] focus:ring-4 focus:ring-[#eaf0ff]"
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
                      name="telefone"
                      required
                      type="text"
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-xl border border-[#dbe5ff] bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#143987] focus:ring-4 focus:ring-[#eaf0ff]"
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
                      name="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      className="w-full rounded-xl border border-[#dbe5ff] bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#143987] focus:ring-4 focus:ring-[#eaf0ff]"
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
                    name="assunto"
                    required
                    className="w-full rounded-xl border border-[#dbe5ff] bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#143987] focus:ring-4 focus:ring-[#eaf0ff]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="Solicitar orçamento">Solicitar orçamento</option>
                    <option value="Produtos e agregados">Produtos e agregados</option>
                    <option value="Concreto usinado">Concreto usinado</option>
                    <option value="Pavimentação">Pavimentação</option>
                    <option value="Outro assunto">Outro assunto</option>
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
                    name="mensagem"
                    required
                    rows={6}
                    placeholder="Descreva sua solicitação..."
                    className="w-full resize-none rounded-xl border border-[#dbe5ff] bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#143987] focus:ring-4 focus:ring-[#eaf0ff]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#143987] px-6 py-3 font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
                >
                  Continuar pelo WhatsApp
                </button>

                <p className="text-center text-sm text-slate-500">
                  Ao continuar, o WhatsApp abrirá com a mensagem preenchida.
                  Confira os dados e toque em enviar para concluir o contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0ff] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white shadow-sm shadow-[#dbe5ff]">
            <div className="p-8">
              <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                Localização
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Atendimento regional
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                A MSM Industrial LTDA atua com soluções para engenharia civil,
                obras, infraestrutura e fornecimento de insumos.
              </p>
            </div>

            <div className="h-80 bg-[#eaf0ff]">
              <iframe
                title="Mapa MSM Industrial"
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