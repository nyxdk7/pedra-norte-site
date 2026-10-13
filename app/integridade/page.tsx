import Image from "next/image";
import Link from "next/link";
import { ScrollText, ShieldAlert, Workflow } from "lucide-react";

const documentosIntegridade = [
  {
    titulo: "Código de Conduta e Ética",
    href: "/integridade/codigo-de-etica",
    icone: ScrollText,
  },
  {
    titulo: "Canal de denúncias",
    href: "https://sgcompliance.net/sg/m-s-m-edificacoes-e-terraplanagem/",
    icone: ShieldAlert,
  },
  {
    titulo: "Estrutura Organizacional",
    href: "#",
    icone: Workflow,
  },
];

export default function IntegridadePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-20 pt-32 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/integridade/hero-integridade.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/95 via-[#071225]/80 to-[#071225]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/45 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl py-7 md:py-10">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Integridade MSM
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Ética, transparência e responsabilidade orientam nossas decisões
              e fortalecem a confiança em cada relação.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#eaf0ff,transparent_34%),radial-gradient(circle_at_bottom_right,#f8fbff,transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Compliance - Integridade, ética empresarial.
            </h2>

            <div className="mt-6 max-w-5xl space-y-4 text-lg leading-8 text-slate-600">
              <p>
                O Grupo{" "}
                <span className="font-bold text-[#143987]">
                  M. S. M. INDUSTRIAL
                </span>
                , acreditamos que o sucesso sustentável só é possível quando
                construído sobre uma base sólida de ética, transparência e
                conformidade. Nosso compromisso com a integridade vai além do
                cumprimento de leis e regulamentos, refletindo a nossa cultura e
                a forma como nos relacionamos com nossos colaboradores, clientes,
                parceiros, Poderes Públicos e com toda a sociedade.
              </p>

              <p>
                O nosso{" "}
                <span className="font-bold text-[#143987]">
                  Programa de Integridade
                </span>{" "}
                é o conjunto de mecanismos e diretrizes que guiam as nossas
                decisões diárias, garantindo um ambiente de trabalho seguro,
                justo e alinhado aos padrões éticos do mercado.
              </p>

              <p>
                O programa de Compliance é administrado por nossa Compliance
                Officer em conjunto com o{" "}
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
                pode ser contatado por seus canais de denúncias no link{" "}
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

              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Nossas Diretrizes e Documentos
                </h3>

                <p className="mt-3">
                  Para nós, a transparência é fundamental. Abaixo, você tem
                  acesso aos principais documentos que norteiam a nossa conduta e
                  fundamentam a nossa governança corporativa. Convidamos você a
                  conhecer as nossas políticas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documentosIntegridade.map((documento) => {
              const Icone = documento.icone;
              const emBreve = documento.titulo === "Estrutura Organizacional";

              return (
                <article
                  key={documento.titulo}
                  className={`group flex flex-col overflow-hidden rounded-3xl border border-[#dbe5ff] bg-white shadow-sm shadow-[#dbe5ff] ${
                    emBreve
                      ? "opacity-60 grayscale-[20%]"
                      : "transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dbe5ff]"
                  }`}
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

                    {emBreve ? (
                      <span
                        aria-disabled="true"
                        className="mt-4 inline-flex cursor-not-allowed justify-center rounded-lg bg-slate-500 px-4 py-2.5 text-sm font-bold text-white"
                      >
                        Em breve
                      </span>
                    ) : (
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
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}