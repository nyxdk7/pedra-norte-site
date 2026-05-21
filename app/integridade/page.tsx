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
    href: "https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/",
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
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#8fb1ff33,transparent_35%),linear-gradient(135deg,#071225,#143987_55%,#0f2c6a)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white/5 lg:block" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Programa de Integridade
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Integridade MSM
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              O Grupo{" "}
              <span className="font-bold text-[#8fb1ff]">
                M. S. M. Industrial LTDA
              </span>{" "}
              atua com foco em transparência, ética e integridade nas atividades
              desenvolvidas e realizadas, fortalecendo sua relação com
              colaboradores, parceiros, sociedade e Poder Público.
            </p>
          </div>

          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-8 lg:ml-auto">
            <p className="text-xs font-bold uppercase tracking-wide text-white/60 md:text-sm">
              Compromisso institucional
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
              Ética, transparência e responsabilidade nas relações.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-200">
              O Programa de Integridade Corporativa da MSM promove valores
              positivos no ambiente empresarial e orienta boas práticas no
              relacionamento com o Poder Público, parceiros e sociedade.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <span className="rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              Integridade Corporativa — Compliance
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Compliance - Integridade, ética empresarial.
            </h2>

            <div className="mt-6 max-w-5xl space-y-4 text-lg leading-8 text-slate-600">
              <p>
                O Grupo{" "}
                <span className="font-bold text-[#143987]">
                  M. S. M. Industrial LTDA
                </span>{" "}
                é focado em atingir o mais alto nível de transparência, ética e
                integridade nas atividades que desenvolve e realiza. Para isso,
                está implementando um{" "}
                <span className="font-bold text-[#143987]">
                  Programa de Integridade MSM.
                </span>{" "}
                que promove valores positivos no ambiente empresarial e no
                relacionamento com o Poder Público, parceiros e sociedade.
              </p>

              <p>
                O programa de Compliance é conduzido pelo{" "}
                <span className="font-bold text-[#143987]">
                  Comitê de Integridade e Ética (CIE)
                </span>{" "}
                do Grupo M. S. M., responsável pelas apurações internas
                recebidas por meio do seu canal de Ouvidoria.
              </p>

              <p>
                O{" "}
                <span className="font-bold text-[#143987]">
                  CIE/M. S. M.
                </span>{" "}
                pode ser contatado pelo canal de Ouvidoria disponível no link{" "}
                <Link
                  href="https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#143987] underline underline-offset-4 transition hover:text-[#0f2c6a]"
                >
                  sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem
                </Link>{" "}
                e pelo e-mail da Ouvidoria{" "}
                <a
                  href="mailto:msm@msmind.com.br"
                  className="font-bold text-[#143987] underline underline-offset-4 transition hover:text-[#0f2c6a]"
                >
                  msm@msmind.com.br
                </a>
                .
              </p>

              <p>
                Acesse, nos links abaixo, nosso Código de Ética e Conduta,
                nossas Políticas de Integridade e Ética e nossos Canais de
                Denúncias. Esses instrumentos compõem o Programa de Compliance
                da empresa e tornam público o compromisso do grupo com a
                transparência, a integridade e a ética empresarial.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {documentosIntegridade.map((documento) => {
              const Icone = documento.icone;

              return (
                <article
                  key={documento.titulo}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
                >
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-[#143987] text-white">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 transition duration-500 group-hover:scale-125" />
                    <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-[#8fb1ff]/20 blur-2xl" />

                    <Icone
                      size={54}
                      strokeWidth={1.7}
                      className="relative z-10 transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 text-center">
                    <h3 className="flex min-h-[56px] items-center justify-center text-base font-semibold leading-6 text-slate-700">
                      {documento.titulo}
                    </h3>

                    <Link
                      href={documento.href}
                      target={
                        documento.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        documento.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-4 inline-flex justify-center rounded-lg bg-[#143987] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[#143987]/15 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
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
                Compromisso com transparência, integridade e ética empresarial.
              </h2>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-white/85">
                O Programa de Integridade MSM reúne diretrizes, canais e
                documentos institucionais voltados ao fortalecimento das boas
                práticas corporativas e da responsabilidade nas relações
                empresariais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}