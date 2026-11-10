import Image from "next/image";
import { Container } from "@/components/ui/Section";

export type FrenteDetalhe = {
  titulo: string;
  subtitulo: string;
  slug: string;
  resumo: string;
  descricao: string;
  /** `foco`: object-position class, for a photograph its slot crops hard. */
  fotos: { src: string; alt: string; foco?: string }[];
};

/**
 * The one detail region on the page: it shows whichever front the panels above have
 * selected. The photographs are a portfolio, not a queue — all of them are on screen
 * at once, so the work speaks without anyone having to click through it, and the
 * region has no moving content to pause.
 *
 * The caller keys this by the front's slug, so choosing another front remounts it.
 */
export function DetalheFrente({ frente }: { frente: FrenteDetalhe }) {
  return (
    <section
      id="frente-detalhe"
      role="tabpanel"
      aria-labelledby={`frente-${frente.slug}`}
      tabIndex={0}
      className="detalhe-frente py-16 md:py-24"
    >
      <Container>
        <div className="detalhe-cabecalho">
          <div>
            <p className="detalhe-rotulo">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
              {frente.subtitulo}
            </p>

            {/* The front is named once on the page, in the panel above; here it reads as
                the heading of the region those panels control. */}
            <h2 className="detalhe-titulo">{frente.titulo}</h2>
          </div>

          <div>
            <p className="detalhe-resumo">{frente.resumo}</p>
            <p className="detalhe-texto">{frente.descricao}</p>
          </div>
        </div>

        <ul className="detalhe-portfolio" data-qtd={frente.fotos.length}>
          {frente.fotos.map((item) => (
            <li key={item.src} className="detalhe-foto">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) calc(100vw - 2 * var(--gutter)), (max-width: 1023px) 46vw, 42vw"
                className={`object-cover ${item.foco ?? ""}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
