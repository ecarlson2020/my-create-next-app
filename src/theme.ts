import { alpha, createTheme } from "@mui/material/styles";

// Brand palette, sampled from the client's existing site: warm bridal neutrals
// with a deep burgundy for type and dark sections, and a muted mauve as the one
// real accent. Exported as named consts so `.styles.ts` files can reference them
// without reaching into the theme object.
export const CREAM = "#FBF9F6";
export const TAUPE = "#EFE9E1";
export const TAUPE_DEEP = "#E4DDD3";
export const SAND = "#CFC5B8";
export const MAUVE = "#8C6F6B";
export const MAUVE_DEEP = "#6E5450";
export const BURGUNDY = "#3B1518";
export const BURGUNDY_LIGHT = "#5A2529";
export const INK = "#2A1C1D";
export const INK_MUTED = "#6B5B57";

/**
 * Accent palette. Cream and burgundy still carry the brand; these are the
 * colour-blocked sections layered on top. Every hue is sampled from the
 * client's own photography — the terracotta from the Moab red rock, sage from
 * the eucalyptus runners, dusty blue from the winter tent, ochre from the
 * candlelight — so saturated blocks still sit next to the photos without
 * clashing.
 */
export const TERRACOTTA = "#C97B5A";
export const TERRACOTTA_SOFT = "#E8C3B1";
export const SAGE = "#7C8B6F";
export const SAGE_SOFT = "#C9D2C0";
export const DUSTY_BLUE = "#8FA3B0";
export const DUSTY_BLUE_SOFT = "#CBD8DF";
export const OCHRE = "#D9A441";
export const OCHRE_SOFT = "#F0DCB4";

/**
 * Shape language: generous radii, arch-topped photographs and circular crops.
 * `ARCH` is a fully-rounded top with a square base — the motif the whole layout
 * hangs off, so it lives here rather than being re-typed per component.
 */
export const RADIUS_CARD = 32;
export const RADIUS_TILE = 20;
export const ARCH = "999px 999px 0 0";
export const CIRCLE = "50%";

// Bare RGB channels for rgba() overlays and shadows in `.styles.ts` files. Use
// these rather than hand-written triples so tints stay on-brand.
export const BURGUNDY_RGB = "59,21,24";
export const INK_RGB = "42,28,29";

// Used by the theme-color meta tag in _document.tsx and site.webmanifest.
export const THEME_COLOR = BURGUNDY;

// Wide letter-spaced uppercase — the site's secondary voice, used for eyebrows,
// buttons and nav. Centralised because six components need to agree on it.
export const TRACKED_CAPS = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
  textTransform: "uppercase" as const,
  letterSpacing: "0.22em",
  fontWeight: 400,
};

const theme = createTheme({
  palette: {
    primary: {
      main: BURGUNDY,
      light: BURGUNDY_LIGHT,
      dark: "#2A0F11",
      contrastText: CREAM,
    },
    secondary: {
      main: MAUVE,
      dark: MAUVE_DEEP,
      contrastText: CREAM,
    },
    text: {
      primary: INK,
      secondary: INK_MUTED,
    },
    background: {
      default: CREAM,
      paper: CREAM,
    },
    divider: alpha(BURGUNDY, 0.14),
  },
  shape: {
    borderRadius: RADIUS_TILE,
  },
  typography: {
    fontFamily: "var(--font-body), system-ui, Arial, sans-serif",
    // The display face is set in italic throughout — it's the single strongest
    // carry-over from the client's existing brand.
    h1: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 300,
      lineHeight: 1.06,
      letterSpacing: "-0.01em",
      fontSize: "clamp(2.75rem, 6.2vw, 5.5rem)",
    },
    h2: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 300,
      lineHeight: 1.1,
      letterSpacing: "-0.005em",
      fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)",
    },
    h3: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 300,
      lineHeight: 1.15,
      fontSize: "clamp(1.65rem, 2.9vw, 2.5rem)",
    },
    h4: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 400,
      lineHeight: 1.2,
      fontSize: "clamp(1.35rem, 2.1vw, 1.85rem)",
    },
    h5: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "1.25rem",
    },
    h6: {
      ...TRACKED_CAPS,
      fontSize: "0.78rem",
    },
    subtitle1: {
      fontFamily: "var(--font-display), Georgia, serif",
      fontStyle: "italic",
      fontWeight: 300,
      fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)",
      lineHeight: 1.5,
    },
    body1: { fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 },
    body2: { fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 },
    button: {
      ...TRACKED_CAPS,
      fontSize: "0.72rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": { backgroundColor: TAUPE_DEEP, color: BURGUNDY },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          // Pill buttons — the smallest piece of the rounded shape language,
          // and the one that appears on every page.
          borderRadius: 999,
          padding: "16px 36px",
          transition:
            "background-color 300ms ease, color 300ms ease, transform 300ms ease",
          "&:hover": { transform: "translateY(-2px)" },
        },
        outlined: { borderWidth: 1 },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
      styleOverrides: {
        maxWidthLg: { "@media (min-width: 1200px)": { maxWidth: 1200 } },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "standard" },
    },
  },
});

export default theme;
