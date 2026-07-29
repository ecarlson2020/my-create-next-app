import { alpha } from "@mui/material/styles";
import {
  ARCH,
  BURGUNDY,
  CREAM,
  OCHRE_SOFT,
  RADIUS_CARD,
  SAGE_SOFT,
  TERRACOTTA_SOFT,
  TRACKED_CAPS,
} from "@/theme";

/** One soft accent per package, so the three cards read as a set of colours. */
export const SERVICE_TINTS = [TERRACOTTA_SOFT, SAGE_SOFT, OCHRE_SOFT];

export const homeServicesStyles = {
  grid: {
    mt: { xs: 6, md: 9 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
    gap: { xs: 3, md: 3 },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: `${RADIUS_CARD}px`,
    p: { xs: 2.5, md: 3 },
    textDecoration: "none",
    transition: "transform 320ms ease",
    "&:hover": { transform: "translateY(-6px)" },
    "&:hover .service-media img": { transform: "scale(1.05)" },
  },
  // Arch-topped media inside a rounded card — the motif nested one level down.
  media: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    overflow: "hidden",
    borderRadius: ARCH,
    "& picture, & img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 900ms ease",
    },
  },
  body: {
    pt: 3,
    px: 1,
    pb: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    flex: 1,
  },
  title: {
    color: BURGUNDY,
  },
  price: {
    ...TRACKED_CAPS,
    fontSize: "0.62rem",
    color: alpha(BURGUNDY, 0.65),
  },
  summary: {
    color: alpha(BURGUNDY, 0.78),
    flex: 1,
    fontSize: "0.9rem",
  },
  more: {
    ...TRACKED_CAPS,
    fontSize: "0.64rem",
    color: BURGUNDY,
    backgroundColor: CREAM,
    borderRadius: 999,
    px: 2.5,
    py: 1.25,
    mt: 2,
    width: "fit-content",
  },
} as const;
