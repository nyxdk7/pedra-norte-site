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

const linkAcao =
  "group/link inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-brand transition-colors hover:text-brand-hover";

export default function ServicosPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        variante="dividido"
        eyebrow="Serviços e produtos"
        title="Soluções em engenharia civil, concreto e pavimentação."
        image="/images/atuacoes/edificacoes/edificacoes.png"
        imageAlt="Caminhão betoneira e bomba de concreto abastecendo obra de edificação"
        imagePosition="object-[62%_center]"
        description={
          <p>
            A MSM Industrial LTDA reúne estrutura e qualidade no fornecimento
            de produtos e serviços para construção civil, infraestrutura e
            obras públicas ou privadas.
          </p>
        }
      />

      {/* Services as feature rows: photo, name, description and action on one ruled line */}
      <section aria-labelledby="servicos-titulo" className="py-20 md:py-28">
        <Container>
          <SectionHeading id="servicos-titulo" title="Serviços" />

          <ul className="mt-12 border-b border-border md:mt-16">
            {servicos.map((servico) => (
              <li
                key={servico.titulo}
                className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-5 gap-y-4 border-t border-border py-6 md:grid-cols-12 md:items-center md:gap-x-10 md:py-8"
              >
                <div className="relative aspect-square overflow-hidden rounded-card bg-brita-100 md:col-span-3 md:max-w-[17rem]">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    sizes="(max-width: 768px) 96px, 272px"
                    className="object-cover"
                  />
                </div>
                <h3 className="self-center text-xl font-bold leading-snug text-heading md:col-span-4 md:text-[1.75rem] md:leading-tight">
                  {servico.titulo}
                </h3>
                <div className="col-span-2 md:col-span-5">
                  <p className="font-serif text-lg leading-relaxed text-muted-strong">{servico.descricao}</p>
                  <Link href="/contato" className={`${linkAcao} mt-3`}>
                    Solicitar informações
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Products as a technical schedule on stone */}
      <section aria-labelledby="produtos-titulo" className="bg-brita-100 py-20 md:py-28">
        <Container>
          <SectionHeading id="produtos-titulo" title="Produtos" />

          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            {produtos.map((produto) => (
              <li
                key={produto.titulo}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-5 border-t border-ink/15 py-7"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-white">
                  <Image
                    src={produto.imagem}
                    alt={produto.titulo}
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-lg font-bold leading-snug text-heading">{produto.titulo}</h3>
                  <p className="mt-2 font-serif text-[0.9375rem] leading-relaxed text-muted-strong">
                    {produto.descricao}
                  </p>
                  <Link href="/contato" className={`${linkAcao} mt-auto pt-2`}>
                    Solicitar produto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        className="pt-16 md:pt-24"
        eyebrow="Atendimento MSM Industrial"
        title="Precisa de produtos ou serviços para sua obra?"
        description="Entre em contato com nossa equipe e solicite uma proposta conforme a necessidade do seu projeto."
        actions={
          <ButtonLink href="/contato" variant="light" size="lg">
            Solicitar orçamento
          </ButtonLink>
        }
      />
    </main>
  );
}
