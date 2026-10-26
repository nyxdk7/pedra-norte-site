"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef } from "react";

export type FrenteHero = {
  titulo: string;
  subtitulo: string;
  foto: string;
  /** Slug used for the panel's id and for the deep link */
  slug: string;
  /** object-position of the photograph inside its slanted panel */
  posicao?: string;
};

/**
 * Atuações opening: one slanted photographic panel per front, separated by thin seams and
 * fading into the page. The panels are the page's control surface — choosing one shows
 * that front below — so they are a tablist, not a list of links: the front is named once,
 * here, instead of being repeated in a block further down.
 */
export function HeroAtuacoes({
  frentes,
  ativa,
  onSelecionar,
  titulo,
}: {
  frentes: FrenteHero[];
  ativa: number;
  /** `revelar` asks the caller to bring the detail region into view (pointer only). */
  onSelecionar: (indice: number, revelar?: boolean) => void;
  /** The page's h1. The photographs fill the screen, so it is read, not shown. */
  titulo: string;
}) {
  const abas = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys walk the panels and carry the focus with them (WAI-ARIA tabs pattern).
  const aoTeclar = (evento: KeyboardEvent<HTMLUListElement>) => {
    const total = frentes.length;
    const passo = evento.key === "ArrowRight" ? 1 : evento.key === "ArrowLeft" ? -1 : 0;
    const destino =
      passo !== 0
        ? (ativa + passo + total) % total
        : evento.key === "Home"
          ? 0
          : evento.key === "End"
            ? total - 1
            : null;
    if (destino === null) return;
    evento.preventDefault();
    onSelecionar(destino);
    abas.current[destino]?.focus();
  };

  return (
    // The dark band behind the glass header is only the top of the photographs: the
    // header turns solid as soon as the page scrolls (data-header-limite, in px).
    <section aria-labelledby="atuacoes-titulo" data-header-limite="8" className="relative overflow-hidden bg-background">
      {/* The photographs are the opening; the heading stays for screen readers and search. */}
      <h1 id="atuacoes-titulo" className="sr-only">
        {titulo}
      </h1>

      <div className="atu-area">
        <ul
          role="tablist"
          aria-label="Frentes de atuação"
          aria-orientation="horizontal"
          className="atu-paineis"
          onKeyDown={aoTeclar}
        >
          {frentes.map((frente, indice) => {
            const selecionada = indice === ativa;

            return (
              <li key={frente.slug} className="atu-painel" data-ativo={selecionada || undefined}>
                <button
                  ref={(elemento) => {
                    abas.current[indice] = elemento;
                  }}
                  type="button"
                  role="tab"
                  id={`frente-${frente.slug}`}
                  aria-selected={selecionada}
                  aria-controls="frente-detalhe"
                  // Only the chosen panel is in the tab order; the arrows reach the rest.
                  tabIndex={selecionada ? 0 : -1}
                  // The panels fill the screen, so the region they control starts below the
                  // fold: a click brings it into view, or the control would look inert.
                  // Arrow keys do not, because the focus must stay where the eye is.
                  onClick={() => onSelecionar(indice, true)}
                  className="atu-link group"
                >
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
                    {/* Words never split (no break at "Pré-moldados") */}
                    <span className="block text-xl font-bold leading-tight text-white sm:mt-1">
                      {frente.titulo.split(" ").map((palavra, i) => (
                        <span key={palavra + i}>
                          {i > 0 ? " " : null}
                          <span className="whitespace-nowrap">{palavra}</span>
                        </span>
                      ))}
                    </span>
                    {/* The rule fills under the chosen panel: the selected state is read
                        from a shape, not from colour alone. */}
                    <span aria-hidden="true" className="atu-barra" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
