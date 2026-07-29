import Box from "@mui/material/Box";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { ratios, shapeStyles as s } from "./Shape.styles";

/** The frame shapes, excluding the shared `base` styles. */
type ShapeName = Exclude<keyof typeof s, "base">;

interface ShapeFrameProps {
  /** Manifest key. */
  name: string;
  alt: string;
  shape?: ShapeName;
  ratio?: keyof typeof ratios;
  sizes?: string;
  priority?: boolean;
  eager?: boolean;
  /** Extra sx merged last — for widths, offsets and overlaps. */
  sx?: Record<string, unknown>;
}

/**
 * A photograph in one of the site's frame shapes (arch, circle, rounded card,
 * leaf). Zooms very slightly on hover, which reads as life on a page built from
 * large photographs.
 */
export default function ShapeFrame({
  name,
  alt,
  shape = "card",
  ratio = "portrait",
  sizes = "(max-width: 900px) 92vw, 46vw",
  priority = false,
  eager = false,
  sx,
}: ShapeFrameProps) {
  return (
    <Box
      sx={{
        ...s.base,
        ...s[shape],
        aspectRatio: ratios[ratio],
        "& img": { transition: "transform 900ms ease" },
        "&:hover img": { transform: "scale(1.04)" },
        ...sx,
      }}
    >
      <OptimizedImage
        name={name}
        alt={alt}
        cover
        sizes={sizes}
        priority={priority}
        eager={eager}
      />
    </Box>
  );
}
