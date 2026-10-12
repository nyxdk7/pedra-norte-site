import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const FOTO_HERO = "/images/atuacoes/extracao-minerios/pedreira (5).jpeg";

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate flex min-h-[calc(100svh-3rem)] flex-col overflow-hidden bg-ink text-white md:min-h-[min(calc(100svh-5rem),52rem)] lg:min-h-[max(36rem,min(92svh,950px))]"
    >
      {/* Photograph: manual cover frame shared with the annotation layer (see .hero-stage) */}
      <div className="hero-stage absolute inset-0 -z-10">
        <div className="hero-frame">
          <Image
            src={FOTO_HERO}
            alt="Correia transportadora sobre pilha de agregados na operação de pedreira do grupo"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-aspect-ratio: 4/3) 134vh, 100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="hero-scrim absolute inset-0" />
      </div>

      {/* Phones: headline on the sky, lead + actions on the toned base. Tablets: one block
          on the base, leaving the structure clear above. Desktop: block on the left third. */}
      <div className="hero-content container-msm flex flex-1 flex-col justify-between gap-12 pb-10 pt-[calc(var(--header-h)+2.5rem)] sm:justify-end sm:gap-7 md:pb-14 lg:justify-center lg:gap-0 lg:pb-20 lg:pt-[calc(var(--header-h)+3rem)]">
        <h1
          id="hero-titulo"
          className="hero-title animate-fade-up max-w-[46rem] text-[length:var(--type-hero)] font-bold leading-[1.02] tracking-[-0.03em]"
        >
          Engenharia, pavimentação, mineração e obras para grandes estruturas
        </h1>

        <div className="lg:mt-7">
          <p className="hero-lead animate-fade-up anim-delay-1 max-w-[34rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-white sm:text-white/90">
            O Grupo Soster reúne empresas especializadas em infraestrutura,
            pavimentação, mineração, concreto usinado, pré-moldados e locação
            de máquinas, com atuação integrada para obras públicas e privadas
            no Acre.
          </p>

          <div className="animate-fade-up anim-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/sobre" variant="signal" size="lg">
              Conheça o grupo
            </ButtonLink>
            <ButtonLink href="/atuacoes" variant="glass" size="lg">
              Ver áreas de atuação
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Annotation (xl+): names what the photograph shows and links to it */}
      <div className="hero-stage pointer-events-none absolute inset-0 hidden xl:block">
        <div className="hero-frame hero-annotation">
          <span aria-hidden="true" className="hero-mark" />
          <span aria-hidden="true" className="hero-leader animate-fade-up anim-delay-3" />
          <Link
            href="/atuacoes"
            className="hero-note animate-fade-up anim-delay-4 group pointer-events-auto overflow-hidden rounded-[0.625rem] bg-white text-ink shadow-[0_24px_48px_-24px_rgb(6_16_42/0.6)]"
          >
            <span className="block px-4 pb-3 pt-3.5">
              <span className="flex items-start justify-between gap-3">
                <span className="text-base font-bold leading-tight">Extração de minérios</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-steel transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-1 block font-serif text-[0.9375rem] leading-snug text-steel">
                Operação de pedreira e produção de agregados minerais.
              </span>
            </span>
            <span className="relative block aspect-[16/7]">
              <Image
                src="/images/atuacoes/extracao-minerios/pedreira (9).jpeg"
                alt=""
                fill
                sizes="272px"
                className="object-cover"
              />
            </span>
            <span className="sr-only">Ver áreas de atuação</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
