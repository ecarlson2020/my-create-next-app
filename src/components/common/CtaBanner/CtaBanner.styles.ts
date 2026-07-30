import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, OCHRE, SAND, TRACKED_CAPS } from "@/theme";

export const ctaBannerStyles = {
  root: {
    textAlign: "center",
    maxWidth: 720,
    mx: "auto",
  },
  eyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: alpha(BURGUNDY, 0.55),
    mb: 3,
  },
  title: {
    color: "primary.main",
  },
  body: {
    mt: 3,
    color: alpha(BURGUNDY, 0.78),
  },
  actions: {
    mt: { xs: 5, md: 6 },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
  },
  primary: {
    backgroundColor: OCHRE,
    color: CREAM,
    "&:hover": { backgroundColor: BURGUNDY },
  },
  secondary: {
    borderColor: alpha(BURGUNDY, 0.35),
    color: BURGUNDY,
    "&:hover": { borderColor: BURGUNDY, backgroundColor: SAND },
  },
} as const;
