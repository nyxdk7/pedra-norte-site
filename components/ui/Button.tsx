import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outlineLight" | "signal" | "glass";
type Size = "sm" | "md" | "lg";

// Interactive controls are pills; content surfaces stay near-square.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[background-color,color,border-color,box-shadow] duration-200 ease-out " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm md:text-[0.9375rem]",
  lg: "min-h-13 px-7 text-base",
};

const variants: Record<Variant, string> = {
  // Solid institutional blue: the main action on light surfaces.
  primary: "bg-brand text-white shadow-brand-soft hover:bg-brand-hover",
  // Quiet action on light surfaces.
  secondary: "border border-border-strong bg-white text-brand hover:border-brand hover:bg-surface-subtle",
  ghost: "text-brand hover:bg-surface-subtle",
  // Main action on dark surfaces.
  light: "bg-white text-brand hover:bg-blue-50",
  // Secondary action on dark surfaces.
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  // The single colour accent: main action over photography (ink on yellow, 9.5:1).
  signal: "bg-accent text-ink hover:bg-accent-soft",
  // Secondary action over photography: frosted, keeps the image readable behind it.
  glass: "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:border-white/70 hover:bg-white/20",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  const cls = buttonClasses(variant, size, className);
  const isWeb = /^https?:\/\//.test(href);
  if (isWeb || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
