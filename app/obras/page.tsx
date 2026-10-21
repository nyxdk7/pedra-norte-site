import Image from "next/image";
import { ObraDestaque } from "@/components/obras/ObraDestaque";
import { PosterObra, type Poster } from "@/components/obras/PosterObra";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Section";

const obras = [
  {
    titulo: "Obras de pavimentação",
    categoria: "Infraestrutura urbana",
    descricao:
      "Execução e apoio em serviços de pavimentação, recuperação de vias e fornecimento de materiais para obras públicas e privadas.",
    detalhes: [
      "Pavimentação asfáltica",
      "Base e sub-base",
      "Fornecimento de agregados",
    ],
  },
  {
    titulo: "Fornecimento para construção civil",
    categoria: "Produtos e insumos",
    descricao:
      "Atendimento a construtoras, empresas e parceiros com britas, pó de brita, rachão, brita corrida e demais agregados.",
    detalhes: ["Britas diversas", "Pó de brita", "Pedra rachão"],
  },
  {
    titulo: "Concreto usinado",
    categoria: "Soluções para obras",
    descricao:
      "Fornecimento de concreto usinado para obras de pequeno, médio e grande porte, com foco em qualidade e controle.",
    detalhes: ["Concreto usinado", "Atendimento técnico", "Entrega programada"],
  },
  {
    titulo: "Apoio a obras públicas",
    categoria: "Setor público",
    descricao:
      "Atuação em projetos ligados ao desenvolvimento regional, fornecendo produtos e serviços para infraestrutura.",
    detalhes: ["Órgãos públicos", "Infraestrutura", "Desenvolvimento regional"],
  },
];

const casosSucesso = [
  {
    nome: "Prefeitura de Rio Branco",
    imagem: "/images/casos-sucesso/prefeitura-rio-branco.png",
  },
  {
    nome: "7º BEC",
    imagem: "/images/casos-sucesso/bec.png",
  },
  {
    nome: "DEPASA",
    imagem: "/images/casos-sucesso/depasa.png",
  },
  {
    nome: "DERACRE",
    imagem: "/images/casos-sucesso/deracre.png",
  },
  {
    nome: "DNIT",
    imagem: "/images/casos-sucesso/dnit.png",
  },
];

const indicadores = [
  ["+40", "Anos de trajetória"],
  ["+50", "Projetos atendidos"],
  ["AC/RO", "Presença regional"],
  ["100%", "Foco em qualidade"],
];

const frentes = [
  ["Engenharia", "Soluções para obras e infraestrutura."],
  ["Pavimentação", "Apoio a obras viárias e urbanas."],
  ["Concreto", "Soluções com concreto usinado."],
  ["Agregados", "Britas, pó de brita, rachão e brita corrida."],
];

// Portfolio wall, read left to right. The four fronts carry their description and
// details; the other posters are details of those fronts. All text comes from `obras`.
const [pavimentacao, construcao, concreto, publicas] = obras;

