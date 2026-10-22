"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";
import { fonteObras } from "./fonteObras";

export type FotoObra = {
  src: string;
  alt: string;
  /** object-position of the photograph (Tailwind class), e.g. "object-[70%_15%]". */
  foco?: string;
};

/** One work: the title is shown exactly as registered; nothing is generated or completed. */
export type ObraGaleria = {
  id: string;
  orgao?: string;
  contrato?: string;
  titulo: string;
  local?: string;
  fotos: FotoObra[];
};

const dois = (n: number) => String(n).padStart(2, "0");

/** Titles longer than this use the compact size, so every work fills about the same height. */
const TITULO_LONGO = 70;

/**
 * The registered title, unchanged, with line breaks only between words: hyphenated codes
 * ("AC-380", "Xapuri-AC") never split, a free-standing dash stays with the word before and
 * a kilometre mark stays with its number ("KM 202").
 */
function TituloSemQuebra({ texto }: { texto: string }) {
  const grupos: string[] = [];
  for (const palavra of texto.split(" ")) {
    const anteriorGrupo = grupos[grupos.length - 1];
    const juntar = anteriorGrupo !== undefined && (/^[-–—]$/.test(palavra) || (/(^|\s)km\.?$/i.test(anteriorGrupo) && /^\d/.test(palavra)));
    if (juntar) grupos[grupos.length - 1] += ` ${palavra}`;
    else grupos.push(palavra);
  }
  return grupos.map((grupo, indice) => (
    <span key={indice}>
      {indice > 0 ? " " : null}
      <span className="whitespace-nowrap">{grupo}</span>
    </span>
  ));
}

type Posicao = { obra: number; foto: number };
/** The work that slides out, the photo it was showing and the direction of travel. */
type Saida = Posicao & { direcao: 1 | -1 };
type Estado = Posicao & { saida: Saida | null; inicio: boolean };

/** Circular through the photographs; past the last (or before the first) one of a work,
 *  the next (or previous) work comes in. */
function vizinha(obras: ObraGaleria[], { obra, foto }: Posicao, passo: 1 | -1): Posicao {
  const proxima = foto + passo;
  if (proxima >= obras[obra].fotos.length) return { obra: (obra + 1) % obras.length, foto: 0 };
  if (proxima < 0) {
    const anterior = (obra - 1 + obras.length) % obras.length;
    return { obra: anterior, foto: obras[anterior].fotos.length - 1 };
  }
  return { obra, foto: proxima };
}

/** Next state; a change of work records the outgoing one so both can slide. */
function mover(atual: Estado, nova: Posicao, direcao: 1 | -1): Estado {
  if (nova.obra === atual.obra) return { ...atual, foto: nova.foto };
  return { ...nova, saida: { obra: atual.obra, foto: atual.foto, direcao }, inicio: false };
}

/** Duration of the horizontal slide (keep in sync with globals.css). */
const DESLIZE_MS = 800;

type Papel = "ativa" | "entra-dir" | "entra-esq" | "sai-esq" | "sai-dir" | "oculta";

/**
 * Works module (MSM_Obras_Design_DNA_v1): eyebrow, exact title, main photograph with a
 * counter and the next photographs beside it. Photographs alternate on their own; after
 * the last one the next work slides in horizontally (title and gallery together). Pauses
 * with the button, on hover, while keyboard focus is inside, off screen and in a hidden
 * tab; starts paused under reduced motion (and then changes without sliding).
 */
