import Image from "next/image";
import { HeroObras } from "@/components/obras/HeroObras";
import type { FrenteDaRoda } from "@/components/obras/RodaObras";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Section";

// Rotor blades, clockwise from the top. Names and categories come from the fronts below.
const frentesDaRoda: FrenteDaRoda[] = [
  {
    titulo: "Pavimentação asfáltica",
    categoria: "Infraestrutura urbana",
    foto: "/images/atuacoes/pavimentacao/pavimentacao3.jpg",
    alt: "Equipe e vibroacabadora aplicando asfalto em via urbana",
    alternativa: "/images/galeria/operacao-9.png",
  },
  {
    titulo: "Fornecimento de agregados",
    categoria: "Infraestrutura urbana",
    foto: "/images/atuacoes/extracao-minerios/pedreira (2).jpeg",
    alt: "Caminhão basculante com identificação MSM em frente de obra",
    posicao: "object-[60%_50%]",
    alternativa: "/images/atuacoes/extracao-minerios/pedreira (6).jpeg",
  },
  {
    titulo: "Concreto usinado",
    categoria: "Soluções para obras",
    foto: "/images/atuacoes/edificacoes/edificacoes4.png",
    alt: "Caminhão betoneira descarregando concreto em obra de edificação",
    posicao: "object-[40%_50%]",
    alternativa: "/images/atuacoes/edificacoes/edificacoes3.png",
  },
  {
    titulo: "Infraestrutura",
    categoria: "Setor público",
    foto: "/images/galeria/operacao-18.png",
    alt: "Escavadeira executando contenção com pedras às margens de rodovia",
    alternativa: "/images/galeria/operacao-12.png",
  },
  {
    titulo: "Base e sub-base",
    categoria: "Infraestrutura urbana",
    foto: "/images/galeria/home5.png",
    alt: "Rolos compactadores preparando a base de uma estrada",
    alternativa: "/images/galeria/operacao-6.png",
  },
  {
    titulo: "Desenvolvimento regional",
    categoria: "Setor público",
    foto: "/images/galeria/operacao-14.png",
    alt: "Pá carregadeira e equipe em obra de rodovia sinalizada",
    alternativa: "/images/galeria/operacao-17.png",
  },
];

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

export default function ObrasPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <HeroObras
        eyebrow="Obras e projetos"
        title="Presença em obras que movimentam o desenvolvimento da região."
        frentes={frentesDaRoda}
        description={
          <p>
            A MSM Industrial LTDA participa de projetos de infraestrutura,
            construção civil, pavimentação e fornecimento de insumos para
            empresas, parceiros e órgãos públicos.
          </p>
        }
      >
        <dl className="mt-10 grid max-w-[34rem] grid-cols-2 gap-y-6 border-t border-white/20 pt-6 sm:grid-cols-4 lg:mt-12 lg:grid-cols-2 xl:grid-cols-4">
          {indicadores.map(([numero, texto]) => (
            <div key={texto} className="flex flex-col-reverse pr-4">
              <dt className="mt-2 text-sm font-semibold text-on-dark-muted">{texto}</dt>
              <dd className="font-serif text-[2rem] leading-none tracking-[-0.02em] tabular-nums md:text-[2.25rem] xl:text-[1.875rem] min-[1440px]:text-[2.25rem]">{numero}</dd>
            </div>
          ))}
        </dl>
      </HeroObras>

      {/* Case-study index: category, scope and deliverables on one ruled row each */}
      <section aria-labelledby="areas-titulo" className="py-20 md:py-28">
        <Container>
          <SectionHeading id="areas-titulo" title="Áreas de atuação" />

          <ul className="mt-12 border-b border-border md:mt-16">
            {obras.map((obra) => (
              <li
                key={obra.titulo}
                className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <p className="flex items-center gap-3 text-[0.9375rem] font-semibold text-brand md:col-span-3 md:items-start md:pt-2">
                  <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent md:mt-2.5" />
                  {obra.categoria}
                </p>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold leading-tight text-heading md:text-[1.75rem]">{obra.titulo}</h3>
                  <p className="mt-3 font-serif text-lg leading-relaxed text-muted-strong">{obra.descricao}</p>
                </div>
                <ul className="md:col-span-4 md:pt-1">
                  {obra.detalhes.map((detalhe) => (
                    <li
                      key={detalhe}
                      className="flex items-center gap-3 border-b border-border py-2.5 text-[0.9375rem] font-semibold text-heading last:border-b-0"
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                      {detalhe}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
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
