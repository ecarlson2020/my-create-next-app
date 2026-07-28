import { alpha } from "@mui/material/styles";
import { CREAM, TRACKED_CAPS } from "@/theme";

export const homeStatementStyles = {
  root: {
    textAlign: "center",
    maxWidth: 900,
    mx: "auto",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: alpha(CREAM, 0.55),
    mb: { xs: 4, md: 5 },
  },
  statement: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    color: CREAM,
    fontSize: { xs: "1.5rem", md: "2.35rem" },
    lineHeight: 1.4,
  },
  rule: {
    width: 64,
    height: "1px",
    backgroundColor: alpha(CREAM, 0.4),
    mx: "auto",
    mt: { xs: 5, md: 7 },
  },
} as const;
