import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM } from "@/theme";

export const galleryStyles = {
  // A true masonry column layout: photos keep their own aspect ratio rather than
  // being cropped to a uniform grid, which matters when the set is 46 frames of
  // mixed portrait and landscape.
  columns: {
    columnCount: { xs: 2, sm: 2, md: 3, lg: 4 },
    columnGap: { xs: "8px", md: "16px" },
  },
  tile: {
    breakInside: "avoid",
    mb: { xs: "8px", md: "16px" },
    display: "block",
    width: "100%",
    p: 0,
    border: "none",
    background: "none",
    cursor: "zoom-in",
    position: "relative",
    overflow: "hidden",
    backgroundColor: alpha(BURGUNDY, 0.05),
    "& img": { transition: "transform 900ms ease, opacity 400ms ease" },
    "&:hover img": { transform: "scale(1.04)", opacity: 0.9 },
    "&:focus-visible": { outline: `2px solid ${BURGUNDY}`, outlineOffset: 3 },
  },
  lightbox: {
    "& .MuiDialog-paper": {
      backgroundColor: "transparent",
      boxShadow: "none",
      margin: 0,
      maxWidth: "100vw",
      maxHeight: "100vh",
    },
    "& .MuiBackdrop-root": { backgroundColor: alpha(BURGUNDY, 0.95) },
  },
  lightboxInner: {
    position: "relative",
    width: "100vw",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: { xs: 2, md: 6 },
  },
  lightboxImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    "& picture, & img": {
      maxWidth: "100%",
      maxHeight: "88dvh",
      width: "auto",
      height: "auto",
      objectFit: "contain",
    },
  },
  control: {
    position: "absolute",
    color: CREAM,
    borderRadius: 0,
    zIndex: 1,
    "&:hover": { backgroundColor: alpha(CREAM, 0.12) },
  },
  close: { top: { xs: 12, md: 24 }, right: { xs: 12, md: 24 } },
  prev: { left: { xs: 4, md: 24 }, top: "50%", transform: "translateY(-50%)" },
  next: { right: { xs: 4, md: 24 }, top: "50%", transform: "translateY(-50%)" },
  counter: {
    position: "absolute",
    bottom: { xs: 16, md: 28 },
    left: "50%",
    transform: "translateX(-50%)",
    color: alpha(CREAM, 0.75),
    fontSize: "0.72rem",
    letterSpacing: "0.2em",
  },
} as const;
