"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";
import { fonteObras } from "./fonteObras";
import motionStyles from "./GaleriaObrasMotion.module.css";

export type FotoObra = {
  src: string;
  alt: string;
  /** object-position of the photograph (Tailwind class), e.g. "object-[70%_15%]". */
  foco?: string;
  /** A film in place of the photograph. `base` resolves to `${base}-{1280,1920}.{mp4,webm}`
   *  and `src` is its cover frame; the slot is held for `duracao` seconds instead of the
   *  usual interval, so the film is not cut short. */
  video?: { base: string; duracao: number };
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

/** What a slot is called wherever it is counted or announced. */
const rotuloMidia = (midia: FotoObra) => (midia.video ? "Vídeo" : "Foto");

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

/**
 * A film filling a gallery slot. It plays muted and looped only while its slot is the one
 * on screen and the work is running, so the pause button, the pointer, keyboard focus,
 * leaving the screen, a hidden tab and reduced motion all govern it through the very state
 * the photographs already obey — there is no second control to find.
 */
function VideoObra({
  video,
  capa,
  alt,
  ativa,
  rodando,
}: {
  video: NonNullable<FotoObra["video"]>;
  capa: string;
  alt: string;
  ativa: boolean;
  rodando: boolean;
}) {
  const elemento = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const filme = elemento.current;
    if (!filme) return;
    // iOS needs the attribute itself, not only the property, to allow muted autoplay.
    filme.muted = true;
    filme.defaultMuted = true;
    filme.setAttribute("muted", "");
  }, []);

  useEffect(() => {
    const filme = elemento.current;
    if (!filme) return;
    if (ativa && rodando) {
      // A refused autoplay simply leaves the cover frame standing.
      filme.play().catch(() => {});
    } else {
      filme.pause();
      // Away from the active slot it rewinds, so it always opens on its cover frame.
      if (!ativa) filme.currentTime = 0;
    }
  }, [ativa, rodando]);

  return (
    <video
      ref={elemento}
      className="galeria-obras-video"
      poster={capa}
      role="img"
      aria-label={alt}
      tabIndex={-1}
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
    >
      {/* Codecs declared so browsers without VP9 fall straight back to H.264 */}
      <source src={`${video.base}-1280.webm`} type='video/webm; codecs="vp9"' media="(max-width: 767px)" />
      <source src={`${video.base}-1280.mp4`} type='video/mp4; codecs="avc1.64001F"' media="(max-width: 767px)" />
      <source src={`${video.base}-1920.webm`} type='video/webm; codecs="vp9"' />
      <source src={`${video.base}-1920.mp4`} type='video/mp4; codecs="avc1.640032"' />
    </video>
  );
}

/**
 * One work, whole and self-contained: its exact title, its controls, the main photograph
 * with a counter and the next photographs beside it. The photographs alternate on their
 * own only while this work is on screen, so scrolling hands the movement from one work to
 * the next and nothing runs out of sight. Pauses with the button, on hover, while keyboard
 * focus is inside and in a hidden tab; starts paused under reduced motion.
 */
