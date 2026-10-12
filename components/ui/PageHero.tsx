import Image from "next/image";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Section";

type Variante = "foto" | "dividido" | "sereno";

/**
 * Opening band for internal pages, three compositions sharing the Home's system:
 * - "foto": full-bleed real photograph, toned only behind the text, text anchored to
 *   the base; `children` adds a page-specific strip under it (figures, anchors).
 * - "dividido": light text column beside a full-height photograph bleeding right.
 * - "sereno": light reading surface, typographic only (governance, documents).
 * Light variants tell the header to start solid (`data-header="claro"`).
 */
export function PageHero({
  variante = "foto",
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition = "object-center",
  imageSizes,
  legenda,
  actions,
  children,
  before,
}: {
  variante?: Variante;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  /** `sizes` for the photo. Cover-cropped tall boxes need more pixels than their width. */
  imageSizes?: string;
  /** Visual caption of the photograph ("foto" variant, desktop); the alt carries it for AT. */
  legenda?: string;
  actions?: ReactNode;
  children?: ReactNode;
  before?: ReactNode;
}) {
  if (variante === "foto" && image) {
    return (
      <section className="on-dark relative isolate flex min-h-[calc(100svh-3rem)] flex-col overflow-hidden bg-ink text-white md:min-h-[min(calc(100svh-5rem),52rem)] lg:min-h-[max(34rem,min(92svh,950px))]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="eager"
          fetchPriority="high"
          // 4:3 sources: when the box is taller than ~4:5 the cover crop is driven by height.
          sizes={imageSizes ?? "(max-aspect-ratio: 5/4) 125vh, 100vw"}
          className={`-z-20 object-cover ${imagePosition}`}
        />
        <div aria-hidden="true" className="page-hero-scrim absolute inset-0 -z-10" />

        <Container className="flex flex-1 flex-col justify-end pb-12 pt-[calc(var(--header-h)+2.5rem)] md:pb-16 lg:pb-20">
          {before}
          <div className="max-w-[46rem]">
            {/* Label chip: keeps small text legible on any photograph */}
            {eyebrow ? (
              <p className="inline-flex rounded-full bg-ink/60 px-3.5 py-1 text-[0.9375rem] font-semibold text-white backdrop-blur-sm">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="animate-fade-up mt-4 text-[length:var(--type-hero)] font-bold leading-[1.02] tracking-[-0.03em]">
              {title}
            </h1>
            {description ? (
              <div className="animate-fade-up anim-delay-1 mt-6 max-w-[34rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-white">
                {description}
              </div>
            ) : null}
            {actions ? (
              <div className="animate-fade-up anim-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
            ) : null}
          </div>
          {children}
        </Container>

        {legenda ? (
          <p
            aria-hidden="true"
            className="absolute bottom-6 right-[var(--gutter)] hidden max-w-[19rem] items-start gap-3 rounded-2xl bg-ink/60 px-4 py-2.5 text-sm font-semibold leading-snug text-white backdrop-blur-sm lg:flex"
          >
            <span className="mt-2.5 h-px w-6 shrink-0 bg-accent" />
            {legenda}
          </p>
        ) : null}
      </section>
    );
  }

  if (variante === "dividido" && image) {
    return (
      <section data-header="claro" className="relative isolate bg-brita-100 text-foreground">
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[42%] xl:w-[46%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes={imageSizes ?? "(max-width: 1024px) 100vw, 46vw"}
            className={`object-cover ${imagePosition}`}
          />
        </div>

        <Container className="relative">
          <div className="pb-14 pt-10 md:pb-20 lg:flex lg:min-h-[min(88svh,52rem)] lg:w-[58%] lg:flex-col lg:justify-end lg:pb-24 lg:pr-14 lg:pt-[calc(var(--header-h)+4rem)] xl:w-[54%] xl:pr-16">
            {before}
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="animate-fade-up mt-4 text-[length:var(--type-hero)] font-bold leading-[1.02] tracking-[-0.03em] text-heading">
              {title}
            </h1>
            {description ? (
              <div className="animate-fade-up anim-delay-1 mt-6 max-w-[36rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-muted-strong">
                {description}
              </div>
            ) : null}
            {actions ? (
              <div className="animate-fade-up anim-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
            ) : null}
            {children}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section data-header="claro" className="relative bg-brita-100 text-foreground">
      <Container className="pb-14 pt-[calc(var(--header-h)+3.5rem)] md:pb-20 md:pt-[calc(var(--header-h)+5rem)]">
        {before}
        <div className="max-w-[52rem]">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="animate-fade-up mt-4 text-[length:var(--type-hero)] font-bold leading-[1.02] tracking-[-0.03em] text-heading">
            {title}
          </h1>
          {description ? (
            <div className="animate-fade-up anim-delay-1 mt-6 max-w-[40rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-muted-strong">
              {description}
            </div>
          ) : null}
          {actions ? (
            <div className="animate-fade-up anim-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
