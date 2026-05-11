import Image from "next/image";

const servicos = [
  {
    titulo: "Concreto usinado",
    imagem: "/images/servicos/concreto-usinado.png",
    descricao:
      "Produção e fornecimento de concreto usinado com qualidade, controle técnico e atendimento conforme a necessidade da obra.",
  },
  {
    titulo: "Pavimentação asfáltica",
    imagem: "/images/servicos/pavimentacao-asfaltica.png",
    descricao:
      "Atuação em obras de pavimentação asfáltica com estrutura, equipe e experiência para entregar qualidade em cada etapa do serviço.",
  },
  {
    titulo: "Usinagem de asfalto",
    imagem: "/images/servicos/usinagem-asfalto.png",
    descricao:
      "Produção de asfalto com atenção aos requisitos técnicos, manutenção dos materiais e condições adequadas de armazenamento e transporte.",
  },
];

const produtos = [
  {
    titulo: "Pó de brita",
    imagem: "/images/servicos/po-de-brita.png",
    descricao:
      "Usado para cobertura de aterros, ajardinamento, compactação de ruas e no concreto industrial.",
  },
  {
    titulo: "Brita nº 3/8",
    imagem: "/images/servicos/brita-38.png",
    descricao:
      "Material de corte com variação de 5,0 até 0,075, utilizado conforme a aplicação e necessidade da obra.",
  },
  {
    titulo: "Brita nº 5/8",
    imagem: "/images/servicos/brita-58.png",
    descricao:
      "Material de corte utilizado em subleito, reforço de subleito, base e reforço de base de pavimento.",
  },
  {
    titulo: "Brita nº 3/4",
    imagem: "/images/servicos/brita-34.png",
    descricao:
      "Material com diâmetro máximo de 19 mm, usado na fabricação de concreto, pontes, edificações e outras aplicações.",
  },
  {
    titulo: "Brita nº 7/8",
    imagem: "/images/servicos/brita-78.png",
    descricao:
      "Usada basicamente na usinagem de concreto armado para estruturas médias e pesadas, além de pisos de alto tráfego.",
  },
  {
    titulo: "Brita nº 3",
    imagem: "/images/servicos/brita-3.png",
    descricao:
      "Material com diâmetro máximo de 50 mm, também conhecido como pedra de lastro, utilizado em aplicações pesadas.",
  },
  {
    titulo: "Brita nº 4",
    imagem: "/images/servicos/brita-4.png",
    descricao:
      "Agregado com diâmetro máximo de 76 mm, destinado a obras de drenagem, como drenos sépticos e fossas.",
  },
  {
    titulo: "Pedra rachão",
    imagem: "/images/servicos/pedra-rachao.png",
    descricao:
      "Utilizada para fabricação de muros de contenção, barreiras e bases, fundações em geral, aterramento de áreas pantanosas e drenagens.",
  },
  {
    titulo: "Brita corrida",
    imagem: "/images/servicos/brita-corrida.png",
    descricao:
      "Usada para cobertura de aterros, ajardinamento, compactação de ruas e no concreto industrial. Seu tamanho é de 3/16” a 4,76 mm.",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white pt-32 text-slate-950">
      <section className="relative overflow-hidden px-6 pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#eaf0ff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              Serviços e produtos
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Soluções em engenharia civil, concreto e pavimentação.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A MSM Industrial LTDA reúne estrutura e qualidade no fornecimento
              de produtos e serviços para construção civil, infraestrutura e
              obras públicas ou privadas.
            </p>
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-4">
              <div className="h-8 w-1 rounded-full bg-[#143987]" />
              <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-800">
                Serviços
              </h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {servicos.map((servico) => (
                <article
                  key={servico.titulo}
                  className="group rounded-3xl border border-[#dbe5ff] bg-white p-5 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
                >
                  <div className="relative mx-auto h-56 w-full overflow-hidden rounded-2xl bg-[#eaf0ff]">
                    <Image
                      src={servico.imagem}
                      alt={servico.titulo}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-2 py-6">
                    <h3 className="text-center text-lg font-bold uppercase tracking-wide text-slate-800">
                      {servico.titulo}
                    </h3>

                    <p className="mt-4 text-center text-sm leading-7 text-slate-600">
                      {servico.descricao}
                    </p>

                    <div className="mt-6 text-center">
                      <a
                        href="/contato"
                        className="inline-flex items-center text-sm font-bold text-[#143987] transition hover:text-[#0f2c6a]"
                      >
                        Solicitar informações
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="flex items-center gap-4">
              <div className="h-8 w-1 rounded-full bg-[#143987]" />
              <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-800">
                Produtos
              </h2>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {produtos.map((produto) => (
                <article
                  key={produto.titulo}
                  className="group rounded-3xl border border-[#dbe5ff] bg-white p-5 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
                >
                  <div className="relative mx-auto h-48 w-full max-w-[260px] overflow-hidden rounded-2xl bg-[#eaf0ff]">
                    <Image
                      src={produto.imagem}
                      alt={produto.titulo}
                      fill
                      quality={100}
                      sizes="260px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-2 py-6">
                    <h3 className="text-center text-lg font-bold uppercase tracking-wide text-slate-800">
                      {produto.titulo}
                    </h3>

                    <p className="mt-4 text-center text-sm leading-7 text-slate-600">
                      {produto.descricao}
                    </p>

                    <div className="mt-6 text-center">
                      <a
                        href="/contato"
                        className="inline-flex items-center text-sm font-bold text-[#143987] transition hover:text-[#0f2c6a]"
                      >
                        Solicitar produto
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0ff] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-white p-8 shadow-sm shadow-[#dbe5ff] md:flex-row md:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
              Atendimento MSM Industrial
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Precisa de produtos ou serviços para sua obra?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Entre em contato com nossa equipe e solicite uma proposta conforme
              a necessidade do seu projeto.
            </p>
          </div>

          <a
            href="/contato"
            className="rounded-xl bg-[#143987] px-6 py-3 font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </main>
  );
}