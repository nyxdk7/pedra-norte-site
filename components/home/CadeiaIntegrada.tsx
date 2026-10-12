import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { servicosPrincipais } from "./data";

const pilares = [
  "Insumos próprios",
  "Frota operacional",
  "Equipe técnica",
  "Execução em campo",
];

// The material really flows in this order: aggregate leaves the quarry, feeds asphalt,
// concrete and precast production, and ends on site. The numbering encodes that sequence.
const etapas = [
  {
    nome: "Extração",
    foto: "/images/atuacoes/extracao-minerios/pedreira (6).jpeg",
    alt: "Carregadeira entre correias transportadoras na pedreira",
    posicao: "object-[55%_60%]",
    frentes: ["Britas e agregados"],
    // Product names as listed on /servicos.
    produtos: ["Britas nº 3/8, 5/8, 3/4, 7/8, 3 e 4", "Pó de brita", "Pedra rachão", "Brita corrida"],
  },
  {
    nome: "Produção",
    foto: "/images/atuacoes/edificacoes/edificacoes2.png",
    alt: "Caminhão betoneira abastecendo obra de edificação",
    posicao: "object-center",
    frentes: ["Usinagem de asfalto", "Concreto usinado", "Pré-moldados"],
  },
  {
    nome: "Execução",
    foto: "/images/atuacoes/pavimentacao/pavimentacao3.jpg",
    alt: "Equipe aplicando asfalto com vibroacabadora em obra de pavimentação",
    posicao: "object-center",
    frentes: ["Pavimentação asfáltica", "Locação de máquinas"],
  },
];

function frente(titulo: string) {
  const servico = servicosPrincipais.find((item) => item.titulo === titulo);
  if (!servico) throw new Error(`Frente sem cadastro: ${titulo}`);
  return servico;
}

export function CadeiaIntegrada() {
  return (
    <section aria-labelledby="cadeia-titulo" className="bg-brita-100 py-20 md:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2
            id="cadeia-titulo"
            className="text-[2.125rem] font-bold leading-[1.06] text-heading md:text-5xl lg:col-span-7 lg:text-[3.25rem]"
          >
            Da extração à execução, uma estrutura completa para grandes obras.
          </h2>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="font-serif text-lg leading-relaxed text-muted-strong md:text-xl md:leading-[1.55]">
              A MSM Industrial, Pedra Norte e empresas integradas do Grupo
              Soster conectam produção de insumos, frota pesada, equipe
              técnica e execução em campo para atender obras públicas e
              privadas com mais controle, agilidade e capacidade operacional.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-x-6">
              {pilares.map((item) => (
                <li
                  key={item}
                  className="border-t border-ink/15 py-3 text-[0.9375rem] font-semibold text-heading"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {etapas.map((etapa, indice) => (
            <li key={etapa.nome} className="flex flex-col">
              {/* Flow rule: the line runs on into the next stage */}
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg tabular-nums text-brand">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-bold text-heading">{etapa.nome}</span>
                {indice < etapas.length - 1 ? (
                  <span aria-hidden="true" className="relative h-px flex-1 bg-ink/25 lg:-mr-5">
                    <span className="absolute -right-px -top-[3px] hidden h-[7px] w-[7px] rotate-45 border-r border-t border-ink/40 lg:block" />
                  </span>
                ) : (
                  <span aria-hidden="true" className="h-px flex-1 bg-ink/25" />
                )}
              </div>

              {/* Tablets: photo and text side by side; desktop: stacked inside the column */}
              <div className="mt-6 md:grid md:grid-cols-2 md:gap-8 lg:block">
                <div className="relative aspect-[4/3] self-start overflow-hidden rounded-card bg-ink/10">
                  <Image
                    src={etapa.foto}
                    alt={etapa.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className={`object-cover ${etapa.posicao}`}
                  />
                </div>

                <div>
                  <ul className="mt-2 divide-y divide-ink/10 md:-mt-5 lg:mt-2">
                    {etapa.frentes.map((titulo) => {
                      const servico = frente(titulo);

                      return (
                        <li key={titulo} className="py-5">
                          <h3 className="text-lg font-bold leading-snug text-heading">{servico.titulo}</h3>
                          <p className="mt-0.5 text-sm font-semibold text-brand">{servico.empresa}</p>
                          <p className="mt-2 font-serif text-base leading-relaxed text-muted-strong">
                            {servico.descricao}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {etapa.produtos ? (
                    <div className="border-t border-ink/10 pt-5">
                      <h4 className="text-sm font-semibold text-muted-strong">Produtos</h4>
                      <ul className="mt-3 grid gap-2">
                        {etapa.produtos.map((produto) => (
                          <li key={produto} className="flex items-center gap-3 text-[0.9375rem] font-semibold text-heading">
                            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                            {produto}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/servicos"
                        className="group mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand"
                      >
                        Ver produtos e serviços
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink/15 pt-10 md:mt-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold leading-tight text-heading md:text-[1.75rem]">
              Materiais, máquinas, equipe e execução trabalhando de forma
              conectada.
            </h3>
            <p className="mt-3 font-serif text-lg leading-relaxed text-muted-strong">
              Do fornecimento de materiais à atuação em campo, o grupo
              conta com empresas, equipamentos e equipes que fortalecem a
              capacidade operacional em infraestrutura.
            </p>
          </div>

          <ButtonLink href="/estrutura" variant="primary" size="lg" className="shrink-0 self-start lg:self-auto">
            Conhecer estrutura
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
