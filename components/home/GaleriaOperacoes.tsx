"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { useReducedMotion } from "@/components/ui/useReducedMotion";
import { galeriaImagens } from "./data";

const INTERVALO_GALERIA = 5200;

const controle =
  "inline-flex h-11 items-center justify-center rounded-control border border-on-dark-border bg-white/5 text-white transition-colors hover:border-white/40 hover:bg-white/10";

export function GaleriaOperacoes() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);
  // null = visitor never touched the control; fall back to the OS motion preference.
  const [pausadoManual, setPausadoManual] = useState<boolean | null>(null);
  const reduzirMovimento = useReducedMotion();
  const pausado = pausadoManual ?? reduzirMovimento;

  const imagemAtiva = galeriaImagens[indiceAtivo];
  const proximosIndices = [1, 2, 3].map(
    (distancia) => (indiceAtivo + distancia) % galeriaImagens.length
  );

  useEffect(() => {
    if (pausado) return;

    const timeoutId = window.setTimeout(() => {
      setIndiceAtivo((indiceAtual) =>
        (indiceAtual + 1) % galeriaImagens.length
      );
    }, INTERVALO_GALERIA);

    return () => window.clearTimeout(timeoutId);
  }, [indiceAtivo, pausado]);

  function mostrarAnterior() {
    setIndiceAtivo((indiceAtual) =>
      indiceAtual === 0 ? galeriaImagens.length - 1 : indiceAtual - 1
    );
  }

  function mostrarProxima() {
    setIndiceAtivo((indiceAtual) =>
      (indiceAtual + 1) % galeriaImagens.length
    );
  }

  return (
    <section
      aria-labelledby="galeria-titulo"
      className="on-dark relative isolate overflow-hidden bg-surface-navy py-16 text-white md:py-24"
    >
      <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10 opacity-70" />

      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            onDark
            id="galeria-titulo"
            eyebrow="Nossa operação em imagens"
            title="Estrutura que transforma planejamento em grandes obras."
            description="Conheça de perto a frota, as equipes e a capacidade operacional que sustentam cada etapa dos nossos projetos."
          />

          <div className="flex items-center gap-2" role="group" aria-label="Controles da galeria">
            <button
              type="button"
              onClick={mostrarAnterior}
              aria-label="Mostrar imagem anterior"
              className={`${controle} w-11`}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setPausadoManual(!pausado)}
              aria-label={
                pausado
                  ? "Continuar troca automática das imagens"
                  : "Pausar troca automática das imagens"
              }
              className="inline-flex h-11 min-w-32 items-center justify-center gap-2 rounded-control bg-white px-4 text-sm font-semibold text-brand transition-colors hover:bg-blue-50"
            >
              {pausado ? (
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              ) : (
                <Pause className="h-4 w-4 fill-current" aria-hidden="true" />
              )}
              {pausado ? "Continuar" : "Pausar"}
            </button>

            <button
              type="button"
              onClick={mostrarProxima}
              aria-label="Mostrar próxima imagem"
              className={`${controle} w-11`}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-[minmax(0,1.75fr)_minmax(280px,0.65fr)]">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-panel border border-on-dark-border bg-neutral-900 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[600px]">
            <Image
              key={imagemAtiva.id}
              src={imagemAtiva.imagem}
              alt={`Operação da MSM Industrial - foto ${indiceAtivo + 1}`}
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 72vw"
              className="gallery-image-enter object-cover object-center"
            />

            <figcaption className="absolute left-4 top-4 rounded-control bg-neutral-950/70 px-3 py-1.5 text-sm font-semibold tabular-nums text-white backdrop-blur">
              {String(indiceAtivo + 1).padStart(2, "0")} / {galeriaImagens.length}
            </figcaption>

            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
              {!pausado && (
                <span
                  key={indiceAtivo}
                  className="gallery-progress block h-full bg-accent"
                  style={{ animationDuration: `${INTERVALO_GALERIA}ms` }}
                />
              )}
            </div>
          </figure>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
            {proximosIndices.map((indice) => {
              const imagem = galeriaImagens[indice];

              return (
                <button
                  key={imagem.id}
                  type="button"
                  onClick={() => setIndiceAtivo(indice)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-card border border-on-dark-border bg-neutral-900 transition-colors hover:border-accent lg:aspect-auto"
                  aria-label={`Mostrar foto ${indice + 1}`}
                >
                  <Image
                    src={imagem.imagem}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 33vw, 24vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
