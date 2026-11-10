import { Fragment, type ReactNode } from "react";

/**
 * Headline that reveals word by word from behind a mask, over a rule that draws itself
 * first. Built for the heroes that carry moving footage: the type arrives with the same
 * deliberate weight as the machines on screen, instead of fading in as a block.
 *
 * Pure CSS (see .titulo-cinetico in globals.css), so it keeps running at full rate while
 * the main thread is busy pulling the video down, and it needs no client JavaScript.
 * A non-string title is rendered untouched — there are no words to split.
 */
export function TituloCinetico({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  if (typeof children !== "string") {
    return (
      <h1 id={id} className={className}>
        {children}
      </h1>
    );
  }

  const palavras = children.split(/\s+/).filter(Boolean);

  return (
    <h1 id={id} className={`titulo-cinetico ${className}`}>
      {/* Draws left to right before the first word lands */}
      <span aria-hidden="true" className="titulo-cinetico-regua" />
      {palavras.map((palavra, i) => (
        <Fragment key={`${palavra}-${i}`}>
          {/* The space stays a real text node, so the heading still reads as a sentence
              to screen readers and still wraps where the line needs to break. */}
          {i > 0 ? " " : null}
          <span className="titulo-cinetico-palavra" style={{ "--i": i } as React.CSSProperties}>
            <span>{palavra}</span>
          </span>
        </Fragment>
      ))}
    </h1>
  );
}
