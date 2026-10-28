import type { Metadata } from "next";
import { GaleriaObras, type ObraGaleria } from "@/components/obras/GaleriaObras";
import { obrasRodoviarias } from "@/lib/portfolio-obras";

// PN_OBRAS_DAVI_GALERIA_V1: transplante visual, sem fusao de branches.
export const metadata: Metadata = {
  title: "Engenharia rodoviária e pavimentação | Obras",
  description:
    "Conheça obras e registros de engenharia rodoviária, pavimentação e recuperação de vias realizados pela MSM Industrial.",
};

const obrasGaleria: ObraGaleria[] = [
  {
    id: "deracre-ct-10012-ac-380",
    orgao: "Deracre",
    contrato: "CT 10012",
    titulo: "Deracre - implantação da Rod. AC-380, Xapuri-AC.",
    local: "Xapuri/AC",
    fotos: [
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-intersecao-aerea.jpg",
        alt: "Vista aérea do entroncamento rodoviário asfaltado na região de Xapuri, Acre",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-curva-aerea.jpg",
        alt: "Trecho sinuoso de rodovia asfaltada em paisagem rural",
        foco: "object-[70%_18%]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-reta-horizonte.jpg",
        alt: "Rodovia asfaltada vista a partir de uma elevação",
        foco: "object-[50%_58%]",
      },
      {
        src: "/images/obras/deracre-ct-10012-ac-380/variante-tangente-aerea.jpg",
        alt: "Trecho reto de rodovia asfaltada com acostamento",
      },
    ],
  },
  {
    id: "dnit-br-364-cabeceira-ponte",
    orgao: "DNIT",
    titulo: "DNIT - Reconstrução em cabeceira de ponte com enrocamento e argamassa de concreto. BR-364, KM 202, KM 203.",
    fotos: [
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/cabeceira-enrocamento-lateral.jpg",
        alt: "Enrocamento de pedras na cabeceira de ponte de concreto, com escavadeira, rolo compactador e equipe ao fundo",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/escavadeira-msm-enrocamento.jpg",
        alt: "Escavadeira com identificação MSM espalhando as pedras do enrocamento junto à ponte",
        foco: "object-[50%_42%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/ponte-vista-aerea.jpg",
        alt: "Vista aérea da ponte sobre o curso d'água, com caminhões na pista e a cabeceira em obra",
        foco: "object-[50%_52%]",
      },
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/cabeceira-escavacao-aerea.jpg",
        alt: "Vista aérea da escavação na cabeceira da ponte, com pá carregadeira, caminhão com pedras e equipe na pista",
        foco: "object-[50%_50%]",
      },
    ],
  },
  {
    id: "dnit-br-364-aeroporto-macadame",
    orgao: "DNIT",
    titulo: "DNIT - Reconstrução trecho do Aeroporto de RB-AC, BR-364, base em macadame hidráulico.",
    local: "Rio Branco/AC",
    fotos: [
      {
        // The flight opens the work: it gives the stretch before the photographs detail it.
        src: "/videos/obras/dnit-br-364-aeroporto-macadame/voo-br-364-aeroporto-capa.jpg",
        alt: "Voo sobre o trecho da BR-364, com a pista já asfaltada ao lado da pista em base de macadame hidráulico",
        video: { base: "/videos/obras/dnit-br-364-aeroporto-macadame/voo-br-364-aeroporto", duracao: 8 },
      },
      {
        src: "/images/obras/dnit-br-364-aeroporto-macadame/caminhoes-terraplenagem-aerea.jpg",
        alt: "Vista aérea da fila de caminhões basculantes na terraplenagem da nova pista, ao lado do trecho antigo da rodovia",
        foco: "object-[50%_55%]",
      },
      {
        src: "/images/obras/dnit-br-364-aeroporto-macadame/pista-dupla-base-macadame-aerea.jpg",
        alt: "Vista aérea das duas pistas executadas em base de macadame hidráulico, com o canteiro de britas ao fundo",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/dnit-br-364-aeroporto-macadame/base-macadame-curva-aerea.jpg",
        alt: "Vista aérea da curva do trecho em base de macadame hidráulico, seguindo em direção ao povoado",
        foco: "object-[50%_50%]",
      },
    ],
  },
  {
    id: "dnit-br-317-lote-2",
    orgao: "DNIT",
    titulo: "DNIT - Manutenção e conservação da BR 317, Lote 2.",
    fotos: [
      {
        // The flight opens the work: it gives the stretch before the photographs detail it.
        src: "/videos/obras/dnit-br-317-lote-2/voo-br-317-rotatoria-capa.jpg",
        alt: "Voo sobre a rotatória da BR-317 em pavimentação, com rolo compactador e caminhões na frente de serviço",
        video: { base: "/videos/obras/dnit-br-317-lote-2/voo-br-317-rotatoria", duracao: 8 },
      },
      {
        src: "/images/obras/dnit-br-317-lote-2/rotatoria-posto-fiscalizacao-aerea.jpg",
        alt: "Vista aérea da rotatória recém-pavimentada junto ao posto de fiscalização, com a rodovia seguindo ao horizonte",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/dnit-br-317-lote-2/frente-pavimentacao-equipe-aerea.jpg",
        alt: "Vista aérea da frente de pavimentação com vibroacabadora, rolos compactadores, caminhões e equipe sobre a faixa nova",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/dnit-br-317-lote-2/pista-nova-asfalto-aerea.jpg",
        alt: "Vista aérea da pista com o asfalto novo já aplicado e sinalização horizontal provisória, com a equipe ao fundo",
        foco: "object-[50%_50%]",
      },
    ],
  },
];

