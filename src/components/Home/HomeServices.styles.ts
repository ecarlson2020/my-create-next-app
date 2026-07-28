import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, MAUVE, TRACKED_CAPS } from "@/theme";

export const homeServicesStyles = {
  grid: {
    mt: { xs: 6, md: 9 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    gap: { xs: 5, md: 4 },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: CREAM,
    textDecoration: "none",
    // Lifts a hair and warms its border on hover — the only motion on the card.
    border: `1px solid ${alpha(BURGUNDY, 0.12)}`,
    transition: "transform 320ms ease, border-color 320ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: alpha(BURGUNDY, 0.35),
    },
    "&:hover .service-media img": { transform: "scale(1.05)" },
  },
  media: {
    position: "relative",
    width: "100%",
    aspectRatio: "3 / 2",
    overflow: "hidden",
    "& picture, & img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 900ms ease",
    },
  },
  body: {
    p: { xs: 3.5, md: 4 },
    display: "flex",
    flexDirection: "column",
    gap: 2,
    flex: 1,
  },
  title: {
    color: BURGUNDY,
  },
  price: {
    ...TRACKED_CAPS,
    fontSize: "0.64rem",
    color: MAUVE,
  },
  summary: {
    color: alpha(BURGUNDY, 0.75),
    flex: 1,
  },
  more: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: BURGUNDY,
    pt: 1,
  },
} as const;
