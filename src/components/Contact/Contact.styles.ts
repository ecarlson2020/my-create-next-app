import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, SAND, TRACKED_CAPS } from "@/theme";

export const contactStyles = {
  layout: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1.6fr" },
    gap: { xs: 7, md: 10 },
    alignItems: "start",
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  label: {
    ...TRACKED_CAPS,
    fontSize: "0.62rem",
    color: MAUVE,
  },
  value: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.25rem",
    color: BURGUNDY,
    width: "fit-content",
    borderBottom: "1px solid transparent",
    transition: "border-color 260ms ease",
    "&:hover": { borderBottomColor: alpha(BURGUNDY, 0.4) },
  },
  plain: {
    color: alpha(BURGUNDY, 0.78),
    fontSize: "0.92rem",
    lineHeight: 1.9,
  },
  divider: {
    height: "1px",
    backgroundColor: SAND,
  },
} as const;
