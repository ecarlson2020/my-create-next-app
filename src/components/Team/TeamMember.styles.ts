import { alpha } from "@mui/material/styles";
import {
  BURGUNDY,
  CREAM,
  MAUVE,
  SAND,
  TAUPE_DEEP,
  TRACKED_CAPS,
} from "@/theme";

export const teamMemberStyles = {
  root: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
    alignItems: "start",
    gap: { xs: 4, md: 9 },
  },
  reversed: {
    "& > :first-of-type": { order: { xs: 0, md: 2 } },
  },
  frame: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    overflow: "hidden",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  // Stand-in shown until the client supplies headshots: a monogram set in the
  // brand serif on a sand panel. Reads as a deliberate design choice rather than
  // a missing image, which a grey placeholder box would not.
  monogram: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    backgroundColor: TAUPE_DEEP,
    border: `1px solid ${alpha(BURGUNDY, 0.12)}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  monogramMark: {
    fontFamily: "var(--font-display), Georgia, serif",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: { xs: "4.5rem", md: "6rem" },
    lineHeight: 1,
    color: alpha(BURGUNDY, 0.42),
  },
  monogramRule: {
    width: 40,
    height: "1px",
    backgroundColor: SAND,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  role: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: MAUVE,
  },
  name: {
    color: BURGUNDY,
  },
  text: {
    color: alpha(BURGUNDY, 0.8),
  },
  contact: {
    ...TRACKED_CAPS,
    fontSize: "0.66rem",
    color: CREAM,
  },
} as const;
