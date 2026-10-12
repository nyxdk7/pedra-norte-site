import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";

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

export function PedraNorteDestaque() {
  return (
    <section aria-labelledby="pedra-norte-titulo" className="bg-white py-16 md:py-24">
      <Container>
        <div className="on-dark relative isolate flex min-h-[560px] items-end overflow-hidden rounded-panel bg-neutral-900 text-white md:items-center">
          {/* Mobile: photo as a top band; md+: full-bleed behind the text */}
          <div className="absolute inset-x-0 top-0 -z-20 h-64 md:inset-0 md:h-auto">
            <Image
              src="/images/home/grupo-estrutura.png"
              alt="Escavadeira carregando caminhão na operação da Pedra Norte"
              fill
              quality={100}
              sizes="(max-width: 1280px) 100vw, 1232px"
              className="object-cover object-[45%_40%] md:object-center"
            />
            <div aria-hidden="true" className="scrim-photo-top absolute inset-0 md:hidden" />
            <div aria-hidden="true" className="scrim-hero absolute inset-0 hidden md:block" />
          </div>

          <div className="max-w-2xl px-6 pb-10 pt-60 md:px-12 md:py-10 lg:px-16">
            <Eyebrow onDark>Pedra Norte em operação</Eyebrow>

            <h2
              id="pedra-norte-titulo"
              className="mt-4 text-3xl font-bold leading-[1.1] md:text-[2.75rem]"
            >
              Materiais pétros produzidos com estrutura própria para abastecer
              grandes obras.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-on-dark-muted">
              Com operação de pedreira, máquinas pesadas e controle de
              produção, a Pedra Norte fornece materiais essenciais para
              pavimentação, drenagem, concreto e infraestrutura.
            </p>

            <dl className="mt-8 grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-3">
              {destaques.map((item) => (
                <div key={item.titulo}>
                  <dt className="font-display text-base font-bold">{item.titulo}</dt>
                  <dd className="mt-1 text-sm text-on-dark-muted">{item.texto}</dd>
                </div>
              ))}
            </dl>

            <ButtonLink href="/atuacoes" variant="light" size="lg" className="mt-8">
              Ver áreas de atuação
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
