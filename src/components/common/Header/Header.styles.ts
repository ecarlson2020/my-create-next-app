import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS, SAND } from "@/theme";

export const headerStyles = {
  bar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1200,
    transition: "background-color 400ms ease, border-color 400ms ease",
    borderBottom: "1px solid transparent",
  },
  // Transparent over a hero photo, solid once scrolled or on interior pages.
  // The text colour flips with it — cream over the darkened hero, burgundy on
  // the cream bar — otherwise the nav is unreadable in one state or the other.
  barTransparent: {
    backgroundColor: "transparent",
    color: CREAM,
  },
  barSolid: {
    backgroundColor: alpha(CREAM, 0.96),
    backdropFilter: "blur(8px)",
    borderBottomColor: alpha(BURGUNDY, 0.1),
    color: BURGUNDY,
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 3,
    minHeight: { xs: 68, md: 92 },
  },
  wordmark: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    lineHeight: 1,
    textDecoration: "none",
  },
  wordmarkTop: {
    ...TRACKED_CAPS,
    fontSize: { xs: "0.72rem", md: "0.82rem" },
    letterSpacing: "0.34em",
  },
  wordmarkBottom: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontSize: { xs: "1.15rem", md: "1.4rem" },
    fontWeight: 300,
    mt: 0.25,
  },
  navList: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 3.5,
  },
  navLink: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    position: "relative",
    py: 0.5,
    transition: "opacity 240ms ease",
    "&:hover": { opacity: 0.62 },
    // Underline grows from the left on hover and stays put when active.
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "1px",
      width: "100%",
      backgroundColor: "currentColor",
      transformOrigin: "left",
      transform: "scaleX(0)",
      transition: "transform 320ms ease",
    },
    "&:hover::after": { transform: "scaleX(1)" },
  },
  navLinkActive: {
    "&::after": { transform: "scaleX(1)" },
  },
  menuButton: {
    display: { xs: "inline-flex", md: "none" },
    borderRadius: 0,
  },
  drawerPaper: {
    width: "100%",
    backgroundColor: BURGUNDY,
    color: CREAM,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 3,
    minHeight: 68,
    borderBottom: `1px solid ${alpha(CREAM, 0.16)}`,
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    px: 3,
    py: 4,
    gap: 0,
  },
  drawerLink: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "2rem",
    color: CREAM,
    py: 1.75,
    borderBottom: `1px solid ${alpha(CREAM, 0.14)}`,
  },
  drawerFooter: {
    px: 3,
    pb: 5,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    color: alpha(CREAM, 0.72),
  },
  drawerMeta: {
    ...TRACKED_CAPS,
    fontSize: "0.68rem",
    color: alpha(CREAM, 0.72),
  },
  // The bordered Inquire pill. Its colours can't come from `currentColor`
  // alone — the hover state has to invert, which needs both concrete values —
  // so the two bar states get an explicit variant each.
  inquire: {
    display: { xs: "none", md: "inline-flex" },
    px: 3,
    py: 1.5,
    border: "1px solid",
    transition: "background-color 300ms ease, color 300ms ease",
    "&::after": { display: "none" },
    "&:hover": { opacity: 1 },
  },
  inquireOnDark: {
    borderColor: alpha(CREAM, 0.55),
    "&:hover": { backgroundColor: CREAM, color: BURGUNDY, borderColor: CREAM },
  },
  inquireOnLight: {
    borderColor: alpha(BURGUNDY, 0.35),
    "&:hover": { backgroundColor: BURGUNDY, color: CREAM, borderColor: SAND },
  },
} as const;
