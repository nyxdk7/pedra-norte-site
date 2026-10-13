"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";
import { casosSucesso } from "./data";

// One group = the list twice, wide enough to cover a 1920px screen; two groups loop seamlessly.
const grupo = [...casosSucesso, ...casosSucesso];

function Celula({ caso, repete }: { caso: (typeof casosSucesso)[number]; repete: boolean }) {
  return (
    <div
      data-repete={repete || undefined}
      className="flex shrink-0 items-center gap-4 border-r border-white/10 px-5 py-4 md:px-7"
    >
      <span className="relative h-14 w-28 shrink-0 overflow-hidden rounded-lg bg-white px-2 py-1 md:h-16 md:w-32">
        <span className="relative block h-full w-full">
          <Image src={caso.imagem} alt="" fill sizes="120px" className="object-contain" />
        </span>
      </span>
      <span className="flex items-center gap-2.5 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
        <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
        {caso.nome}
      </span>
    </div>
  );
}

/**
 * Ticker of the institutions served: continuous right-to-left scroll, paused on hover,
 * focus or by the visitor; static under reduced motion. Read once by assistive tech.
 */
export function TickerCasos() {
  const [pausado, setPausado] = useState(false);
  const reduzirMovimento = useReducedMotion();

  return (
    <div className="ticker relative" data-pausado={pausado || undefined}>
      {/* Accessible list (visually hidden): the moving strip below is decorative duplication */}
      <ul className="sr-only">
        {casosSucesso.map((caso) => (
          <li key={caso.nome}>{caso.nome}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="ticker-escala" />

      <div
        aria-hidden="true"
        className="ticker-janela overflow-hidden border-y border-white/10 bg-white/[0.03] [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="ticker-track flex w-max">
          {[0, 1].map((copia) => (
            <div key={copia} className="ticker-grupo flex">
              {grupo.map((caso, indice) => (
                <Celula key={`${copia}-${indice}`} caso={caso} repete={indice >= casosSucesso.length} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {!reduzirMovimento ? (
        <div className="container-msm">
          <button
            type="button"
            onClick={() => setPausado(!pausado)}
            aria-label={pausado ? "Continuar rolagem dos logos" : "Pausar rolagem dos logos"}
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10"
          >
            {pausado ? (
              <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            ) : (
              <Pause className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            )}
            {pausado ? "Continuar" : "Pausar"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
