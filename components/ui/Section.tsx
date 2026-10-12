import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-msm ${className}`}>{children}</div>;
}

type Tone = "light" | "subtle" | "dark";
const tones: Record<Tone, string> = {
  light: "bg-white text-foreground",
  subtle: "bg-surface-subtle text-foreground",
  dark: "on-dark bg-surface-navy text-white",
};

export function Section({
  children,
  tone = "light",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-16 md:py-24 ${tones[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Small section label in sentence case. Plain text: no decorative rule. */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={
        "text-[0.9375rem] font-semibold " +
        (onDark ? "text-on-dark-muted" : "text-brand")
      }
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  id,
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  id?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag
        id={id}
        className={
          "mt-4 text-[length:var(--type-h2)] font-bold leading-[1.06] " +
          (onDark ? "text-white" : "text-heading")
        }
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={
            "mt-5 font-serif text-lg leading-relaxed md:text-xl md:leading-[1.55] " +
            (onDark ? "text-on-dark-muted" : "text-muted-strong")
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
