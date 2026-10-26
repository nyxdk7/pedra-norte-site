"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { DetalheFrente } from "@/components/atuacoes/DetalheFrente";
import { HeroAtuacoes } from "@/components/atuacoes/HeroAtuacoes";

const atuacoes = [
  {
    titulo: "Pavimentação",
    subtitulo: "Infraestrutura urbana e rodoviária",
    imagem: "/images/atuacoes/pavimentacao/pavimentacao.webp",
    imagensDetalhes: [
      "/images/atuacoes/pavimentacao/pavimentacao.webp",
      "/images/atuacoes/pavimentacao/pavimentacao2.webp",
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

const frentes = atuacoes.map((atuacao) => ({
  ...atuacao,
  slug: slugDaAtuacao(atuacao.titulo),
  ...fotosDoTopo[atuacao.titulo],
  fotos: atuacao.imagensDetalhes.map((src) => ({
    src,
    alt: `${atuacao.titulo}: ${atuacao.subtitulo.toLowerCase()}`,
  })),
}));

export default function AtuacoesPage() {
  const [ativa, setAtiva] = useState(0);

  // The old per-front anchors (/atuacoes#frente-pavimentacao) still work: they now choose
  // the panel instead of scrolling to a block of its own.
  useEffect(() => {
    const daHash = () => {
      const alvo = window.location.hash.replace("#frente-", "");
      const indice = frentes.findIndex((frente) => frente.slug === alvo);
      if (indice >= 0) setAtiva(indice);
    };
    daHash();
    window.addEventListener("hashchange", daHash);
    return () => window.removeEventListener("hashchange", daHash);
  }, []);

  const selecionar = (indice: number, revelar = false) => {
    setAtiva(indice);
    // The address bar follows the choice without the page jumping to the anchor.
    window.history.replaceState(null, "", `#frente-${frentes[indice].slug}`);
    // No `behavior` on purpose: the CSS `scroll-behavior` governs, and the reduced-motion
    // block already turns it to `auto`, so the jump is instant for whoever asked for that.
    if (revelar) {
      window.requestAnimationFrame(() => {
        document.getElementById("frente-detalhe")?.scrollIntoView({ block: "start" });
      });
    }
  };

  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <HeroAtuacoes
        titulo="Áreas de atuação com estrutura para atender obras e operações de diferentes portes."
        frentes={frentes}
        ativa={ativa}
        onSelecionar={selecionar}
      />

      {/* Keyed by front: choosing another remounts the region, so its photo queue starts
          at the first picture without an effect resetting it. */}
      <DetalheFrente key={frentes[ativa].slug} frente={frentes[ativa]} />

      <CtaBanner
        eyebrow="Atendimento institucional"
        title="Precisa de uma solução para sua obra?"
        description="Fale com a equipe do Grupo Soster e conheça as frentes de atuação, a estrutura operacional e os serviços disponíveis para o seu projeto."
        actions={
          <>
            <ButtonLink href="/contato" variant="light" size="lg">
              Falar com a equipe
            </ButtonLink>
            <ButtonLink href="/servicos" variant="outlineLight" size="lg">
              Ver serviços
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
