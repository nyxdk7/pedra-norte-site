"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useState } from "react";

type GaleriaObrasProps = {
  fotos: string[];
  titulo: string;
};

export function GaleriaObras({ fotos, titulo }: GaleriaObrasProps) {
  const [exibirTodas, setExibirTodas] = useState(false);
  const [fotoAberta, setFotoAberta] = useState<number | null>(null);
  const fotosVisiveis = exibirTodas ? fotos : fotos.slice(0, 6);

  useEffect(() => {
    if (fotoAberta === null) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function aoPressionarTecla(event: KeyboardEvent) {
      if (event.key === "Escape") setFotoAberta(null);
      if (event.key === "ArrowRight") {
        setFotoAberta((indice) =>
          indice === null ? null : (indice + 1) % fotos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setFotoAberta((indice) =>
          indice === null ? null : (indice - 1 + fotos.length) % fotos.length,
        );
      }
    }

    window.addEventListener("keydown", aoPressionarTecla);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", aoPressionarTecla);
    };
  }, [fotoAberta, fotos.length]);

  if (fotos.length === 0) return null;

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800">
          <Images aria-hidden="true" className="h-4 w-4 text-[#143987]" />
          Registros da obra
        </h3>
        <span className="text-xs font-medium text-slate-500">
          {fotos.length} fotografias
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {fotosVisiveis.map((foto, indice) => (
          <button
            key={foto}
            type="button"
            onClick={() => setFotoAberta(indice)}
            aria-label={`Ampliar foto ${indice + 1} de ${titulo}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/30"
          >
            <Image
              src={foto}
              alt={`Registro ${indice + 1} — ${titulo}`}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
            />
          </button>
        ))}
      </div>

      {fotos.length > 6 && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExibirTodas((atual) => !atual)}
            aria-expanded={exibirTodas}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#143987] transition-colors hover:border-[#143987] hover:bg-[#f5f8ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#143987]/20"
          >
            {exibirTodas ? "Mostrar menos fotos" : `Ver todas as ${fotos.length} fotos`}
          </button>
        </div>
      )}

      {fotoAberta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria fotográfica: ${titulo}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-3 sm:p-6"
          onClick={() => setFotoAberta(null)}
        >
          <button
            type="button"
            onClick={() => setFotoAberta(null)}
            aria-label="Fechar imagem"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(evento) => evento.stopPropagation()}
          >
            <Image
              src={fotos[fotoAberta]}
              alt={`Foto ${fotoAberta + 1} — ${titulo}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {fotos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(evento) => {
                  evento.stopPropagation();
                  setFotoAberta((fotoAberta - 1 + fotos.length) % fotos.length);
                }}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:p-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(evento) => {
                  evento.stopPropagation();
                  setFotoAberta((fotoAberta + 1) % fotos.length);
                }}
                aria-label="Próxima foto"
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:p-3"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-black/50 px-3 py-1 text-xs text-white">
            {fotoAberta + 1} / {fotos.length}
          </span>
        </div>
      )}
    </>
  );
}
