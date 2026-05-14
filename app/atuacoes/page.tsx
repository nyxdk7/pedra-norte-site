"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const atuacoes = [
  {
    titulo: "Pavimentação",
    subtitulo: "Infraestrutura urbana e rodoviária",
    imagem: "/images/atuacoes/pavimentacao/pavimentacao.png",
    imagensDetalhes: [
      "/images/atuacoes/pavimentacao/pavimentacao.png",
      "/images/atuacoes/pavimentacao/pavimentacao2.png",
      "/images/atuacoes/pavimentacao/pavimentacao3.jpg",
      "/images/atuacoes/pavimentacao/pavimentacao4.jpg",
    ],
    resumo:
      "Execução de obras de pavimentação asfáltica com estrutura operacional, equipe técnica e suporte em campo.",
    descricao:
      "A atuação em pavimentação envolve serviços voltados à implantação, recuperação e melhoria de vias urbanas e rodoviárias. Com apoio de máquinas, equipe operacional e estrutura integrada, o grupo atua em obras que exigem planejamento, controle de execução e fornecimento de materiais adequados para cada etapa.",
  },
  {
    titulo: "Extração de minérios",
    subtitulo: "Produção de agregados minerais",
    imagem: "/images/atuacoes/extracao-minerios/extracao-minerios.png",
    imagensDetalhes: [
      "/images/atuacoes/extracao-minerios/extracao-minerios.png",
      "/images/atuacoes/extracao-minerios/pedreira%20(1).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(2).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(3).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(4).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(5).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(6).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(7).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(8).jpeg",
      "/images/atuacoes/extracao-minerios/pedreira%20(9).jpeg",
    ],
    resumo:
      "Operação de pedreira e produção de agregados minerais para obras, pavimentação, drenagem e concreto.",
    descricao:
      "A extração de minérios é uma das bases da operação do grupo, permitindo o fornecimento de agregados essenciais para diferentes tipos de obras. A produção atende demandas de pavimentação, concreto, drenagem, base, sub-base e infraestrutura em geral, fortalecendo a capacidade de entrega com insumos próprios.",
  },
  {
    titulo: "Pré-moldados",
    subtitulo: "Peças de concreto para obras",
    imagem: "/images/atuacoes/pre-moldados/pre-moldados.png",
    imagensDetalhes: [
      "/images/atuacoes/pre-moldados/pre-moldados.png",
      "/images/atuacoes/pre-moldados/pre-moldados2.png",
    ],
    resumo:
      "Produção de peças pré-moldadas de concreto para drenagem, urbanização e infraestrutura.",
    descricao:
      "A área de pré-moldados oferece soluções em concreto para obras que exigem padronização, resistência e agilidade na execução. As peças podem atender demandas de drenagem, urbanização, contenção, infraestrutura e apoio a obras civis, reduzindo tempo de execução e aumentando a eficiência em campo.",
  },  G
  {
    titulo: "Edificações",
    subtitulo: "Construção civil e obras estruturais",
    imagem: "/images/atuacoes/edificacoes/edificacoes.png",
    imagensDetalhes: [
      "/images/atuacoes/edificacoes/edificacoes.png",
      "/images/atuacoes/edificacoes/edificacoes2.png",
      "/images/atuacoes/edificacoes/edificacoes3.png",
      "/images/atuacoes/edificacoes/edificacoes4.png",
    ],
    resumo:
      "Atuação em construção civil, obras estruturais e edificações com foco técnico e execução planejada.",
    descricao:
      "A frente de edificações contempla obras civis e estruturais que demandam planejamento, acompanhamento técnico e execução de qualidade. Essa atuação amplia a capacidade do grupo para atender projetos institucionais, comerciais e operacionais, conectando construção civil à estrutura já existente nas demais áreas.",
  },
];

