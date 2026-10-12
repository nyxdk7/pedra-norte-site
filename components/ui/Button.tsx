import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight " +
  "transition-[background,color,box-shadow,transform] duration-200 ease-out " +
  "focus-visible:outline-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] text-white shadow-brand-soft hover:bg-[var(--brand-hover)] " +
    "hover:shadow-[0_18px_40px_-14px_rgb(16_32_72/0.5)]",
  secondary:
    "bg-white text-[var(--brand)] ring-hairline hover:bg-[var(--surface-subtle)] hover:ring-0 hover:shadow-brand-soft",
  ghost:
    "bg-transparent text-[var(--brand)] hover:bg-[var(--surface-subtle)]",
  onDark:
    "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/20 hover:ring-white/40",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
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
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (isExternal) {
    return (
      <a href={href} className={cls} {...(rest as ComponentPropsWithoutRef<"a">)}>
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
