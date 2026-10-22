import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { MapaEcossistema } from "./MapaEcossistema";

const pilares = [
  "Insumos próprios",
  "Frota operacional",
  "Equipe técnica",
  "Execução em campo",
];

// Real operations in the foreground of the montage (no generated imagery).
const destaques = [
  {
    rotulo: "Pavimentação",
    foto: "/images/atuacoes/pavimentacao/pavimentacao3.jpg",
    alt: "Equipe espalhando asfalto atrás da vibroacabadora",
    href: "/atuacoes#frente-pavimentacao",
  },
  {
    rotulo: "Máquinas",
    foto: "/images/atuacoes/extracao-minerios/pedreira (2).jpeg",
    alt: "Caminhão basculante com identificação MSM em frente de obra",
    href: "/estrutura",
  },
  {
    rotulo: "Pré-moldados",
    foto: "/images/atuacoes/pre-moldados/pre-moldados.png",
    alt: "Peças pré-moldadas de concreto prontas para obra",
    href: "/atuacoes#frente-pre-moldados",
  },
];

/**
 * "Ecossistema de soluções": a photomontage of real operations (two photographs meeting
 * at a light seam under one colour grade), the group's statement, then the map linking
 * companies, solutions and success cases.
 */
export function EcossistemaSolucoes() {
  return (
    <>
      <section id="ecossistema" aria-labelledby="ecossistema-titulo" className="on-dark bg-ink pb-16 pt-12 text-white md:pb-24 md:pt-16">
        <Container>
          {/* Montage */}
          <div className="relative">
          <div className="eco-palco relative isolate h-[20rem] overflow-hidden rounded-[1.375rem] sm:h-[26rem] lg:h-[38rem]">
            {/* Both photographs at every width; the top third is one shared painted sky */}
            <div className="eco-metade eco-esq absolute bottom-0 left-0 top-0 w-1/2">
              <Image
                src="/images/atuacoes/extracao-minerios/pedreira (6).jpeg"
                alt="Pá carregadeira em meio à poeira entre as correias transportadoras da pedreira"
                fill
                sizes="(max-width: 767px) 125vw, (max-width: 1279px) 72vw, 760px"
                className="eco-foto object-cover object-[55%_60%]"
              />
            </div>
            <div className="eco-metade eco-dir absolute bottom-0 right-0 top-0 w-1/2">
              <Image
                src="/images/atuacoes/edificacoes/edificacoes.png"
                alt="Caminhão betoneira e bomba de concreto abastecendo obra de edificação"
                fill
                sizes="(max-width: 767px) 125vw, (max-width: 1279px) 72vw, 760px"
                className="eco-foto object-cover object-[62%_60%]"
              />
            </div>
            <div aria-hidden="true" className="eco-tom absolute inset-0" />
            <div aria-hidden="true" className="eco-ar absolute inset-0" />
            <div aria-hidden="true" className="eco-base absolute inset-0" />
            <div aria-hidden="true" className="eco-costura absolute bottom-[18%] left-1/2 top-[8%] w-0.5 -translate-x-1/2" />
          </div>

            {/* Below lg the cards sit under the photograph instead of covering it */}
            <ul className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] lg:absolute lg:bottom-[7%] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:overflow-visible lg:pb-0">
              {destaques.map((item) => (
                <li key={item.rotulo} className="w-44 shrink-0 md:w-52">
                  <Link
                    href={item.href}
                    className="hero-vidro anel-duplo group block overflow-hidden rounded-[0.875rem] text-white"
                  >
                    <span className="relative block aspect-[16/9]">
                      <Image src={item.foto} alt={item.alt} fill sizes="210px" className="object-cover" />
                    </span>
                    <span className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold">
                      {item.rotulo}
                      <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent transition-transform duration-200 group-hover:rotate-[135deg]" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Statement */}
          <div className="mt-14 grid gap-8 md:mt-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <span aria-hidden="true" className="h-px w-10 bg-white/70" />
                Ecossistema de soluções
              </p>
              <h2
                id="ecossistema-titulo"
                className="mt-5 text-[clamp(2rem,1.3rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]"
              >
                Da extração à execução, uma estrutura completa para grandes obras.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <p className="text-[length:var(--type-lead)] leading-[1.55] text-white/90">
                A MSM Industrial, Pedra Norte e empresas integradas do Grupo
                Soster conectam produção de insumos, frota pesada, equipe
                técnica e execução em campo para atender obras públicas e
                privadas com mais controle, agilidade e capacidade operacional.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pilares.map((item) => (
                  <li key={item} className="rounded-full border border-white/25 px-3.5 py-1.5 text-sm font-semibold text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </Container>
      </section>

      <MapaEcossistema />
    </>
  );
}
