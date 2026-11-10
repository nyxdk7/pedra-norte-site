"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { DetalheFrente } from "@/components/atuacoes/DetalheFrente";
import { HeroAtuacoes } from "@/components/atuacoes/HeroAtuacoes";

/* The four fronts, in the order the home page names them: engenharia, terraplanagem,
   pavimentação e mineração. Each is shown by one panel above and one detail region below,
   and the portfolio of each is made only of works this company executed. */
const atuacoes = [
  {
    titulo: "Engenharia",
    subtitulo: "Construção civil e obras estruturais",
    imagensDetalhes: [
      {
        src: "/images/atuacoes/edificacoes/edificacoes4.png",
        alt: "Betoneira da Pedra Norte Concretos junto à estrutura escorada em formas de madeira",
      },
      {
        src: "/images/atuacoes/edificacoes/edificacoes3.png",
        alt: "Betoneira e bomba de concreto posicionadas para a concretagem da fundação",
      },
      {
        src: "/images/atuacoes/edificacoes/edificacoes2.png",
        alt: "Betoneira abastecendo obra de edificação comercial já em fase de acabamento",
      },
      {
        src: "/images/atuacoes/edificacoes/edificacoes.png",
        alt: "Bomba lançando concreto na laje de um edifício em estrutura, abastecida pela betoneira",
      },
    ],
    resumo:
      "Execução de obras civis e estruturais, com equipe técnica, acompanhamento de projeto e concreto de central própria.",
    descricao:
      "A frente de engenharia contempla obras civis e estruturais que demandam planejamento, acompanhamento técnico e execução de qualidade. Essa atuação amplia a capacidade do grupo para atender projetos institucionais, comerciais e operacionais, conectando construção civil à estrutura já existente nas demais áreas.",
  },
  {
    titulo: "Terraplanagem",
    subtitulo: "Movimentação de terra e preparo do leito",
    imagensDetalhes: [
      {
        src: "/images/galeria/home7.webp",
        alt: "Escavadeira Komatsu PC240 espalhando rachão na base da pista, com caminhão basculante descarregando ao lado",
        foco: "object-[58%_50%]",
      },
      {
        src: "/images/obras/dnit-br-364-aeroporto-macadame/caminhoes-terraplenagem-aerea.jpg",
        alt: "Vista aérea da fila de caminhões basculantes na terraplenagem da nova pista da BR-364",
      },
      {
        src: "/images/obras/deracre-arco-viario/terraplenagem-escavadeira-aerea.jpg",
        alt: "Vista aérea da terraplenagem do arco viário, com escavadeira carregando caminhão basculante e pá carregadeira no leito de solo",
      },
      {
        src: "/images/obras/deracre-arco-viario/frente-servico-maquinas.jpg",
        alt: "Scraper e caminhões basculantes na frente de serviço do arco viário, entre os taludes de corte",
      },
    ],
    resumo:
      "Abertura de corredor, cortes, aterros e regularização do leito, com frota de tratores, escavadeiras e caminhões basculantes.",
    descricao:
      "A terraplanagem é a etapa que abre e conforma a obra: abertura do corredor, cortes e aterros, transporte de material e regularização do leito até a cota de projeto. É a frente executada no Arco Metropolitano de Rio Branco e na reconstrução da BR-364, com trator de esteiras, scrapers, escavadeiras e frota própria de caminhões basculantes.",
  },
  {
    titulo: "Pavimentação",
    subtitulo: "Infraestrutura urbana e rodoviária",
    imagensDetalhes: [
      {
        src: "/images/galeria/home10.webp",
        alt: "Retroescavadeira com a concha cheia de massa asfáltica quente, soltando vapor na frente de serviço",
        foco: "object-[64%_50%]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-intersecao-aerea.jpg",
        alt: "Vista aérea do entroncamento rodoviário asfaltado e sinalizado na região de Xapuri, Acre",
        foco: "object-[50%_78%]",
      },
      {
        src: "/images/estrutura/usina-asfalto.jpg",
        alt: "Usina de asfalto Ammann em operação na planta do grupo",
        foco: "object-[24%_center]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-curva-aerea.jpg",
        alt: "Vista aérea de rodovia recém-asfaltada, com faixa dupla amarela, cortando os taludes da variante",
        foco: "object-[45%_60%]",
      },
    ],
    resumo:
      "Execução de obras de pavimentação asfáltica com estrutura operacional, equipe técnica e suporte em campo.",
    descricao:
      "A atuação em pavimentação envolve serviços voltados à implantação, recuperação e melhoria de vias urbanas e rodoviárias. Com apoio de máquinas, equipe operacional e estrutura integrada, o grupo atua em obras que exigem planejamento, controle de execução e fornecimento de materiais adequados para cada etapa.",
  },
  {
    titulo: "Mineração",
    subtitulo: "Produção de agregados minerais",
    imagensDetalhes: [
      {
        src: "/images/atuacoes/extracao-minerios/escavadeira-cat-concha-sobre-caminhao.jpg",
        alt: "Escavadeira CAT com a concha cheia de rocha sobre caminhão fora de estrada Muller na frente de lavra",
        foco: "object-[32%_50%]",
      },
      {
        src: "/images/atuacoes/extracao-minerios/carregadeira-wa470-rocha.jpg",
        alt: "Pá carregadeira Komatsu WA470 com a concha cheia de rocha no pátio da pedreira",
        foco: "object-[50%_70%]",
      },
      {
        src: "/images/atuacoes/extracao-minerios/escavadeiras-cat-bancada.jpg",
        alt: "Duas escavadeiras CAT trabalhando a rocha desmontada na bancada da pedreira",
      },
      {
        src: "/images/atuacoes/extracao-minerios/pedreira%20(3).jpeg",
        alt: "Planta de britagem em operação, com as correias e as peneiras sobre as pilhas de agregado",
      },
    ],
    resumo:
      "Operação de pedreira e produção de agregados minerais para obras, pavimentação, drenagem e concreto.",
    descricao:
      "A mineração é uma das bases da operação do grupo, permitindo o fornecimento de agregados essenciais para diferentes tipos de obras. A produção atende demandas de pavimentação, concreto, drenagem, base, sub-base e infraestrutura em geral, fortalecendo a capacidade de entrega com insumos próprios.",
  },
];

