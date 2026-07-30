import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const awardsStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: { xs: 4, md: 5 },
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: alpha(BURGUNDY, 0.55),
  },
  eyebrowOnDark: {
    color: alpha(CREAM, 0.55),
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 3.5, md: 6 },
  },
  // The six badges are squares, a portrait certificate and a circle. Sizing
  // by height with `contain` puts them on a common optical baseline instead of
  // letting the certificate tower over the rest.
  badge: {
    height: { xs: 84, md: 112 },
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    "& picture": { display: "block", height: "100%" },
  },
  image: {
    height: "100%",
    width: "auto",
    objectFit: "contain" as const,
  },
  // Most of this artwork is black or white line-work that disappears on
  // burgundy. A cream tile behind every badge keeps the row legible and uniform
  // without recolouring anyone's mark.
  badgeOnDark: {
    backgroundColor: CREAM,
    p: 1,
  },
  rowCompact: {
    justifyContent: { xs: "flex-start", sm: "flex-end" },
    gap: 1.5,
  },
  badgeCompact: {
    height: { xs: 50, md: 56 },
  },
} as const;
