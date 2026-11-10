"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

/**
 * The group's chain as seven photographic stages — the quarry, the crushing plant, the
 * asphalt and concrete plants, the precast yard, the fleet and a delivered road — read
 * in order, 01 to 07. The photographs carry the section: each card is the picture, a
 * number and a name, nothing laid over it but the shade the title needs to be read.
 *
 * A stage with one segment is itself the control; a stage with several lists them as
 * chips. Choosing one fills the reading panel with that segment's own photograph and
 * description. Numbers derive from the order below, so adding a stage or a segment
 * renumbers the board by itself.
 */

type Segmento = {
  id: string;
  /** Short name on the marker chip. */
  chip: string;
  /** Full name in the reading panel. */
  nome: string;
  descricao: string;
  foto: string;
  alt: string;
  foco?: string;
};

type Etapa = {
  id: string;
  titulo: string;
  foto: string;
  alt: string;
  foco?: string;
  segmentos: Segmento[];
};

const ETAPAS: Etapa[] = [
  {
    id: "lavra",
    titulo: "Lavra e extração",
    foto: "/videos/home/usina-britagem-aerea-capa.jpg",
    alt: "Vista aérea da pedreira, com correias transportadoras e pilhas de rocha",
    segmentos: [
      {
        id: "mineracao",
        chip: "Mineração",
        nome: "Mineração",
        descricao:
          "Lavra própria de rocha: perfuração, desmonte e carregamento na frente de lavra da pedreira.",
        foto: "/images/atuacoes/extracao-minerios/extracao-minerios.png",
        alt: "Frente de lavra da pedreira, com o paredão de rocha e máquinas na praça",
      },
      {
        id: "maquinario",
        chip: "Maquinário",
        nome: "Maquinário para grandes obras",
        descricao:
          "Escavadeiras, carregadeiras, motoniveladoras e compactadores próprios, dimensionados para obras de grande porte.",
        foto: "/images/galeria/home6.webp",
        alt: "Carregadeira, caminhão e rolo compactador trabalhando sobre base de rocha",
      },
    ],
  },
  {
    id: "britagem",
    titulo: "Britagem e agregados",
    foto: "/images/atuacoes/extracao-minerios/pedreira (3).jpeg",
    alt: "Estrutura da planta de britagem, com correias transportadoras e pilhas de agregado",
    segmentos: [
      {
        id: "agregados",
        chip: "Britas e agregados",
        nome: "Britas e agregados",
        descricao:
          "Planta de britagem própria produz e classifica brita, pó de brita, rachão e brita corrida para pavimentação, concreto e drenagem.",
        foto: "/images/atuacoes/extracao-minerios/pedreira (5).jpeg",
        alt: "Pilha de brita formada sob a correia transportadora da planta de britagem",
      },
    ],
  },
  {
    id: "asfalto",
    titulo: "Usina de asfalto",
    foto: "/images/estrutura/usina-asfalto.jpg",
    alt: "Usina de asfalto Ammann em operação na planta do grupo",
    foco: "object-[24%_center]",
    segmentos: [
      {
        id: "asfalto",
        chip: "Usina Asfáltica",
        nome: "Usina Asfáltica",
        descricao: "Usina própria de massa asfáltica abastece as frentes de pavimentação.",
        foto: "/images/estrutura/usina-asfalto.jpg",
        alt: "Usina de asfalto Ammann em operação na planta do grupo",
        foco: "object-[24%_center]",
      },
    ],
  },
  {
    id: "concreto",
    titulo: "Central de concreto",
    foto: "/images/atuacoes/edificacoes/edificacoes3.png",
    alt: "Caminhão betoneira Pedranorte e bomba de concreto lançando concreto em obra de edificação",
    segmentos: [
      {
        id: "concretagem",
        chip: "Concretagem",
        nome: "Concretagem",
        descricao:
          "Concreto usinado dosado em central própria e aplicado com betoneiras e bombas da casa.",
        foto: "/images/atuacoes/edificacoes/edificacoes.png",
        alt: "Bomba de concreto e caminhão betoneira Pedranorte em obra de edificação",
      },
    ],
  },
  {
    id: "premoldados",
    titulo: "Fábrica de pré-moldados",
    foto: "/images/atuacoes/pre-moldados/pre-moldados2.png",
    alt: "Pátio da fábrica de pré-moldados com tubos de drenagem e peças de concreto",
    segmentos: [
      {
        id: "premoldados",
        chip: "Pré-Moldados",
        nome: "Fábrica de Pré-Moldados",
        descricao: "Tubos, postes e peças de concreto produzidos em fábrica própria.",
        foto: "/images/atuacoes/pre-moldados/pre-moldados2.png",
        alt: "Pátio da fábrica de pré-moldados com tubos e peças de concreto",
      },
    ],
  },
  {
    id: "logistica",
    titulo: "Logística e sustentação",
    foto: "/images/estrutura/frota-pedra-norte.jpg",
    alt: "Caminhões da frota Pedra Norte sendo carregados por escavadeiras",
    segmentos: [
      {
        id: "frota",
        chip: "Logística própria",
        nome: "Logística própria",
        descricao:
          "Frota de basculantes, betoneiras e carretas liga pedreira, usinas e obras num fluxo só.",
        foto: "/images/estrutura/frota-pedra-norte.jpg",
        alt: "Caminhões da frota Pedra Norte sendo carregados por escavadeiras",
      },
      {
        id: "mecanica",
        chip: "Mecânica",
        nome: "Mecânica",
        descricao:
          "Oficina própria mantém frota e máquinas em operação, sem depender de terceiros.",
        foto: "/images/estrutura/mecanica-perfuratriz.jpg",
        alt: "Hidráulica e mangueiras da perfuratriz Sandvik, mantida pela equipe própria",
      },
      {
        id: "borracharia",
        chip: "Borracharia",
        nome: "Borracharia",
        descricao: "Pneus da frota pesada trocados e recuperados dentro de casa.",
        foto: "/images/estrutura/borracharia-fora-de-estrada.jpg",
        alt: "Pneus de grande porte do caminhão fora-de-estrada da frota",
      },
    ],
  },
  {
    id: "entrega",
    titulo: "Engenharia e entrega",
    foto: "/videos/obras/dnit-br-364-aeroporto-macadame/voo-br-364-aeroporto-capa.jpg",
    alt: "Voo sobre trecho da BR-364 reconstruído e entregue",
    segmentos: [
      {
        id: "engenharia",
        chip: "Engenharia",
        nome: "Engenharia",
        descricao:
          "Projeto, planejamento e execução de obras de infraestrutura, de ponta a ponta.",
        foto: "/images/obras/dnit-br-364-cabeceira-ponte/ponte-vista-aerea.jpg",
        alt: "Vista aérea de ponte com cabeceira reconstruída pelo grupo",
      },
      {
        id: "ped",
        chip: "P&D",
        nome: "Pesquisa e Desenvolvimento",
        descricao:
          "Buscamos novas técnicas e soluções para melhorar a qualidade dos materiais, reduzir desperdícios e aumentar a eficiência das nossas operações.",
        foto: "/images/galeria/home2.webp",
        alt: "Recicladora de solos e caminhão-pipa executando reciclagem de base",
        foco: "object-[50%_75%]",
      },
    ],
  },
];

