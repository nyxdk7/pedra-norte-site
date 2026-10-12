import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { servicosPrincipais } from "./data";

const pilares = [
  "Insumos próprios",
  "Frota operacional",
  "Equipe técnica",
  "Execução em campo",
];

function frente(titulo: string) {
  const servico = servicosPrincipais.find((item) => item.titulo === titulo);
  if (!servico) throw new Error(`Frente sem cadastro: ${titulo}`);
  return servico;
}

/** Stage marker. The numbering encodes the real material flow: quarry → plants → site. */
function Etapa({ numero, nome }: { numero: string; nome: string }) {
  return (
    <p className="flex items-center gap-4">
      <span className="font-serif text-lg tabular-nums text-brand">{numero}</span>
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      <span className="text-xl font-bold text-heading">{nome}</span>
    </p>
  );
}

function Frentes({ titulos, className = "" }: { titulos: string[]; className?: string }) {
  return (
    <ul className={`divide-y divide-ink/10 ${className}`}>
      {titulos.map((titulo) => {
        const servico = frente(titulo);

        return (
          <li key={titulo} className="py-5 first:pt-0 last:pb-0">
            <h3 className="text-lg font-bold leading-snug text-heading">{servico.titulo}</h3>
            <p className="mt-0.5 text-sm font-semibold text-brand">{servico.empresa}</p>
            <p className="mt-2 max-w-[34rem] font-serif text-base leading-relaxed text-muted-strong">
              {servico.descricao}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Asymmetric operations narrative (DNA: "asymmetric service narrative").
 * Each stage has its own composition: offset split, photo mosaic, wide band.
 */
export function CadeiaIntegrada() {
  return (
    <section aria-labelledby="cadeia-titulo" className="bg-brita-100 py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h2
            id="cadeia-titulo"
            className="text-[length:var(--type-h2)] font-bold leading-[1.05] text-heading lg:col-span-7"
          >
            Da extração à execução, uma estrutura completa para grandes obras.
          </h2>

          <div className="lg:col-span-5 lg:pt-3">
            <p className="font-serif text-[length:var(--type-lead)] leading-[1.55] text-muted-strong">
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

        <ol className="mt-16 space-y-20 md:mt-24 md:space-y-24 lg:space-y-32">
          {/* 01 · Offset split: the quarry as landscape, text anchored to its base */}
          <li className="grid gap-8 md:grid-cols-12 md:items-end md:gap-6 lg:gap-10">
            <div className="relative aspect-[3/2] overflow-hidden rounded-card bg-ink/10 md:col-span-7 lg:col-span-8">
              <Image
                src="/images/atuacoes/extracao-minerios/pedreira (4).jpeg"
                alt="Cava da pedreira com frentes de lavra e acessos internos, cercada pela floresta"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
            <div className="md:col-span-5 lg:col-span-4 lg:pb-2">
              <Etapa numero="01" nome="Extração" />
              <Frentes titulos={["Britas e agregados"]} className="mt-6" />
            </div>
          </li>

          {/* 02 · Mosaic: text first, two production photos at different sizes and heights.
              Portrait crops of landscape files need more source pixels than the box width
              (width × crop ratio × file ratio), hence the generous `sizes`. */}
          <li className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-6 lg:gap-10">
            <div className="col-span-2 md:col-span-12 lg:col-span-4 lg:pt-10">
              <Etapa numero="02" nome="Produção" />
              <Frentes titulos={["Usinagem de asfalto", "Concreto usinado", "Pré-moldados"]} className="mt-6" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-ink/10 md:col-span-7 md:aspect-[4/5] lg:col-span-5">
              <Image
                src="/images/atuacoes/edificacoes/edificacoes2.png"
                alt="Caminhão betoneira abastecendo obra de edificação"
                fill
                sizes="(max-width: 768px) 89vw, (max-width: 1024px) 97vw, 60vw"
                className="object-cover object-[0%_center]"
              />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-card bg-ink/10 md:col-span-5 md:mt-24 lg:col-span-3 lg:mt-40">
              <Image
                src="/images/atuacoes/pre-moldados/pre-moldados2.png"
                alt="Pátio de peças pré-moldadas de concreto com tubos de drenagem"
                fill
                sizes="(max-width: 768px) 119vw, (max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[30%_center]"
              />
            </div>
          </li>

          {/* 03 · Wide band: the finished road, with the crew on site set over its corner */}
          <li className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-12">
              <Etapa numero="03" nome="Execução" />
            </div>
            <div className="relative lg:col-span-10 lg:col-start-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-ink/10 lg:aspect-[21/9]">
                <Image
                  src="/images/atuacoes/pavimentacao/pavimentacao4.jpg"
                  alt="Rolo compactador sobre asfalto recém-aplicado em obra de pavimentação"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover object-[45%_70%]"
                />
              </div>
              {/* lg: the photo column starts at grid line 3, so -(20% + 0.2 × gap) lands exactly on the content edge */}
              <div className="relative -mt-10 ml-auto w-[48%] overflow-hidden rounded-card border-4 border-brita-100 sm:-mt-16 sm:w-[46%] lg:absolute lg:-bottom-16 lg:left-[calc(-20%-0.5rem)] lg:mt-0 lg:ml-0 lg:w-[34%]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/atuacoes/pavimentacao/pavimentacao3.jpg"
                    alt="Equipe da obra espalhando asfalto atrás da vibroacabadora"
                    fill
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 46vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <Frentes
              titulos={["Pavimentação asfáltica", "Locação de máquinas"]}
              className="grid gap-x-10 divide-y-0 md:grid-cols-2 lg:col-span-10 lg:col-start-3 lg:mt-16 [&>li]:border-t [&>li]:border-ink/10 [&>li]:!py-5"
            />
          </li>
        </ol>

        <div className="mt-20 flex flex-col gap-6 border-t border-ink/15 pt-10 md:mt-28 lg:flex-row lg:items-center lg:justify-between">
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
