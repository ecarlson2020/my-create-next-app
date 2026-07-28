import { CSSProperties } from "react";
import Head from "next/head";
import { getImage, ImageVariant } from "@/utils/images";

interface OptimizedImageProps {
  /** Basename key in the generated image manifest (e.g. "hero-home"). */
  name: string;
  alt: string;
  /** Eager-load + high priority for the LCP image (above the fold). */
  priority?: boolean;
  /**
   * Eager-load without the preload link or high fetch priority. For the handful
   * of images just below the fold (the first gallery row), which should not be
   * blank on arrival but must not compete with the LCP hero either.
   */
  eager?: boolean;
  /** Responsive `sizes` attribute; defaults to full viewport width. */
  sizes?: string;
  /** Fill the parent and crop (parent must be positioned/sized). */
  cover?: boolean;
  style?: CSSProperties;
  className?: string;
}

const toSrcSet = (variants: ImageVariant[]): string =>
  variants.map((v) => `${v.src} ${v.w}w`).join(", ");

/**
 * Renders a <picture> with AVIF/WebP sources and a JPEG fallback, always with
 * intrinsic width/height attributes so the browser reserves space (no CLS).
 * Lazy + async-decoded by default; `priority` opts the LCP image into eager
 * loading with fetchpriority="high".
 *
 * This replaces next/image, which does nothing under `output: "export"`.
 */
export default function OptimizedImage({
  name,
  alt,
  priority = false,
  eager = false,
  sizes = "100vw",
  cover = false,
  style,
  className,
}: OptimizedImageProps) {
  const entry = getImage(name);
  const loading = priority || eager ? "eager" : "lazy";

  const imgStyle: CSSProperties = cover
    ? {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : { display: "block", width: "100%", height: "auto", ...style };

  // Graceful fallback if the manifest hasn't been generated yet.
  if (!entry) {
    return (
      <img
        src={`/images/${name}.jpg`}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
        style={imgStyle}
      />
    );
  }

  return (
    <picture>
      {priority && (
        <Head>
          {/* Preload the LCP image so it's fetched immediately rather than
              discovered after JS/CSS. */}
          <link
            rel="preload"
            as="image"
            type="image/avif"
            imageSrcSet={toSrcSet(entry.avif)}
            imageSizes={sizes}
            fetchPriority="high"
          />
        </Head>
      )}
      <source type="image/avif" srcSet={toSrcSet(entry.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={toSrcSet(entry.webp)} sizes={sizes} />
      <img
        src={entry.fallback}
        alt={alt}
        width={entry.width}
        height={entry.height}
        loading={loading}
        // Below-the-fold images are explicitly "low" so they never contend with
        // the LCP hero.
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        className={className}
        style={imgStyle}
      />
    </picture>
  );
}
