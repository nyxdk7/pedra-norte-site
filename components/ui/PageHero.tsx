import Image from "next/image";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Section";

/**
 * Opening band for internal pages: navy surface, optional real photo behind a
 * token-based scrim, survey-grid texture, title + lead + actions.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  imagePosition = "object-center",
  actions,
  children,
  before,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  actions?: ReactNode;
  children?: ReactNode;
  before?: ReactNode;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-surface-navy pb-14 pt-[calc(var(--header-h)+3.5rem)] text-white md:pb-20 md:pt-[calc(var(--header-h)+5rem)]">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            quality={100}
            sizes="100vw"
            className={`-z-20 object-cover ${imagePosition}`}
          />
          <div aria-hidden="true" className="scrim-band absolute inset-0 -z-10" />
        </>
      ) : null}
      <div aria-hidden="true" className="bg-survey-grid absolute inset-0 -z-10 opacity-60" />

      <Container>
        {before}
        <div className="max-w-3xl animate-fade-up">
          {eyebrow ? <Eyebrow onDark>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-[3.5rem]">{title}</h1>
          {description ? (
            <div
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${
                image ? "text-white" : "text-on-dark-muted"
              }`}
            >
              {description}
            </div>
          ) : null}
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