export default function AtuacoesPage() {
  const [cardAberto, setCardAberto] = useState<string | null>(null);

  const [imagemAtualPorCard, setImagemAtualPorCard] = useState<
    Record<string, number>
  >({});

  function alternarCard(titulo: string) {
    setCardAberto((atual) => (atual === titulo ? null : titulo));
  }

  useEffect(() => {
    if (!cardAberto) return;

    const atuacaoAberta = atuacoes.find(
      (atuacao) => atuacao.titulo === cardAberto
    );

    if (!atuacaoAberta || atuacaoAberta.imagensDetalhes.length <= 1) return;

    setImagemAtualPorCard((estadoAtual) => ({
      ...estadoAtual,
      [cardAberto]: estadoAtual[cardAberto] ?? 0,
    }));

    const intervalo = setInterval(() => {
      setImagemAtualPorCard((estadoAtual) => {
        const indiceAtual = estadoAtual[cardAberto] ?? 0;
        const proximoIndice =
          (indiceAtual + 1) % atuacaoAberta.imagensDetalhes.length;

        return {
          ...estadoAtual,
          [cardAberto]: proximoIndice,
        };
      });
    }, 3200);

    return () => clearInterval(intervalo);
  }, [cardAberto]);

  function obterImagemDoCard(atuacao: (typeof atuacoes)[number]) {
    const cardEstaAberto = cardAberto === atuacao.titulo;

    if (!cardEstaAberto) {
      return atuacao.imagem;
    }

    const indiceAtual = imagemAtualPorCard[atuacao.titulo] ?? 0;
    const imagemAtual = atuacao.imagensDetalhes[indiceAtual] || atuacao.imagem;

    return imagemAtual;
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/atuacoes/pavimentacao/pavimentacao.png"
            alt="Principais atuações do Grupo Soster"
            fill
            priority
            quality={100}
            className="object-cover object-center opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#143987]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Principais atuações
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Áreas de atuação com estrutura para atender obras e operações de
              diferentes portes.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              O Grupo Soster reúne frentes de atuação em pavimentação, extração
              de minérios, pré-moldados e edificações, conectando estrutura
              própria, experiência operacional e execução em campo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/estrutura"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver estrutura
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
                Onde atuamos
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Frentes de atuação do grupo.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-600">
              Clique em uma área para expandir os detalhes. Ao abrir, as
              imagens começam a alternar automaticamente, destacando
              melhor cada frente de serviço.
            </p>
          </div>

          <div className="mt-12 grid gap-7">
            {atuacoes.map((atuacao, index) => {
              const aberto = cardAberto === atuacao.titulo;
              const inverter = index % 2 !== 0;
              const imagemDoCard = obterImagemDoCard(atuacao);

              return (
                <article
                  key={atuacao.titulo}
                  className={`group overflow-hidden rounded-[2rem] border border-[#dbe5ff] bg-white shadow-sm shadow-[#dbe5ff] transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#dbe5ff] ${
                    aberto ? "ring-2 ring-[#143987]/20" : ""
                  }`}
                >
                  <div
                    className={`grid w-full text-left lg:grid-cols-2 ${
                      inverter ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => alternarCard(atuacao.titulo)}
                      className={`relative overflow-hidden bg-slate-950 text-left ${
                        aberto
                          ? "min-h-[420px] md:min-h-[500px]"
                          : "min-h-[340px] md:min-h-[430px]"
                      }`}
                      aria-expanded={aberto}
                    >
                      <Image
                        key={imagemDoCard}
                        src={imagemDoCard}
                        alt={atuacao.titulo}
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={`object-cover object-center transition duration-700 ${
                          aberto ? "scale-100" : "group-hover:scale-105"
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                      <div className="absolute inset-0 bg-[#143987]/0 transition duration-500 group-hover:bg-[#143987]/15" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                          {atuacao.subtitulo}
                        </span>

                        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                          {atuacao.titulo}
                        </h3>
                      </div>
                    </button>

                    <div className="flex min-h-[340px] flex-col justify-between p-7 md:p-10">
                      <div>
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                              {atuacao.titulo}
                            </h3>
                          </div>

                          <button
                            type="button"
                            onClick={() => alternarCard(atuacao.titulo)}
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#dbe5ff] bg-[#eaf0ff] text-[#143987] transition duration-300 ${
                              aberto ? "rotate-180" : ""
                            }`}
                            aria-label={
                              aberto ? "Ocultar detalhes" : "Ver detalhes"
                            }
                            aria-expanded={aberto}
                          >
                            <ChevronDown size={24} strokeWidth={2.3} />
                          </button>
                        </div>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                          {atuacao.resumo}
                        </p>

                        <div
                          className={`grid transition-all duration-500 ${
                            aberto
                              ? "mt-6 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="rounded-3xl border border-[#dbe5ff] bg-[#f8fbff] p-5">
                              <p className="leading-8 text-slate-600">
                                {atuacao.descricao}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => alternarCard(atuacao.titulo)}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#143987] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
                          aria-expanded={aberto}
                        >
                          {aberto ? "Ocultar detalhes" : "Ver detalhes"}
                          <ChevronDown
                            size={18}
                            className={`transition duration-300 ${
                              aberto ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#143987] p-8 text-white shadow-2xl shadow-[#dbe5ff] md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#8fb1ff]/20 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wide text-white/70">
                  Atendimento institucional
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
                  Precisa de uma solução para sua obra?
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-white/85">
                  Fale com o Grupo Soster e conheça as possibilidades de atuação
                  para pavimentação, mineração, pré-moldados e edificações.
                </p>
              </div>

              <Link
                href="/contato"
                className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}