const posteres: Poster[] = [
  {
    acento: "Obras de",
    forte: "pavimentação",
    alinhamento: "esquerda",
    rotulo: pavimentacao.categoria,
    descricao: pavimentacao.descricao,
    detalhes: pavimentacao.detalhes,
    foto: "/images/atuacoes/pavimentacao/pavimentacao3.jpg",
    alt: "Equipe e vibroacabadora aplicando asfalto em via",
    enquadramento: "object-[42%_50%]",
  },
  {
    acento: "Fornecimento para",
    forte: "construção civil",
    alinhamento: "centro",
    rotulo: construcao.categoria,
    descricao: construcao.descricao,
    detalhes: construcao.detalhes,
    foto: "/images/atuacoes/extracao-minerios/pedreira (5).jpeg",
    alt: "Correia transportadora sobre pilha de brita em pedreira, contra o sol",
    enquadramento: "object-[62%_50%]",
  },
  {
    acento: "usinado",
    forte: "Concreto",
    forteAntes: true,
    alinhamento: "direita",
    rotulo: concreto.categoria,
    descricao: concreto.descricao,
    detalhes: concreto.detalhes,
    foto: "/images/atuacoes/edificacoes/edificacoes4.png",
    alt: "Caminhão betoneira em obra de edificação",
    enquadramento: "object-[30%_50%]",
  },
  {
    acento: "Apoio a",
    forte: "obras públicas",
    alinhamento: "centro",
    rotulo: publicas.categoria,
    descricao: publicas.descricao,
    detalhes: publicas.detalhes,
    foto: "/images/home/hero-obras-acre.png",
    alt: "Escavadeira e operário em obra às margens de rodovia",
    enquadramento: "object-[40%_50%]",
  },
  {
    acento: "Pavimentação",
    forte: "asfáltica",
    alinhamento: "direita",
    rotulo: pavimentacao.titulo,
    foto: "/images/atuacoes/pavimentacao/pavimentacao4.jpg",
    alt: "Rolo compactador sobre asfalto novo em via",
    enquadramento: "object-[45%_50%]",
  },
  {
    acento: "rachão",
    forte: "Pedra",
    forteAntes: true,
    alinhamento: "esquerda",
    posicao: "topo",
    rotulo: construcao.titulo,
    foto: "/images/atuacoes/extracao-minerios/pedreira (9).jpeg",
    alt: "Escavadeira entre blocos de rocha em pedreira",
    enquadramento: "object-[62%_50%]",
  },
  {
    acento: "Entrega",
    forte: "programada",
    alinhamento: "direita",
    rotulo: concreto.titulo,
    foto: "/images/atuacoes/edificacoes/edificacoes.png",
    alt: "Bomba de concreto e caminhão betoneira em obra de edificação",
    enquadramento: "object-[55%_50%]",
  },
  {
    acento: "Base e",
    forte: "sub-base",
    alinhamento: "esquerda",
    rotulo: pavimentacao.titulo,
    foto: "/images/galeria/home4.png",
    alt: "Motoniveladora trabalhando em estrada de terra",
    enquadramento: "object-[62%_50%]",
  },
  {
    acento: "Desenvolvimento",
    forte: "regional",
    alinhamento: "centro",
    rotulo: publicas.titulo,
    foto: "/images/galeria/home7.png",
    alt: "Escavadeira sobre aterro de pedras com caminhão ao fundo",
    enquadramento: "object-[45%_50%]",
  },
];

