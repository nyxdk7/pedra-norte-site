import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Section";
import {
  historiaAbertura,
  historiaContinua,
  historiaContinuaRotulo,
  historiaFotos,
  historiaParagrafos,
} from "./data";

/**
 * "Nossa história": the archive photographs beside the company's own account, set as an
 * editorial page on white — the opening paragraph as the lead, the rest justified beside
 * the prints, which run down their column in the order they are read.
 *
 * The prose is justified at the owner's request. Justification without hyphenation opens
 * rivers of white in Portuguese, so the column carries `hyphens: auto` and is marked
 * `lang="pt-BR"` for the browser to hyphenate by the right dictionary.
 */
export function NossaHistoria() {
  return (
    <section id="historia" aria-labelledby="historia-titulo" className="bg-white py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Nossa história</Eyebrow>
          <h2
            id="historia-titulo"
            className="mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] text-heading"
          >
            Uma família catarinense que escolheu o Acre.
          </h2>
          <p
            lang="pt-BR"
            className="historia-abertura mt-6 font-serif text-[length:var(--type-lead)] leading-[1.55] text-heading"
          >
            {historiaAbertura}
          </p>
        </div>

        <div className="mt-12 grid gap-10 border-t border-border pt-12 lg:grid-cols-12 lg:gap-12">
          {/* The archive prints run down beside the account, each in its own proportions */}
          <div className="grid content-start gap-8 lg:col-span-5">
            {historiaFotos.map((retrato) => (
              <figure key={retrato.foto}>
                <div
                  className="relative overflow-hidden rounded-card bg-brita-100"
                  style={{ aspectRatio: retrato.proporcao }}
                >
                  <Image
                    src={retrato.foto}
                    alt={retrato.alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 2 * var(--gutter)), min(42vw, 620px)"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex gap-3 text-[0.9375rem] leading-relaxed text-muted-strong">
                  <span aria-hidden="true" className="mt-2.5 h-px w-8 shrink-0 bg-accent" />
                  {retrato.legenda}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div lang="pt-BR" className="historia-prosa">
              {historiaParagrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
              ))}
            </div>

            {/* The account reaching the present, set beside the photograph of the signing */}
            <div lang="pt-BR" className="historia-continua">
              <p className="historia-continua-rotulo">
                <span aria-hidden="true" className="h-px w-8 shrink-0 bg-accent" />
                {historiaContinuaRotulo}
              </p>
              <div className="historia-prosa">
                {historiaContinua.map((paragrafo) => (
                  <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
