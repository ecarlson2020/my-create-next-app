import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, TRACKED_CAPS } from "@/theme";

const hairline = `1px solid ${alpha(BURGUNDY, 0.16)}`;

export const homeProcessStyles = {
  // Rules are declared on the grid's direct children rather than on the cell
  // itself, because each cell is wrapped in a Reveal — a `:last-of-type` on the
  // inner element would match every cell.
  grid: {
    mt: { xs: 6, md: 9 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(5, 1fr)" },
    borderTop: hairline,
    "& > *": {
      borderBottom: hairline,
      borderRight: { xs: "none", md: hairline },
    },
    "& > *:last-of-type": { borderRight: "none" },
  },
  cell: {
    px: { xs: 0, md: 2.5 },
    py: { xs: 3.5, md: 4.5 },
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    height: "100%",
  },
  number: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: MAUVE,
  },
  short: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "1.5rem", md: "1.7rem" },
    color: BURGUNDY,
  },
  title: {
    color: alpha(BURGUNDY, 0.7),
    fontSize: "0.88rem",
    lineHeight: 1.65,
  },
  action: {
    mt: { xs: 5, md: 7 },
    display: "flex",
    justifyContent: "center",
  },
} as const;
