import type { ReactNode } from "react";
import { Container, Eyebrow } from "./Section";

/** Closing call-to-action band shared by the home and internal pages. */
export function CtaBanner({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container>
        <div className="on-dark relative isolate overflow-hidden rounded-panel bg-brand px-6 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              {eyebrow ? <Eyebrow onDark>{eyebrow}</Eyebrow> : null}
              <h2 className="mt-4 text-3xl font-bold leading-[1.1] md:text-[2.75rem]">{title}</h2>
              {description ? (
                <p className="mt-4 font-serif text-lg leading-relaxed text-blue-100 md:text-xl md:leading-[1.55]">{description}</p>
              ) : null}
            </div>
            {actions ? <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
