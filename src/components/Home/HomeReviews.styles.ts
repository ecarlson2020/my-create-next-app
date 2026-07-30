import { alpha } from "@mui/material/styles";
import { BURGUNDY } from "@/theme";

export const homeReviewsStyles = {
  root: {
    position: "relative",
    minHeight: { xs: 760, md: 780 },
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: BURGUNDY,
    borderBottomLeftRadius: { xs: "0", md: "50% 6%" },
    borderBottomRightRadius: { xs: "0", md: "50% 6%" },
  },
  media: {
    position: "absolute",
    inset: 0,
    filter: "grayscale(1)",
    "& picture, & img": { width: "100%", height: "100%", objectFit: "cover" },
  },
  scrim: {
    position: "absolute",
    inset: 0,
    backgroundColor: alpha(BURGUNDY, 0.78),
    mixBlendMode: "multiply",
  },
  content: {
    position: "relative",
    py: { xs: 10, md: 14 },
  },
} as const;
