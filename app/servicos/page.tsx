import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";

const servicos = [
  {
    titulo: "Concreto usinado",
    imagem: "/images/servicos/concreto-usinado.png",
    descricao:
      "Produção e fornecimento de concreto usinado com qualidade, controle técnico e atendimento conforme a necessidade da obra.",
  },
  {
    titulo: "Pavimentação asfáltica",
    imagem: "/images/servicos/pavimentacao-asfaltica.png",
    descricao:
      "Atuação em obras de pavimentação asfáltica com estrutura, equipe e experiência para entregar qualidade em cada etapa do serviço.",
  },
  {
    titulo: "Usinagem de asfalto",
    imagem: "/images/servicos/usinagem-asfalto.png",
    descricao:
      "Produção de asfalto com atenção aos requisitos técnicos, manutenção dos materiais e condições adequadas de armazenamento e transporte.",
  },
];

const produtos = [
  {
    titulo: "Pó de brita",
    imagem: "/images/servicos/po-de-brita.png",
    descricao:
      "Usado para cobertura de aterros, ajardinamento, compactação de ruas e no concreto industrial.",
  },
  {
    titulo: "Brita nº 3/8",
    imagem: "/images/servicos/brita-38.png",
    descricao:
      "Material de corte com variação de 5,0 até 0,075, utilizado conforme a aplicação e necessidade da obra.",
  },
  {
    titulo: "Brita nº 5/8",
    imagem: "/images/servicos/brita-58.png",
    descricao:
      "Material de corte utilizado em subleito, reforço de subleito, base e reforço de base de pavimento.",
  },
  {
    titulo: "Brita nº 3/4",
    imagem: "/images/servicos/brita-34.png",
    descricao:
      "Material com diâmetro máximo de 19 mm, usado na fabricação de concreto, pontes, edificações e outras aplicações.",
  },
  {
    titulo: "Brita nº 7/8",
    imagem: "/images/servicos/brita-78.png",
    descricao:
      "Usada basicamente na usinagem de concreto armado para estruturas médias e pesadas, além de pisos de alto tráfego.",
  },
  {
    titulo: "Brita nº 3",
    imagem: "/images/servicos/brita-3.png",
    descricao:
      "Material com diâmetro máximo de 50 mm, também conhecido como pedra de lastro, utilizado em aplicações pesadas.",
  },
  {
    titulo: "Brita nº 4",
    imagem: "/images/servicos/brita-4.png",
    descricao:
      "Agregado com diâmetro máximo de 76 mm, destinado a obras de drenagem, como drenos sépticos e fossas.",
  },
  {
    titulo: "Pedra rachão",
    imagem: "/images/servicos/pedra-rachao.png",
    descricao:
      "Utilizada para fabricação de muros de contenção, barreiras e bases, fundações em geral, aterramento de áreas pantanosas e drenagens.",
  },
  {
    titulo: "Brita corrida",
    imagem: "/images/servicos/brita-corrida.png",
    descricao:
      "Usada para cobertura de aterros, ajardinamento, compactação de ruas e no concreto industrial. Seu tamanho é de 3/16” a 4,76 mm.",
  },
];

const linkCartao =
  "mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover";

export default function ServicosPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Serviços e produtos"
        title="Soluções em engenharia civil, concreto e pavimentação."
        image="/images/servicos/usinagem-asfalto.png"
        description={
          <p>
            A MSM Industrial LTDA reúne estrutura e qualidade no fornecimento
            de produtos e serviços para construção civil, infraestrutura e
            obras públicas ou privadas.
          </p>
        }
      />

      <section aria-labelledby="servicos-titulo" className="py-16 md:py-24">
        <Container>
          <SectionHeading id="servicos-titulo" title="Serviços" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicos.map((servico) => (
              <article
                key={servico.titulo}
                className="group flex flex-col overflow-hidden rounded-card border border-border bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-subtle">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-heading">{servico.titulo}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-strong">
                    {servico.descricao}
                  </p>
                  <Link href="/contato" className={linkCartao}>
                    Solicitar informações
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="produtos-titulo" className="bg-surface-subtle py-16 md:py-24">
        <Container>
          <SectionHeading id="produtos-titulo" title="Produtos" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((produto) => (
              <article
                key={produto.titulo}
                className="group flex gap-5 rounded-card border border-border bg-white p-4 sm:flex-col sm:p-5"
              >
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-control bg-surface-subtle sm:w-full sm:aspect-[16/10]">
                  <Image
                    src={produto.imagem}
                    alt={produto.titulo}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 96px, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-lg font-bold text-heading">{produto.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                    {produto.descricao}
                  </p>
                  <Link href="/contato" className={linkCartao}>
                    Solicitar produto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-16 md:pt-24">
        <CtaBanner
          eyebrow="Atendimento MSM Industrial"
          title="Precisa de produtos ou serviços para sua obra?"
          description="Entre em contato com nossa equipe e solicite uma proposta conforme a necessidade do seu projeto."
          actions={
            <ButtonLink href="/contato" variant="light" size="lg">
              Solicitar orçamento
            </ButtonLink>
          }
        />
      </div>
    </main>
  );
}
