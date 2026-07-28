import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, MAUVE, TRACKED_CAPS } from "@/theme";

export const sectionHeadingStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  centered: {
    alignItems: "center",
    textAlign: "center",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.7rem",
    color: MAUVE,
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  eyebrowOnDark: {
    color: alpha(CREAM, 0.7),
  },
  // The short hairline that sits beside every eyebrow — the site's one
  // repeating ornament.
  rule: {
    display: "block",
    width: 48,
    height: "1px",
    backgroundColor: "currentColor",
    opacity: 0.5,
  },
  title: {
    maxWidth: "22ch",
  },
  titleWide: {
    maxWidth: "34ch",
  },
  intro: {
    maxWidth: "62ch",
    color: alpha(BURGUNDY, 0.78),
  },
  introOnDark: {
    color: alpha(CREAM, 0.78),
  },
} as const;
