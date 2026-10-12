import type { Metadata } from "next";
import { GaleriaObras } from "@/components/GaleriaObras";
import { ObrasHeroCinematico } from "@/components/ObrasHeroCinematico";
import { obrasRodoviarias } from "@/lib/portfolio-obras";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Engenharia rodoviária e pavimentação | Obras",
  description:
    "Conheça obras e registros de engenharia rodoviária, pavimentação e recuperação de vias realizados pela MSM Industrial.",
};

export default function ObrasRodoviariasPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-slate-950">
      <ObrasHeroCinematico />

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        {obrasRodoviarias.map((obra) => (
          <article
            key={obra.id}
            id={obra.id}
            className="scroll-mt-32 border-b border-slate-200 pb-16 last:mb-0 md:pb-20"
          >
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                {obra.titulo}
              </h2>

              <p className="mt-4 flex items-start gap-2 text-sm font-medium text-slate-600 md:text-base">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#143987]" />
                <span>
                  <strong className="font-semibold text-slate-800">Trecho:</strong> {obra.trecho}
                </span>
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {obra.descricao}
              </p>
            </div>

            <div className="mt-9">
              <GaleriaObras fotos={obra.fotos} titulo={obra.titulo} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
