import { alpha } from "@mui/material/styles";
import {
  BURGUNDY,
  CREAM,
  DUSTY_BLUE,
  OCHRE,
  RADIUS_CARD,
  SAGE,
  TERRACOTTA,
} from "@/theme";

/** One accent per step, cycled so the row reads as a sequence of colours. */
export const STEP_COLORS = [TERRACOTTA, SAGE, DUSTY_BLUE, OCHRE, BURGUNDY];

export const homeProcessStyles = {
  grid: {
    mt: { xs: 6, md: 9 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(5, 1fr)" },
    gap: { xs: 2.5, md: 2 },
  },
  cell: {
    height: "100%",
    backgroundColor: CREAM,
    borderRadius: `${RADIUS_CARD}px`,
    p: { xs: 3, md: 3 },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "flex-start", md: "center" },
    textAlign: { xs: "left", md: "center" },
    gap: 1.5,
    transition: "transform 320ms ease",
    "&:hover": { transform: "translateY(-6px)" },
  },
  // Numbered disc — the circle in the shape vocabulary, and the element
  // carrying each step's colour.
  disc: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: CREAM,
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontSize: "1.35rem",
    mb: 1,
  },
  short: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "1.5rem", md: "1.6rem" },
    color: BURGUNDY,
  },
  title: {
    color: alpha(BURGUNDY, 0.7),
    fontSize: "0.85rem",
    lineHeight: 1.6,
  },
  action: {
    mt: { xs: 5, md: 7 },
    display: "flex",
    justifyContent: "center",
  },
} as const;
