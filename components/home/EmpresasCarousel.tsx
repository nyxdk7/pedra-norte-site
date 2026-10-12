"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { empresasCarousel } from "./data";

// Three copies make the infinite loop; only the middle one is exposed to assistive tech.
const empresasLoop = [
  ...empresasCarousel,
  ...empresasCarousel,
  ...empresasCarousel,
];

const seta =
  "grid h-11 w-11 place-items-center rounded-full border border-border-strong bg-white text-ink transition-colors hover:border-ink";

export function EmpresasCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const ajustandoScrollRef = useRef(false);

  function calcularLarguraBloco() {
    const carousel = carouselRef.current;

    if (!carousel) return 0;

    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-empresa-card]")
    ).slice(0, empresasCarousel.length);

    const estilos = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(estilos.columnGap || estilos.gap || "20");

    return cards.reduce((total, card) => total + card.offsetWidth, 0) + gap * empresasCarousel.length;
  }

  function ajustarLoopInfinito() {
    const carousel = carouselRef.current;

    if (!carousel || ajustandoScrollRef.current) return;

    const larguraBloco = calcularLarguraBloco();

    if (!larguraBloco) return;

    const limiteInicio = larguraBloco * 0.35;
    const limiteFim = larguraBloco * 1.65;

    if (carousel.scrollLeft < limiteInicio) {
      ajustandoScrollRef.current = true;
      carousel.scrollLeft += larguraBloco;

      window.requestAnimationFrame(() => {
        ajustandoScrollRef.current = false;
      });
    }

    if (carousel.scrollLeft > limiteFim) {
      ajustandoScrollRef.current = true;
      carousel.scrollLeft -= larguraBloco;

      window.requestAnimationFrame(() => {
        ajustandoScrollRef.current = false;
      });
    }
  }

  function rolarCarousel(direcao: "esquerda" | "direita") {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const primeiroCard = carousel.querySelector<HTMLElement>(
      "[data-empresa-card]"
    );

    const estilos = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(estilos.columnGap || estilos.gap || "20");
    const larguraCard = primeiroCard?.offsetWidth ?? 320;
    const distancia = larguraCard + gap;

    carousel.scrollBy({
      left: direcao === "esquerda" ? -distancia : distancia,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    // Start on the first card of the middle copy, aligned with the scroller padding.
    const posicionarNoMeio = () => {
      const cards = carousel.querySelectorAll<HTMLElement>("[data-empresa-card]");
      const alvo = cards[empresasCarousel.length];

      if (!alvo) return;

      const recuo = Number.parseFloat(window.getComputedStyle(carousel).paddingLeft || "0");
      carousel.scrollLeft = alvo.offsetLeft - recuo;
    };

    const frame = window.requestAnimationFrame(posicionarNoMeio);
    window.addEventListener("resize", posicionarNoMeio);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", posicionarNoMeio);
    };
  }, []);

  return (
    <section aria-labelledby="grupo-titulo" className="overflow-hidden bg-surface-subtle py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="grupo-titulo"
            eyebrow="Grupo Soster"
            title="Empresas que fazem parte do grupo Soster."
            description="Um conjunto de empresas e parceiros integrados que fortalece a atuação do grupo em infraestrutura, pavimentação, mineração, construção civil, pré-moldados, máquinas e fornecimento de materiais."
          />

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Ver empresas anteriores"
              onClick={() => rolarCarousel("esquerda")}
              className={seta}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Ver próximas empresas"
              onClick={() => rolarCarousel("direita")}
              className={seta}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onScroll={ajustarLoopInfinito}
          role="region"
          aria-label="Empresas do Grupo Soster (role com as setas do teclado)"
          tabIndex={0}
          className="relative -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pb-2 md:-mx-8 md:scroll-px-8 md:px-8 xl:-mx-10 xl:scroll-px-10 xl:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5"
        >
          {empresasLoop.map((empresa, index) => {
            const copia =
              index < empresasCarousel.length ||
              index >= empresasCarousel.length * 2;

            return (
              <article
                key={empresa.nome + "-" + index}
                data-empresa-card
                aria-hidden={copia || undefined}
                className="flex min-w-[272px] snap-start flex-col rounded-card bg-white p-5 sm:min-w-[320px] lg:min-w-[340px]"
              >
                <div className="flex h-28 shrink-0 items-center justify-center border-b border-border p-6">
                  <Image
                    src={empresa.imagem}
                    alt={"Logo " + empresa.nome}
                    width={235}
                    height={110}
                    quality={100}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col pt-5">
                  <p className="line-clamp-1 text-sm font-semibold text-brand">
                    {empresa.atuacao}
                  </p>

                  <h3 className="mt-1.5 line-clamp-2 text-xl font-bold leading-snug text-heading">
                    {empresa.nome}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-strong">
                    {empresa.descricao}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
