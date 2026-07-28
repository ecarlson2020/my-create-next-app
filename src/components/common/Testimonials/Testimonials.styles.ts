import { alpha } from "@mui/material/styles";
import { CREAM, TRACKED_CAPS } from "@/theme";

export const testimonialsStyles = {
  root: {
    position: "relative",
    textAlign: "center",
    maxWidth: 860,
    mx: "auto",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: alpha(CREAM, 0.6),
    mb: { xs: 4, md: 6 },
  },
  // Oversized serif quote mark, set behind the text as an ornament.
  mark: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontSize: { xs: "6rem", md: "9rem" },
    lineHeight: 0.7,
    color: alpha(CREAM, 0.16),
    userSelect: "none",
    mb: { xs: -2, md: -3 },
  },
  quote: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "1.25rem", md: "1.65rem" },
    lineHeight: 1.55,
    color: CREAM,
  },
  couple: {
    ...TRACKED_CAPS,
    fontSize: "0.7rem",
    color: alpha(CREAM, 0.72),
    mt: 4,
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: 1.5,
    mt: { xs: 5, md: 7 },
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    border: `1px solid ${alpha(CREAM, 0.55)}`,
    backgroundColor: "transparent",
    p: 0,
    cursor: "pointer",
    transition: "background-color 260ms ease",
  },
  dotActive: {
    backgroundColor: alpha(CREAM, 0.9),
  },
} as const;
