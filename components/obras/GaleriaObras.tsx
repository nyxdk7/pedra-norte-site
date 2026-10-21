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

type Posicao = { obra: number; foto: number };

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

/**
 * Works module (MSM_Obras_Design_DNA_v1): eyebrow, exact title, main photograph with a
 * counter and the next photographs beside it. Photographs alternate on their own and,
 * after the last one, the next work comes in. Pauses with the button, on hover, while
 * focus is inside, off screen and in a hidden tab; starts paused under reduced motion.
 */
export function GaleriaObras({ obras, intervalo = 5000 }: { obras: ObraGaleria[]; intervalo?: number }) {
  const raiz = useRef<HTMLElement>(null);
  const reduzirMovimento = useReducedMotion();
  const [posicao, setPosicao] = useState<Posicao>({ obra: 0, foto: 0 });
  // null = default (plays unless the visitor asked the OS to reduce motion)
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [sobre, setSobre] = useState(false);
  const [comFoco, setComFoco] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const [abaOculta, setAbaOculta] = useState(false);
  const [aviso, setAviso] = useState("");

  const obra = obras[posicao.obra];
  const total = obra.fotos.length;
  const totalGeral = obras.reduce((soma, item) => soma + item.fotos.length, 0);
  const temNavegacao = totalGeral > 1;
  const tocando = (escolha ?? !reduzirMovimento) && temNavegacao;
  const rodando = tocando && !sobre && !comFoco && visivel && !abaOculta;

  const avancar = useCallback(() => {
    setAviso("");
    setPosicao((atual) => vizinha(obras, atual, 1));
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

  // One shot per photograph: any change (manual or automatic) restarts the full interval.
  useEffect(() => {
    if (!rodando) return;
    const temporizador = window.setTimeout(avancar, intervalo);
    return () => window.clearTimeout(temporizador);
  }, [rodando, intervalo, avancar, posicao]);

  // Announced only after the visitor's own actions, never during autoplay.
  const ir = (nova: Posicao) => {
    const alvo = obras[nova.obra];
    const foto = `Foto ${nova.foto + 1} de ${alvo.fotos.length}: ${alvo.fotos[nova.foto].alt}`;
    setAviso(nova.obra !== posicao.obra ? `${alvo.titulo} ${foto}` : foto);
    setPosicao(nova);
    // If the focused control left the page (a shorter queue), release the focus hold.
    window.setTimeout(() => {
      if (!raiz.current?.contains(document.activeElement)) setComFoco(false);
    }, 0);
  };

  const navegar = (passo: 1 | -1) => ir(vizinha(obras, posicao, passo));
  const mostrar = (f: number) => ir({ obra: posicao.obra, foto: f });

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

  // The other photographs, in the order they will come in.
  const fila = Array.from({ length: total - 1 }, (_, k) => (posicao.foto + 1 + k) % total);

  // Main frame layers: this work's photographs plus the neighbouring works' first and last
  // ones, already loaded and mounted, so a change of work crossfades like any other.
  const camadas = new Map<string, Posicao>();
  const adicionar = (o: number, f: number) => camadas.set(`${obras[o].id}-${obras[o].fotos[f].src}`, { obra: o, foto: f });
  if (obras.length > 1) {
    const anterior = (posicao.obra - 1 + obras.length) % obras.length;
    adicionar(anterior, obras[anterior].fotos.length - 1);
  }
  obra.fotos.forEach((_, f) => adicionar(posicao.obra, f));
  if (obras.length > 1) adicionar((posicao.obra + 1) % obras.length, 0);

  return (
    <section
      ref={raiz}
      id="obras-galeria"
      aria-labelledby="works-project-title"
      className={`galeria-obras ${fonteObras.variable}`}
      onKeyDown={aoTeclar}
      // Keyboard focus inside holds the rotation; a mouse click on a control does not.
      onFocus={(evento) => setComFoco(evento.target.matches(":focus-visible"))}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) setComFoco(false);
      }}
    >
      <div className="galeria-obras-interno">
        <div className="galeria-obras-topo">
          <div className="min-w-0">
            <p id="works-eyebrow" className="galeria-obras-eyebrow">
              <span aria-hidden="true" className="galeria-obras-barra" />
              Obras e infraestrutura
            </p>
            <h2 key={obra.id} id="works-project-title" className="galeria-obras-titulo">
              {obra.titulo}
            </h2>
          </div>

          {temNavegacao ? (
            <div className="galeria-obras-controles" role="group" aria-label="Controles da galeria de obras">
              <button type="button" className="galeria-obras-seta" aria-label="Foto anterior" onClick={() => navegar(-1)}>
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
              <button type="button" className="galeria-obras-seta" aria-label="Próxima foto" onClick={() => navegar(1)}>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </div>

        <div className="galeria-obras-grade" data-unica={total === 1 || undefined}>
          <div
            className="galeria-obras-principal"
            onPointerEnter={(evento) => evento.pointerType === "mouse" && setSobre(true)}
            onPointerLeave={() => setSobre(false)}
          >
            {[...camadas].map(([chave, camada]) => {
              const foto = obras[camada.obra].fotos[camada.foto];
              const ativa = camada.obra === posicao.obra && camada.foto === posicao.foto;
              return (
                <div key={chave} className="galeria-obras-camada" data-ativa={ativa || undefined} aria-hidden={!ativa || undefined}>
                  {/* Lazy (deviation from the spec's eager/high): the module never opens the
                      page, and the opening photograph is the page's priority image. */}
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
                  {dois(posicao.foto + 1)} / {dois(total)}
                </span>
                <span className="sr-only">
                  Foto {posicao.foto + 1} de {total}
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
                const foto = obra.fotos[indice];
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

        <p className="sr-only" aria-live="polite">
          {aviso}
        </p>
      </div>
    </section>
  );
}
