"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";

/**
 * Carries the reading from one page to the next, by scrolling alone.
 *
 * Once the document is at its end, more downward scrolling fills an arc, and only a
 * filled arc navigates. Insisting is the consent: a stray flick does nothing, letting
 * go drains the arc, and the footer stays readable and clickable for anyone who has
 * come down to use it. The meter is the only thing drawn — without it the jump would
 * read as a fault rather than as an answer to what the reader just did.
 *
 * Wheel and touch only: there is no keyboard or screen-reader path through here on
 * purpose, and none is needed — the header menu reaches every page the ordinary way.
 */

/** The site's reading order, as the menu lists it. The last page has no next. */
const SEQUENCIA: Array<{ href: string; nome: string }> = [
  { href: "/", nome: "Início" },
  { href: "/estrutura", nome: "Estrutura" },
  { href: "/atuacoes", nome: "Atuações" },
  { href: "/obras", nome: "Obras" },
  { href: "/integridade", nome: "Integridade" },
];

/** Extra scrolling, in pixels, needed past the end of the document to commit. */
const LIMIAR = 420;
/** How long the arc holds after the last scroll event before it drains. */
const ESPERA_ATE_DRENAR = 320;
/** The document counts as "at the end" within this many pixels of its bottom. */
const FOLGA_FIM = 2;

const RAIO = 19;
const PERIMETRO = 2 * Math.PI * RAIO;

/** Keyed by route, so every page starts with a clean arc and no reset logic. */
export function ProximaPagina() {
  const caminho = usePathname();
  return <Passagem key={caminho} caminho={caminho} />;
}

function Passagem({ caminho }: { caminho: string }) {
  const router = useRouter();
  const reduzirMovimento = useReducedMotion();

  const indice = SEQUENCIA.findIndex((p) => p.href === caminho);
  const proxima = indice >= 0 ? SEQUENCIA[indice + 1] : undefined;

  const [progresso, setProgresso] = useState(0);
  const acumulado = useRef(0);
  const navegando = useRef(false);
  const temporizador = useRef<number | null>(null);

  const zerar = useCallback(() => {
    acumulado.current = 0;
    setProgresso(0);
  }, []);

  useEffect(() => {
    if (!proxima) return;

    const noFim = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - FOLGA_FIM;

    const drenarDepois = () => {
      if (temporizador.current !== null) window.clearTimeout(temporizador.current);
      temporizador.current = window.setTimeout(zerar, ESPERA_ATE_DRENAR);
    };

    const empurrar = (delta: number) => {
      if (navegando.current) return;
      // Downward input only, and only once there is nothing left to scroll.
      if (delta <= 0 || !noFim()) {
        zerar();
        return;
      }
      acumulado.current = Math.min(LIMIAR, acumulado.current + delta);
      setProgresso(acumulado.current / LIMIAR);

      if (acumulado.current >= LIMIAR) {
        navegando.current = true;
        if (temporizador.current !== null) window.clearTimeout(temporizador.current);
        router.push(proxima.href);
        return;
      }
      drenarDepois();
    };

    const aoGirar = (evento: WheelEvent) => empurrar(evento.deltaY);

    let toqueAnterior: number | null = null;
    const aoTocar = (evento: TouchEvent) => {
      toqueAnterior = evento.touches[0]?.clientY ?? null;
    };
    const aoArrastar = (evento: TouchEvent) => {
      const y = evento.touches[0]?.clientY;
      if (y === undefined || toqueAnterior === null) return;
      // Dragging the finger up is scrolling the page down.
      empurrar(toqueAnterior - y);
      toqueAnterior = y;
    };
    const aoSoltar = () => {
      toqueAnterior = null;
      zerar();
    };

    window.addEventListener("wheel", aoGirar, { passive: true });
    window.addEventListener("touchstart", aoTocar, { passive: true });
    window.addEventListener("touchmove", aoArrastar, { passive: true });
    window.addEventListener("touchend", aoSoltar, { passive: true });

    const aoDesmontar = temporizador;
    return () => {
      window.removeEventListener("wheel", aoGirar);
      window.removeEventListener("touchstart", aoTocar);
      window.removeEventListener("touchmove", aoArrastar);
      window.removeEventListener("touchend", aoSoltar);
      if (aoDesmontar.current !== null) window.clearTimeout(aoDesmontar.current);
    };
  }, [proxima, router, zerar]);

  if (!proxima) return null;

  return (
    <div
      aria-hidden="true"
      className="proxima-medidor"
      data-ativo={progresso > 0 || undefined}
      data-sem-animacao={reduzirMovimento || undefined}
    >
      <svg viewBox="0 0 44 44" focusable="false">
        <circle className="proxima-trilho" cx="22" cy="22" r={RAIO} />
        <circle
          className="proxima-arco"
          cx="22"
          cy="22"
          r={RAIO}
          style={{
            strokeDasharray: PERIMETRO,
            strokeDashoffset: PERIMETRO * (1 - progresso),
          }}
        />
      </svg>
      <span className="proxima-medidor-texto">Continue para {proxima.nome}</span>
    </div>
  );
}
