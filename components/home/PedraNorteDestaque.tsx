import Image from "next/image";
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

/**
 * Split composition: text on night blue, photograph untinted and bleeding to the
 * right edge. Deliberately different from the full-bleed hero.
 */
export function PedraNorteDestaque() {
  return (
    <section
      aria-labelledby="pedra-norte-titulo"
      className="on-dark relative isolate overflow-hidden bg-ink text-white"
    >
      <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        <Image
          src="/images/atuacoes/extracao-minerios/pedreira (1).jpeg"
          alt="Caminhão basculante da Pedra Norte na pedreira"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[62%_center]"
        />
      </div>

      <Container className="relative">
        <div className="py-16 md:py-20 lg:w-1/2 lg:py-28 lg:pr-16">
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
            className="mt-6 text-[2rem] font-bold leading-[1.08] md:text-[2.75rem]"
          >
            Materiais pétros produzidos com estrutura própria para abastecer
            grandes obras.
          </h2>

          <p className="mt-5 max-w-xl font-serif text-lg leading-relaxed text-on-dark-muted md:text-xl md:leading-[1.55]">
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
      </Container>
    </section>
  );
}
