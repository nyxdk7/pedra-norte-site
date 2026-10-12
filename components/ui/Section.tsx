import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-msm ${className}`}>{children}</div>;
}

type Tone = "light" | "subtle" | "dark";
const tones: Record<Tone, string> = {
  light: "bg-white text-[var(--foreground)]",
  subtle: "bg-[var(--surface-subtle)] text-[var(--foreground)]",
  dark: "bg-[var(--surface-strong)] text-white",
};

export function Section({
  children,
  tone = "light",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-0 py-20 md:py-28 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] " +
        (onDark
          ? "bg-white/10 text-[var(--on-dark-muted)] ring-1 ring-white/15"
          : "bg-[var(--surface-subtle)] text-[var(--brand)] ring-1 ring-[var(--blue-100)]")
      }
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark = false,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={
          "mt-5 text-3xl font-bold tracking-tight md:text-5xl " +
          (onDark ? "text-white" : "text-[var(--heading)]")
        }
      >
        {title}
      </h2>
      {description ? (
        <p className={"mt-5 text-lg leading-relaxed " + (onDark ? "text-[var(--on-dark-muted)]" : "text-[var(--muted-strong)]")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
