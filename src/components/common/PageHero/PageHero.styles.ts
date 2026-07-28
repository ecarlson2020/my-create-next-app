import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const pageHeroStyles = {
  root: {
    position: "relative",
    minHeight: { xs: 340, md: 460 },
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: BURGUNDY,
  },
  media: {
    position: "absolute",
    inset: 0,
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  // Two stacked washes: a flat tint for overall contrast and a bottom-up
  // gradient so the type has a dark anchor regardless of the photo underneath.
  scrim: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(to top, ${alpha(BURGUNDY, 0.82)} 0%, ${alpha(
      BURGUNDY,
      0.42,
    )} 45%, ${alpha(BURGUNDY, 0.28)} 100%)`,
  },
  content: {
    position: "relative",
    width: "100%",
    pb: { xs: 5, md: 8 },
    pt: { xs: 10, md: 14 },
    color: CREAM,
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: alpha(CREAM, 0.78),
    display: "flex",
    alignItems: "center",
    gap: 2,
    mb: 2.5,
  },
  rule: {
    display: "block",
    width: 44,
    height: "1px",
    backgroundColor: "currentColor",
    opacity: 0.6,
  },
  title: {
    color: CREAM,
    maxWidth: "20ch",
    // Keeps a two-line page title from stranding a single short word on the
    // second line (e.g. "The people behind the / day").
    textWrap: "balance",
  },
  intro: {
    mt: 2.5,
    maxWidth: "56ch",
    color: alpha(CREAM, 0.86),
  },
} as const;
