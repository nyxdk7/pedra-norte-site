import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Section";

export type FrenteHero = {
  titulo: string;
  subtitulo: string;
  foto: string;
  href: string;
  /** object-position of the photograph inside its slanted panel */
  posicao?: string;
};

/**
 * Atuações opening: one slanted photographic panel per front (real photos), separated
 * by thin seams and fading into the page; each panel is a link to its front and widens
 * on hover/focus. Heavy centred headline and a brand-blue highlighted lead below.
 */
export function HeroAtuacoes({
  frentes,
  eyebrow,
  titulo,
  descricao,
  acoes,
}: {
  frentes: FrenteHero[];
  eyebrow: string;
  titulo: string;
  descricao: string;
  acoes: ReactNode;
}) {
  return (
    <section aria-labelledby="atuacoes-titulo" className="relative overflow-hidden bg-background">
      <nav aria-label="Frentes de atuação" className="atu-area">
        <ul className="atu-paineis">
          {frentes.map((frente) => (
            <li key={frente.titulo} className="atu-painel">
              <a href={frente.href} className="atu-link group">
                <span className="atu-foto">
                  <Image
                    src={frente.foto}
                    alt=""
                    fill
                    loading="eager"
                    // Strata run 8% past each edge below 1024px; expanded panels are ~60vw wide with the
                    // counter-skewed photo oversized by 60%.
                    sizes="(max-width: 1023px) 125vw, 64vw"
                    className="object-cover"
                    style={{ objectPosition: frente.posicao ?? "center" }}
                  />
                </span>
                <span className="atu-rotulo">
                  <span className="block text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white">
                    {frente.subtitulo}
                  </span>
                  <span className="mt-1 flex items-center gap-2 text-xl font-bold leading-tight text-white">
                    {frente.titulo}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div aria-hidden="true" className="atu-topo" />
        <div aria-hidden="true" className="atu-fade" />
      </nav>

      <Container className="atu-texto">
        <p className="atu-eyebrow">{eyebrow}</p>
        <h1
          id="atuacoes-titulo"
          className="animate-fade-up mx-auto mt-5 max-w-[19ch] text-[clamp(2.25rem,1.1rem+3.6vw,4.5rem)] font-black leading-[1.02] tracking-[-0.035em] text-heading"
        >
          {titulo}
        </h1>
        <p className="animate-fade-up anim-delay-1 mx-auto mt-7 max-w-[46rem] text-[clamp(1.0625rem,0.98rem+0.35vw,1.3rem)] font-semibold leading-[1.85]">
          <span className="atu-destaque">{descricao}</span>
        </p>
        <div className="animate-fade-up anim-delay-2 mt-9 flex flex-col justify-center gap-3 sm:flex-row">{acoes}</div>
      </Container>
    </section>
  );
}
