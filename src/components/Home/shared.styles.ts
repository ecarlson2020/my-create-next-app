import { alpha } from "@mui/material/styles";
import { BURGUNDY, TRACKED_CAPS } from "@/theme";

/**
 * Styles used by two or more of the Home sub-sections. Per AGENTS.md, a
 * component may import only its own `.styles.ts` and this file.
 */
export const homeShared = {
  // The alternating image/text pair used by the welcome and approach blocks.
  split: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    alignItems: "center",
    gap: { xs: 5, md: 10 },
  },
  splitReverse: {
    "& > :first-of-type": { order: { xs: 0, md: 2 } },
  },
  // Photographs sit in a fixed-ratio frame so a portrait and a landscape source
  // can occupy the same slot without the grid jumping.
  frame: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    overflow: "hidden",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  frameWide: {
    aspectRatio: "3 / 2",
  },
  bodyStack: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  body: {
    color: alpha(BURGUNDY, 0.8),
  },
  linkCaps: {
    ...TRACKED_CAPS,
    fontSize: "0.7rem",
    color: BURGUNDY,
    display: "inline-flex",
    alignItems: "center",
    gap: 1.5,
    mt: 2,
    pb: 0.75,
    borderBottom: `1px solid ${alpha(BURGUNDY, 0.4)}`,
    width: "fit-content",
    transition: "gap 260ms ease, border-color 260ms ease",
    "&:hover": { gap: 2.5, borderColor: BURGUNDY },
  },
} as const;
