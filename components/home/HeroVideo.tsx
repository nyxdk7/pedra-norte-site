"use client";

import { Pause, Play } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useReducedMotion } from "@/components/ui/useReducedMotion";

const BASE = "/videos/home/usina-britagem-aerea";

type Estado = {
  /** The video is (or should be) playing. */
  tocando: boolean;
  /** The hero is on screen and the tab is visible. */
  ativo: boolean;
  /** The video element exists (never on the server, nor before it is wanted). */
  montar: boolean;
  alternar: () => void;
  /** Autoplay was refused by the browser: fall back to the play button. */
  recusado: () => void;
};

const ContextoVideo = createContext<Estado | null>(null);

const semAssinatura = () => () => {};

type ConexaoInfo = EventTarget & { saveData?: boolean };
const conexao = () => (navigator as Navigator & { connection?: ConexaoInfo }).connection;

/** Visitor asked the browser to save data (data-saver modes). */
function useEconomiaDeDados() {
  return useSyncExternalStore(
    (aviso) => {
      conexao()?.addEventListener("change", aviso);
      return () => conexao()?.removeEventListener("change", aviso);
    },
    () => Boolean(conexao()?.saveData),
    () => false,
  );
}

/**
 * Background video of the Home hero. It plays muted and looped unless the visitor asked
 * for reduced motion or to save data (the cover photograph stays, and the button can
 * start it); it pauses off screen, in hidden tabs and with the pause button.
 */
export function HeroVideoProvider({ children }: { children: ReactNode }) {
  const reduzirMovimento = useReducedMotion();
  const economia = useEconomiaDeDados();
  // false on the server and during hydration: the video is only ever added on the client
  const cliente = useSyncExternalStore(semAssinatura, () => true, () => false);
  const [escolha, setEscolha] = useState<boolean | null>(null);
  const [visivel, setVisivel] = useState(true);
  const [abaOculta, setAbaOculta] = useState(false);

  const tocando = escolha ?? (!reduzirMovimento && !economia);

  useEffect(() => {
    const secao = document.querySelector("section[aria-labelledby='hero-titulo']");
    if (!secao) return;
    const observador = new IntersectionObserver(([entrada]) => setVisivel(entrada.isIntersecting));
    observador.observe(secao);
    const aoMudarAba = () => setAbaOculta(document.hidden);
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

  const estado: Estado = {
    tocando,
    ativo: visivel && !abaOculta,
    montar: cliente && (tocando || escolha !== null),
    alternar: () => setEscolha(!tocando),
    recusado: () => setEscolha(false),
  };
  return <ContextoVideo.Provider value={estado}>{children}</ContextoVideo.Provider>;
}

/** The video layer, over the cover photograph; fades in once frames are playing. */
export function HeroVideoFundo() {
  const contexto = useContext(ContextoVideo);
  if (!contexto?.montar) return null;
  return <VideoFundo {...contexto} />;
}

function VideoFundo({ tocando, ativo, recusado }: Estado) {
  const video = useRef<HTMLVideoElement>(null);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const elemento = video.current;
    if (!elemento) return;
    // iOS needs the attribute itself, not only the property, to allow muted autoplay.
    elemento.muted = true;
    elemento.defaultMuted = true;
    elemento.setAttribute("muted", "");
  }, []);

  useEffect(() => {
    const elemento = video.current;
    if (!elemento) return;
    if (tocando && ativo) elemento.play().catch(recusado);
    else elemento.pause();
    // `recusado` is recreated on every render; only the playback inputs matter here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tocando, ativo]);

  return (
    <video
      ref={video}
      className="hero-video"
      data-pronto={pronto || undefined}
      aria-hidden="true"
      tabIndex={-1}
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      onPlaying={() => setPronto(true)}
    >
      <source src={`${BASE}-1280.webm`} type="video/webm" media="(max-width: 767px)" />
      <source src={`${BASE}-1280.mp4`} type="video/mp4" media="(max-width: 767px)" />
      <source src={`${BASE}-1920.webm`} type="video/webm" />
      <source src={`${BASE}-1920.mp4`} type="video/mp4" />
    </video>
  );
}

/** Pause / play control for the background video (WCAG 2.2.2). */
export function HeroVideoBotao({ className = "", grande = false }: { className?: string; grande?: boolean }) {
  const contexto = useContext(ContextoVideo);
  if (!contexto) return null;
  const { tocando, alternar } = contexto;
  const rotulo = tocando ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo";
  return (
    <button type="button" onClick={alternar} aria-label={rotulo} title={rotulo} className={`hero-video-botao grid place-items-center ${grande ? "h-14 w-14" : "h-11 w-11"} ${className}`}>
      {tocando ? (
        <Pause className="h-4 w-4 fill-current" aria-hidden="true" />
      ) : (
        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
      )}
    </button>
  );
}
