import Image from "next/image";
import Link from "next/link";
import {
  Blocks,
  Building2,
  Cylinder,
  Factory,
  type LucideIcon,
  Mountain,
  Package,
  Route,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Section";
import { MapaEcossistema } from "./MapaEcossistema";
import { solucoesEcossistema } from "./data";

const pilares = [
  "Insumos próprios",
  "Frota operacional",
  "Equipe técnica",
  "Execução em campo",
];

const icones: Record<string, LucideIcon> = {
  pavimentacao: Route,
  usinagem: Factory,
  concreto: Cylinder,
  agregados: Mountain,
  "pre-moldados": Blocks,
  maquinas: Truck,
  construcao: Building2,
  apoio: Package,
};

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
    foto: "/images/atuacoes/pre-moldados/pre-moldados2.png",
    alt: "Pátio de peças pré-moldadas de concreto",
    href: "/atuacoes#frente-pre-moldados",
  },
];

/** Hexagonal engineering badge (outline + glass fill) holding a solution icon. */
function Selo({ Icone }: { Icone: LucideIcon }) {
  return (
    <span className="relative grid h-16 w-[3.7rem] place-items-center">
      <svg viewBox="0 0 60 66" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <path
          d="M30 2 57 17.5v31L30 64 3 48.5v-31Z"
          className="fill-white/[0.07] stroke-white/35 transition-colors duration-200 group-hover:fill-white/15 group-hover:stroke-accent"
          strokeWidth="1.5"
        />
      </svg>
      <Icone className="relative h-6 w-6 text-white" strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}

/**
 * "Ecossistema de soluções": a photomontage of real operations (two photographs meeting
 * at a light seam under one colour grade), the group's statement, the solutions as
 * engineering badges, then the map linking companies, solutions and success cases.
 */
export function EcossistemaSolucoes() {
  return (
    <>
      <section aria-labelledby="ecossistema-titulo" className="on-dark bg-ink pb-16 text-white md:pb-24">
        <Container>
          {/* Montage */}
          <div className="eco-palco relative isolate h-[22rem] overflow-hidden rounded-[1.375rem] sm:h-[28rem] lg:h-[38rem]">
            <div className="eco-horizonte absolute inset-x-0 top-0 h-[70%]">
              <Image src="/images/galeria/home14.jpeg" alt="" fill sizes="(max-width: 1440px) 100vw, 1264px" className="object-cover" />
            </div>
            <div className="eco-metade eco-esq absolute bottom-0 left-0 top-[10%] w-full md:w-1/2">
              <Image
                src="/images/galeria/home13.jpeg"
                alt="Escavadeira carregando caminhão basculante da Pedra Norte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="eco-foto object-cover object-[50%_40%]"
              />
            </div>
            <div className="eco-metade eco-dir absolute bottom-0 right-0 top-[10%] hidden w-1/2 md:block">
              <Image
                src="/images/atuacoes/edificacoes/edificacoes.png"
                alt="Caminhão betoneira e bomba de concreto abastecendo obra de edificação"
                fill
                sizes="50vw"
                className="eco-foto object-cover object-[60%_30%]"
              />
            </div>
            <div aria-hidden="true" className="eco-tom absolute inset-0" />
            <div aria-hidden="true" className="eco-ar absolute inset-0" />
            <div aria-hidden="true" className="eco-base absolute inset-0" />
            <div aria-hidden="true" className="eco-costura absolute bottom-[20%] left-1/2 top-[6%] hidden w-0.5 -translate-x-1/2 md:block" />

            <ul className="absolute inset-x-4 bottom-4 flex gap-3 overflow-x-auto [scrollbar-width:none] md:inset-x-auto md:bottom-[7%] md:left-1/2 md:-translate-x-1/2 md:overflow-visible">
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

          {/* Solutions as engineering badges */}
          <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-white/15 pt-10 sm:grid-cols-4 lg:grid-cols-8">
            {solucoesEcossistema.map((solucao) => {
              const Icone = icones[solucao.id];

              return (
                <li key={solucao.id}>
                  <Link
                    href={solucao.href}
                    className="anel-duplo group flex flex-col items-center gap-3 rounded-xl px-1 py-2 text-center text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.08em] text-white"
                  >
                    <Selo Icone={Icone} />
                    {solucao.titulo}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <MapaEcossistema />
    </>
  );
}
