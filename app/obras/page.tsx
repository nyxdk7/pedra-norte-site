import Image from "next/image";
import { GaleriaObras, type ObraGaleria } from "@/components/obras/GaleriaObras";
import { Container, SectionHeading } from "@/components/ui/Section";
import { casosSucesso } from "@/components/home/data";

// Works module: titles exactly as registered by the owner; photographs supplied by the owner.
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
      {
        src: "/images/obras/dnit-br-364-cabeceira-ponte/argamassa-enrocamento-km203.jpg",
        alt: "Equipe aplicando argamassa de concreto sobre o enrocamento da cabeceira, junto à placa do KM 203 da BR-364",
        foco: "object-[50%_45%]",
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
  {
    id: "deracre-terceiro-acesso-tarauaca",
    orgao: "Deracre",
    titulo: "Deracre - Implantação do terceiro Acesso - Tarauacá - AC.",
    local: "Tarauacá/AC",
    fotos: [
      {
        src: "/images/obras/deracre-terceiro-acesso-tarauaca/cruzamento-acesso-aerea.jpg",
        alt: "Vista aérea do cruzamento do novo acesso com a rodovia asfaltada, com veículos na pista e o bairro ao lado direito",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/deracre-terceiro-acesso-tarauaca/ponte-pista-nova-frontal.jpg",
        alt: "Pista asfaltada e sinalizada sobre a ponte de concreto, entre a mata e as palmeiras, com o alargamento recém-executado à direita",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/deracre-terceiro-acesso-tarauaca/acesso-curva-aerea.jpg",
        alt: "Vista aérea da curva do novo acesso asfaltado, acompanhando a rede elétrica entre pastagens e mata",
        foco: "object-[50%_58%]",
      },
      {
        src: "/images/obras/deracre-terceiro-acesso-tarauaca/acesso-cidade-aerea.jpg",
        alt: "Vista aérea do traçado do terceiro acesso ligando a rodovia à cidade, com a subestação de energia à direita",
        foco: "object-[50%_50%]",
      },
    ],
  },
  {
    id: "deracre-arco-viario",
    orgao: "Deracre",
    titulo: "Deracre - Arco Viário / Arco Metropolitano - Rio Branco - AC.",
    local: "Rio Branco/AC",
    fotos: [
      {
        src: "/images/obras/deracre-arco-viario/terraplenagem-escavadeira-aerea.jpg",
        alt: "Vista aérea da terraplenagem do arco viário, com escavadeira carregando caminhão basculante, pá carregadeira e caminhões na pista em leito de solo",
        foco: "object-[50%_55%]",
      },
      {
        src: "/images/obras/deracre-arco-viario/tracado-arco-aerea.jpg",
        alt: "Vista aérea do traçado do arco viário em terraplenagem avançando entre pastagens, com caminhões na pista e a cidade ao fundo",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/deracre-arco-viario/abertura-corredor-aerea.jpg",
        alt: "Vista aérea da abertura do corredor do arco viário na mata, com trator de esteiras e scraper trabalhando no leito de solo",
        foco: "object-[50%_50%]",
      },
      {
        src: "/images/obras/deracre-arco-viario/frente-servico-maquinas.jpg",
        alt: "Scraper e caminhões basculantes trafegando pela frente de serviço do arco viário, entre os taludes de corte",
        foco: "object-[50%_45%]",
      },
    ],
  },
  {
    id: "deracre-ac-475",
    orgao: "Deracre",
    titulo: "Deracre - Obra AC 475.",
    fotos: [
      {
        src: "/images/obras/deracre-ac-475/pista-caminhoes-acude-aerea.jpg",
        alt: "Vista aérea da rodovia asfaltada e sinalizada, com dois caminhões na pista, pastagens dos dois lados e um açude à direita",
        foco: "object-[50%_56%]",
      },
      {
        src: "/images/obras/deracre-ac-475/pista-cafezal-reta-aerea.jpg",
        alt: "Vista aérea do trecho reto da rodovia, com pastagem à esquerda e lavoura de café à direita",
        foco: "object-[50%_58%]",
      },
      {
        src: "/images/obras/deracre-ac-475/pista-reta-plantio-aerea.jpg",
        alt: "Vista aérea da rodovia asfaltada seguindo ao horizonte, com carro e motocicleta na pista e plantio enfileirado à direita",
        foco: "object-[50%_60%]",
      },
      {
        src: "/images/obras/deracre-ac-475/pista-caminhao-cafezal-aerea.jpg",
        alt: "Vista aérea de um caminhão trafegando pelo trecho asfaltado, entre a pastagem e a lavoura de café",
        foco: "object-[50%_50%]",
      },
    ],
  },
  // DNIT works on the BR-364 brought over from the published site with their photographs
  // as published; titles in sentence case, with "km" as the unit symbol.
  {
    id: "dnit-reconstrucao-sena-br364-macadame",
    orgao: "DNIT",
    titulo: "DNIT - Reconstrução de trecho na estrada de Sena Madureira, BR-364, base em macadame hidráulico.",
    fotos: [
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/01-registro.jpg", alt: "Vista da pista na BR-364 com superfície asfáltica e faixa de execução" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/02-registro.jpg", alt: "Equipamento de compactação trabalhando sobre a camada asfáltica" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/03-registro.jpg", alt: "Equipamentos de compactação sobre o trecho da BR-364" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/04-registro.jpg", alt: "Máquina compactadora avançando sobre a faixa de asfalto" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/05-registro.jpg", alt: "Trecho rodoviário visto em perspectiva após a recuperação" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/06-registro.jpg", alt: "Equipe e vibroacabadora trabalhando na aplicação do revestimento asfáltico" },
      { src: "/images/obras/dnit-reconstrucao-sena-br364-macadame/07-registro.jpg", alt: "Frente de pavimentação com rolos compactadores e equipe junto à pista" },
    ],
  },
  {
    id: "dnit-erosao-sena-br364-km246",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na estrada de Sena Madureira, BR-364, km 246.",
    fotos: [
      { src: "/images/obras/erosao-km-246/13-aplicacao-asfalto.webp", alt: "Aplicação de asfalto no trecho recuperado do km 246" },
      { src: "/images/obras/erosao-km-246/01-area-erosao.webp", alt: "Área afetada pela erosão às margens da rodovia, antes da recuperação" },
      { src: "/images/obras/erosao-km-246/02-preenchimento.webp", alt: "Preenchimento da área erodida ao lado da pista" },
      { src: "/images/obras/erosao-km-246/11-descarga-agregado.webp", alt: "Caminhão descarregando agregado na frente de serviço" },
      { src: "/images/obras/erosao-km-246/15-reforco-material-petreo.webp", alt: "Reforço da base com material pétreo" },
      { src: "/images/obras/erosao-km-246/03-base-material-petreo.webp", alt: "Base em material pétreo executada no trecho" },
      { src: "/images/obras/erosao-km-246/08-recomposicao-asfaltica.webp", alt: "Recomposição asfáltica sobre a base recuperada" },
      { src: "/images/obras/erosao-km-246/12-compactacao-asfalto.webp", alt: "Compactação do revestimento asfáltico" },
      { src: "/images/obras/erosao-km-246/07-pavimento-executado.webp", alt: "Pavimento executado no trecho recuperado" },
      { src: "/images/obras/erosao-km-246/14-regularizacao-base.webp", alt: "Regularização da base antes da pavimentação" },
      { src: "/images/obras/erosao-km-246/16-base-petrea.webp", alt: "Base pétrea concluída na área de intervenção" },
      { src: "/images/obras/erosao-km-246/10-pavimentacao-execucao.webp", alt: "Pavimentação em execução no km 246" },
      { src: "/images/obras/erosao-km-246/04-material-petreo.webp", alt: "Material pétreo aplicado na recomposição do aterro" },
      { src: "/images/obras/erosao-km-246/09-trecho-recuperado.webp", alt: "Vista do trecho da rodovia após a recuperação" },
    ],
  },
  {
    id: "dnit-erosao-sena-br364-km273",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na estrada de Sena Madureira, BR-364, km 273.",
    fotos: [
      { src: "/images/obras/erosao-km-273/01-vista-trecho-recomposto.webp", alt: "Vista do trecho recomposto da rodovia" },
      { src: "/images/obras/erosao-km-273/02-regularizacao-plataforma.webp", alt: "Regularização da plataforma da rodovia" },
      { src: "/images/obras/erosao-km-273/03-escavacao-material-petreo.webp", alt: "Escavação e aplicação de material pétreo" },
      { src: "/images/obras/erosao-km-273/04-compactacao-base.webp", alt: "Rolo compactador na compactação da base de material pétreo" },
      { src: "/images/obras/erosao-km-273/05-motoniveladora.webp", alt: "Motoniveladora regularizando a plataforma" },
      { src: "/images/obras/erosao-km-273/06-escavadeira-reforco-base.webp", alt: "Escavadeira executando o reforço da base" },
      { src: "/images/obras/erosao-km-273/07-descarga-material.webp", alt: "Caminhão basculante descarregando material na frente de serviço" },
      { src: "/images/obras/erosao-km-273/08-vista-geral-intervencao.webp", alt: "Vista geral da intervenção no km 273" },
      { src: "/images/obras/erosao-km-273/09-regularizacao-compactacao.webp", alt: "Regularização e compactação da plataforma" },
      { src: "/images/obras/erosao-km-273/10-movimentacao-agregados.webp", alt: "Movimentação de agregados na frente de obra" },
    ],
  },
  {
    id: "dnit-erosao-br364-km452",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na BR-364, km 452.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km452/01-registro.jpg", alt: "Trecho da BR-364 com erosão ao lado do pavimento" },
      { src: "/images/obras/dnit-erosao-br364-km452/02-registro.jpg", alt: "Caminhão basculante descarregando pedras na frente de serviço" },
      { src: "/images/obras/dnit-erosao-br364-km452/03-registro.jpg", alt: "Área de acostamento recomposta com enrocamento junto à rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km452/04-registro.jpg", alt: "Escavação na área afetada pela erosão ao lado da pista" },
      { src: "/images/obras/dnit-erosao-br364-km452/05-registro.jpg", alt: "Escavadeira atuando na recomposição com material pétreo" },
      { src: "/images/obras/dnit-erosao-br364-km452/06-registro.jpg", alt: "Escavadeira recuperando a faixa lateral da rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km452/07-registro.jpg", alt: "Caminhão descarregando agregado na área em recuperação" },
      { src: "/images/obras/dnit-erosao-br364-km452/08-registro.jpg", alt: "Rolo compactador sobre a base de agregado" },
      { src: "/images/obras/dnit-erosao-br364-km452/09-registro.jpg", alt: "Compactação da camada de pedras ao lado da pista" },
      { src: "/images/obras/dnit-erosao-br364-km452/10-registro.jpg", alt: "Rolo compactador em etapa de regularização do trecho" },
    ],
  },
  {
    id: "dnit-erosao-br364-km451",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na BR-364, km 451.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km451/01-registro.jpg", alt: "Trecho da BR-364 com enrocamento junto à margem da pista" },
      { src: "/images/obras/dnit-erosao-br364-km451/02-registro.jpg", alt: "Escavação no talude lateral à rodovia" },
      { src: "/images/obras/dnit-erosao-br364-km451/03-registro.jpg", alt: "Escavadeira trabalhando sobre a área reforçada com pedras" },
      { src: "/images/obras/dnit-erosao-br364-km451/04-registro.jpg", alt: "Vista panorâmica da recomposição da margem rodoviária" },
    ],
  },
  {
    id: "dnit-plataforma-br364-km250",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de plataforma rodoviária na BR-364, km 250.",
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
    id: "dnit-recuperacao-sena-br364-km142-148",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de trecho na estrada de Sena Madureira, BR-364, do km 142 ao km 148, base em macadame hidráulico.",
    fotos: [
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/01-registro.jpg", alt: "Motoniveladora espalhando material pétreo na recuperação do trecho" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/02-registro.jpg", alt: "Rolo compactador na pista durante a recuperação da base" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/03-registro.jpg", alt: "Camada de agregados na pista em execução" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/04-registro.jpg", alt: "Trecho com camada de macadame sendo trabalhada por equipamentos" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/05-registro.jpg", alt: "Rolo compactador sobre o revestimento asfáltico novo" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/06-registro.jpg", alt: "Compactação da camada de revestimento na rodovia" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/07-registro.jpg", alt: "Vista longitudinal do trecho rodoviário em recuperação" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/08-registro.jpg", alt: "Rolo compactador trabalhando sobre material pétreo na estrada" },
      { src: "/images/obras/dnit-recuperacao-br364-km142-148/09-registro.jpg", alt: "Equipamento e equipe durante a compactação do novo revestimento" },
    ],
  },
  {
    id: "dnit-erosao-sena-br364-km296",
    orgao: "DNIT",
    titulo: "DNIT - Recuperação de erosão na estrada de Sena Madureira, BR-364, km 296.",
    fotos: [
      { src: "/images/obras/dnit-erosao-br364-km296/01-registro.jpg", alt: "Escavadeira e frente de obras no trecho da rodovia afetado pela erosão" },
      { src: "/images/obras/dnit-erosao-br364-km296/02-registro.jpg", alt: "Sinalização provisória e faixa da rodovia em recuperação" },
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

export default function ObrasPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-background text-foreground">
      {/* Works module opens the page: each work's photographs alternate, then the next work */}
      <GaleriaObras obras={obrasGaleria} abertura />

      <section aria-labelledby="casos-titulo" className="bg-brita-100 py-20 md:py-28">
        <Container>
          <SectionHeading
            id="casos-titulo"
            eyebrow="Casos de sucesso"
            title="Confiança de instituições e parceiros estratégicos."
            description="Ao longo da sua trajetória, a empresa participou de projetos e fornecimentos para órgãos, instituições e parceiros que contribuem para o desenvolvimento da região."
          />

          {/* Rules are drawn by the cells themselves (each one its right and bottom edge,
              the list its left and top), so a row that does not fill ends in white space
              instead of a grey hole — the count of logos can change freely. */}
          <ul className="mt-12 grid grid-cols-2 overflow-hidden rounded-card border-l border-t border-ink/10 bg-white sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {casosSucesso.map((caso) => (
              <li
                key={caso.nome}
                className="flex h-32 items-center justify-center border-b border-r border-ink/10 p-6 md:h-40 xl:px-3"
              >
                <div className="relative h-20 w-full max-w-[11.25rem]">
                  <Image src={caso.imagem} alt={caso.nome} fill sizes="180px" className="object-contain" />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