export function GaleriaObras({
  obras,
  intervalo = 5000,
  abertura = false,
}: {
  obras: ObraGaleria[];
  intervalo?: number;
  /** The module opens the page: its eyebrow is the page's H1 and the header starts solid
   *  (keep "/obras" out of `rotasEscuras` in components/Header.tsx). */
  abertura?: boolean;
}) {
  const raiz = useRef<HTMLElement>(null);
  const trilho = useRef<HTMLDivElement>(null);
  const botaoAnterior = useRef<HTMLButtonElement>(null);
  const botaoProximo = useRef<HTMLButtonElement>(null);
  const reduzirMovimento = useReducedMotion();
  const [estado, setEstado] = useState<Estado>({ obra: 0, foto: 0, saida: null, inicio: true });
  // Last element focused inside the module (to hand focus over when a work leaves).
  const ultimoFoco = useRef<Element | null>(null);
  // null = default (plays unless the visitor asked the OS to reduce motion)
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [sobre, setSobre] = useState(false);
  const [comFoco, setComFoco] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const [abaOculta, setAbaOculta] = useState(false);
  const [aviso, setAviso] = useState("");

  const n = obras.length;
  const totalGeral = obras.reduce((soma, item) => soma + item.fotos.length, 0);
  const temNavegacao = totalGeral > 1;
  const tocando = (escolha ?? !reduzirMovimento) && temNavegacao;
  const rodando = tocando && !sobre && !comFoco && visivel && !abaOculta;

  const avancar = useCallback(() => {
    setAviso("");
    setEstado((atual) => mover(atual, vizinha(obras, atual, 1), 1));
  }, [obras]);

  useEffect(() => {
    const elemento = raiz.current;
    if (!elemento) return;
    const observador = new IntersectionObserver(([entrada]) => setVisivel(entrada.isIntersecting));
    observador.observe(elemento);
    const aoMudarAba = () => setAbaOculta(document.hidden);
    aoMudarAba();
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

  // Once the slide is over the incoming work is simply the current one again, and the
  // outgoing one goes back to being a neighbour (showing the photo it will open with).
  useEffect(() => {
    if (!estado.saida) return;
    const temporizador = window.setTimeout(
      () => setEstado((atual) => (atual.saida ? { ...atual, saida: null } : atual)),
      reduzirMovimento ? 0 : DESLIZE_MS + 50,
    );
    return () => window.clearTimeout(temporizador);
  }, [estado.saida, reduzirMovimento]);

  // Focus inside the outgoing work would be lost (it becomes inert): hand it to the
  // matching control, whatever caused the change (visitor or autoplay).
  const direcaoAtual = estado.saida?.direcao;
  useEffect(() => {
    if (!direcaoAtual) return;
    const foco = ultimoFoco.current;
    if (!foco || !trilho.current?.contains(foco)) return;
    if (raiz.current?.contains(document.activeElement) && document.activeElement !== foco) return;
    (direcaoAtual > 0 ? botaoProximo : botaoAnterior).current?.focus({ preventScroll: true });
  }, [estado.obra, direcaoAtual]);

  // One shot per photograph: any change (manual or automatic) restarts the full interval.
  useEffect(() => {
    if (!rodando) return;
    const temporizador = window.setTimeout(avancar, intervalo);
    return () => window.clearTimeout(temporizador);
  }, [rodando, intervalo, avancar, estado.obra, estado.foto]);

  // Announced only after the visitor's own actions, never during autoplay.
  const ir = (nova: Posicao, direcao: 1 | -1) => {
    const alvo = obras[nova.obra];
    const foto = `Foto ${nova.foto + 1} de ${alvo.fotos.length}: ${alvo.fotos[nova.foto].alt}`;
    const titulo = /[.!?]$/.test(alvo.titulo) ? alvo.titulo : `${alvo.titulo}.`;
    setAviso(nova.obra !== estado.obra ? `${titulo} ${foto}` : foto);
    setEstado((atual) => mover(atual, nova, direcao));
    window.setTimeout(() => {
      // If the focused control left the page, release the focus hold.
      if (!raiz.current?.contains(document.activeElement)) setComFoco(false);
    }, 0);
  };

  const navegar = (passo: 1 | -1) => ir(vizinha(obras, estado, passo), passo);
  const mostrar = (f: number) => ir({ obra: estado.obra, foto: f }, 1);

  const aoTeclar = (evento: KeyboardEvent<HTMLElement>) => {
    if (!temNavegacao) return;
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      navegar(1);
    } else if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      navegar(-1);
    }
  };

  const papel = (i: number): Papel => {
    const { saida } = estado;
    if (i === estado.obra) return saida ? (saida.direcao > 0 ? "entra-dir" : "entra-esq") : "ativa";
    if (saida && i === saida.obra) return saida.direcao > 0 ? "sai-esq" : "sai-dir";
    return "oculta";
  };

  // Photo each work shows: the current one, the one the outgoing work left on, and the one
  // a neighbour will open with (its first going forward, its last going back).
  const proxima = (estado.obra + 1) % n;
  const anterior = (estado.obra - 1 + n) % n;
  const fotoDe = (i: number) => {
    if (i === estado.obra) return estado.foto;
    if (estado.saida && i === estado.saida.obra) return estado.saida.foto;
    if (i === proxima) return 0;
    return obras[i].fotos.length - 1;
  };
  // Galleries mounted: the current work, the outgoing one and both neighbours (preloaded).
  const montadas = new Set([estado.obra, proxima, anterior, ...(estado.saida ? [estado.saida.obra] : [])]);

  const Eyebrow = abertura ? "h1" : "p";

  return (
    <section
      ref={raiz}
      id="obras-galeria"
      aria-labelledby={`obra-titulo-${obras[estado.obra].id}`}
      className={`galeria-obras ${fonteObras.variable}`}
      data-abertura={abertura || undefined}
      data-header={abertura ? "claro" : undefined}
      data-inicio={estado.inicio || undefined}
      onKeyDown={aoTeclar}
      // Keyboard focus inside holds the rotation; a mouse click on a control does not.
      onFocus={(evento) => {
        ultimoFoco.current = evento.target;
        setComFoco(evento.target.matches(":focus-visible"));
      }}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) setComFoco(false);
      }}
    >
      <div className="galeria-obras-interno">
        <div className="galeria-obras-topo">
          <div className="galeria-obras-cabeca">
            <Eyebrow id="works-eyebrow" className="galeria-obras-eyebrow">
              <span aria-hidden="true" className="galeria-obras-barra" />
              Obras e infraestrutura
            </Eyebrow>
            {/* Every title is in the page; they share one cell (its height is the tallest) */}
            <div className="galeria-obras-titulos">
              {obras.map((item, i) => {
                const ativa = i === estado.obra;
                return (
                  <div key={item.id} className="galeria-obras-quadro" data-papel={papel(i)} aria-hidden={!ativa || undefined}>
                    <h2
                      id={`obra-titulo-${item.id}`}
                      className="galeria-obras-titulo"
                      data-longo={item.titulo.length > TITULO_LONGO || undefined}
                    >
                      <TituloSemQuebra texto={item.titulo} />
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>

          {temNavegacao ? (
            <div className="galeria-obras-controles" role="group" aria-label="Controles da galeria de obras">
              <button
                ref={botaoAnterior}
                type="button"
                className="galeria-obras-seta"
                aria-label="Foto anterior"
                onClick={() => navegar(-1)}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" className="galeria-obras-pausa" onClick={() => setEscolha(!tocando)}>
                {tocando ? (
                  <Pause className="h-4 w-4 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                )}
                {tocando ? "Pausar" : "Reproduzir"}
              </button>
              <button
                ref={botaoProximo}
                type="button"
                className="galeria-obras-seta"
                aria-label="Próxima foto"
                onClick={() => navegar(1)}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>

        <div ref={trilho} className="galeria-obras-trilho">
          {obras.map((item, i) => {
            if (!montadas.has(i)) return null;
            const ativa = i === estado.obra;
            const atual = fotoDe(i);
            const total = item.fotos.length;
            const fila = Array.from({ length: total - 1 }, (_, k) => (atual + 1 + k) % total);
            // The current work keeps every photo mounted (they crossfade); the others keep the
            // one they show plus their first and last, so they open loaded in either direction.
            // Always in photo order, so React never moves (and resets) the visible layer.
            const camadas = item.fotos.map((_, f) => f).filter((f) => ativa || f === atual || f === 0 || f === total - 1);

            return (
              <div
                key={item.id}
                className="galeria-obras-quadro"
                data-papel={papel(i)}
                aria-hidden={!ativa || undefined}
                inert={!ativa}
              >
                <div className="galeria-obras-grade" data-unica={total === 1 || undefined}>
                  <div
                    className="galeria-obras-principal"
                    onPointerEnter={(evento) => evento.pointerType === "mouse" && setSobre(true)}
                    onPointerLeave={() => setSobre(false)}
                  >
                    {camadas.map((f) => {
                      const foto = item.fotos[f];
                      return (
                        <div key={foto.src} className="galeria-obras-camada" data-ativa={f === atual || undefined} aria-hidden={f !== atual || undefined}>
                          {/* Lazy (deviation from the spec's eager/high): the opening of the
                              page is text, and the photographs load as the module renders. */}
                          <Image
                            src={foto.src}
                            alt={foto.alt}
                            fill
                            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 64vw, min(66vw, 1140px)"
                            className={`object-cover ${foto.foco ?? "object-center"}`}
                          />
                        </div>
                      );
                    })}
                    {total > 1 ? (
                      <p className="galeria-obras-contador">
                        <span aria-hidden="true">
                          {dois(atual + 1)} / {dois(total)}
                        </span>
                        <span className="sr-only">
                          Foto {atual + 1} de {total}
                        </span>
                      </p>
                    ) : null}
                  </div>

                  {total > 1 ? (
                    <ul
                      className="galeria-obras-miniaturas"
                      aria-label="Outras fotos da obra"
                      onPointerEnter={(evento) => evento.pointerType === "mouse" && setSobre(true)}
                      onPointerLeave={() => setSobre(false)}
                    >
                      {fila.map((indice, vaga) => {
                        const foto = item.fotos[indice];
                        return (
                          // Keyed by slot: the buttons stay put (and keep focus) while the queue turns.
                          <li key={vaga}>
                            <button
                              type="button"
                              className="galeria-obras-miniatura"
                              aria-label={`Mostrar foto ${indice + 1} de ${total}: ${foto.alt}`}
                              onClick={() => mostrar(indice)}
                              onFocus={(evento) => evento.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" })}
                            >
                              <Image
                                src={foto.src}
                                alt=""
                                fill
                                sizes="(max-width: 767px) 150px, (max-width: 1023px) 32vw, min(28vw, 480px)"
                                className={`object-cover ${foto.foco ?? "object-center"}`}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {aviso}
        </p>
      </div>
    </section>
  );
}
