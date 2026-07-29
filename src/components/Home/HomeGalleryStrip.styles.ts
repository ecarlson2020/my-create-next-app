import { ARCH, CIRCLE, RADIUS_CARD } from "@/theme";

/**
 * The strip alternates arch, circle and rounded-card frames rather than
 * repeating one tile shape — this is the section that shows the shape
 * vocabulary all at once.
 */
export const TILE_SHAPES = [
  { radius: ARCH, ratio: "3 / 4" },
  { radius: CIRCLE, ratio: "1 / 1" },
  { radius: `${RADIUS_CARD}px`, ratio: "3 / 4" },
  { radius: ARCH, ratio: "3 / 4" },
  { radius: CIRCLE, ratio: "1 / 1" },
  { radius: `${RADIUS_CARD}px`, ratio: "3 / 4" },
] as const;

export const homeGalleryStripStyles = {
  head: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "flex-end" },
    justifyContent: "space-between",
    gap: 3,
    mb: { xs: 5, md: 7 },
  },
  strip: {
    display: "grid",
    gridAutoFlow: { xs: "column", md: "row" },
    gridAutoColumns: { xs: "58%", sm: "36%", md: "auto" },
    gridTemplateColumns: { xs: "none", md: "repeat(6, 1fr)" },
    gap: { xs: 1.5, md: 2 },
    alignItems: "center",
    overflowX: { xs: "auto", md: "visible" },
    scrollSnapType: { xs: "x mandatory", md: "none" },
    pb: { xs: 2, md: 0 },
    // Must track MuiContainer's padding (16px xs, 24px sm+) — overshooting
    // pushes the page wider than the viewport on phones.
    mx: { xs: -2, sm: -3, md: 0 },
    px: { xs: 2, sm: 3, md: 0 },
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },
  tile: {
    position: "relative",
    overflow: "hidden",
    scrollSnapAlign: "start",
    "& picture, & img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 900ms ease",
    },
    "&:hover img": { transform: "scale(1.06)" },
  },
  // Nudges every other tile down so the row reads as a scatter rather than a
  // ruler-straight line.
  tileOffset: {
    mt: { xs: 0, md: 5 },
  },
} as const;
