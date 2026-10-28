"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./HomeHeroRedesign.module.css";

/**
 * Banner original do redesign, simplificado a pedido do proprietário:
 * filmagem, marca e título em destaque, sem botões comerciais,
 * indicadores ou chamada para rolar a página.
 */
const BASE = "/videos/home/usina-britagem-aerea";
const CAPA = `${BASE}-capa.jpg`;

export function HomeHeroRedesign() {
  const secao = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [reproduzindo, setReproduzindo] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const [abaVisivel, setAbaVisivel] = useState(true);
  const [videoPronto, setVideoPronto] = useState(false);

  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ligacao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!reduzir.matches && !ligacao?.saveData) {
      setReproduzindo(true);
    }

    const alvo = secao.current;
    if (!alvo) return;
    const observador = new IntersectionObserver(
      ([entrada]) => setVisivel(entrada.isIntersecting),
      { threshold: 0 },
    );
    observador.observe(alvo);
    const aoMudarAba = () => setAbaVisivel(!document.hidden);
    aoMudarAba();
    document.addEventListener("visibilitychange", aoMudarAba);
    return () => {
      observador.disconnect();
      document.removeEventListener("visibilitychange", aoMudarAba);
    };
  }, []);

  useEffect(() => {
    const elemento = video.current;
    if (!elemento) return;
    if (reproduzindo && visivel && abaVisivel) {
      elemento.muted = true;
      elemento.play().catch(() => setReproduzindo(false));
    } else {
      elemento.pause();
    }
  }, [reproduzindo, visivel, abaVisivel]);

  return (
    <section ref={secao} aria-labelledby="hero-pedra-redesign" className={styles.hero}>
      <div className={styles.cenario} aria-hidden="true">
        <Image
          src={CAPA}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.poster}
        />
        <video
          ref={video}
          className={`${styles.video} ${videoPronto ? styles.videoPronto : ""}`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={CAPA}
          tabIndex={-1}
          onPlaying={() => setVideoPronto(true)}
        >
          <source src={`${BASE}-1280.webm`} type="video/webm" media="(max-width: 767px)" />
          <source src={`${BASE}-1280.mp4`} type="video/mp4" media="(max-width: 767px)" />
          <source src={`${BASE}-1920.webm`} type="video/webm" />
          <source src={`${BASE}-1920.mp4`} type="video/mp4" />
        </video>
        <div className={styles.sombra} />
      </div>

      <div className={styles.conteudo}>
        <div className={styles.intro}>
          <p className={styles.marcador}>
            <span className={styles.traco} aria-hidden="true" />
            MSM INDUSTRIAL / PEDRA NORTE
          </p>
          <h1 id="hero-pedra-redesign" className={styles.titulo}>
            Engenharia, pavimentação, mineração e obras para grandes estruturas
          </h1>
        </div>

      </div>
    </section>
  );
}
