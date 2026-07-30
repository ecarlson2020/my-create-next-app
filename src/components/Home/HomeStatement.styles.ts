import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, OCHRE, TRACKED_CAPS } from "@/theme";

export const homeStatementStyles = {
  root: {
    position: "relative",
    minHeight: { xs: 680, md: 760 },
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: BURGUNDY,
  },
  media: {
    position: "absolute",
    inset: 0,
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  scrim: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(90deg, ${alpha(BURGUNDY, 0.82)} 0%, ${alpha(
      BURGUNDY,
      0.5,
    )} 48%, ${alpha(BURGUNDY, 0.18)} 100%)`,
  },
  container: {
    position: "relative",
    width: "100%",
    py: { xs: 8, md: 11 },
  },
  content: {
    maxWidth: 610,
    color: CREAM,
  },
  eyebrow: {
    ...TRACKED_CAPS,
    color: alpha(CREAM, 0.7),
    fontSize: "0.64rem",
    mb: 3,
  },
  title: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    color: CREAM,
    fontSize: { xs: "3.2rem", md: "5.5rem" },
    lineHeight: 0.9,
  },
  statement: {
    mt: { xs: 4, md: 5 },
    color: alpha(CREAM, 0.86),
    fontSize: { xs: "0.98rem", md: "1.08rem" },
    lineHeight: 1.8,
    maxWidth: "56ch",
  },
  cta: {
    mt: { xs: 4, md: 5 },
    backgroundColor: OCHRE,
    color: CREAM,
    "&:hover": { backgroundColor: CREAM, color: BURGUNDY },
  },
} as const;
