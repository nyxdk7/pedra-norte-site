"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

const paginas = Array.from({ length: 14 }, (_, index) => ({
  numero: index + 1,
  src: `/documentos/codigo-etica/pagina-${index + 1}.jpeg`,
}));

export default function CodigoEticaPage() {
  return (
    <main
      id="conteudo"
      className="min-h-screen bg-neutral-100 text-foreground"
      onContextMenu={(event) => event.preventDefault()}
    >
      <PageHero
        eyebrow="Documento institucional"
        title="Código de Conduta e Ética"
        before={
          <Link
            href="/integridade"
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-control border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Voltar para Integridade MSM
          </Link>
        }
      />

      <section aria-label="Páginas do documento" className="px-4 py-10 md:px-6 md:py-14">
        <ol className="mx-auto max-w-4xl select-none space-y-8">
          {paginas.map((pagina) => (
            <li
              key={pagina.numero}
              className="overflow-hidden rounded-card border border-border bg-white shadow-brand-soft"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="text-sm font-semibold tabular-nums text-brand">
                  Página {pagina.numero} de {paginas.length}
                </span>
              </div>

              <Image
                src={pagina.src}
                alt={`Código de Conduta e Ética - página ${pagina.numero}`}
                width={1240}
                height={1754}
                sizes="(max-width: 1024px) 100vw, 896px"
                quality={100}
                draggable={false}
                className="pointer-events-none block w-full select-none bg-white"
              />
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