// Preserva tambem as obras KM 246 e KM 273 do site principal.
const obrasCompletas: ObraGaleria[] = [
  ...obrasGaleria,
  {
    id: "dnit-reconstrucao-sena-br364-macadame",
    orgao: "DNIT",
    titulo: "DNIT  - Reconstrução de  trecho na estrada de SENA-MADUREIRA, BR-364, base em macadame hidraulico.",
    fotos: [
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/01-registro.jpg", alt: "Vista da pista na BR-364 com superfície asfáltica e faixa de execução" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/02-registro.jpg", alt: "Equipamento de compactação trabalhando sobre camada asfáltica" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/03-registro.jpg", alt: "Equipamentos de compactação sobre o trecho da BR-364" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/04-registro.jpg", alt: "Máquina compactadora avançando sobre a faixa de asfalto" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/05-registro.jpg", alt: "Trecho rodoviário visto em perspectiva após a recuperação" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/06-registro.jpg", alt: "Equipe e vibroacabadora trabalhando na aplicação do revestimento asfáltico" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/07-registro.jpg", alt: "Frente de pavimentação com rolos compactadores e equipe junto à pista" },
    ],
  },
  ...obrasRodoviarias.map((obra) => ({
    id: obra.id,
    titulo: obra.titulo,
    fotos: obra.fotos.map((src, indice) => ({
      src,
      alt: `Registro ${indice + 1} de ${obra.titulo}`,
    })),
  })),
  {
    id: "dnit-recuperacao-erosao-br364-km452",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão BR 364, KM 452.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km452/01-registro.jpg", alt: "Trecho da BR-364 com erosao ao lado do pavimento" },
      { src: "/images/obras/dnit-erosao-br364-km452/02-registro.jpg", alt: "Caminhao basculante descarregando pedras na frente de servico" },
      { src: "/images/obras/dnit-erosao-br364-km452/03-registro.jpg", alt: "Area de acostamento recomposta com enrocamento junto a rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km452/04-registro.jpg", alt: "Escavacao na area afetada pela erosao ao lado da pista" },
      { src: "/images/obras/dnit-erosao-br364-km452/05-registro.jpg", alt: "Escavadeira atuando na recomposicao com material petreo" },
      { src: "/images/obras/dnit-erosao-br364-km452/06-registro.jpg", alt: "Escavadeira recuperando a faixa lateral da rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km452/07-registro.jpg", alt: "Caminhao descarregando agregado na area em recuperacao" },
      { src: "/images/obras/dnit-erosao-br364-km452/08-registro.jpg", alt: "Rolo compactador sobre a base de agregado" },
      { src: "/images/obras/dnit-erosao-br364-km452/09-registro.jpg", alt: "Compactacao da camada de pedras ao lado da pista" },
      { src: "/images/obras/dnit-erosao-br364-km452/10-registro.jpg", alt: "Rolo compactador em etapa de regularizacao do trecho" },
    ],
  },
  {
    id: "dnit-recuperacao-erosao-br364-km451",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão BR 364, KM 451.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km451/01-registro.jpg", alt: "Trecho da BR-364 com enrocamento junto a margem da pista" },
      { src: "/images/obras/dnit-erosao-br364-km451/02-registro.jpg", alt: "Escavacao no talude lateral a rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km451/03-registro.jpg", alt: "Escavadeira trabalhando sobre a area reforcada com pedras" },
      { src: "/images/obras/dnit-erosao-br364-km451/04-registro.jpg", alt: "Vista panoramica da recomposicao da margem rodoviaria" },
    ],
  },
  {
    id: "dnit-recuperacao-plataforma-br364-km250",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de plataforma rodoviária BR 364, KM 250.",
    fotos: [
      { src: "/images/obras/dnit-plataforma-br364-km250/01-registro.jpg", alt: "Pista rodoviária com trinca e escavadeira na recuperação da plataforma" },
      { src: "/images/obras/dnit-plataforma-br364-km250/02-registro.jpg", alt: "Área recomposta com material pétreo ao lado da rodovia" },
      { src: "/images/obras/dnit-plataforma-br364-km250/03-registro.jpg", alt: "Escavação lateral à rodovia para recuperar a plataforma danificada" },
      { src: "/images/obras/dnit-plataforma-br364-km250/04-registro.jpg", alt: "Máquina trabalhando na recuperação do trecho em curva da BR-364" },
      { src: "/images/obras/dnit-plataforma-br364-km250/05-registro.jpg", alt: "Vista ampla da camada de pedras aplicada na recomposição" },
      { src: "/images/obras/dnit-plataforma-br364-km250/06-registro.jpg", alt: "Trecho rodoviário em curva com plataforma e base em recuperação" },
      { src: "/images/obras/dnit-plataforma-br364-km250/07-registro.jpg", alt: "Vista lateral da recomposição da plataforma e dos taludes junto à pista" },
      { src: "/images/obras/dnit-plataforma-br364-km250/08-registro.jpg", alt: "Vista da rodovia após a recuperação da plataforma" },
    ],
  },
  {
    id: "dnit-recuperacao-br364-km142-148",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de trecho na estrada de SENA-MADUREIRA, BR-364, KM 142 ao KM 148, base em macadame hidráulico.",
    fotos: [
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/01-registro.jpg", alt: "Motoniveladora espalhando material petreo na recuperacao do trecho" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/02-registro.jpg", alt: "Rolo compactador na pista durante a recuperacao da base" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/03-registro.jpg", alt: "Camada de agregados na pista em execucao" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/04-registro.jpg", alt: "Trecho com camada de macadame sendo trabalhada por equipamentos" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/05-registro.jpg", alt: "Rolo compactador sobre trecho de pavimento escuro" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/06-registro.jpg", alt: "Compactacao da camada de revestimento na rodovia" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/07-registro.jpg", alt: "Vista longitudinal do trecho rodoviario em recuperacao" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/08-registro.jpg", alt: "Rolo compactador trabalhando sobre material petreo na estrada" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/09-registro.jpg", alt: "Equipamento e equipe durante a compactacao do novo revestimento" },
    ],
  },
  {
    id: "dnit-erosao-br364-km296",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na estrada de SENA-MADUREIRA, BR-364, KM 296.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km296/01-registro.jpg", alt: "Escavadeira e frente de obras no trecho da rodovia afetado pela erosão" },
      { src: "/images/obras/dnit-erosao-br364-km296/02-registro.jpg", alt: "Sinalização provisória e faixa de rodovia em recuperação" },
      { src: "/images/obras/dnit-erosao-br364-km296/03-registro.jpg", alt: "Pista com ruptura na borda e recomposição com material pétreo" },
      { src: "/images/obras/dnit-erosao-br364-km296/04-registro.jpg", alt: "Preparação da nova plataforma e implantação da drenagem" },
      { src: "/images/obras/dnit-erosao-br364-km296/05-registro.jpg", alt: "Movimentação de solo e escavação para recuperação do trecho" },
      { src: "/images/obras/dnit-erosao-br364-km296/06-registro.jpg", alt: "Trator realizando o nivelamento da plataforma rodoviária" },
      { src: "/images/obras/dnit-erosao-br364-km296/07-registro.jpg", alt: "Equipamentos executando a regularização da base da pista" },
      { src: "/images/obras/dnit-erosao-br364-km296/08-registro.jpg", alt: "Rolos compactadores atuando na recomposição da plataforma" },
      { src: "/images/obras/dnit-erosao-br364-km296/09-registro.jpg", alt: "Escavação e enrocamento de pedra na área de erosão" },
      { src: "/images/obras/dnit-erosao-br364-km296/10-registro.jpg", alt: "Enrocamento e aplicação de material pétreo na base da via" },
    ],
  },
];

export default function ObrasRodoviariasPage() {
  return (
    <main id="pn-engenharia-rodoviaria" className="min-h-screen bg-white pt-24 text-slate-950 md:pt-28">
      <h1 className="sr-only">Obras de engenharia rodoviária e pavimentação</h1>
      <GaleriaObras obras={obrasCompletas} />
    </main>
  );
}
