import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, TRACKED_CAPS } from "@/theme";

/** Styles shared by BlogList and BlogPost. */
export const blogShared = {
  meta: {
    ...TRACKED_CAPS,
    fontSize: "0.62rem",
    color: MAUVE,
    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  frame: {
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
  title: {
    color: BURGUNDY,
  },
  excerpt: {
    color: alpha(BURGUNDY, 0.78),
  },
} as const;
