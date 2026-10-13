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
    // The dark band behind the glass header is only the top of the photographs: the
    // header turns solid as soon as the page scrolls (data-header-limite, in px).
    <section aria-labelledby="atuacoes-titulo" data-header-limite="24" className="relative overflow-hidden bg-background">
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
                    // Strata run 8% past each edge below 1024px; on desktop the tall panels are
                    // height-bound, so wide photos need more pixels than the panel width.
                    sizes="(max-width: 1023px) 125vw, (max-width: 1279px) 90vw, 75vw"
                    className="object-cover"
                    style={{ objectPosition: frente.posicao ?? "center" }}
                  />
                </span>
                <span className="atu-rotulo">
                  <span className="hidden text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-white sm:block">
                    {frente.subtitulo}
                  </span>
                  {/* Words never split (no break at "Pré-moldados"); the arrow stays on the last word */}
                  <span className="block text-xl font-bold leading-tight text-white sm:mt-1">
                    {frente.titulo.split(" ").map((palavra, indice, palavras) => (
                      <span key={palavra + indice}>
                        {indice > 0 ? " " : null}
                        <span className="whitespace-nowrap">
                          {palavra}
                          {indice === palavras.length - 1 ? (
                            <ArrowUpRight
                              className="ml-1.5 inline h-4 w-4 align-[-1px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          ) : null}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Container className="atu-texto">
        <p className="atu-eyebrow">{eyebrow}</p>
        <h1
          id="atuacoes-titulo"
          className="animate-fade-up mx-auto mt-5 max-w-[24ch] text-[clamp(2.125rem,1.2rem+2.6vw,3.75rem)] font-black leading-[1.02] tracking-[-0.035em] text-heading"
        >
          {titulo}
        </h1>
        <p className="animate-fade-up anim-delay-1 mx-auto mt-6 max-w-[46rem] text-[clamp(1.0625rem,0.98rem+0.35vw,1.3rem)] font-semibold leading-[1.85]">
          <span className="atu-destaque">{descricao}</span>
        </p>
        <div className="animate-fade-up anim-delay-2 mt-7 flex flex-col justify-center gap-3 sm:flex-row">{acoes}</div>
      </Container>
    </section>
  );
}
