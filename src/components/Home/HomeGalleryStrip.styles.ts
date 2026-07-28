import { alpha } from "@mui/material/styles";
import { BURGUNDY } from "@/theme";

export const homeGalleryStripStyles = {
  head: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "flex-end" },
    justifyContent: "space-between",
    gap: 3,
    mb: { xs: 5, md: 7 },
  },
  // Horizontal scroller on phones, a fixed six-up grid from md. `scroll-snap`
  // keeps the strip from stopping mid-photo on touch.
  strip: {
    display: "grid",
    gridAutoFlow: { xs: "column", md: "row" },
    gridAutoColumns: { xs: "62%", sm: "38%", md: "auto" },
    gridTemplateColumns: { xs: "none", md: "repeat(6, 1fr)" },
    gap: { xs: 1.5, md: 2 },
    overflowX: { xs: "auto", md: "visible" },
    scrollSnapType: { xs: "x mandatory", md: "none" },
    pb: { xs: 2, md: 0 },
    // Bleeds the scroller to the viewport edge by cancelling the Container's
    // padding. These must track MuiContainer's own values (16px xs, 24px sm+) —
    // overshooting pushes the page wider than the viewport and creates a
    // horizontal scrollbar on phones.
    mx: { xs: -2, sm: -3, md: 0 },
    px: { xs: 2, sm: 3, md: 0 },
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },
  tile: {
    position: "relative",
    aspectRatio: "3 / 4",
    overflow: "hidden",
    scrollSnapAlign: "start",
    backgroundColor: alpha(BURGUNDY, 0.06),
    "& picture, & img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 900ms ease",
    },
    "&:hover img": { transform: "scale(1.06)" },
  },
} as const;
