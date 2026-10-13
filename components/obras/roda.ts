/**
 * Geometry of the works rotor (Obras opening): six curved blades around a hub, like an
 * impeller. Every value is a percentage of the square wheel box, centre (50, 50), so the
 * shapes scale with the box. Angles in degrees, clockwise from the x axis (screen space).
 */

const LAMINAS = 6;
const PASSO = 360 / LAMINAS;
/** Outer and inner radius of the blades. */
const RAIO_EXTERNO = 49;
const RAIO_INTERNO = 24;
/** Angular sweep of each edge from the hub to the rim: gives the blades their curve. */
const TORCAO = 24;
/** Constant gap between neighbouring blades. */
const FOLGA = 2.2;
/** How far the active blade moves out along its axis. */
const AVANCO = 1.6;
/** Radius of the ochre arc that marks the active blade on the outer scale. */
const RAIO_ARCO = 52.5;

export const RAIO_CUBO = RAIO_INTERNO - 2.5;

const rad = (graus: number) => (graus * Math.PI) / 180;
const fmt = (valor: number) => Number(valor.toFixed(2));
const ponto = (raio: number, graus: number): [number, number] => [
  fmt(50 + raio * Math.cos(rad(graus))),
  fmt(50 + raio * Math.sin(rad(graus))),
];
const serie = (de: number, ate: number, n: number) =>
  Array.from({ length: n }, (_, j) => de + ((ate - de) * j) / (n - 1));

/** Edge k at a given radius; blade 0 is centred on the top of the wheel. */
const aresta = (k: number, raio: number) =>
  -90 - PASSO / 2 - TORCAO / 2 + k * PASSO + (TORCAO * (raio - RAIO_INTERNO)) / (RAIO_EXTERNO - RAIO_INTERNO);
/** Half the gap, as an angle at that radius (keeps the gap width constant). */
const meiaFolga = (raio: number) => (Math.asin(FOLGA / 2 / raio) * 180) / Math.PI;

export type Lamina = {
  /** `clip-path: polygon(...)` in percentages of the wheel box. */
  recorte: string;
  /** Blade outline as an SVG path in a 0–100 viewBox. */
  contorno: string;
  /** Box around the blade (where the photograph is placed), in percentages. */
  quadro: { left: string; top: string; width: string; height: string };
  /** Offset of the active blade, in percentages of the wheel box. */
  avanco: { x: string; y: string };
  /** Ochre arc on the outer scale, SVG path in the same viewBox. */
  arco: string;
};

function lamina(i: number): Lamina {
  const ataque = (raio: number) => aresta(i, raio) + meiaFolga(raio);
  const fuga = (raio: number) => aresta(i + 1, raio) - meiaFolga(raio);

  const pontos = [
    ...serie(RAIO_INTERNO, RAIO_EXTERNO, 9).map((raio) => ponto(raio, ataque(raio))),
    ...serie(ataque(RAIO_EXTERNO), fuga(RAIO_EXTERNO), 16)
      .slice(1, -1)
      .map((graus) => ponto(RAIO_EXTERNO, graus)),
    ...serie(RAIO_EXTERNO, RAIO_INTERNO, 9).map((raio) => ponto(raio, fuga(raio))),
    ...serie(fuga(RAIO_INTERNO), ataque(RAIO_INTERNO), 8)
      .slice(1, -1)
      .map((graus) => ponto(RAIO_INTERNO, graus)),
  ];

  const xs = pontos.map(([x]) => x);
  const ys = pontos.map(([, y]) => y);
  const [esquerda, topo] = [Math.min(...xs), Math.min(...ys)];
  const eixo = -90 + i * PASSO;
  const [arcoDe, arcoAte] = [ponto(RAIO_ARCO, ataque(RAIO_EXTERNO)), ponto(RAIO_ARCO, fuga(RAIO_EXTERNO))];

  return {
    recorte: `polygon(${pontos.map(([x, y]) => `${x}% ${y}%`).join(", ")})`,
    contorno: `M${pontos.map(([x, y]) => `${x} ${y}`).join(" L")} Z`,
    quadro: {
      left: `${fmt(esquerda)}%`,
      top: `${fmt(topo)}%`,
      width: `${fmt(Math.max(...xs) - esquerda)}%`,
      height: `${fmt(Math.max(...ys) - topo)}%`,
    },
    avanco: { x: `${fmt(AVANCO * Math.cos(rad(eixo)))}%`, y: `${fmt(AVANCO * Math.sin(rad(eixo)))}%` },
    arco: `M${arcoDe[0]} ${arcoDe[1]} A${RAIO_ARCO} ${RAIO_ARCO} 0 0 1 ${arcoAte[0]} ${arcoAte[1]}`,
  };
}

export const laminas: Lamina[] = Array.from({ length: LAMINAS }, (_, i) => lamina(i));

/** Ticks of the outer engineering scale: every 3°, a longer one every 15°. */
export const escala = Array.from({ length: 120 }, (_, k) => {
  const graus = k * 3;
  const longo = k % 5 === 0;
  const [x1, y1] = ponto(54, graus);
  const [x2, y2] = ponto(longo ? 56.5 : 55.2, graus);
  return { x1, y1, x2, y2, longo };
});
