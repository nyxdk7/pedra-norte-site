import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { HeroOperacoes } from "./HeroOperacoes";
import { HeroVideoBotao, HeroVideoFundo, HeroVideoProvider } from "./HeroVideo";
import { indicadoresGrupo } from "./data";

// First frame of the background video: shown at once, and kept when the video does not play.
const CAPA_HERO = "/videos/home/usina-britagem-aerea-capa.jpg";

/**
 * Full-screen glass hero: aerial video of the crushing plant (seamless 12 s loop, muted),
 * headline on the left, a glass card with the group's operations on the right and the
 * documented figures on the base.
 */
export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white lg:min-h-[max(44rem,100svh)]"
    >
      <HeroVideoProvider>
      {/* Video over its cover frame, in a manual 16:9 cover box (see .hero-stage) */}
      <div className="hero-stage absolute inset-0 -z-10">
        <div className="hero-frame hero-frame--video">
          <Image
            src={CAPA_HERO}
            alt="Vista aérea de usina de britagem, com correias transportadoras e pilhas de brita"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
            className="object-cover"
          />
          <HeroVideoFundo />
        </div>
        <div aria-hidden="true" className="hero-scrim absolute inset-0" />
      </div>

      <div className="hero-content container-msm flex flex-1 flex-col pt-[calc(var(--header-h)+2.5rem)] lg:pt-[calc(var(--header-h)+3.5rem)]">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="animate-fade-up flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span aria-hidden="true" className="h-px w-10 bg-white/70" />
              MSM Industrial / Pedra Norte
            </p>

            <h1
              id="hero-titulo"
              className="hero-title animate-fade-up anim-delay-1 mt-6 max-w-[44rem] text-[clamp(2.25rem,1.3rem+3vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
            >
              Engenharia, pavimentação, mineração e obras para grandes estruturas
            </h1>

            <p className="hero-lead animate-fade-up anim-delay-2 mt-6 max-w-[32rem] text-[length:var(--type-lead)] leading-[1.55] text-white">
              O Grupo Soster reúne empresas especializadas em infraestrutura,
              pavimentação, mineração, concreto usinado, pré-moldados e locação
              de máquinas, com atuação integrada para obras públicas e privadas
              no Acre.
            </p>

            <div className="animate-fade-up anim-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/sobre" variant="light" size="lg" className="group/cta">
                Conheça o grupo
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/atuacoes" variant="glass" size="lg">
                Ver áreas de atuação
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up anim-delay-4 hidden lg:col-span-5 lg:flex lg:justify-end">
            <HeroOperacoes />
          </div>
        </div>

        {/* Documented figures on the base of the photograph */}
        <div className="hero-numeros relative mt-12 flex items-end justify-between gap-8 border-t border-white/20 pb-10 pt-6 lg:mt-10">
          {/* Phones: the pause control sits just above the figures, clear of the WhatsApp button */}
          <HeroVideoBotao className="absolute bottom-[calc(100%+0.25rem)] right-0 md:hidden" />
          {/* Phones: the third figure stays clear of the fixed WhatsApp button */}
          <dl className="mr-16 grid flex-1 grid-cols-3 md:mr-0">
            {indicadoresGrupo.map((item) => (
              <div
                key={item.rotulo}
                className="flex flex-col-reverse justify-end gap-1 border-l border-white/25 pl-4 first:border-l-0 first:pl-0 md:pl-8"
              >
                <dt className="text-xs font-semibold text-white md:text-sm">{item.rotulo}</dt>
                <dd className="text-[1.75rem] font-light leading-none tracking-[-0.02em] tabular-nums md:text-[2.5rem] lg:text-[3rem]">
                  {item.valor}
                </dd>
              </div>
            ))}
          </dl>

          <div className="hidden shrink-0 items-center gap-5 md:flex">
          <HeroVideoBotao grande />
          <a
            href="#credibilidade"
            className="hero-rolar group flex shrink-0 items-center gap-4 text-sm font-semibold leading-tight text-white"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 transition-colors duration-200 group-hover:border-white group-hover:bg-white/10">
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </span>
            Role para
            <br />
            explorar
          </a>
          </div>
        </div>
      </div>
      </HeroVideoProvider>
    </section>
  );
}
