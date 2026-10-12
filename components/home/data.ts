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

// Same list as "Casos de sucesso" in app/obras/page.tsx (kept in sync by hand until Wave 3).
export const casosSucesso = [
  { nome: "Prefeitura de Rio Branco", imagem: "/images/casos-sucesso/prefeitura-rio-branco.png" },
  { nome: "7º BEC", imagem: "/images/casos-sucesso/bec.png" },
  { nome: "DEPASA", imagem: "/images/casos-sucesso/depasa.png" },
  { nome: "DERACRE", imagem: "/images/casos-sucesso/deracre.png" },
  { nome: "DNIT", imagem: "/images/casos-sucesso/dnit.png" },
];

export const galeriaImagens = [
  { id: 1, imagem: "/images/galeria/home.png" },
  { id: 2, imagem: "/images/galeria/home2.png" },
  { id: 3, imagem: "/images/galeria/home3.png" },
  { id: 4, imagem: "/images/galeria/home4.png" },
  { id: 5, imagem: "/images/galeria/home5.png" },
  { id: 6, imagem: "/images/galeria/home6.png" },
  { id: 7, imagem: "/images/galeria/home7.png" },
  { id: 8, imagem: "/images/galeria/home8.png" },
  { id: 9, imagem: "/images/galeria/home9.png" },
  { id: 10, imagem: "/images/galeria/home10.png" },
  { id: 11, imagem: "/images/galeria/home11.jpeg" },
  { id: 12, imagem: "/images/galeria/home12.jpeg" },
  { id: 13, imagem: "/images/galeria/home13.jpeg" },
  { id: 14, imagem: "/images/galeria/home14.jpeg" },
  { id: 15, imagem: "/images/galeria/operacao-1.png" },
  { id: 16, imagem: "/images/galeria/operacao-2.png" },
  { id: 17, imagem: "/images/galeria/operacao-3.png" },
  { id: 18, imagem: "/images/galeria/operacao-4.png" },
  { id: 19, imagem: "/images/galeria/operacao-5.png" },
  { id: 20, imagem: "/images/galeria/operacao-6.png" },
  { id: 21, imagem: "/images/galeria/operacao-7.png" },
  { id: 22, imagem: "/images/galeria/operacao-8.png" },
  { id: 23, imagem: "/images/galeria/operacao-9.png" },
  { id: 24, imagem: "/images/galeria/operacao-10.png" },
  { id: 25, imagem: "/images/galeria/operacao-11.png" },
  { id: 26, imagem: "/images/galeria/operacao-12.png" },
  { id: 27, imagem: "/images/galeria/operacao-13.png" },
  { id: 28, imagem: "/images/galeria/operacao-14.png" },
  { id: 29, imagem: "/images/galeria/operacao-15.png" },
  { id: 30, imagem: "/images/galeria/operacao-16.png" },
  { id: 31, imagem: "/images/galeria/operacao-17.png" },
  { id: 32, imagem: "/images/galeria/operacao-18.png" },
  { id: 33, imagem: "/images/galeria/operacao-19.png" },
  { id: 34, imagem: "/images/galeria/operacao-20.png" },
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