function ObraEmpilhada({ obra, intervalo }: { obra: ObraGaleria; intervalo: number }) {
  const raiz = useRef<HTMLElement>(null);
  // PN_SCROLL_REVEAL_OBRAS_V1
  // Apresenta uma obra por vez ao rolar e desloca a imagem principal ate 8px.
  // Nao interfere no slideshow, nos videos ou na navegacao da galeria.
  useEffect(() => {
    const elemento = raiz.current;
    if (!elemento) return;

    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (movimentoReduzido) {
      elemento.dataset.pnRevealed = "true";
      return;
    }

    let quadro = 0;
    const atualizarParallax = () => {
      const retangulo = elemento.getBoundingClientRect();
      const altura = window.innerHeight || 1;
      if (retangulo.bottom < -50 || retangulo.top > altura + 50) return;
      const centro = retangulo.top + retangulo.height / 2;
      const distancia = (altura / 2 - centro) / altura;
      const movimento = Math.max(-8, Math.min(8, distancia * 22));
      elemento.style.setProperty("--pn-parallax-y", movimento.toFixed(2) + "px");
    };
    const aoRolar = () => {
      if (quadro) return;
      quadro = window.requestAnimationFrame(() => {
        quadro = 0;
        atualizarParallax();
      });
    };

    // Evita ocultar conteúdo antes do JS inicializar.
    const posicaoInicial = elemento.getBoundingClientRect();
    const jaVisivel = posicaoInicial.top < window.innerHeight * 0.92 && posicaoInicial.bottom > 0;
    elemento.dataset.pnMotion = "ready";

    let observador: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observador = new IntersectionObserver(([entrada]) => {
        if (!entrada.isIntersecting) return;
        elemento.dataset.pnRevealed = "true";
        observador?.disconnect();
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      observador.observe(elemento);
    } else {
      elemento.dataset.pnRevealed = "true";
    }
    if (jaVisivel) {
      // Uma renderizacao para iniciar a transicao no primeiro bloco visivel.
      quadro = window.requestAnimationFrame(() => {
        quadro = 0;
        elemento.dataset.pnRevealed = "true";
        atualizarParallax();
      });
    }

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    atualizarParallax();
    return () => {
      observador?.disconnect();
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) window.cancelAnimationFrame(quadro);
      elemento.style.removeProperty("--pn-parallax-y");
    };
  }, []);

  const reduzirMovimento = useReducedMotion();
  const [atual, setAtual] = useState(0);
  // null = default (plays unless the visitor asked the OS to reduce motion)
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [sobre, setSobre] = useState(false);
  const [comFoco, setComFoco] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const [abaOculta, setAbaOculta] = useState(false);
  const [aviso, setAviso] = useState("");

  const total = obra.fotos.length;
  const temNavegacao = total > 1;
  const tocando = (escolha ?? !reduzirMovimento) && temNavegacao;
  const rodando = tocando && !sobre && !comFoco && visivel && !abaOculta;

  const avancar = useCallback(() => {
    setAviso("");
    setAtual((indice) => (indice + 1) % total);
  }, [total]);

  // This work alone is observed: only the one the visitor is looking at moves.
  useEffect(() => {
    const elemento = raiz.current;
    if (!elemento) return;
    const observador = new IntersectionObserver(([entrada]) => setVisivel(entrada.isIntersecting), {
      // A sliver on screen is not being looked at; wait until a good part of it shows.
      threshold: 0.35,
    });
    observador.observe(elemento);
    const aoMudarAba = () => setAbaOculta(document.hidden);
    aoMudarAba();
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

  // A film holds its slot for its own length; a photograph for the usual interval.
  const midiaAtual = obra.fotos[atual];
  const espera = midiaAtual.video ? midiaAtual.video.duracao * 1000 : intervalo;

  // One shot per slot: any change (manual or automatic) restarts the full wait.
  useEffect(() => {
    if (!rodando) return;
    const temporizador = window.setTimeout(avancar, espera);
    return () => window.clearTimeout(temporizador);
  }, [rodando, espera, avancar, atual]);

  // Announced only after the visitor's own actions, never during autoplay.
  const ir = (indice: number) => {
    const midia = obra.fotos[indice];
    setAviso(`${rotuloMidia(midia)} ${indice + 1} de ${total}: ${midia.alt}`);
    setAtual(indice);
    window.setTimeout(() => {
      // If the focused control left the page, release the focus hold.
      if (!raiz.current?.contains(document.activeElement)) setComFoco(false);
    }, 0);
  };

  const navegar = (passo: 1 | -1) => ir((atual + passo + total) % total);

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

  // The photographs queued beside the main one, in order, starting after the current.
  const fila = Array.from({ length: total - 1 }, (_, k) => (atual + 1 + k) % total);

  return (
    <article
      ref={raiz}
      aria-labelledby={`obra-titulo-${obra.id}`}
      className={`galeria-obras-obra ${motionStyles.obra}`}
      onKeyDown={aoTeclar}
      // Keyboard focus inside holds the rotation; a mouse click on a control does not.
      onFocus={(evento) => setComFoco(evento.target.matches(":focus-visible"))}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) setComFoco(false);
      }}
    >
      <div className="galeria-obras-topo">
        <h2 id={`obra-titulo-${obra.id}`} className="galeria-obras-titulo">
          <TituloSemQuebra texto={obra.titulo} />
        </h2>

        {temNavegacao ? (
          <div className="galeria-obras-controles" role="group" aria-label={`Controles das fotos: ${obra.titulo}`}>
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
          {obra.fotos.map((foto, f) => (
            // Every photograph stays mounted so the change is a crossfade, never a flash.
            <div key={foto.src} className="galeria-obras-camada" data-ativa={f === atual || undefined} aria-hidden={f !== atual || undefined}>
              {foto.video ? (
                <VideoObra video={foto.video} capa={foto.src} alt={foto.alt} ativa={f === atual} rodando={rodando} />
              ) : (
                /* Lazy (deviation from the spec's eager/high): the opening of the
                   page is text, and the photographs load as the module renders. */
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 64vw, min(66vw, 1140px)"
                  className={`object-cover ${foto.foco ?? "object-center"}`}
                />
              )}
            </div>
          ))}
          {total > 1 ? (
            <p className="galeria-obras-contador">
              <span aria-hidden="true">
                {dois(atual + 1)} / {dois(total)}
              </span>
              <span className="sr-only">
                {rotuloMidia(obra.fotos[atual])} {atual + 1} de {total}
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
                    aria-label={`Mostrar ${rotuloMidia(foto).toLowerCase()} ${indice + 1} de ${total}: ${foto.alt}`}
                    onClick={() => ir(indice)}
                    onFocus={(evento) => evento.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" })}
                  >
                    <Image
                      src={foto.src}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 150px, (max-width: 1023px) 32vw, min(28vw, 480px)"
                      className={`object-cover ${foto.foco ?? "object-center"}`}
                    />
                    {/* A film's thumbnail is its cover frame: the badge says so at a glance. */}
                    {foto.video ? (
                      <span className="galeria-obras-selo-play" aria-hidden="true">
                        <Play className="h-4 w-4 fill-current" />
                      </span>
                    ) : null}
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
    </article>
  );
}

/**
 * Works module (MSM_Obras_Design_DNA_v1): one eyebrow, then every work stacked down the
 * page — title, main photograph and the next photographs beside it. Reading is scrolling,
 * which is how the page is held on a phone; each work rotates its own photographs only
 * while it is on screen.
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
  const Eyebrow = abertura ? "h1" : "p";

  return (
    <section
      id="obras-galeria"
      aria-labelledby="works-eyebrow"
      className={`galeria-obras ${fonteObras.variable}`}
      data-abertura={abertura || undefined}
      data-header={abertura ? "claro" : undefined}
    >
      <div className="galeria-obras-interno">
        <Eyebrow id="works-eyebrow" className="galeria-obras-eyebrow">
          <span aria-hidden="true" className="galeria-obras-barra" />
          Obras e infraestrutura
        </Eyebrow>

        <div className="galeria-obras-lista">
          {obras.map((obra) => (
            <ObraEmpilhada key={obra.id} obra={obra} intervalo={intervalo} />
          ))}
        </div>
      </div>
    </section>
  );
}
