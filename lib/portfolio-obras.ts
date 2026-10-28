export type ObraPortfolio = {
  id: string;
  titulo: string;
  trecho: string;
  descricao: string;
  fotos: string[];
};

const pastaKm246 = "/images/obras/erosao-km-246";
const pastaKm273 = "/images/obras/erosao-km-273";

// Adicione novas obras neste array; cada uma será exibida em um bloco separado.
export const obrasRodoviarias: ObraPortfolio[] = [
  {
    id: "erosao-km-246",
    titulo: "DNIT - Recuperação de erosão na estrada de SENA-MADUREIRA, BR-364, KM 246.",
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
  {
    id: "erosao-km-273",
    titulo: "DNIT - Recuperação de erosão na estrada de SENA-MADUREIRA, BR-364, KM 273.",
    trecho: "Km 273 — Estrada de Sena Madureira, Acre",
    descricao:
      "Frente de recuperação dedicada à recomposição do trecho afetado pela erosão, com movimentação e aplicação de material pétreo, regularização da base e compactação do terreno. Os registros destacam o avanço dos serviços e a atuação de escavadeiras, caminhões e equipamentos de nivelamento.",
    fotos: [
      `${pastaKm273}/01-vista-trecho-recomposto.webp`,
      `${pastaKm273}/02-regularizacao-plataforma.webp`,
      `${pastaKm273}/03-escavacao-material-petreo.webp`,
      `${pastaKm273}/04-compactacao-base.webp`,
      `${pastaKm273}/05-motoniveladora.webp`,
      `${pastaKm273}/06-escavadeira-reforco-base.webp`,
      `${pastaKm273}/07-descarga-material.webp`,
      `${pastaKm273}/08-vista-geral-intervencao.webp`,
      `${pastaKm273}/09-regularizacao-compactacao.webp`,
      `${pastaKm273}/10-movimentacao-agregados.webp`,
    ],
  },
];
