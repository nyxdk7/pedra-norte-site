import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

const destaques = [
  {
    titulo: "Britas e agregados",
    texto: "Produção mineral",
  },
  {
    titulo: "Apoio à pavimentação",
    texto: "Base para obras rodoviárias",
  },
  {
    titulo: "Fornecimento técnico",
    texto: "Materiais para infraestrutura",
  },
];

// Product names exactly as listed on /servicos.
const produtos = [
  "Brita nº 3/8",
  "Brita nº 5/8",
  "Brita nº 3/4",
  "Brita nº 7/8",
  "Brita nº 3",
  "Brita nº 4",
  "Pó de brita",
  "Pedra rachão",
  "Brita corrida",
];

/**
 * Pedra Norte showcase: the branded truck in large format, untinted, with an
 * offset night-blue panel rising over its base (DNA: offset_editorial_split +
 * technical_spec_list). Different structure from the hero on purpose.
 */
export function PedraNorteDestaque() {
  return (
    <section
      aria-labelledby="pedra-norte-titulo"
      className="on-dark relative isolate bg-ink pb-20 text-white md:pb-28"
    >
      <div className="relative h-[22rem] sm:h-[30rem] lg:h-[min(46rem,78svh)]">
        <Image
          src="/images/atuacoes/extracao-minerios/pedreira (1).jpeg"
          alt="Caminhão basculante da Pedra Norte na pedreira"
          fill
          sizes="100vw"
          className="object-cover object-[64%_45%]"
        />
      </div>

      <Container className="relative -mt-16 sm:-mt-24 lg:-mt-48">
        {/* Phones: the panel runs edge to edge so the text column is not squeezed by two margins. */}
        <div className="-mx-[var(--gutter)] grid gap-12 bg-midnight px-[var(--gutter)] py-8 sm:mx-0 sm:rounded-card sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <Image
                src="/images/grupo/pedra-norte-logo.png"
                alt=""
                width={500}
                height={500}
                sizes="40px"
                className="h-10 w-10"
              />
              <p className="text-[0.9375rem] font-semibold text-on-dark-muted">Pedra Norte em operação</p>
            </div>

            <h2
              id="pedra-norte-titulo"
              className="mt-6 text-[length:var(--type-h2)] font-bold leading-[1.05]"
            >
              Materiais pétros produzidos com estrutura própria para abastecer
              grandes obras.
            </h2>

            <p className="mt-5 max-w-xl font-serif text-[length:var(--type-lead)] leading-[1.55] text-on-dark-muted">
              Com operação de pedreira, máquinas pesadas e controle de
              produção, a Pedra Norte fornece materiais essenciais para
              pavimentação, drenagem, concreto e infraestrutura.
            </p>

            <dl className="mt-10 grid gap-x-6 sm:grid-cols-3">
              {destaques.map((item) => (
                <div key={item.titulo} className="border-t border-white/20 py-4">
                  <dt className="font-bold leading-snug">{item.titulo}</dt>
                  <dd className="mt-1 text-sm text-on-dark-muted">{item.texto}</dd>
                </div>
              ))}
            </dl>

            <ButtonLink href="/atuacoes" variant="light" size="lg" className="mt-8">
              Ver áreas de atuação
            </ButtonLink>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-white/12 lg:pl-10">
            <h3 className="flex items-center gap-3 text-[0.9375rem] font-semibold text-on-dark-muted">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Produtos
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-2">
              {produtos.map((produto) => (
                <li key={produto} className="border-t border-white/12 py-3 text-[0.9375rem] font-semibold">
                  {produto}
                </li>
              ))}
            </ul>
            <Link
              href="/servicos"
              className="group mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-accent-soft"
            >
              Ver produtos e serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
