import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
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

export default function ObrasPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Obras e projetos"
        title="Presença em obras que movimentam o desenvolvimento da região."
        image="/images/galeria/home3.png"
        description={
          <p>
            A MSM Industrial LTDA participa de projetos de infraestrutura,
            construção civil, pavimentação e fornecimento de insumos para
            empresas, parceiros e órgãos públicos.
          </p>
        }
      >
        <dl className="mt-12 grid grid-cols-2 gap-y-6 border-t border-white/20 pt-6 md:grid-cols-4">
          {indicadores.map(([numero, texto]) => (
            <div key={texto} className="pr-4">
              <dt className="sr-only">{texto}</dt>
              <dd className="font-display text-3xl font-bold md:text-4xl">{numero}</dd>
              <dd className="mt-1 text-sm text-on-dark-muted">{texto}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section aria-labelledby="areas-titulo" className="py-16 md:py-24">
        <Container>
          <SectionHeading id="areas-titulo" title="Áreas de atuação" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {obras.map((obra) => (
              <article
                key={obra.titulo}
                className="flex flex-col rounded-card border border-border bg-white p-6 md:p-8"
              >
                <p className="text-sm font-semibold text-brand">{obra.categoria}</p>

                <h3 className="mt-2 text-2xl font-bold text-heading">{obra.titulo}</h3>

                <p className="mt-3 leading-relaxed text-muted-strong">{obra.descricao}</p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {obra.detalhes.map((detalhe) => (
                    <li
                      key={detalhe}
                      className="rounded-control border border-border bg-neutral-50 px-3 py-1.5 text-sm font-medium text-muted-strong"
                    >
                      {detalhe}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="casos-titulo" className="bg-surface-subtle py-16 md:py-24">
        <Container>
          <SectionHeading
            id="casos-titulo"
            eyebrow="Casos de sucesso"
            title="Confiança de instituições e parceiros estratégicos."
            description="Ao longo da sua trajetória, a empresa participou de projetos e fornecimentos para órgãos, instituições e parceiros que contribuem para o desenvolvimento da região."
          />

          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {casosSucesso.map((caso) => (
              <li
                key={caso.nome}
                className="flex h-32 items-center justify-center bg-white p-6 md:h-36"
              >
                <Image
                  src={caso.imagem}
                  alt={caso.nome}
                  width={180}
                  height={90}
                  quality={100}
                  className="max-h-20 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="on-dark relative isolate grid overflow-hidden rounded-panel bg-surface-navy text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10" />
            <div className="p-6 md:p-12">
              <Eyebrow onDark>Estrutura e confiança</Eyebrow>

              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                Produtos, serviços e operação para atender obras de diferentes
                portes.
              </h2>

              <p className="mt-5 leading-relaxed text-on-dark-muted">
                Com atuação consolidada, a empresa combina estrutura,
                compromisso e fornecimento de insumos essenciais para o
                andamento de obras.
              </p>

              <ButtonLink href="/contato" variant="light" size="lg" className="mt-8">
                Falar com a equipe
              </ButtonLink>
            </div>

            <dl className="grid grid-cols-1 border-t border-on-dark-border sm:grid-cols-2 lg:border-l lg:border-t-0">
              {frentes.map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="border-b border-on-dark-border p-6 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 md:p-8"
                >
                  <dt className="font-display text-lg font-bold text-white">{titulo}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-on-dark-muted">{texto}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>
    </main>
  );
}
