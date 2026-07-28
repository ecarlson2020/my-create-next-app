/**
 * Typed access to the generated image manifest (see scripts/optimize-images.mjs).
 * Shared by OptimizedImage (responsive <picture>) and Seo (Open Graph images),
 * which both need the same entries — the manifest's `fallback` JPEG is also the
 * right OG image, since social crawlers don't reliably decode AVIF/WebP.
 */
import manifestJson from "@/config/imageManifest.json";

export interface ImageVariant {
  w: number;
  src: string;
}

export interface ImageManifestEntry {
  width: number;
  height: number;
  avif: ImageVariant[];
  webp: ImageVariant[];
  /** Root-relative JPEG at the largest generated size. */
  fallback: string;
}

export const imageManifest = manifestJson as Record<string, ImageManifestEntry>;

/** Manifest entry for a basename key, or undefined if it hasn't been generated. */
export const getImage = (name: string): ImageManifestEntry | undefined =>
  imageManifest[name];

/** True when a key has generated variants — used to gate optional imagery. */
export const hasImage = (name: string): boolean => Boolean(imageManifest[name]);

/** Gallery keys in manifest order (`gallery-01`, `gallery-02`, …). */
export const galleryKeys = (): string[] =>
  Object.keys(imageManifest)
    .filter((k) => k.startsWith("gallery-"))
    .sort();
