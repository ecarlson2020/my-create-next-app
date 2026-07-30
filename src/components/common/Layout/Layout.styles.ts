import { BURGUNDY, CREAM } from "@/theme";

export const layoutStyles = {
  skipLink: {
    position: "absolute",
    left: "-9999px",
    top: 0,
    zIndex: 2000,
    px: 3,
    py: 2,
    backgroundColor: BURGUNDY,
    color: CREAM,
    "&:focus": { left: 0 },
  },
  shell: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
  },
  // Interior pages start below the fixed bar; the home page's hero slides under
  // it deliberately, so it opts out.
  mainOffset: {
    pt: { xs: "68px", md: "92px" },
  },
} as const;
