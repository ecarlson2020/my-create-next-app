import {
  BURGUNDY,
  CREAM,
  DUSTY_BLUE_SOFT,
  OCHRE_SOFT,
  RADIUS_CARD,
  SAGE,
  SAGE_SOFT,
  TAUPE,
  TAUPE_DEEP,
  TERRACOTTA,
  TERRACOTTA_SOFT,
} from "@/theme";

export const sectionBackgrounds = {
  default: CREAM,
  muted: TAUPE,
  sand: TAUPE_DEEP,
  dark: BURGUNDY,
  terracotta: TERRACOTTA,
  terracottaSoft: TERRACOTTA_SOFT,
  sage: SAGE,
  sageSoft: SAGE_SOFT,
  blueSoft: DUSTY_BLUE_SOFT,
  ochreSoft: OCHRE_SOFT,
} as const;

/** Backgrounds dark enough to need cream type on top. */
export const DARK_BACKGROUNDS: (keyof typeof sectionBackgrounds)[] = [
  "dark",
  "terracotta",
  "sage",
];

export const sectionStyles = {
  root: {
    position: "relative",
    py: { xs: 9, md: 16 },
  },
  tight: {
    py: { xs: 6, md: 9 },
  },
  // Pulls the following section up under this one's rounded base so the two
  // overlap rather than butting together in a hard line.
  rounded: {
    borderRadius: { xs: `${RADIUS_CARD}px`, md: `${RADIUS_CARD * 1.5}px` },
  },
  roundedTop: {
    borderTopLeftRadius: { xs: `${RADIUS_CARD}px`, md: `${RADIUS_CARD * 2}px` },
    borderTopRightRadius: {
      xs: `${RADIUS_CARD}px`,
      md: `${RADIUS_CARD * 2}px`,
    },
    marginTop: { xs: "-32px", md: "-64px" },
    position: "relative",
    zIndex: 1,
  },
  roundedBottom: {
    borderBottomLeftRadius: {
      xs: `${RADIUS_CARD}px`,
      md: `${RADIUS_CARD * 2}px`,
    },
    borderBottomRightRadius: {
      xs: `${RADIUS_CARD}px`,
      md: `${RADIUS_CARD * 2}px`,
    },
  },
} as const;
