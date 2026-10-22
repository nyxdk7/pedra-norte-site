// Home page content (moved verbatim from app/page.tsx during componentization).

export const empresasGrupo = [
  {
    nome: "MSM Industrial",
    imagem: "/images/grupo/msm-logo.png",
    atuacao: "Pavimentação",
    descricao:
      "Empresa principal do grupo, com atuação em pavimentação, obras rodoviárias, infraestrutura e usinagem de asfalto.",
  },
  {
    nome: "Pedra Norte",
    imagem: "/images/grupo/pedra-norte-logo.png",
    atuacao: "Minerais e agregados",
    descricao:
      "Pedreira responsável pela produção e fornecimento de agregados minerais para obras e infraestrutura.",
  },
  {
    nome: "Construtora Santa Maria",
    imagem: "/images/grupo/construtora-santamaria.png",
    atuacao: "Construção civil",
    descricao:
      "Construtora voltada à execução de obras civis, projetos estruturais e soluções construtivas.",
  },
  {
    nome: "Auto Posto Correntão",
    imagem: "/images/grupo/correntao-logo.png",
    atuacao: "Apoio operacional",
    descricao:
      "Marca integrada ao grupo, contribuindo com suporte operacional, logística e estrutura de apoio.",
  },
  {
    nome: "Pré Molde",
    imagem: "/images/grupo/pre-molde-logo.png",
    atuacao: "Pré-moldados",
    descricao:
      "Produção de peças pré-moldadas de cimento para obras, drenagem, urbanização e infraestrutura.",
  },
  {
    nome: "Tratorron",
    imagem: "/images/grupo/tratorron-logo.png",
    atuacao: "Máquinas",
    descricao:
      "Locação de máquinas e equipamentos pesados para apoio operacional em obras de grande porte.",
  },
  {
    nome: "Comercial da Construção",
    imagem: "/images/parceiros/comercial-construcao.png",
    atuacao: "Materiais de construção",
    descricao:
      "Fornecedor de materiais de construção, complementando a rede de apoio comercial e operacional do grupo.",
  },
  {
    nome: "MW Materiais",
    imagem: "/images/parceiros/mw-materiais.png",
    atuacao: "Materiais de construção",
    descricao:
      "Fornecedor parceiro em materiais para construção, apoiando demandas de obras, manutenção e operação.",
  },
];

const outrosParceiros = [
  {
    nome: "Santa Maria",
    imagem: "/images/parceiros/santa-maria.png",
  },
];

export const servicosPrincipais: Array<{
  titulo: string;
  descricao: string;
  detalhe: string;
  empresa: string;
  operacional: string;
}> = [
  {
    titulo: "Pavimentação asfáltica",
    descricao:
      "Execução de obras urbanas e rodoviárias com equipe técnica, frota operacional e suporte de usinagem.",
    detalhe: "Infraestrutura rodoviária",
    empresa: "MSM Industrial",
    operacional: "Obras urbanas e rodoviárias",
  },
  {
    titulo: "Concreto usinado",
    descricao:
      "Produção e fornecimento de concreto usinado para obras civis, industriais e estruturais.",
    detalhe: "Fornecimento técnico",
    empresa: "MSM Industrial",
    operacional: "Controle de produção e entrega",
  },
  {
    titulo: "Britas e agregados",
    descricao:
      "Produção de agregados minerais para pavimentação, drenagem, construção civil e infraestrutura.",
    detalhe: "Produção própria",
    empresa: "Pedra Norte",
    operacional: "Insumos para grandes obras",
  },
  {
    titulo: "Usinagem de asfalto",
    descricao:
      "Produção de massa asfáltica para aplicação em obras públicas, privadas, urbanas e rodoviárias.",
    detalhe: "Produção industrial",
    empresa: "MSM Industrial",
    operacional: "Apoio direto à pavimentação",
  },
  {
    titulo: "Pré-moldados",
    descricao:
      "Soluções em peças pré-moldadas de concreto para drenagem, urbanização e infraestrutura.",
    detalhe: "Peças de concreto",
    empresa: "Pré Molde",
    operacional: "Drenagem e urbanização",
  },
  {
    titulo: "Locação de máquinas",
    descricao:
      "Disponibilização de máquinas e equipamentos pesados para apoio operacional em obras de diferentes portes.",
    detalhe: "Frota pesada",
    empresa: "Tratorron",
    operacional: "Máquinas para operação em campo",
  },
];

// Documented figures only (sources: master app/page.tsx hero and app/obras/page.tsx).
export const indicadoresGrupo = [
  { valor: "+40", rotulo: "Anos de atuação" },
  { valor: "+50", rotulo: "Projetos atendidos" },
  { valor: "AC/RO", rotulo: "Presença regional" },
];

// Ecosystem: the solutions the group delivers. Titles are servicosPrincipais titles or a
// company's own "atuacao" label, verbatim. Links land on existing pages/anchors.
export const solucoesEcossistema = [
  { id: "pavimentacao", titulo: "Pavimentação asfáltica", href: "/atuacoes#frente-pavimentacao" },
  { id: "usinagem", titulo: "Usinagem de asfalto", href: "/servicos" },
  { id: "concreto", titulo: "Concreto usinado", href: "/servicos" },
  { id: "agregados", titulo: "Britas e agregados", href: "/atuacoes#frente-extracao-de-minerios" },
  { id: "pre-moldados", titulo: "Pré-moldados", href: "/atuacoes#frente-pre-moldados" },
  { id: "maquinas", titulo: "Locação de máquinas", href: "/estrutura" },
  { id: "construcao", titulo: "Construção civil", href: "/atuacoes#frente-edificacoes" },
  { id: "apoio", titulo: "Apoio operacional", href: "/estrutura" },
  // No dedicated page: shown as text, not as a link.
  { id: "materiais", titulo: "Materiais de construção", href: null },
];

// Which solutions each company delivers, taken from servicosPrincipais.empresa and from the
// company's own atuacao. Santa Maria is listed only as "Parceiro estratégico", so no
// solution is attributed to it. No company–client pairing is documented in the project,
// so success cases are linked to the group as a whole.
export const solucoesPorEmpresa: Record<string, string[]> = {
  "MSM Industrial": ["pavimentacao", "usinagem", "concreto"],
  "Pedra Norte": ["agregados"],
  "Construtora Santa Maria": ["construcao"],
  "Auto Posto Correntão": ["apoio"],
  "Pré Molde": ["pre-moldados"],
  Tratorron: ["maquinas"],
  "Comercial da Construção": ["materiais"],
  "MW Materiais": ["materiais"],
  "Santa Maria": [],
};

// Same list as "Casos de sucesso" in app/obras/page.tsx (kept in sync by hand until Wave 3).
export const casosSucesso = [
  { nome: "Prefeitura de Rio Branco", imagem: "/images/casos-sucesso/prefeitura-rio-branco.png" },
  { nome: "7º BEC", imagem: "/images/casos-sucesso/bec.png" },
  { nome: "DEPASA", imagem: "/images/casos-sucesso/depasa.png" },
  { nome: "DERACRE", imagem: "/images/casos-sucesso/deracre.png" },
  { nome: "DNIT", imagem: "/images/casos-sucesso/dnit.png" },
];

export const empresasCarousel = [
  ...empresasGrupo,
  ...outrosParceiros.map((parceiro) => ({
    ...parceiro,
    atuacao: "Parceiro estratégico",
    descricao:
      "Parceiro comercial e operacional que complementa a rede de apoio e relacionamento do Grupo Soster.",
  })),
];
