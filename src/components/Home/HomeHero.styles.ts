import { alpha } from "@mui/material/styles";
import {
  ARCH,
  BURGUNDY,
  CREAM,
  OCHRE,
  RADIUS_CARD,
  TERRACOTTA,
  TRACKED_CAPS,
} from "@/theme";

export const homeHeroStyles = {
  // The hero is an inset rounded panel rather than a full-bleed rectangle, so
  // the very first thing on the page states the shape language.
  root: {
    position: "relative",
    px: { xs: 1.5, md: 3 },
    pt: { xs: "76px", md: "104px" },
    pb: { xs: 2, md: 3 },
    backgroundColor: CREAM,
  },
  panel: {
    position: "relative",
    minHeight: { xs: "76svh", md: "84svh" },
    borderRadius: { xs: `${RADIUS_CARD}px`, md: `${RADIUS_CARD * 1.5}px` },
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BURGUNDY,
  },
  media: {
    position: "absolute",
    inset: 0,
    animation: "slowDrift 24s ease-in-out infinite alternate",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  scrim: {
    position: "absolute",
    inset: 0,
    backgroundColor: alpha(BURGUNDY, 0.38),
  },
  scrimGradient: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, ${alpha(BURGUNDY, 0.5)} 0%, ${alpha(
      BURGUNDY,
      0.22,
    )} 40%, ${alpha(BURGUNDY, 0.66)} 100%)`,
  },
  content: {
    position: "relative",
    textAlign: "center",
    color: CREAM,
    px: 3,
    maxWidth: 940,
    animation: "fadeIn 1400ms ease-out both",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: { xs: "0.6rem", md: "0.68rem" },
    color: CREAM,
    backgroundColor: alpha(TERRACOTTA, 0.9),
    borderRadius: 999,
    px: 2.5,
    py: 1,
    display: "inline-block",
    mb: { xs: 3, md: 4 },
  },
  title: {
    color: CREAM,
    fontSize: { xs: "2.8rem", sm: "3.9rem", md: "5.4rem" },
    lineHeight: 1.02,
  },
  tagline: {
    mt: { xs: 3, md: 4 },
    mx: "auto",
    maxWidth: "46ch",
    color: alpha(CREAM, 0.9),
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.8,
  },
  cta: {
    mt: { xs: 4, md: 5 },
    backgroundColor: CREAM,
    color: BURGUNDY,
    px: 5,
    "&:hover": { backgroundColor: OCHRE, color: BURGUNDY },
  },
  // Two small arch-topped photographs peeking above the panel's lower edge,
  // overlapping into the section below.
  peekRow: {
    position: "relative",
    zIndex: 2,
    mt: { xs: -6, md: -9 },
    display: "flex",
    justifyContent: "center",
    gap: { xs: 2, md: 3 },
    pointerEvents: "none",
  },
  peek: {
    width: { xs: 92, md: 132 },
    borderRadius: ARCH,
    overflow: "hidden",
    border: `4px solid ${CREAM}`,
    aspectRatio: "3 / 4",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  peekOffset: {
    mt: { xs: 3, md: 5 },
  },
} as const;