export default function ObrasPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      {/* Opening: two-tone headline beside a glass panel, over the MSM truck photograph */}
      <section aria-labelledby="obras-titulo" className="obras-abertura on-dark relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/atuacoes/extracao-minerios/pedreira (2).jpeg"
          alt="Caminhão basculante com identificação MSM em frente de obra"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="-z-20 object-cover object-[70%_45%]"
        />
        <div aria-hidden="true" className="obras-abertura-tom absolute inset-0 -z-10" />

        <div className="container-msm grid items-end gap-8 pb-10 pt-[calc(var(--header-h)+2.5rem)] md:pb-14 lg:grid-cols-12 lg:gap-10 lg:pt-[calc(var(--header-h)+4rem)]">
          <div className="min-w-0 lg:col-span-7">
            <p className="obras-chip">Obras e projetos</p>
            <h1 id="obras-titulo" className="obras-titulo animate-fade-up mt-5">
              <span className="text-accent-soft">Presença em obras</span> que movimentam o desenvolvimento da região.
            </h1>
          </div>

          <div className="obras-vidro animate-fade-up anim-delay-1 min-w-0 lg:col-span-5">
            <p className="font-serif text-[length:var(--type-lead)] leading-[1.55] text-white">
              A MSM Industrial LTDA participa de projetos de infraestrutura,
              construção civil, pavimentação e fornecimento de insumos para
              empresas, parceiros e órgãos públicos.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-5 sm:grid-cols-4 lg:grid-cols-2">
              {indicadores.map(([numero, texto]) => (
                <div key={texto} className="flex flex-col-reverse">
                  <dt className="mt-1.5 text-sm font-semibold text-on-dark-muted">{texto}</dt>
                  <dd className="font-serif text-[2rem] leading-none tracking-[-0.02em] tabular-nums">{numero}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Featured work: photographs supplied by the owner */}
      <ObraDestaque
        id="variante"
        rotulo="Obra em destaque"
        categoria={pavimentacao.titulo}
        acento="Estrada da"
        forte="Variante"
        capa={{
          src: "/images/obras/estrada-da-variante/variante-reta-horizonte.jpg",
          alt: "Estrada da Variante vista ao nível da pista, com faixa dupla amarela seguindo até o horizonte",
          enquadramento: "object-[50%_62%]",
        }}
        galeria={[
          {
            src: "/images/obras/estrada-da-variante/variante-intersecao-aerea.jpg",
            alt: "Vista aérea da interseção da Estrada da Variante, com ilhas canalizadoras e pista recém-pavimentada",
            legenda: "Interseção",
          },
          {
            src: "/images/obras/estrada-da-variante/variante-curva-aerea.jpg",
            alt: "Vista aérea de trecho em curva da Estrada da Variante, com faixa dupla amarela e meio-fio",
            legenda: "Trecho em curva",
          },
          {
            src: "/images/obras/estrada-da-variante/variante-tangente-aerea.jpg",
            alt: "Vista aérea de longo trecho em reta da Estrada da Variante entre pastagens",
            legenda: "Trecho em reta",
          },
        ]}
      />

      {/* Portfolio wall: one poster per front and detail */}
      <section aria-labelledby="areas-titulo" className="bg-ink pb-16 md:pb-24">
        <div className="container-msm">
          <h2 id="areas-titulo" className="obras-parede-titulo pb-5 pt-2 md:pb-6">
            Áreas de atuação
          </h2>
        </div>
        <div className="container-msm grid gap-2.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-2">
          {posteres.map((poster) => (
            <PosterObra key={poster.acento + poster.forte} poster={poster} />
          ))}
        </div>
      </section>

      <section aria-labelledby="casos-titulo" className="bg-brita-100 py-20 md:py-28">
        <Container>
          <SectionHeading
            id="casos-titulo"
            eyebrow="Casos de sucesso"
            title="Confiança de instituições e parceiros estratégicos."
            description="Ao longo da sua trajetória, a empresa participou de projetos e fornecimentos para órgãos, instituições e parceiros que contribuem para o desenvolvimento da região."
          />

          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-ink/10 sm:grid-cols-3 lg:grid-cols-5">
            {casosSucesso.map((caso) => (
              <li
                key={caso.nome}
                className="flex h-32 items-center justify-center bg-white p-6 md:h-40"
              >
                <div className="relative h-20 w-full max-w-[11.25rem]">
                  <Image src={caso.imagem} alt={caso.nome} fill sizes="180px" className="object-contain" />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing band: deep navy, no texture */}
      <section aria-labelledby="estrutura-confianca-titulo" className="on-dark bg-ink py-20 text-white md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Eyebrow onDark>Estrutura e confiança</Eyebrow>

            <h2
              id="estrutura-confianca-titulo"
              className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06]"
            >
              Produtos, serviços e operação para atender obras de diferentes
              portes.
            </h2>

            <p className="mt-5 max-w-xl font-serif text-[length:var(--type-lead)] leading-[1.55] text-on-dark-muted">
              Com atuação consolidada, a empresa combina estrutura,
              compromisso e fornecimento de insumos essenciais para o
              andamento de obras.
            </p>

            <ButtonLink href="/contato" variant="light" size="lg" className="mt-8">
              Falar com a equipe
            </ButtonLink>
          </div>

          <dl className="grid content-start gap-x-10 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
            {frentes.map(([titulo, texto]) => (
              <div key={titulo} className="border-t border-white/20 py-6">
                <dt className="text-lg font-bold">{titulo}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-on-dark-muted">{texto}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </main>
  );
}
