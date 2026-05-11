import Image from "next/image";

const obras = [
  {
    titulo: "Obras de pavimentação",
    categoria: "Infraestrutura urbana",
    descricao:
      "Execução e apoio em serviços de pavimentação, recuperação de vias e fornecimento de materiais para obras públicas e privadas.",
    detalhes: [
      "Pavimentação asfáltica",
      "Base e sub-base",
      "Fornecimento de agregados",
    ],
  },
  {
    titulo: "Fornecimento para construção civil",
    categoria: "Produtos minerais",
    descricao:
      "Atendimento a construtoras, empresas e parceiros com britas, pó de brita, rachão, brita corrida e demais agregados.",
    detalhes: ["Britas diversas", "Pó de brita", "Pedra rachão"],
  },
  {
    titulo: "Concreto usinado",
    categoria: "Soluções para obras",
    descricao:
      "Fornecimento de concreto usinado para obras de pequeno, médio e grande porte, com foco em qualidade e controle.",
    detalhes: ["Concreto usinado", "Atendimento técnico", "Entrega programada"],
  },
  {
    titulo: "Apoio a obras públicas",
    categoria: "Setor público",
    descricao:
      "Atuação em projetos ligados ao desenvolvimento regional, fornecendo produtos e serviços para infraestrutura.",
    detalhes: ["Órgãos públicos", "Infraestrutura", "Desenvolvimento regional"],
  },
];

const casosSucesso = [
  {
    nome: "Prefeitura de Rio Branco",
    imagem: "/images/casos-sucesso/prefeitura-rio-branco.png",
  },
  {
    nome: "7º BEC",
    imagem: "/images/casos-sucesso/bec.png",
  },
  {
    nome: "DEPASA",
    imagem: "/images/casos-sucesso/depasa.png",
  },
  {
    nome: "DERACRE",
    imagem: "/images/casos-sucesso/deracre.png",
  },
  {
    nome: "DNIT",
    imagem: "/images/casos-sucesso/dnit.png",
  },
];

export default function ObrasPage() {
  return (
    <main className="min-h-screen bg-white pt-32 text-slate-950">
      <section className="relative overflow-hidden px-6 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#e0f2fe,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Obras e projetos
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Presença em obras que movimentam o desenvolvimento da região.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Pedra Norte participa de projetos de infraestrutura, construção
              civil, pavimentação, mineração e fornecimento de insumos para
              empresas, parceiros e órgãos públicos.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <strong className="block text-4xl font-bold text-sky-600">
                +40
              </strong>
              <span className="mt-2 block text-sm font-semibold text-slate-600">
                Anos de trajetória
              </span>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <strong className="block text-4xl font-bold text-sky-600">
                1986
              </strong>
              <span className="mt-2 block text-sm font-semibold text-slate-600">
                Início das atividades
              </span>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <strong className="block text-4xl font-bold text-sky-600">
                AC/RO
              </strong>
              <span className="mt-2 block text-sm font-semibold text-slate-600">
                Presença regional
              </span>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <strong className="block text-4xl font-bold text-sky-600">
                100%
              </strong>
              <span className="mt-2 block text-sm font-semibold text-slate-600">
                Foco em qualidade
              </span>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-center gap-4">
              <div className="h-8 w-1 rounded-full bg-sky-500" />
              <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-800">
                Áreas de atuação
              </h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {obras.map((obra) => (
                <article
                  key={obra.titulo}
                  className="group rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100"
                >
                  <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700">
                    {obra.categoria}
                  </span>

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {obra.titulo}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {obra.descricao}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {obra.detalhes.map((detalhe) => (
                      <span
                        key={detalhe}
                        className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
                      >
                        {detalhe}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                Casos de sucesso
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Confiança de instituições e parceiros estratégicos.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Ao longo da sua trajetória, a Pedra Norte participou de projetos
                e fornecimentos para órgãos, instituições e parceiros que
                contribuem para o desenvolvimento da região.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {casosSucesso.map((caso) => (
                <div
                  key={caso.nome}
                  className="group flex h-36 items-center justify-center rounded-3xl border border-sky-100 bg-sky-50/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-100"
                >
                  <Image
                    src={caso.imagem}
                    alt={caso.nome}
                    width={180}
                    height={90}
                    quality={100}
                    className="max-h-20 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-3xl border border-sky-100 bg-slate-950 text-white shadow-sm shadow-sky-100">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 md:p-12">
                <span className="text-sm font-bold uppercase tracking-wide text-sky-300">
                  Estrutura e confiança
                </span>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Produtos, serviços e operação para atender obras de diferentes
                  portes.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Com atuação consolidada na região amazônica, a Pedra Norte
                  combina experiência, estrutura familiar, mineração e
                  fornecimento de insumos essenciais para o andamento de obras.
                </p>

                <a
                  href="/contato"
                  className="mt-8 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Falar com a equipe
                </a>
              </div>

              <div className="grid min-h-[360px] grid-cols-2 gap-1 bg-slate-800 p-1">
                <div className="rounded-2xl bg-sky-500/20 p-6">
                  <span className="text-sm font-bold text-sky-300">
                    Mineração
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Produção e fornecimento de agregados minerais.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <span className="text-sm font-bold text-sky-300">
                    Pavimentação
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Apoio a obras viárias e infraestrutura urbana.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6">
                  <span className="text-sm font-bold text-sky-300">
                    Concreto
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Soluções com concreto usinado para obras.
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-500/20 p-6">
                  <span className="text-sm font-bold text-sky-300">
                    Agregados
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Britas, pó de brita, rachão e brita corrida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}