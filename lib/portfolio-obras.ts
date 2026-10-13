export type ObraPortfolio = {
  id: string;
  titulo: string;
  trecho: string;
  descricao: string;
  fotos: string[];
};

const pastaKm246 = "/images/obras/erosao-km-246";

// Adicione novas obras neste array; cada uma será exibida em um bloco separado.
export const obrasRodoviarias: ObraPortfolio[] = [
  {
    id: "erosao-km-246",
    titulo: "Recuperação de erosão no km 246",
    trecho: "Km 246 — Estrada de Sena Madureira, Acre",
    descricao:
      "Intervenção em trecho rodoviário afetado por erosão, com trabalhos de preenchimento, recomposição da base e recuperação da via. Os registros apresentam etapas da execução e a mobilização de equipamentos e materiais em campo.",
    fotos: [
      `${pastaKm246}/13-aplicacao-asfalto.webp`,
      `${pastaKm246}/01-area-erosao.webp`,
      `${pastaKm246}/02-preenchimento.webp`,
      `${pastaKm246}/11-descarga-agregado.webp`,
      `${pastaKm246}/15-reforco-material-petreo.webp`,
      `${pastaKm246}/03-base-material-petreo.webp`,
      `${pastaKm246}/08-recomposicao-asfaltica.webp`,
      `${pastaKm246}/12-compactacao-asfalto.webp`,
      `${pastaKm246}/07-pavimento-executado.webp`,
      `${pastaKm246}/14-regularizacao-base.webp`,
      `${pastaKm246}/16-base-petrea.webp`,
      `${pastaKm246}/10-pavimentacao-execucao.webp`,
      `${pastaKm246}/04-material-petreo.webp`,
      `${pastaKm246}/09-trecho-recuperado.webp`,
    ],
  },
];
