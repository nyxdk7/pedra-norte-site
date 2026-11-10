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
 * Atuações opening: four slanted photographic panels filling a 16:9 band. They are the
 * page's control surface — choosing one shows that front below — so they are a tablist,
 * not a list of links, and the front is named once, here.
 *
 * Nothing is laid over the photographs but the frosted strip along their foot, which runs
 * unbroken across the band and is cut only by the seams between panels. The chosen panel
 * is marked by the gold edge along the top of its strip and by the room it takes, so the
 * state is read from a shape and not from colour alone.
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
  /** The page's h1. The photographs fill the band, so it is read, not shown. */
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
    // The header floats over the dark opening and turns solid once the page scrolls.
    <section
      aria-labelledby="atuacoes-titulo"
      data-header-limite="8"
      className="on-dark atu-abertura"
    >
      <h1 id="atuacoes-titulo" className="sr-only">
        {titulo}
      </h1>

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
                  // A click also brings the region it controls into view, or the control
                  // would look inert. Arrow keys do not: the focus stays where the eye is.
                  onClick={() => onSelecionar(indice, true)}
                  className="atu-link"
                >
                  <span className="atu-foto">
                    <Image
                      src={frente.foto}
                      alt=""
                      fill
                      loading="eager"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 30vw"
                      className="object-cover"
                      style={{ objectPosition: frente.posicao ?? "center" }}
                    />
                  </span>

                  <span className="atu-rotulo">
                    <span className="atu-rotulo-corpo">
                      {/* Words never split, so "Pré-moldados" stays whole */}
                      <span className="atu-rotulo-nome">
                        {frente.titulo.split(" ").map((palavra, i) => (
                          <span key={palavra + i}>
                            {i > 0 ? " " : null}
                            <span className="whitespace-nowrap">{palavra}</span>
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
