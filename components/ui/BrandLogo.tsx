import Image from "next/image";

/**
 * Official MSM Industrial logo (unaltered PNG), cropped to its drawn area by
 * `.brand-logo`. Set the mark height through the `--logo-h` custom property,
 * e.g. `[--logo-h:2rem]`.
 */
export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`brand-logo ${className}`}>
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
