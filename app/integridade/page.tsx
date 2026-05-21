import Link from "next/link";
import {
  BookOpen,
  Building2,
  FileCheck2,
  MessagesSquare,
  Network,
  ShieldCheck,
} from "lucide-react";

const documentosIntegridade = [
  {
    titulo: "Código de Conduta e Ética",
    href: "#",
    icone: ShieldCheck,
  },
  {
    titulo: "Canal de denúncias",
    href: "#",
    icone: MessagesSquare,
  },
  {
    titulo: "Políticas de Ética e Integridade",
    href: "#",
    icone: FileCheck2,
  },
  {
    titulo: "Glossário de compliance",
    href: "#",
    icone: BookOpen,
  },
  {
    titulo: "Política de gestão integrada",
    href: "#",
    icone: Building2,
  },
  {
    titulo: "Estrutura Organizacional",
    href: "#",
    icone: Network,
  },
];

export default function IntegridadePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#8fb1ff33,transparent_35%),linear-gradient(135deg,#071225,#143987_55%,#0f2c6a)]" />

        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white/5 lg:block" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Programa de Integridade
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Integridade MSM
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae justo vitae mi posuere luctus. Suspendisse potenti. Donec
              facilisis, magna at porta consequat, lorem ipsum gravida lorem,
              vitae dignissim justo urna a velit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <p className="text-sm font-bold uppercase tracking-wide text-white/60">
              Compromisso institucional
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Ética, transparência e responsabilidade nas relações.
            </h2>

            <p className="mt-4 leading-7 text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non massa sed ipsum facilisis fermentum. Mauris id purus vitae
              justo luctus dictum.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              Integridade Corporativa
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Documentos, canais e políticas de integridade.
            </h2>

            <div className="mx-auto mt-6 max-w-4xl space-y-4 text-left text-lg leading-8 text-slate-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A MSM
                Industrial busca promover relações éticas, transparentes e
                responsáveis em suas atividades, fortalecendo sua cultura
                organizacional e seu compromisso com a sociedade.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sed magna non lectus facilisis malesuada. Integer porta, magna
                vitae porta consequat, lorem massa posuere justo, vitae
                consectetur ipsum urna vitae lorem.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sed lorem at ipsum vestibulum porttitor. Donec
                tincidunt, justo vitae ultricies convallis, arcu sem elementum
                libero, vel dignissim sapien justo sed lorem.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentosIntegridade.map((documento) => {
              const Icone = documento.icone;

              return (
                <article
                  key={documento.titulo}
                  className="group overflow-hidden rounded-[2rem] border border-[#dbe5ff] bg-white shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#dbe5ff]"
                >
                  <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#143987] p-8 text-white">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 transition duration-500 group-hover:scale-125" />
                    <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#8fb1ff]/20 blur-2xl" />

                    <Icone
                      size={96}
                      strokeWidth={1.5}
                      className="relative z-10 transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="min-h-[56px] text-xl font-bold leading-7 text-slate-800">
                      {documento.titulo}
                    </h3>

                    <Link
                      href={documento.href}
                      className="mt-5 inline-flex w-full justify-center rounded-xl bg-[#143987] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
                    >
                      Acessar
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#143987] p-8 text-white shadow-2xl shadow-[#dbe5ff] md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#8fb1ff]/20 blur-3xl" />

            <div className="relative z-10">
              <span className="text-sm font-bold uppercase tracking-wide text-white/70">
                Integridade MSM
              </span>

              <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
                Um espaço dedicado à ética, transparência e boas práticas
                corporativas.
              </h2>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-white/85">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed lectus vitae justo porta tincidunt. Integer et magna at
                lorem elementum commodo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}