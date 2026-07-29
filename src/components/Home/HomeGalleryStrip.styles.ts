import { RADIUS_TILE } from "@/theme";

/**
 * The strip uses a restrained mix of editorial arches and square corners.
 */
export const TILE_SHAPES = [
  { radius: "80px 80px 4px 4px", ratio: "3 / 4" },
  { radius: `${RADIUS_TILE}px 4px ${RADIUS_TILE}px 4px`, ratio: "3 / 4" },
  { radius: `4px ${RADIUS_TILE}px 4px ${RADIUS_TILE}px`, ratio: "3 / 4" },
  { radius: "4px 4px 80px 80px", ratio: "3 / 4" },
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
    gridAutoColumns: { xs: "72%", sm: "43%", md: "auto" },
    gridTemplateColumns: { xs: "none", md: "repeat(4, 1fr)" },
    gap: { xs: 2, md: 2.5 },
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
    mt: { xs: 0, md: 7 },
  },
} as const;
