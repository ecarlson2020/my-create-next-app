import { alpha } from "@mui/material/styles";
import { BURGUNDY, CREAM, TRACKED_CAPS } from "@/theme";

export const socialLinksStyles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    flexWrap: "wrap",
  },
  // Square outlined icon button, echoing the icon tiles on the client's current
  // site without their hard-edged solid blocks.
  iconLink: {
    width: 42,
    height: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${alpha(BURGUNDY, 0.28)}`,
    color: BURGUNDY,
    transition: "background-color 300ms ease, color 300ms ease",
    "&:hover": { backgroundColor: BURGUNDY, color: CREAM },
  },
  iconLinkOnDark: {
    borderColor: alpha(CREAM, 0.32),
    color: CREAM,
    "&:hover": { backgroundColor: CREAM, color: BURGUNDY },
  },
  handle: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: BURGUNDY,
  },
  handleOnDark: {
    color: alpha(CREAM, 0.88),
  },
  pair: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1.75,
  },
} as const;