const dois = (n: number) => String(n).padStart(2, "0");

export function CentralOperacoes() {
  const [abertaId, setAbertaId] = useState(ETAPAS[0].id);
  const gatilhos = useRef<(HTMLButtonElement | null)[]>([]);

  const irPara = (indice: number) => {
    const i = (indice + ETAPAS.length) % ETAPAS.length;
    setAbertaId(ETAPAS[i].id);
    gatilhos.current[i]?.focus();
  };

  /** Arrows walk the rail from wherever the focus is, Home and End jump to its ends. */
  const aoTeclar = (evento: KeyboardEvent<HTMLOListElement>) => {
    const comFoco = gatilhos.current.findIndex((b) => b === document.activeElement);
    const base = comFoco >= 0 ? comFoco : ETAPAS.findIndex((e) => e.id === abertaId);

    if (evento.key === "ArrowRight" || evento.key === "ArrowDown") {
      evento.preventDefault();
      irPara(base + 1);
    } else if (evento.key === "ArrowLeft" || evento.key === "ArrowUp") {
      evento.preventDefault();
      irPara(base - 1);
    } else if (evento.key === "Home") {
      evento.preventDefault();
      irPara(0);
    } else if (evento.key === "End") {
      evento.preventDefault();
      irPara(ETAPAS.length - 1);
    }
  };

  return (
    <div className="cadeia">
      <ol className="cadeia-trilho" onKeyDown={aoTeclar}>
        {ETAPAS.map((etapa, i) => {
          const aberta = etapa.id === abertaId;
          const numero = dois(i + 1);
          const painelId = `etapa-${etapa.id}`;
          // A single segment only repeats the stage's own name, so it is read as plain
          // prose; two or three are worth naming one by one.
          const varios = etapa.segmentos.length > 1;

          return (
            <li key={etapa.id} className="cadeia-estagio" data-aberta={aberta || undefined}>
              <Image
                src={etapa.foto}
                alt={aberta ? etapa.alt : ""}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 1100px"
                className={`cadeia-foto ${etapa.foco ?? "object-center"}`}
              />
              <span aria-hidden="true" className="cadeia-veu" />

              <button
                ref={(no) => {
                  gatilhos.current[i] = no;
                }}
                type="button"
                className="cadeia-gatilho"
                aria-expanded={aberta}
                aria-controls={painelId}
                onClick={() => setAbertaId(etapa.id)}
              >
                <span className="cadeia-marca">{numero}</span>
                <span className="cadeia-rotulo">
                  <span>{etapa.titulo}</span>
                </span>
              </button>

              <div id={painelId} className="cadeia-painel" inert={!aberta}>
                <p className="cadeia-painel-marca">{numero}</p>
                <p className="cadeia-painel-titulo">{etapa.titulo}</p>
                {varios ? (
                  <dl className="cadeia-lista">
                    {etapa.segmentos.map((segmento) => (
                      <div key={segmento.id}>
                        <dt>{segmento.nome}</dt>
                        <dd>{segmento.descricao}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="cadeia-texto">{etapa.segmentos[0].descricao}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
