export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-20 text-slate-950">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Sobre a Pedra Norte
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Mais de 40 anos de história, trabalho e contribuição para o
            desenvolvimento da região amazônica.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Uma das maiores empresas de mineração da região amazônica, a Pedra
            Norte nasceu da determinação e força de vontade de uma família
            catarinense que escolheu, há mais de 40 anos, o Acre como estado
            para morar, gerar emprego e renda.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100">
            <h2 className="text-2xl font-bold text-slate-950">
              Nossa história
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Tendo como entusiasta do projeto, Waldomiro Soster, o patriarca
                da família, a empresa iniciou suas atividades em 1986, sob outra
                perspectiva, mas sempre voltada para fortalecer o
                desenvolvimento do Acre.
              </p>

              <p>
                Nesta primeira formação empresarial já estava contido o embrião
                do que hoje é a Pedra Norte. Muito mais que uma empresa
                mineradora que oferece o produto final, a empresa oferece valor
                agregado, uma gama de serviços, possui centenas de pessoas como
                colaboradores e uma cartela de clientes de todos os locais do
                país.
              </p>

              <p>
                A Pedra Norte é uma empresa múltipla, cuja mineradora está
                localizada em Rondônia, tendo como sede administrativa Rio
                Branco, a capital do estado do Acre.
              </p>

              <p>
                Além de ter a mineração como sua atividade principal, a Pedra
                Norte atua também fornecendo produtos derivados da atividade
                principal, como concreto usinado, pó de brita, entre outros
                insumos.
              </p>

              <p>
                Gerida por um grupo familiar tão sólido quanto a própria
                empresa, a Pedra Norte possui em sua gestão o idealizador do
                projeto, Waldomiro Soster, filhos e netos, mantendo viva a visão
                familiar que impulsionou sua trajetória desde o início.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
              <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                Fundação
              </span>
              <strong className="mt-3 block text-5xl font-bold text-slate-950">
                1986
              </strong>
              <p className="mt-4 leading-7 text-slate-600">
                Ano em que a empresa iniciou sua trajetória empresarial,
                contribuindo para o crescimento do Acre e da região amazônica.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100">
              <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                Atuação
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Mineração, concreto e insumos
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A empresa atua com mineração e também fornece produtos derivados
                da sua atividade principal, agregando valor aos seus clientes e
                parceiros.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm shadow-sky-100">
              <span className="text-sm font-bold uppercase tracking-wide text-sky-600">
                Presença regional
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Rondônia e Acre
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A mineradora está localizada em Rondônia, com sede
                administrativa em Rio Branco, capital do Acre.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}