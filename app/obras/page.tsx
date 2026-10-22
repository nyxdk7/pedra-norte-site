import Image from "next/image";
import { GaleriaObras, type ObraGaleria } from "@/components/obras/GaleriaObras";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Section";

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

const frentes = [
  ["Engenharia", "Soluções para obras e infraestrutura."],
  ["Pavimentação", "Apoio a obras viárias e urbanas."],
  ["Concreto", "Soluções com concreto usinado."],
  ["Agregados", "Britas, pó de brita, rachão e brita corrida."],
];

// Works module: titles exactly as registered by the owner; photographs supplied by the owner.
const obrasGaleria: ObraGaleria[] = [
  {
    id: "deracre-ct-10012-ac-380",
    orgao: "Deracre",
    contrato: "CT 10012",
    titulo: "Deracre - implantação da Rod. AC-380, Xapuri-AC.",
    local: "Xapuri/AC",
    fotos: [
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-intersecao-aerea.jpg",
        alt: "Vista aérea do entroncamento rodoviário asfaltado na região de Xapuri, Acre",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-curva-aerea.jpg",
        alt: "Trecho sinuoso de rodovia asfaltada em paisagem rural",
        foco: "object-[70%_18%]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-reta-horizonte.jpg",
        alt: "Rodovia asfaltada vista a partir de uma elevação",
        foco: "object-[50%_58%]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-tangente-aerea.jpg",
        alt: "Trecho reto de rodovia asfaltada com acostamento",
      },
    ],
  },
  {
    id: "dnit-br-364-cabeceira-ponte",
    orgao: "DNIT",
    titulo: "DNIT - Reconstrução em cabeceira de ponte com enrocamento e argamassa de concreto. BR-364, KM 202, KM 203.",
    fotos: [
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/cabeceira-enrocamento-lateral.jpg",
        alt: "Enrocamento de pedras na cabeceira de ponte de concreto, com escavadeira, rolo compactador e equipe ao fundo",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/escavadeira-msm-enrocamento.jpg",
        alt: "Escavadeira com identificação MSM espalhando as pedras do enrocamento junto à ponte",
        foco: "object-[50%_42%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/ponte-vista-aerea.jpg",
        alt: "Vista aérea da ponte sobre o curso d'água, com caminhões na pista e a cabeceira em obra",
        foco: "object-[50%_52%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/cabeceira-escavacao-aerea.jpg",
        alt: "Vista aérea da escavação na cabeceira da ponte, com pá carregadeira, caminhão com pedras e equipe na pista",
        foco: "object-[50%_50%]",
      },
    ],
  },
];

export default function ObrasPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      {/* Works module opens the page: each work's photographs alternate, then the next work */}
      <GaleriaObras obras={obrasGaleria} abertura />

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
