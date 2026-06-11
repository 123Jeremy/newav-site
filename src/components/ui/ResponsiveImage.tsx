import Image from "next/image";
import type { ResponsiveImageSrc } from "@/lib/images";

interface ResponsiveImageProps {
  src: ResponsiveImageSrc;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
}

export function ResponsiveImage({
  src,
  fill = true,
  priority = false,
  className = "",
  objectFit = "cover",
  sizes = "(max-width: 640px) 100vw, 100vw",
}: ResponsiveImageProps) {
  const fitClass = objectFit === "cover" ? "object-cover" : "object-contain";

  return (
    <>
      <Image
        src={src.mobile}
        alt={src.alt}
        fill={fill}
        priority={priority}
        sizes="100vw"
        className={`${fitClass} md:hidden ${className}`}
      />
      <Image
        src={src.full}
        alt={src.alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`${fitClass} hidden md:block ${className}`}
      />
    </>
  );
}
