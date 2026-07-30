import { alpha } from "@mui/material/styles";
import { BURGUNDY, TRACKED_CAPS } from "@/theme";

export const blogListStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: { xs: 7, md: 8 },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
    "&:hover img": { transform: "scale(1.04)" },
  },
  more: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: BURGUNDY,
    width: "fit-content",
    pb: 0.75,
    borderBottom: `1px solid ${alpha(BURGUNDY, 0.4)}`,
    mt: 0.5,
  },
} as const;
