import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, OCHRE, TRACKED_CAPS } from "@/theme";

/**
 * Styles used by two or more of the Home sub-sections. Per AGENTS.md, a
 * component may import only its own `.styles.ts` and this file.
 */
export const homeShared = {
  split: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    alignItems: "center",
    gap: { xs: 5, md: 10 },
  },
  splitReverse: {
    "& > :first-of-type": { order: { xs: 0, md: 2 } },
  },
  bodyStack: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  body: {
    color: alpha(BURGUNDY, 0.8),
  },
  bodyOnDark: {
    color: alpha(CREAM, 0.88),
  },
  // Pill link — the small-scale echo of the rounded button shape.
  linkPill: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: BURGUNDY,
    display: "inline-flex",
    alignItems: "center",
    gap: 1.5,
    mt: 2,
    px: 3,
    py: 1.75,
    borderRadius: 999,
    border: `1px solid ${alpha(BURGUNDY, 0.3)}`,
    width: "fit-content",
    transition: "background-color 280ms ease, color 280ms ease, gap 280ms ease",
    "&:hover": { gap: 2.5, backgroundColor: OCHRE, borderColor: OCHRE },
  },
  linkPillOnDark: {
    color: CREAM,
    borderColor: alpha(CREAM, 0.45),
    "&:hover": {
      gap: 2.5,
      backgroundColor: CREAM,
      color: BURGUNDY,
      borderColor: CREAM,
    },
  },
} as const;
