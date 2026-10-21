"use client";

import { useEffect, useId, useRef, useState } from "react";
import styles from "./MapaAtuacaoAcre.module.css";

const contornoAcre = "M836.6 367.1 L856.2 376.2 L855.4 381.0 L841.0 388.3 L833.2 397.8 L829.6 397.5 L821.1 409.9 L816.7 411.1 L814.6 417.7 L802.5 421.7 L798.5 426.8 L783.1 424.8 L783.6 431.2 L779.4 433.0 L773.4 431.0 L769.6 440.2 L755.4 445.7 L749.0 456.5 L745.2 457.3 L742.0 469.3 L725.5 461.4 L707.7 463.0 L700.1 470.1 L700.4 476.7 L690.6 486.3 L686.3 497.3 L670.8 504.4 L669.7 508.1 L665.9 505.9 L660.0 508.1 L654.2 514.9 L636.0 518.9 L630.9 509.9 L631.6 502.4 L622.2 501.6 L615.5 504.8 L598.6 498.5 L593.5 500.1 L581.9 495.5 L566.9 497.1 L562.0 494.0 L555.8 497.2 L549.6 495.0 L528.9 499.4 L525.5 494.3 L508.1 493.4 L484.5 507.0 L469.0 510.3 L455.3 506.8 L445.5 494.9 L436.0 502.3 L435.9 368.0 L445.0 361.4 L446.1 355.7 L439.9 347.1 L438.2 338.5 L439.5 336.7 L442.8 339.5 L441.3 334.8 L448.2 331.8 L446.3 326.8 L449.5 322.9 L438.9 324.6 L431.6 334.1 L422.4 338.1 L417.3 347.5 L413.5 347.5 L404.1 358.8 L400.1 359.6 L396.7 367.5 L391.1 367.4 L379.0 374.2 L374.0 384.6 L363.8 387.5 L359.6 385.3 L356.8 388.4 L270.3 388.4 L273.3 384.5 L271.1 380.2 L275.0 375.2 L272.2 368.9 L275.6 365.5 L262.9 359.8 L265.4 349.0 L264.6 344.1 L261.0 342.9 L261.5 335.9 L255.0 336.5 L245.3 328.6 L233.9 330.4 L215.1 324.6 L212.4 321.1 L163.9 321.2 L166.5 315.5 L175.5 309.3 L174.3 306.3 L178.0 301.3 L186.6 297.0 L184.3 294.6 L191.1 289.0 L192.3 272.9 L183.9 262.1 L181.4 263.3 L170.5 238.3 L164.3 238.5 L156.0 231.0 L154.1 214.1 L145.3 213.8 L142.9 207.2 L129.8 199.8 L129.8 191.2 L123.8 183.8 L124.9 174.9 L119.9 167.4 L120.7 163.6 L115.0 160.9 L112.9 155.9 L109.4 156.7 L105.1 149.2 L106.2 144.2 L112.7 145.4 L114.4 134.9 L99.9 128.2 L82.9 110.9 L82.2 107.5 L86.7 106.4 L89.6 99.4 L84.7 86.5 L94.8 89.5 L99.1 84.8 L106.8 85.9 L112.7 81.0 L111.2 73.0 L102.1 59.1 L229.9 109.2 L495.8 142.9 L643.3 279.9 L761.9 338.2 L782.0 341.8 L836.6 367.1 Z";
const rota = "M 935 324 C 912 339, 885 352, 854 373 S 765 397, 730 386 C 693 370, 681 310, 642 282 C 618 265, 599 245, 578 254 C 538 257, 502 198, 464 179";

const municipios = [
  { nome: "Rio Branco", x: 730, y: 386, textoX: 730, textoY: 435, ancora: "middle", fase: styles.rioBranco },
  { nome: "Sena Madureira", x: 642, y: 282, textoX: 678, textoY: 325, ancora: "start", fase: styles.senaMadureira },
  { nome: "Manoel Urbano", x: 578, y: 254, textoX: 550, textoY: 302, ancora: "end", fase: styles.manoelUrbano },
  { nome: "Feijó", x: 464, y: 179, textoX: 464, textoY: 140, ancora: "middle", fase: styles.feijo },
] as const;

