import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Section";
import { servicosPrincipais } from "./data";

const pilares = [
  "Insumos próprios",
  "Frota operacional",
  "Equipe técnica",
  "Execução em campo",
];

export function CapacidadeOperacional() {
  return (
    <section aria-labelledby="capacidade-titulo" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>Capacidade operacional</Eyebrow>
            <h2
              id="capacidade-titulo"
              className="mt-4 text-3xl font-bold leading-[1.1] text-heading md:text-[2.75rem]"
            >
              Da extração à execução, uma estrutura completa para grandes obras.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-strong">
              A MSM Industrial, Pedra Norte e empresas integradas do Grupo
              Soster conectam produção de insumos, frota pesada, equipe
              técnica e execução em campo para atender obras públicas e
              privadas com mais controle, agilidade e capacidade operacional.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-md">
              {pilares.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-heading">
                  <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ruled service grid: hairlines instead of floating cards */}
        <div className="mt-12 overflow-hidden rounded-panel border border-border md:mt-16">
          <ul className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {servicosPrincipais.map((servico) => {
              const Icone = servico.icone;

              return (
                <li key={servico.titulo} className="flex flex-col bg-white p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-brand text-white">
                      <Icone size={24} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-snug">
                      <span className="block font-semibold text-brand">{servico.empresa}</span>
                      <span className="block text-muted">{servico.detalhe}</span>
                    </p>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-heading md:text-2xl">
                    {servico.titulo}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-strong">
                    {servico.descricao}
                  </p>

                  <div className="mt-auto pt-6">
                    <p className="border-t border-border pt-4 text-sm">
                      <span className="text-muted">Aplicação operacional: </span>
                      <span className="font-semibold text-heading">{servico.operacional}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="on-dark relative isolate flex flex-col gap-6 overflow-hidden bg-surface-navy p-6 text-white md:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10" />
            <div className="max-w-3xl">
              <Eyebrow onDark>Estrutura integrada</Eyebrow>
              <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
                Materiais, máquinas, equipe e execução trabalhando de forma
                conectada.
              </h3>
              <p className="mt-3 leading-relaxed text-on-dark-muted">
                Do fornecimento de materiais à atuação em campo, o grupo
                conta com empresas, equipamentos e equipes que fortalecem a
                capacidade operacional em infraestrutura.
              </p>
            </div>

            <ButtonLink href="/estrutura" variant="light" size="lg" className="shrink-0">
              Conhecer estrutura
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
