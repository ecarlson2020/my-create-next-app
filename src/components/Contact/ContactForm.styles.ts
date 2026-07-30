import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, MAUVE, SAND, TRACKED_CAPS } from "@/theme";

export const contactFormStyles = {
  form: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: { xs: 3.5, md: 4 },
  },
  full: {
    gridColumn: { xs: "auto", sm: "1 / -1" },
  },
  field: {
    "& .MuiInputLabel-root": {
      ...TRACKED_CAPS,
      fontSize: "0.64rem",
      color: alpha(BURGUNDY, 0.62),
    },
    "& .MuiInputLabel-root.Mui-focused": { color: BURGUNDY },
    "& .MuiInputLabel-root.Mui-error": { color: "error.main" },
    "& .MuiInput-root": { fontWeight: 300, fontSize: "1rem" },
    "& .MuiInput-underline:before": { borderBottomColor: SAND },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: MAUVE,
    },
    "& .MuiInput-underline:after": { borderBottomColor: BURGUNDY },
    "& .MuiFormHelperText-root": { fontSize: "0.75rem", mt: 1 },
  },
  actions: {
    gridColumn: { xs: "auto", sm: "1 / -1" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "stretch", sm: "center" },
    gap: 3,
    mt: 1,
  },
  submit: {
    backgroundColor: BURGUNDY,
    color: CREAM,
    px: 6,
    "&:hover": { backgroundColor: alpha(BURGUNDY, 0.86) },
  },
  note: {
    fontSize: "0.8rem",
    color: alpha(BURGUNDY, 0.62),
  },
  // Success panel replaces the form in place, so the page doesn't jump.
  success: {
    border: `1px solid ${SAND}`,
    p: { xs: 4, md: 7 },
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
    alignItems: "flex-start",
  },
  successEyebrow: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: MAUVE,
  },
  successBody: {
    color: alpha(BURGUNDY, 0.8),
    maxWidth: "52ch",
  },
} as const;