export function MapaAtuacaoAcre() {
  const ref = useRef<HTMLElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const [visivel, setVisivel] = useState(false);
  const [selecionado, setSelecionado] = useState<string | null>(null);

  function destacar(nome: string) {
    setSelecionado((atual) => (atual === nome ? null : nome));
  }

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    let naTela = false;
    const atualizar = () => setVisivel(naTela && !document.hidden);
    const observador = typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver(([entrada]) => {
          naTela = entrada.isIntersecting;
          atualizar();
        }, { threshold: 0.1 });

    if (observador) observador.observe(elemento);
    else {
      naTela = true;
      queueMicrotask(atualizar);
    }
    document.addEventListener("visibilitychange", atualizar);
    return () => {
      observador?.disconnect();
      document.removeEventListener("visibilitychange", atualizar);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="presenca-regional"
      aria-labelledby={`${id}-titulo`}
      aria-describedby={`${id}-subtitulo`}
      className={`${styles.secao} ${visivel ? styles.ativo : ""}`}
    >
      <div className={styles.conteudo}>
        <h2 id={`${id}-titulo`} className={styles.frase}>A cada passo, um novo avanço.</h2>
        <p id={`${id}-subtitulo`} className={styles.subtitulo}>Locais onde nossas obras já avançaram.</p>
        <div className={styles.painel}>
          <svg
            viewBox="0 0 960 570"
            role="group"
            aria-label="Rota de Rondônia até Feijó, passando por Rio Branco, Sena Madureira e Manoel Urbano. Selecione um ponto para destacá-lo."
            className={styles.mapa}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id={`${id}-preenchimento`} x1="0" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#edf3fb" />
                <stop offset="100%" stopColor="#d7e4f6" />
              </linearGradient>
              <linearGradient id={`${id}-rota`} x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f69d0" />
                <stop offset="55%" stopColor="#49a2ff" />
                <stop offset="100%" stopColor="#215bc6" />
              </linearGradient>
              <filter id={`${id}-brilho`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            <path d={contornoAcre} fill={`url(#${id}-preenchimento)`} stroke="#90afd9" strokeWidth="2.2" strokeLinejoin="round" />
            <path d={contornoAcre} fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.85" transform="translate(0,-2)" />

            <path d={rota} fill="none" stroke="#7ca0cd" strokeWidth="3" strokeDasharray="4 12" strokeLinecap="round" opacity="0.22" />
            <path
              d={rota}
              pathLength={100}
              className={styles.rotaHalo}
              fill="none"
              stroke={`url(#${id}-rota)`}
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter={`url(#${id}-brilho)`}
            />
            <path
              d={rota}
              pathLength={100}
              className={styles.rotaPrincipal}
              fill="none"
              stroke={`url(#${id}-rota)`}
              strokeWidth="4.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d={rota} pathLength={100} className={styles.rotaNucleo} fill="none" stroke="#e9f7ff" strokeWidth="1.25" strokeLinecap="round" />
            <path d={rota} pathLength={100} className={styles.pulsoHalo} fill="none" stroke="#75d5ff" strokeWidth="12" strokeLinecap="round" filter={`url(#${id}-brilho)`} />
            <path d={rota} pathLength={100} className={styles.pulsoNucleo} fill="none" stroke="#ffffff" strokeWidth="3.6" strokeLinecap="round" />

            <g className={`${styles.municipio} ${styles.origem}`}>
              <circle className={styles.anel} cx="935" cy="324" r="21" fill="none" stroke="#2b80e7" strokeWidth="1.6" />
              <circle cx="935" cy="324" r="7" fill="#2b67c3" stroke="white" strokeWidth="3.2" />
              <text className={styles.nomeMunicipio} x="935" y="260" textAnchor="end">Rondônia</text>
            </g>

            {municipios.map((municipio) => (
              <g
                key={municipio.nome}
                className={`${styles.municipio} ${styles.interativo} ${municipio.fase}`}
                role="button"
                tabIndex={0}
                aria-label={`Destacar ${municipio.nome}`}
                aria-pressed={selecionado === municipio.nome}
                data-selecionado={selecionado === municipio.nome}
                onClick={() => destacar(municipio.nome)}
                onKeyDown={(evento) => {
                  if (evento.key === "Enter" || evento.key === " ") {
                    evento.preventDefault();
                    destacar(municipio.nome);
                  } else if (evento.key === "Escape") setSelecionado(null);
                }}
              >
                <circle className={styles.areaToque} cx={municipio.x} cy={municipio.y} r="30" fill="transparent" />
                <circle className={styles.realce} cx={municipio.x} cy={municipio.y} r="15" fill="#4b91f0" />
                <circle className={styles.anel} cx={municipio.x} cy={municipio.y} r="21" fill="none" stroke="#2b80e7" strokeWidth="1.6" />
                <circle cx={municipio.x} cy={municipio.y} r="9.5" fill="#4b91f0" opacity="0.24" />
                <circle cx={municipio.x} cy={municipio.y} r="6.5" fill="#164e9e" stroke="white" strokeWidth="2.6" />
                <text
                  className={styles.nomeMunicipio}
                  x={municipio.textoX}
                  y={municipio.textoY}
                  textAnchor={municipio.ancora}
                >
                  {municipio.nome}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
