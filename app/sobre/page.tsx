export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
            Sobre a empresa
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Soluções em engenharia civil com compromisso, qualidade e
            responsabilidade.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A MSM Industrial LTDA atua no setor de engenharia civil oferecendo
            soluções para obras, infraestrutura, pavimentação, concreto e
            fornecimento de insumos, sempre com foco em segurança, qualidade e
            atendimento eficiente.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#dbe5ff] bg-white p-8 shadow-sm shadow-[#dbe5ff]">
            <h2 className="text-2xl font-bold text-slate-950">
              Nossa atuação
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                A empresa atua com soluções voltadas à engenharia civil,
                fornecendo estrutura, produtos e serviços para atender obras de
                diferentes portes.
              </p>

              <p>
                Com foco em qualidade e responsabilidade, a MSM Industrial LTDA
                busca contribuir para o desenvolvimento regional por meio de
                serviços técnicos, fornecimento de materiais e apoio a projetos
                de infraestrutura.
              </p>

              <p>
                A atuação da empresa envolve compromisso com prazos, segurança
                operacional, atendimento personalizado e busca constante por
                melhoria nos processos.
              </p>

              <p>
                A MSM Industrial LTDA trabalha para ser reconhecida como uma
                parceira confiável para clientes privados, órgãos públicos,
                construtoras e demais empresas que necessitam de soluções em
                engenharia civil.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-[#dbe5ff] bg-[#eaf0ff] p-8">
              <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                Compromisso
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Qualidade em cada entrega
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Trabalhamos com responsabilidade técnica, organização e atenção
                aos detalhes em cada etapa dos serviços prestados.
              </p>
            </div>

            <div className="rounded-3xl border border-[#dbe5ff] bg-white p-8 shadow-sm shadow-[#dbe5ff]">
              <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                Atuação
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Engenharia civil e infraestrutura
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Soluções voltadas para obras, pavimentação, concreto,
                fornecimento de agregados e apoio a projetos de infraestrutura.
              </p>
            </div>

            <div className="rounded-3xl border border-[#dbe5ff] bg-white p-8 shadow-sm shadow-[#dbe5ff]">
              <span className="text-sm font-bold uppercase tracking-wide text-[#143987]">
                Valores
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Segurança e responsabilidade
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Valorizamos ética, compromisso, transparência, respeito às
                pessoas e foco em resultados consistentes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}