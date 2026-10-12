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
    <main id="conteudo" className="min-h-screen bg-white text-foreground">
      <PageHero
        eyebrow="Sobre a empresa"
        title="Soluções em engenharia civil com compromisso, qualidade e responsabilidade."
        description={
          <p>
            A MSM Industrial LTDA atua no setor de engenharia civil oferecendo
            soluções para obras, infraestrutura, pavimentação, concreto e
            fornecimento de insumos, sempre com foco em segurança, qualidade e
            atendimento eficiente.
          </p>
        }
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <article>
            <h2 className="text-3xl font-bold text-heading md:text-4xl">
              Nossa atuação
            </h2>

            <div className="mt-6 max-w-[65ch] space-y-5 text-lg leading-relaxed text-muted-strong">
              <p>
                A empresa atua com soluções voltadas à engenharia civil,
                fornecendo estrutura, produtos e serviços para atender obras de
                diferentes portes.
              </p>

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
          </article>

          <aside aria-label="Compromisso, atuação e valores" className="self-start rounded-panel border border-border bg-surface-subtle">
            <ul className="divide-y divide-border">
              {pilares.map((pilar) => (
                <li key={pilar.rotulo} className="p-6 md:p-8">
                  <p className="flex items-center gap-3 text-sm font-semibold text-brand">
                    <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-accent" />
                    {pilar.rotulo}
                  </p>
                  <h2 className="mt-3 text-xl font-bold text-heading md:text-2xl">
                    {pilar.titulo}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-strong">{pilar.texto}</p>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </main>
  );
}
