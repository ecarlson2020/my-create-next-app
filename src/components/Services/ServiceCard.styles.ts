import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, SAND, TRACKED_CAPS } from "@/theme";

export const serviceCardStyles = {
  root: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    alignItems: "center",
    gap: { xs: 4, md: 9 },
    // Anchored sections land under the fixed header without this offset.
    scrollMarginTop: { xs: "84px", md: "108px" },
  },
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
  price: {
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
  list: {
    listStyle: "none",
    m: 0,
    p: 0,
    mt: 1.5,
    borderTop: `1px solid ${SAND}`,
  },
  listItem: {
    py: 1.5,
    borderBottom: `1px solid ${SAND}`,
    fontSize: "0.88rem",
    fontWeight: 300,
    color: alpha(BURGUNDY, 0.82),
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    backgroundColor: MAUVE,
    flexShrink: 0,
  },
} as const;
