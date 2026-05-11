import Image from "next/image";
import Link from "next/link";
import { AnimatedLogoCard } from "@/components/AnimatedLogoCard";

const parceiros = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#eaf0ff,transparent_35%),radial-gradient(circle_at_bottom_left,#f5f8ff,transparent_35%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-[#dbe5ff] bg-[#eaf0ff] px-4 py-2 text-sm font-semibold text-[#143987]">
              MSM Industrial LTDA
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Soluções em engenharia civil com qualidade, segurança e confiança.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Atuamos com compromisso, excelência e foco em resultados para
              oferecer soluções modernas e eficientes em engenharia civil,
              infraestrutura, pavimentação e fornecimento de insumos.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/servicos"
                className="rounded-xl bg-[#143987] px-6 py-3 font-bold text-white shadow-lg shadow-[#143987]/20 transition hover:-translate-y-0.5 hover:bg-[#0f2c6a]"
              >
                Conhecer serviços
              </Link>

              <Link
                href="/contato"
                className="rounded-xl border border-[#dbe5ff] bg-white px-6 py-3 font-bold text-[#143987] transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Fale conosco
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#dbe5ff] pt-8">
              <div>
                <strong className="block text-2xl font-bold text-[#143987]">
                  +40
                </strong>
                <span className="text-sm text-slate-500">Anos de atuação</span>
              </div>

              <div>
                <strong className="block text-2xl font-bold text-[#143987]">
                  +50
                </strong>
                <span className="text-sm text-slate-500">
                  Projetos atendidos
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-bold text-[#143987]">
                  100%
                </strong>
                <span className="text-sm text-slate-500">
                  Foco em qualidade
                </span>
              </div>
            </div>
          </div>

          <AnimatedLogoCard />
        </div>
      </section>

      <section className="border-y border-[#dbe5ff] bg-[#eaf0ff]/60 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-[#dbe5ff] bg-white px-4 py-2 text-sm font-semibold text-[#143987]">
              Clientes e parceiros
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Confiança de instituições e parceiros estratégicos.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Nossa trajetória é marcada por parcerias e fornecimentos para
              instituições que contribuem com o desenvolvimento da região.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {parceiros.map((parceiro) => (
              <div
                key={parceiro.nome}
                className="group flex h-32 items-center justify-center rounded-3xl border border-[#dbe5ff] bg-white p-5 shadow-sm shadow-[#dbe5ff] transition duration-300 hover:-translate-y-1 hover:border-[#143987]/30 hover:shadow-xl hover:shadow-[#dbe5ff]"
              >
                <Image
                  src={parceiro.imagem}
                  alt={parceiro.nome}
                  width={170}
                  height={90}
                  quality={100}
                  className="max-h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/obras"
              className="inline-flex items-center rounded-xl border border-[#dbe5ff] bg-white px-5 py-3 text-sm font-bold text-[#143987] transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
            >
              Ver obras e casos de sucesso
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}