"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Eyebrow } from "@/components/ui/Section";
import { useReducedMotion } from "@/components/ui/useReducedMotion";

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
  },  
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

function idDaAtuacao(titulo: string) {
  const semAcentos = titulo.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return "atuacao-" + semAcentos.replace(/[^a-zA-Z]+/g, "-").toLowerCase();
}

export default function AtuacoesPage() {
  const [cardAberto, setCardAberto] = useState<string | null>(null);
  const reduzirMovimento = useReducedMotion();

  const [imagemAtualPorCard, setImagemAtualPorCard] = useState<
    Record<string, number>
  >({});

  function alternarCard(titulo: string) {
    setCardAberto((atual) => (atual === titulo ? null : titulo));
  }

  useEffect(() => {
    if (!cardAberto || reduzirMovimento) return;

    const atuacaoAberta = atuacoes.find(
      (atuacao) => atuacao.titulo === cardAberto
    );

    if (!atuacaoAberta || atuacaoAberta.imagensDetalhes.length <= 1) return;

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
  }, [cardAberto, reduzirMovimento]);

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
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Principais atuações"
        title="Áreas de atuação com estrutura para atender obras e operações de diferentes portes."
        image="/images/atuacoes/pavimentacao/pavimentacao.png"
        imageAlt="Principais atuações do Grupo Soster"
        description={
          <p>
            O Grupo Soster reúne frentes de atuação em pavimentação, extração
            de minérios, pré-moldados e edificações, conectando estrutura
            própria, experiência operacional e execução em campo.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/contato" variant="light" size="lg">
              Solicitar orçamento
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/estrutura" variant="outlineLight" size="lg">
              Ver estrutura
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="frentes-titulo" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>Onde atuamos</Eyebrow>
              <h2
                id="frentes-titulo"
                className="mt-4 text-3xl font-bold leading-[1.1] text-heading md:text-[2.75rem]"
              >
                Frentes de atuação do grupo.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-strong">
              Clique em uma área para expandir os detalhes. Ao abrir, as
              imagens começam a alternar automaticamente, destacando
              melhor cada frente de serviço.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {atuacoes.map((atuacao, index) => {
              const aberto = cardAberto === atuacao.titulo;
              const inverter = index % 2 !== 0;
              const imagemDoCard = obterImagemDoCard(atuacao);
              const idDetalhes = idDaAtuacao(atuacao.titulo);

              return (
                <article
                  key={atuacao.titulo}
                  className={`overflow-hidden rounded-panel border bg-white transition-[border-color,box-shadow] duration-300 ${
                    aberto ? "border-brand shadow-brand-soft" : "border-border"
                  }`}
                >
                  <div className="grid lg:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => alternarCard(atuacao.titulo)}
                      className={`group relative overflow-hidden bg-neutral-900 text-left transition-[min-height] duration-500 ${
                        aberto
                          ? "min-h-[320px] md:min-h-[480px]"
                          : "min-h-[260px] md:min-h-[400px]"
                      } ${inverter ? "lg:order-2" : ""}`}
                      aria-expanded={aberto}
                      aria-controls={idDetalhes}
                      aria-label={`${aberto ? "Ocultar" : "Ver"} detalhes de ${atuacao.titulo}`}
                    >
                      <Image
                        key={imagemDoCard}
                        src={imagemDoCard}
                        alt=""
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={`object-cover object-center transition-transform duration-700 ${
                          aberto ? "gallery-image-enter" : "group-hover:scale-[1.03]"
                        }`}
                      />

                      <div aria-hidden="true" className="scrim-bottom absolute inset-0" />

                      <div aria-hidden="true" className="absolute inset-x-6 bottom-6">
                        <p className="text-sm font-semibold text-white">
                          {atuacao.subtitulo}
                        </p>
                        <p className="mt-1 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                          {atuacao.titulo}
                        </p>
                      </div>
                    </button>

                    <div className="flex flex-col justify-between p-6 md:p-10">
                      <div>
                        <p className="flex items-center gap-3 text-sm font-semibold text-brand">
                          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-accent" />
                          {atuacao.subtitulo}
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-heading md:text-4xl">
                          {atuacao.titulo}
                        </h3>

                        <p className="mt-4 text-lg leading-relaxed text-muted-strong">
                          {atuacao.resumo}
                        </p>

                        <div
                          id={idDetalhes}
                          className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ${
                            aberto
                              ? "mt-6 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                          inert={!aberto}
                        >
                          <div className="overflow-hidden">
                            <p className="border-l-2 border-accent pl-5 leading-relaxed text-muted-strong">
                              {atuacao.descricao}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          type="button"
                          onClick={() => alternarCard(atuacao.titulo)}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-control bg-brand px-5 text-sm font-semibold text-white shadow-brand-soft transition-colors hover:bg-brand-hover"
                          aria-expanded={aberto}
                          aria-controls={idDetalhes}
                        >
                          {aberto ? "Ocultar detalhes" : "Ver detalhes"}
                          <ChevronDown
                            size={18}
                            aria-hidden="true"
                            className={`transition-transform duration-300 ${
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
        </Container>
      </section>

      <CtaBanner
        eyebrow="Atendimento institucional"
        title="Precisa de uma solução para sua obra?"
        description="Fale com o Grupo Soster e conheça as possibilidades de atuação para pavimentação, mineração, pré-moldados e edificações."
        actions={
          <ButtonLink href="/contato" variant="light" size="lg">
            Fale conosco
          </ButtonLink>
        }
      />
    </main>
  );
}
