import { CREAM, TAUPE, TAUPE_DEEP, BURGUNDY } from "@/theme";

export const sectionBackgrounds = {
  default: CREAM,
  muted: TAUPE,
  sand: TAUPE_DEEP,
  dark: BURGUNDY,
} as const;

export const sectionStyles = {
  root: {
    position: "relative",
    py: { xs: 9, md: 16 },
  },
  tight: {
    py: { xs: 6, md: 9 },
  },
} as const;
