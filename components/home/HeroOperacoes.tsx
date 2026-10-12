"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { operacoesHero } from "./data";

const botao =
  "grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10";

/** Glass card over the hero photograph: one real operation at a time, changed by the visitor. */
export function HeroOperacoes() {
  const [indice, setIndice] = useState(0);
  const total = operacoesHero.length;
  const atual = operacoesHero[indice];

  function mover(passo: number) {
    setIndice((valor) => (valor + passo + total) % total);
  }

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Nossas operações"
      className="hero-vidro w-full max-w-[21rem] rounded-[1.25rem] p-3 text-white"
    >
      <div className="flex items-center justify-between px-1 pb-3">
        <div className="flex gap-1.5">
          <button type="button" onClick={() => mover(-1)} aria-label="Operação anterior" className={botao}>
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => mover(1)} aria-label="Próxima operação" className={botao}>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="tabular-nums" aria-hidden="true">
          <span className="text-lg font-semibold">{String(indice + 1).padStart(2, "0")}</span>
          <span className="text-sm text-white/70"> / {String(total).padStart(2, "0")}</span>
        </p>
      </div>

      <div aria-live="polite" aria-atomic="true">
        <p className="sr-only">
          Operação {indice + 1} de {total}
        </p>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink">
          <Image
            key={atual.foto}
            src={atual.foto}
            alt={atual.alt}
            fill
            sizes="320px"
            className="gallery-image-enter object-cover"
          />
        </div>

        <div className="px-2 pb-2 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{atual.rotulo}</p>
          <h2 className="mt-2 text-[1.375rem] font-semibold leading-tight">{atual.titulo}</h2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/85">{atual.texto}</p>
          <Link
            href={atual.href}
            className="group mt-4 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-white"
          >
            Ver áreas de atuação
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
