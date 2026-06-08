"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export default function EstruturaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/home/grupo-estrutura.png"
            alt="Estrutura operacional do Grupo Soster"
            fill
            priority
            quality={100}
            className="object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#143987]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Estrutura operacional
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Capacidade própria para produzir, transportar, manter e executar.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A estrutura do grupo conecta frota, máquinas, produção de
              materiais, manutenção, logística, canteiros e abastecimento para
              sustentar obras e operações de diferentes portes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#143987] shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#eaf0ff]"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/atuacoes"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver atuações
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Frota de transporte",
              "Máquinas pesadas",
              "Produção de asfalto",
              "Pedreira e agregados",
              "Concreto",
              "Oficina",
              "Borracharia",
              "Canteiros",
              "Abastecimento",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}