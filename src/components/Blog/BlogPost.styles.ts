import { alpha } from "@mui/material/styles";
import { BURGUNDY, MAUVE, SAND, TRACKED_CAPS } from "@/theme";

export const blogPostStyles = {
  article: {
    maxWidth: 760,
    mx: "auto",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  h2: {
    color: BURGUNDY,
    mt: { xs: 3, md: 5 },
  },
  p: {
    color: alpha(BURGUNDY, 0.84),
    fontSize: "1.02rem",
    lineHeight: 1.95,
  },
  // Vendor credits — set apart from body copy so they read as attribution.
  credit: {
    ...TRACKED_CAPS,
    fontSize: "0.64rem",
    color: MAUVE,
    borderTop: `1px solid ${SAND}`,
    borderBottom: `1px solid ${SAND}`,
    py: 2.5,
    my: 2,
    lineHeight: 2,
  },
  back: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: BURGUNDY,
    display: "inline-flex",
    gap: 1.5,
    mb: 5,
    pb: 0.75,
    borderBottom: `1px solid ${alpha(BURGUNDY, 0.35)}`,
  },
} as const;
