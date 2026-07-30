import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, TRACKED_CAPS } from "@/theme";

export const processStepStyles = {
  root: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    alignItems: "center",
    gap: { xs: 4, md: 10 },
  },
  // Odd steps put the photograph on the right; the grid order flips rather than
  // the markup, so the reading order stays number → title → body on mobile.
  reversed: {
    "& > :first-of-type": { order: { xs: 0, md: 2 } },
  },
  frame: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    overflow: "hidden",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  number: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "3rem", md: "4rem" },
    lineHeight: 1,
    color: alpha(MAUVE, 0.55),
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: MAUVE,
  },
  title: {
    color: BURGUNDY,
  },
  text: {
    color: alpha(BURGUNDY, 0.8),
  },
} as const;