/* Opening panels. Each panel is a tall slice (about 790 x 950 on a desktop screen), so the
   photograph is chosen for a vertical reading — a line that runs from the foot of the frame
   to the top — and for resolution: anything under ~1200px wide is visibly soft blown up to
   a panel. `posicao` is the object-position that keeps the subject inside the slice. */
const fotosDoTopo: Record<string, { foto: string; posicao?: string }> = {
  /* Drone over the bridge head on the BR-364: the deck runs the height of the panel, the
     abutment is open below it with the crew and the excavator at work. An obra de arte is
     the clearest reading of "obras estruturais" the archive has, and it is a 1280px
     photograph against the 1032px of the building ones. */
  "Engenharia": {
    foto: "/images/obras/dnit-br-364-cabeceira-ponte/ponte-vista-aerea.jpg",
    posicao: "50% 50%",
  },
  // Drone, 2560px: the corridor opening through the forest, raw earth — the opposite
  // reading to the finished carriageway two panels along.
  "Terraplanagem": {
    foto: "/images/obras/deracre-arco-viario/abertura-corredor-aerea.jpg",
    posicao: "50% 50%",
  },
  // Drone, 2560px: the new carriageway running to the horizon, markings fresh.
  "Pavimentação": {
    foto: "/images/obras/deracre-ct-10012-ac-380/variante-reta-horizonte.jpg",
    posicao: "50% 50%",
  },
  // 2560px: the Sandvik drill at the rock face, its mast running the height of the panel.
  "Mineração": {
    foto: "/images/atuacoes/extracao-minerios/perfuratriz-sandvik-frente-lavra.jpg",
    posicao: "27% 50%",
  },
};

function slugDaAtuacao(titulo: string) {
  const semAcentos = titulo.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return semAcentos.replace(/[^a-zA-Z]+/g, "-").toLowerCase();
}

const frentes = atuacoes.map((atuacao) => ({
  ...atuacao,
  slug: slugDaAtuacao(atuacao.titulo),
  ...fotosDoTopo[atuacao.titulo],
  fotos: atuacao.imagensDetalhes,
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
        titulo="Soluções integradas em infraestrutura e construção: da extração ao concreto, em todas as etapas da obra."
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
            <ButtonLink href="/estrutura" variant="outlineLight" size="lg">
              Ver a estrutura
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
