"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const paginas = Array.from({ length: 14 }, (_, index) => ({
  numero: index + 1,
  src: `/documentos/codigo-etica/pagina-${index + 1}.jpeg`,
}));

export default function CodigoEticaPage() {
  return (
    <main
      className="min-h-screen bg-[#f8fbff] text-slate-950"
      onContextMenu={(event) => event.preventDefault()}
    >
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#8fb1ff33,transparent_35%),linear-gradient(135deg,#071225,#143987_55%,#0f2c6a)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/integridade"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft size={17} />
            Voltar para Integridade MSM
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <ShieldCheck size={17} />
                Documento institucional
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                Código de Conduta e Ética
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Documento visualizado em modo protegido contra seleção e cópia de texto.
                O conteúdo foi disponibilizado como imagem para consulta pública.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                Grupo MSM Industrial
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Para melhor segurança visual, a seleção de texto, arrastar imagens
                e menu de contexto foram desativados nesta página.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-5xl select-none space-y-8">
          {paginas.map((pagina) => (
            <article
              key={pagina.numero}
              className="overflow-hidden rounded-2xl border border-[#dbe5ff] bg-white shadow-xl shadow-[#dbe5ff]"
            >
              <div className="flex items-center justify-between border-b border-[#dbe5ff] bg-white px-5 py-3">
                <span className="text-sm font-bold text-[#143987]">
                  Página {pagina.numero} de {paginas.length}
                </span>

                <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#143987]">
                  Visualização protegida
                </span>
              </div>

              <img
                src={pagina.src}
                alt={`Código de Conduta e Ética - página ${pagina.numero}`}
                draggable={false}
                className="pointer-events-none block w-full select-none bg-white"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
