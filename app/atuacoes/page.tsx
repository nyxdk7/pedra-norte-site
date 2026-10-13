"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { HeroAtuacoes } from "@/components/atuacoes/HeroAtuacoes";
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
    // Opens on the 1280px photograph; the 451px one stays in the series.
    imagem: "/images/atuacoes/pre-moldados/pre-moldados2.png",
    imagensDetalhes: [
      "/images/atuacoes/pre-moldados/pre-moldados2.png",
      "/images/atuacoes/pre-moldados/pre-moldados.png",
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

// Opening panels: the strongest high-resolution photograph of each front (real archive).
const fotosDoTopo: Record<string, { foto: string; posicao?: string }> = {
  "Pavimentação": { foto: "/images/galeria/home10.png", posicao: "60% 78%" },
  "Extração de minérios": { foto: "/images/galeria/home13.jpeg", posicao: "50% 40%" },
  "Pré-moldados": { foto: "/images/atuacoes/pre-moldados/pre-moldados2.png", posicao: "40% 50%" },
  "Edificações": { foto: "/images/atuacoes/edificacoes/edificacoes.png", posicao: "55% 40%" },
};

function slugDaAtuacao(titulo: string) {
  const semAcentos = titulo.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return semAcentos.replace(/[^a-zA-Z]+/g, "-").toLowerCase();
}

function idDaAtuacao(titulo: string) {
  return "atuacao-" + slugDaAtuacao(titulo);
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
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <HeroAtuacoes
        eyebrow="Principais atuações"
        titulo="Áreas de atuação com estrutura para atender obras e operações de diferentes portes."
        descricao="O Grupo Soster reúne frentes de atuação em pavimentação, extração de minérios, pré-moldados e edificações, conectando estrutura própria, experiência operacional e execução em campo."
        frentes={atuacoes.map((atuacao) => ({
          titulo: atuacao.titulo,
          subtitulo: atuacao.subtitulo,
          href: `#frente-${slugDaAtuacao(atuacao.titulo)}`,
          ...fotosDoTopo[atuacao.titulo],
        }))}
        acoes={
          <>
            <ButtonLink href="/contato" variant="primary" size="lg" className="group/cta">
              Solicitar orçamento
              <ArrowRight size={18} className="transition-transform duration-200 group-hover/cta:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/estrutura" variant="secondary" size="lg">
              Ver estrutura
            </ButtonLink>
          </>
        }
      />

      <section aria-labelledby="frentes-titulo" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-6">
              <Eyebrow>Onde atuamos</Eyebrow>
              <h2
                id="frentes-titulo"
                className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
              >
                Frentes de atuação do grupo.
              </h2>
            </div>

            <p className="font-serif text-lg leading-relaxed text-muted-strong lg:col-span-5 lg:col-start-8">
              Clique em uma área para expandir os detalhes. Ao abrir, as
              imagens começam a alternar automaticamente, destacando
              melhor cada frente de serviço.
            </p>
          </div>

          {/* Landscape photo essays, alternating sides; the photo is also the expand control */}
          <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
            {atuacoes.map((atuacao, index) => {
              const aberto = cardAberto === atuacao.titulo;
              const inverter = index % 2 !== 0;
              const imagemDoCard = obterImagemDoCard(atuacao);
              const idDetalhes = idDaAtuacao(atuacao.titulo);
              const indiceImagem = aberto ? (imagemAtualPorCard[atuacao.titulo] ?? 0) : 0;

              return (
                <article
                  key={atuacao.titulo}
                  id={`frente-${slugDaAtuacao(atuacao.titulo)}`}
                  className="grid gap-8 border-t border-border pt-10 md:grid-cols-12 md:items-center md:gap-8 md:border-t-0 md:pt-0 lg:gap-10"
                >
                  <button
                    type="button"
                    onClick={() => alternarCard(atuacao.titulo)}
                    className={`group relative aspect-[16/10] overflow-hidden rounded-card bg-ink text-left md:col-span-6 md:aspect-[4/3] lg:col-span-7 lg:aspect-[16/10] ${
                      inverter ? "md:order-2 md:col-start-7 lg:col-start-6" : ""
                    }`}
                    aria-expanded={aberto}
                    aria-controls={idDetalhes}
                    aria-label={`${aberto ? "Ocultar" : "Ver"} detalhes de ${atuacao.titulo}`}
                  >
                    <Image
                      key={imagemDoCard}
                      src={imagemDoCard}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
                      className={`object-cover object-center ${
                        aberto ? "gallery-image-enter" : "transition-transform duration-300 group-hover:scale-[1.02]"
                      }`}
                    />

                    {/* Technical annotation: which photograph of the series is on screen */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-ink/75 px-3.5 py-1.5 text-sm font-semibold tabular-nums text-white backdrop-blur"
                    >
                      <span className="h-px w-6 bg-accent" />
                      {String(indiceImagem + 1).padStart(2, "0")} / {String(atuacao.imagensDetalhes.length).padStart(2, "0")}
                    </span>
                  </button>

                  <div className={`md:col-span-6 lg:col-span-5 ${inverter ? "md:order-1 md:col-start-1" : ""}`}>
                    <p className="flex items-center gap-3 text-[0.9375rem] font-semibold text-brand">
                      <span aria-hidden="true" className="h-px w-8 bg-accent" />
                      {atuacao.subtitulo}
                    </p>

                    <h3 className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading">
                      {atuacao.titulo}
                    </h3>

                    <p className="mt-5 font-serif text-[length:var(--type-lead)] leading-[1.55] text-muted-strong">
                      {atuacao.resumo}
                    </p>

                    <div
                      id={idDetalhes}
                      className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                        aberto
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                      inert={!aberto}
                    >
                      <div className="overflow-hidden">
                        <p className="border-l-2 border-accent pl-5 font-serif leading-relaxed text-muted-strong">
                          {atuacao.descricao}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alternarCard(atuacao.titulo)}
                      className={buttonClasses(aberto ? "secondary" : "primary", "md", "mt-8")}
                      aria-expanded={aberto}
                      aria-controls={idDetalhes}
                    >
                      {aberto ? "Ocultar detalhes" : "Ver detalhes"}
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${aberto ? "rotate-180" : ""}`}
                      />
                    </button>
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
