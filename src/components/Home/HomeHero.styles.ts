import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const homeHeroStyles = {
  root: {
    position: "relative",
    // Fills the viewport but never taller than a phone's browser chrome allows.
    minHeight: { xs: "88svh", md: "100svh" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: BURGUNDY,
  },
  media: {
    position: "absolute",
    inset: 0,
    animation: "slowDrift 24s ease-in-out infinite alternate",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  // Two stacked washes. The photography here is bright and high-key — white
  // florals, snow, candlelight — so a light gradient alone leaves the cream
  // headline unreadable. A flat tint carries the baseline contrast and the
  // gradient darkens the top and bottom edges where the nav and scroll cue sit.
  scrim: {
    position: "absolute",
    inset: 0,
    backgroundColor: alpha(BURGUNDY, 0.42),
  },
  scrimGradient: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to bottom, ${alpha(BURGUNDY, 0.55)} 0%, ${alpha(
      BURGUNDY,
      0.3,
    )} 40%, ${alpha(BURGUNDY, 0.72)} 100%)`,
  },
  content: {
    position: "relative",
    textAlign: "center",
    color: CREAM,
    px: 3,
    maxWidth: 1000,
    animation: "fadeIn 1400ms ease-out both",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: { xs: "0.62rem", md: "0.7rem" },
    color: alpha(CREAM, 0.82),
    mb: { xs: 3, md: 4 },
  },
  title: {
    color: CREAM,
    // Deliberately not the theme h1 clamp — the hero runs larger than any other
    // heading on the site.
    fontSize: { xs: "2.9rem", sm: "4rem", md: "5.6rem" },
    lineHeight: 1.02,
  },
  tagline: {
    mt: { xs: 3, md: 4 },
    mx: "auto",
    maxWidth: "48ch",
    color: alpha(CREAM, 0.88),
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    lineHeight: 1.8,
  },
  cta: {
    mt: { xs: 5, md: 6 },
    border: `1px solid ${alpha(CREAM, 0.6)}`,
    color: CREAM,
    px: 5,
    "&:hover": { backgroundColor: CREAM, color: BURGUNDY, borderColor: CREAM },
  },
  scrollHint: {
    position: "absolute",
    bottom: { xs: 24, md: 36 },
    left: "50%",
    transform: "translateX(-50%)",
    ...TRACKED_CAPS,
    fontSize: "0.58rem",
    color: alpha(CREAM, 0.7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.5,
  },
  scrollLine: {
    width: "1px",
    height: 46,
    backgroundColor: alpha(CREAM, 0.45),
  },
} as const;
