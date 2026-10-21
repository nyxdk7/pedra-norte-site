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
 * followed by a mosaic of aerial photographs. Only the work's name and category are
 * stated; no figures are added.
 */
export function ObraDestaque({
  id,
  rotulo,
  categoria,
  acento,
  forte,
  capa,
  galeria,
}: {
  id: string;
  rotulo: string;
  categoria: string;
  acento: string;
  forte: string;
  capa: Omit<FotoDestaque, "legenda">;
  galeria: FotoDestaque[];
}) {
  return (
    <section aria-labelledby={`${id}-titulo`} className="on-dark bg-ink pb-16 text-white md:pb-24">
      <div className="destaque-capa">
        <div className="destaque-capa-foto">
          <Image
            src={capa.src}
            alt={capa.alt}
            fill
            // Phones crop the 3:2 photograph by height (~2.4x the screen width).
            sizes="(max-width: 1023px) 240vw, 100vw"
            className={`object-cover ${capa.enquadramento ?? "object-center"}`}
          />
        </div>
        <div aria-hidden="true" className="destaque-capa-tom" />

        <div className="container-msm w-full pb-10 md:pb-14 lg:pb-16">
          <p className="flex flex-wrap gap-2">
            <span className="destaque-chip">{rotulo}</span>
            <span className="destaque-chip">{categoria}</span>
          </p>
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
                        ? "(max-width: 1023px) 100vw, 62vw"
                        : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 34vw"
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
