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
    gap: { xs: 4, md: 7 },
  },
  badge: {
    width: { xs: 96, md: 116 },
    flexShrink: 0,
    "& picture, & img": { width: "100%", height: "auto" },
  },
  // The 2025 badge is black artwork on transparency and vanishes against the
  // burgundy sections. It sits on a cream tile there rather than being
  // colour-filtered — The Knot's badge artwork shouldn't be altered, and they
  // ship the pink and black variants precisely so you can pick per background.
  badgeOnDark: {
    backgroundColor: CREAM,
    p: 1.25,
  },
  // Compact variant for the footer column.
  rowCompact: {
    justifyContent: "flex-start",
    gap: 2.5,
  },
  badgeCompact: {
    width: 64,
  },
} as const;
