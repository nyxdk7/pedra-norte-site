import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";

const pilares = [
  {
    rotulo: "Compromisso",
    titulo: "Qualidade em cada entrega",
    texto:
      "Trabalhamos com responsabilidade técnica, organização e atenção aos detalhes em cada etapa dos serviços prestados.",
  },
  {
    rotulo: "Atuação",
    titulo: "Engenharia civil e infraestrutura",
    texto:
      "Soluções voltadas para obras, pavimentação, concreto, fornecimento de agregados e apoio a projetos de infraestrutura.",
  },
  {
    rotulo: "Valores",
    titulo: "Segurança e responsabilidade",
    texto:
      "Valorizamos ética, compromisso, transparência, respeito às pessoas e foco em resultados consistentes.",
  },
];

export default function SobrePage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      <PageHero
        variante="dividido"
        eyebrow="Sobre a empresa"
        title="Soluções em engenharia civil com compromisso, qualidade e responsabilidade."
        image="/images/home/hero-obras-acre.png"
        imageAlt="Escavadeira e equipe em obra de infraestrutura do Grupo Soster"
        imagePosition="object-[30%_center]"
        imageSizes="(max-width: 1024px) 100vw, 150vh"
        description={
          <p>
            A MSM Industrial LTDA atua no setor de engenharia civil oferecendo
            soluções para obras, infraestrutura, pavimentação, concreto e
            fornecimento de insumos, sempre com foco em segurança, qualidade e
            atendimento eficiente.
          </p>
        }
      />

      {/* Editorial reading surface: heading column + prose with a serif lead */}
      <section aria-labelledby="atuacao-titulo" className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <h2
            id="atuacao-titulo"
            className="text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading lg:col-span-4"
          >
            Nossa atuação
          </h2>

          <div className="max-w-[65ch] lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-[length:var(--type-lead)] leading-[1.55] text-heading">
              A empresa atua com soluções voltadas à engenharia civil,
              fornecendo estrutura, produtos e serviços para atender obras de
              diferentes portes.
            </p>

            <div className="mt-8 space-y-5 border-t border-border pt-8 font-serif text-lg leading-relaxed text-muted-strong">
              <p>
                Com foco em qualidade e responsabilidade, a MSM Industrial LTDA
                busca contribuir para o desenvolvimento regional por meio de
                serviços técnicos, fornecimento de materiais e apoio a projetos
                de infraestrutura.
              </p>

              <p>
                A atuação da empresa envolve compromisso com prazos, segurança
                operacional, atendimento personalizado e busca constante por
                melhoria nos processos.
              </p>

              <p>
                A MSM Industrial LTDA trabalha para ser reconhecida como uma
                parceira confiável para clientes privados, órgãos públicos,
                construtoras e demais empresas que necessitam de soluções em
                engenharia civil.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Commitment, scope and values as a ruled triptych on stone */}
      <section aria-labelledby="pilares-titulo" className="bg-brita-100 py-16 md:py-24">
        <Container>
          <h2 id="pilares-titulo" className="sr-only">
            Compromisso, atuação e valores
          </h2>
          <ul className="grid gap-x-10 md:grid-cols-3">
            {pilares.map((pilar) => (
              <li key={pilar.rotulo} className="border-t-2 border-ink py-8 md:py-10">
                <p className="flex items-center gap-3 text-[0.9375rem] font-semibold text-brand">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  {pilar.rotulo}
                </p>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-heading md:text-[1.75rem]">
                  {pilar.titulo}
                </h3>
                <p className="mt-4 font-serif text-lg leading-relaxed text-muted-strong">{pilar.texto}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
