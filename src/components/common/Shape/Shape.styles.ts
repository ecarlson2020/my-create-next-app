import { alpha } from "@mui/material/styles";
import { ARCH, BURGUNDY, CIRCLE, RADIUS_CARD } from "@/theme";

/**
 * The four frame shapes the layout uses. Everything that holds a photograph
 * picks one of these, so the geometry stays consistent across sections instead
 * of each component inventing its own radius.
 */
export const shapeStyles = {
  base: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: alpha(BURGUNDY, 0.05),
    "& picture, & img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  },
  arch: { borderRadius: ARCH },
  circle: { borderRadius: CIRCLE },
  card: { borderRadius: `${RADIUS_CARD}px` },
  // Rounded on one diagonal only — used to break up grids of otherwise
  // identical tiles.
  leaf: { borderRadius: `${RADIUS_CARD * 3}px 0 ${RADIUS_CARD * 3}px 0` },
} as const;

export const ratios = {
  arch: "3 / 4",
  circle: "1 / 1",
  portrait: "4 / 5",
  landscape: "3 / 2",
  square: "1 / 1",
} as const;
