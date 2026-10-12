import Image from "next/image";

/**
 * Official MSM Industrial logo (unaltered PNG), cropped to its drawn area by
 * `.brand-logo`. Set the mark height through the `--logo-h` custom property,
 * e.g. `[--logo-h:2rem]`. `tom="claro"` renders it in clean white for glass and
 * dark surfaces (CSS filter on the same file, approved by the owner).
 */
export function BrandLogo({
  className = "",
  priority = false,
  tom = "original",
}: {
  className?: string;
  priority?: boolean;
  tom?: "original" | "claro";
}) {
  return (
    <span className={`brand-logo ${tom === "claro" ? "brand-logo--claro" : ""} ${className}`}>
      <Image
        src="/images/logo-letras-pretas.png"
        alt="MSM Industrial LTDA"
        width={674}
        height={370}
        sizes="180px"
        loading={priority ? "eager" : undefined}
      />
    </span>
  );
}
