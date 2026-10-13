import type { ReactNode } from "react";
import { RodaObras, type FrenteDaRoda } from "./RodaObras";

/**
 * Obras opening: deep navy band with the works rotor beside the headline (above it on
 * phones and tablets).
 */
export function HeroObras({
  eyebrow,
  title,
  description,
  frentes,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  frentes: FrenteDaRoda[];
  children?: ReactNode;
}) {
  return (
    <section
      aria-labelledby="obras-titulo"
      className="on-dark relative isolate overflow-hidden bg-ink text-white"
    >
      <div className="container-msm grid items-center gap-10 pb-14 pt-[calc(var(--header-h)+1.5rem)] md:pb-20 lg:min-h-[max(40rem,100svh)] lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-[calc(var(--header-h)+2.5rem)]">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-[0.9375rem] font-semibold text-white">
            {eyebrow}
          </p>
          <h1
            id="obras-titulo"
            className="animate-fade-up mt-5 text-[length:var(--type-hero)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            {title}
          </h1>
          <div className="animate-fade-up anim-delay-1 mt-6 max-w-[34rem] font-serif text-[length:var(--type-lead)] leading-[1.55] text-on-dark-muted">
            {description}
          </div>
          {children}
        </div>

        <div className="order-first flex justify-center lg:order-none lg:col-span-6 lg:justify-end xl:col-span-7">
          <RodaObras frentes={frentes} />
        </div>
      </div>
    </section>
  );
}
