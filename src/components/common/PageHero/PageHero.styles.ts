import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const pageHeroStyles = {
  root: {
    position: "relative",
    minHeight: { xs: "72svh", md: "78svh" },
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: BURGUNDY,
    borderBottomLeftRadius: { xs: "0", md: "48% 6%" },
    borderBottomRightRadius: { xs: "0", md: "48% 6%" },
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
    background: `linear-gradient(to top, ${alpha(BURGUNDY, 0.94)} 0%, ${alpha(
      BURGUNDY,
      0.52,
    )} 52%, ${alpha(BURGUNDY, 0.3)} 100%)`,
  },
  content: {
    position: "relative",
    width: "100%",
    pb: { xs: 8, md: 10 },
    pt: { xs: 14, md: 18 },
    color: CREAM,
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: { xs: "0.7rem", md: "0.78rem" },
    fontWeight: 500,
    letterSpacing: "0.2em",
    color: alpha(CREAM, 0.94),
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
    fontSize: { xs: "3.6rem", sm: "4.8rem", md: "6.25rem" },
    fontWeight: 500,
    lineHeight: 0.95,
  },
  intro: {
    mt: { xs: 3, md: 3.5 },
    maxWidth: "62ch",
    color: alpha(CREAM, 0.96),
    fontSize: { xs: "1.02rem", md: "1.16rem" },
    fontWeight: 500,
    lineHeight: 1.7,
  },
} as const;
