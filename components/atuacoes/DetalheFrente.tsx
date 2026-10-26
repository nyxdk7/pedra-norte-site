"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Section";

export type FrenteDetalhe = {
  titulo: string;
  subtitulo: string;
  slug: string;
  resumo: string;
  descricao: string;
  fotos: { src: string; alt: string }[];
};

const dois = (n: number) => String(n).padStart(2, "0");

/**
 * The one detail region on the page: it shows whichever front the panels above have
 * selected. The photographs are a queue the visitor walks — nothing advances on its own,
 * so there is no moving content to pause and no competition with the text being read.
 *
 * The caller keys this by the front's slug, so choosing another front remounts it and the
 * queue starts on the first photograph without an effect syncing state to a prop.
 */
export function DetalheFrente({ frente }: { frente: FrenteDetalhe }) {
  const [foto, setFoto] = useState(0);
  const total = frente.fotos.length;
  // Announced only after the visitor's own actions; the chosen panel announces itself.
  const [aviso, setAviso] = useState("");

  const ir = (indice: number) => {
    setFoto(indice);
    setAviso(`Foto ${indice + 1} de ${total}: ${frente.fotos[indice].alt}`);
  };

  const navegar = (passo: 1 | -1) => ir((foto + passo + total) % total);

  return (
    <section
      id="frente-detalhe"
      role="tabpanel"
      aria-labelledby={`frente-${frente.slug}`}
      tabIndex={0}
      className="detalhe-frente py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="detalhe-palco">
              {frente.fotos.map((item, i) => (
                // Every photograph stays mounted so the change is a crossfade, never a flash.
                <div
                  key={item.src}
                  className="detalhe-camada"
                  data-ativa={i === foto || undefined}
                  aria-hidden={i !== foto || undefined}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 2 * var(--gutter)), min(58vw, 820px)"
                    className="object-cover"
                  />
                </div>
              ))}

              {total > 1 ? (
                <p className="detalhe-contador">
                  <span aria-hidden="true">
                    {dois(foto + 1)} / {dois(total)}
                  </span>
                  <span className="sr-only">
                    Foto {foto + 1} de {total}
                  </span>
                </p>
              ) : null}
            </div>

            {total > 1 ? (
              <div className="detalhe-navegacao">
                <button
                  type="button"
                  className="detalhe-seta"
                  aria-label="Foto anterior"
                  onClick={() => navegar(-1)}
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                <ul className="detalhe-tracos" aria-label="Fotos desta frente">
                  {frente.fotos.map((item, i) => (
                    <li key={item.src}>
                      <button
                        type="button"
                        className="detalhe-traco"
                        data-ativo={i === foto || undefined}
                        aria-label={`Mostrar foto ${i + 1} de ${total}: ${item.alt}`}
                        aria-current={i === foto || undefined}
                        onClick={() => ir(i)}
                      />
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="detalhe-seta"
                  aria-label="Próxima foto"
                  onClick={() => navegar(1)}
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-5">
            <p className="detalhe-rotulo">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
              {frente.subtitulo}
            </p>

            {/* The front is named once on the page, in the panel above; here it reads as
                the heading of the region those panels control. */}
            <h2 className="detalhe-titulo">{frente.titulo}</h2>

            <p className="detalhe-resumo">{frente.resumo}</p>
            <p className="detalhe-texto">{frente.descricao}</p>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {aviso}
        </p>
      </Container>
    </section>
  );
}
