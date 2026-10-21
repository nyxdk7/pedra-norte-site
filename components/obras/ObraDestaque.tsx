import Image from "next/image";

export type FotoDestaque = {
  src: string;
  alt: string;
  /** Short visible caption of the view. */
  legenda: string;
  enquadramento?: string;
};

/**
 * Featured work: a full-bleed cinematic band (ground-level photograph, two-tone title)
 * followed by a mosaic of aerial photographs. Only the work's name, as given by the
 * owner, is stated; no figures or scope are added.
 */
export function ObraDestaque({
  id,
  rotulo,
  acento,
  forte,
  capa,
  galeria,
}: {
  id: string;
  rotulo: string;
  acento: string;
  forte: string;
  capa: Omit<FotoDestaque, "legenda">;
  galeria: FotoDestaque[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="on-dark bg-ink pb-16 text-white md:pb-24">
      <div className="destaque-capa">
        <div className="destaque-capa-foto">
          <Image
            src={capa.src}
            alt={capa.alt}
            fill
            // Portrait screens crop the 3:2 photograph by height (phones ~2.5x, tablets ~1.4x).
            sizes="(max-width: 767px) 260vw, (max-width: 1023px) 140vw, 100vw"
            className={`object-cover ${capa.enquadramento ?? "object-center"}`}
          />
        </div>
        <div aria-hidden="true" className="destaque-capa-tom" />

        <div className="container-msm w-full pb-10 md:pb-14 lg:pb-16">
          <p className="destaque-chip">{rotulo}</p>
          <h2 id={`${id}-titulo`} className="destaque-titulo mt-5">
            <span className="destaque-acento">{acento}</span> <span className="destaque-forte">{forte}</span>
          </h2>
        </div>
      </div>

      <div className="container-msm mt-2 lg:mt-3">
        <ul className="destaque-galeria" aria-label={`Fotos aéreas: ${acento} ${forte}`}>
          {galeria.map((foto, indice) => (
            <li key={foto.src} className="destaque-foto">
              <figure className="h-full">
                <div className="destaque-foto-imagem">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes={
                      indice === 0
                        ? "(max-width: 1023px) 100vw, (max-width: 1440px) 58vw, 840px"
                        : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1440px) 29vw, 420px"
                    }
                    className={`object-cover ${foto.enquadramento ?? "object-center"}`}
                  />
                </div>
                <figcaption className="destaque-legenda">{foto.legenda}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
