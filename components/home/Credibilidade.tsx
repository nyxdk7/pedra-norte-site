import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { TickerCasos } from "./TickerCasos";

/**
 * Trust band under the hero, in the hero's night blue: the institutions served run as a
 * ticker over an engineering scale (the figures sit on the hero photo above).
 */
export function Credibilidade() {
  return (
    <section
      id="credibilidade"
      aria-labelledby="credibilidade-titulo"
      className="on-dark bg-ink pb-14 pt-14 text-white md:pb-20 md:pt-20"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span aria-hidden="true" className="h-px w-10 bg-white/70" />
              Casos de sucesso
            </p>
            <h2
              id="credibilidade-titulo"
              className="mt-5 max-w-[32rem] text-[clamp(1.5rem,1.2rem+1.1vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
            >
              Confiança de instituições e parceiros estratégicos.
            </h2>
          </div>
          <Link
            href="/obras"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-5 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10 md:self-auto"
          >
            Ver obras e projetos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>

      <div className="mt-10 md:mt-12">
        <TickerCasos />
      </div>
    </section>
  );
}
