"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/obras/engenharia-rodoviaria/ObrasHero.module.css";

export function ObrasHeroCinematico() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function updateScroll() {
      frame = 0;
      if (reducedMotion.matches) return;
      const position = hero!.getBoundingClientRect();
      const offset = Math.max(0, Math.min(8, -position.top * 0.055));
      hero!.style.setProperty("--scroll-y", `${offset.toFixed(1)}px`);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    }

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function moverImagem(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = heroRef.current;
    if (!hero) return;
    const bounds = hero.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    hero.style.setProperty("--mouse-x", `${(horizontal * 12).toFixed(1)}px`);
    hero.style.setProperty("--mouse-y", `${(vertical * 9).toFixed(1)}px`);
  }

  function restaurarImagem() {
    const hero = heroRef.current;
    if (!hero) return;
    hero.style.setProperty("--mouse-x", "0px");
    hero.style.setProperty("--mouse-y", "0px");
  }

  return (
    <section
      ref={heroRef}
      onPointerMove={moverImagem}
      onPointerLeave={restaurarImagem}
      className={`${styles.hero} relative isolate overflow-hidden px-5 pb-12 pt-12 sm:px-8 md:pb-16 md:pt-16`}
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.photo} />
        <div className={styles.blueOverlay} />
        <div className={styles.subtleShade} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Engenharia rodoviária e pavimentação
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-100 md:text-lg md:leading-8">
            Conheça alguns dos trabalhos realizados em infraestrutura viária,
            recuperação de trechos e pavimentação. Cada projeto reúne uma breve
            apresentação e registros fotográficos de sua execução.
          </p>
        </div>
      </div>
    </section>
  );
}
