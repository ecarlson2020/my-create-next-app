import { alpha } from "@mui/material/styles";
import { CREAM, OCHRE, TRACKED_CAPS } from "@/theme";

export const homeProcessStyles = {
  grid: {
    mt: { xs: 7, md: 11 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(5, 1fr)" },
    columnGap: { xs: 3, md: 2.5 },
  },
  cell: {
    height: "100%",
    color: CREAM,
    borderTop: `1px solid ${alpha(CREAM, 0.28)}`,
    py: { xs: 3.5, md: 4 },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1.25,
    transition: "border-color 280ms ease, transform 280ms ease",
    "&:hover": { borderColor: OCHRE, transform: "translateY(-5px)" },
  },
  number: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "3.2rem", md: "3.8rem" },
    lineHeight: 1,
    color: alpha(CREAM, 0.22),
    mb: 2,
  },
  short: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "1.6rem", md: "1.65rem" },
    color: CREAM,
  },
  title: {
    ...TRACKED_CAPS,
    color: alpha(CREAM, 0.62),
    fontSize: "0.55rem",
    lineHeight: 1.6,
  },
  action: {
    mt: { xs: 5, md: 7 },
    display: "flex",
    justifyContent: "center",
  },
} as const;
