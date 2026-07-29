import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const footerStyles = {
  root: {
    backgroundColor: BURGUNDY,
    color: CREAM,
    pt: { xs: 8, md: 12 },
    pb: { xs: 5, md: 6 },
  },
  invitation: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "flex-end" },
    justifyContent: "space-between",
    gap: 3,
    pb: { xs: 7, md: 10 },
    mb: { xs: 7, md: 9 },
    borderBottom: `1px solid ${alpha(CREAM, 0.18)}`,
  },
  invitationEyebrow: {
    ...TRACKED_CAPS,
    color: alpha(CREAM, 0.56),
    fontSize: "0.62rem",
  },
  invitationTitle: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    color: CREAM,
    fontSize: { xs: "2.5rem", md: "4.2rem" },
    lineHeight: 1,
    textAlign: { xs: "left", md: "right" },
  },
  top: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" },
    gap: { xs: 6, md: 8 },
    pb: { xs: 6, md: 9 },
  },
  wordmarkTop: {
    ...TRACKED_CAPS,
    fontSize: "0.8rem",
    letterSpacing: "0.34em",
  },
  wordmarkBottom: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontSize: "1.6rem",
    fontWeight: 300,
    mt: 0.5,
  },
  blurb: {
    mt: 3,
    maxWidth: "34ch",
    color: alpha(CREAM, 0.72),
  },
  colTitle: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: alpha(CREAM, 0.55),
    mb: 3,
    display: "block",
  },
  linkCol: {
    display: "flex",
    flexDirection: "column",
    gap: 1.75,
  },
  link: {
    color: alpha(CREAM, 0.88),
    fontSize: "0.95rem",
    fontWeight: 300,
    width: "fit-content",
    transition: "color 240ms ease",
    "&:hover": { color: CREAM },
  },
  bottom: {
    borderTop: `1px solid ${alpha(CREAM, 0.16)}`,
    pt: 4,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: 2,
  },
  fineprint: {
    ...TRACKED_CAPS,
    fontSize: "0.62rem",
    color: alpha(CREAM, 0.5),
  },
} as const;
