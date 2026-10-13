import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";

export type Poster = {
  /** Two-tone headline: the ochre line and the heavy white line. */
  acento: string;
  forte: string;
  /** Heavy line first (a large word over a small ochre line). */
  forteAntes?: boolean;
  alinhamento: "esquerda" | "centro" | "direita";
  /** Headline at the base (default) or right under the chip row. */
  posicao?: "base" | "topo";
  /** Glass chip at the top: the front's category, or the front a detail belongs to. */
  rotulo: string;
  descricao?: string;
  detalhes?: string[];
  foto: string;
  alt: string;
  /** object-position of the photograph (Tailwind class). */
  enquadramento?: string;
};

/**
 * One portfolio poster: a real photograph graded toward deep navy, a two-tone headline
 * in Overpass and, for the main fronts, a glass panel with the description.
 */
export function PosterObra({ poster }: { poster: Poster }) {
  const linhaAcento = <span className="poster-acento">{poster.acento}</span>;
  const linhaForte = <span className="poster-forte">{poster.forte}</span>;

  return (
    <article
      className="poster"
      data-alinhamento={poster.alinhamento}
      data-posicao={poster.posicao ?? "base"}
      data-forte-antes={poster.forteAntes || undefined}
    >
      <div className="poster-foto">
        <Image
          src={poster.foto}
          alt={poster.alt}
          fill
          // Portrait boxes crop landscape photographs (up to ~2:1) by height: the drawn
          // width is ~2.4x the box width.
          sizes="(max-width: 767px) 235vw, (max-width: 1023px) 115vw, 72vw"
          className={`object-cover ${poster.enquadramento ?? "object-center"}`}
        />
      </div>
      <div aria-hidden="true" className="poster-tom" />

      <div className="poster-topo">
        <p className="poster-chip">{poster.rotulo}</p>
        <span aria-hidden="true">
          <BrandLogo tom="claro" className="[--logo-h:1.4rem]" />
        </span>
      </div>

      <div className="poster-texto">
        <h3 className="poster-titulo">
          {poster.forteAntes ? (
            <>
              {linhaForte} {linhaAcento}
            </>
          ) : (
            <>
              {linhaAcento} {linhaForte}
            </>
          )}
        </h3>

        {poster.descricao ? (
          <div className="poster-vidro">
            <p>{poster.descricao}</p>
            {poster.detalhes ? (
              <ul className="poster-detalhes">
                {poster.detalhes.map((detalhe) => (
                  <li key={detalhe}>{detalhe}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
