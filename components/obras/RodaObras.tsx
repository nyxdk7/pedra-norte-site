"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";
import { RAIO_CUBO, escala, laminas } from "./roda";

export type FrenteDaRoda = {
  titulo: string;
  categoria: string;
  /** Photograph shown first, with its description. */
  foto: string;
  alt: string;
  posicao?: string;
  /** Second photograph of the same front, swapped in on each later turn. */
  alternativa: string;
  posicaoAlternativa?: string;
};

/** Time each blade stays highlighted. */
const INTERVALO = 4200;

/**
 * Works rotor: real photographs in six curved blades. Opens with one spin-up, then
 * highlights one blade at a time (its photograph alternates every turn) and names it in
 * the hub. Stops on hover, off screen, in a hidden tab or with the pause button;
 * stands still under reduced motion.
 */
export function RodaObras({ frentes }: { frentes: FrenteDaRoda[] }) {
  const raiz = useRef<HTMLDivElement>(null);
  const reduzirMovimento = useReducedMotion();
  const [passo, setPasso] = useState(0);
  const [apontada, setApontada] = useState<number | null>(null);
  const [pausado, setPausado] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const [abaOculta, setAbaOculta] = useState(false);

  const ativa = apontada ?? passo % frentes.length;
  const parado = pausado || !visivel || abaOculta;

  useEffect(() => {
    const elemento = raiz.current;
    if (!elemento) return;
    const observador = new IntersectionObserver(([entrada]) => setVisivel(entrada.isIntersecting));
    observador.observe(elemento);
    const aoMudarAba = () => setAbaOculta(document.hidden);
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

  useEffect(() => {
    if (reduzirMovimento || parado || apontada !== null) return;
    const temporizador = window.setInterval(() => setPasso((atual) => atual + 1), INTERVALO);
    return () => window.clearInterval(temporizador);
  }, [reduzirMovimento, parado, apontada]);

  return (
    <div
      ref={raiz}
      className="roda"
      data-pausado={parado || undefined}
      onPointerLeave={() => setApontada(null)}
    >
      {/* Technical drawing behind the rotor: centre axes and concentric orbits */}
      <svg aria-hidden="true" className="roda-orbitas" viewBox="-70 -70 240 240">
        <line x1="-70" y1="50" x2="170" y2="50" />
        <line x1="50" y1="-70" x2="50" y2="170" />
        <circle cx="50" cy="50" r="68" />
        <circle cx="50" cy="50" r="86" data-tracejado />
        <circle cx="50" cy="50" r="112" />
      </svg>
      <div aria-hidden="true" className="roda-brilho" />

      <svg aria-hidden="true" className="roda-escala" viewBox="-8 -8 116 116">
        <circle cx="50" cy="50" r="54" />
        {escala.map((traco, k) => (
          <line key={k} x1={traco.x1} y1={traco.y1} x2={traco.x2} y2={traco.y2} data-longo={traco.longo || undefined} />
        ))}
      </svg>

      <ul aria-label="Frentes de obra em fotos" className="roda-laminas">
        {frentes.map((frente, i) => {
          const geometria = laminas[i];
          // Each later turn of this blade swaps its photograph.
          const voltas = passo < i ? 0 : Math.floor((passo - i) / frentes.length);
          const estilo = {
            "--i": i,
            "--avanco-x": geometria.avanco.x,
            "--avanco-y": geometria.avanco.y,
          } as CSSProperties;

          return (
            <li key={frente.titulo} className="roda-lamina" data-ativa={i === ativa || undefined} style={estilo}>
              <div className="roda-desloca">
                <div
                  className="roda-recorte"
                  style={{ clipPath: geometria.recorte }}
                  onPointerEnter={() => setApontada(i)}
                >
                  <div className="roda-quadro" style={geometria.quadro}>
                    <div className="roda-foto">
                      <Image
                        src={frente.foto}
                        alt={frente.alt}
                        fill
                        loading="eager"
                        sizes="(max-width: 1023px) 62vw, 400px"
                        className={`object-cover ${frente.posicao ?? "object-center"}`}
                      />
                    </div>
                    {/* The second photograph loads after the first move, never at page load */}
                    {passo > 0 ? (
                      <div className="roda-foto roda-foto-alternativa" data-visivel={voltas % 2 === 1 || undefined}>
                        <Image
                          src={frente.alternativa}
                          alt=""
                          fill
                          sizes="(max-width: 1023px) 62vw, 400px"
                          className={`object-cover ${frente.posicaoAlternativa ?? "object-center"}`}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div aria-hidden="true" className="roda-veu" />
                </div>
                <svg aria-hidden="true" className="roda-contorno" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d={geometria.contorno} pathLength={1} />
                </svg>
              </div>
              <span className="sr-only">{frente.titulo}</span>
            </li>
          );
        })}
      </ul>

      <svg aria-hidden="true" className="roda-arcos" viewBox="0 0 100 100">
        {laminas.map((geometria, i) => (
          <path key={i} d={geometria.arco} pathLength={1} data-ativo={i === ativa || undefined} />
        ))}
      </svg>

      {/* Hub: names the highlighted blade (visual only; the list above carries the names) */}
      <div aria-hidden="true" className="roda-cubo" style={{ width: `${RAIO_CUBO * 2}%` }}>
        <div key={ativa} className="roda-legenda">
          <span className="roda-categoria">{frentes[ativa].categoria}</span>
          <span className="roda-titulo">{frentes[ativa].titulo}</span>
        </div>
        <span className="roda-marcas">
          {frentes.map((frente, i) => (
            <span key={frente.titulo} data-ativa={i === ativa || undefined} />
          ))}
        </span>
      </div>

      {!reduzirMovimento ? (
        <button
          type="button"
          onClick={() => setPausado(!pausado)}
          aria-label={pausado ? "Continuar animação das fotos" : "Pausar animação das fotos"}
          className="roda-pausa"
        >
          {pausado ? (
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4 fill-current" aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}
