import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#24453A",
      dark: "#17332B",
      contrastText: "#FFF9EE",
    },
    secondary: {
      main: "#B85C38",
      dark: "#8F3F25",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F7F1E5",
      paper: "#FFFDF7",
    },
    text: {
      primary: "#1F2B25",
      secondary: "#5E665F",
    },
    divider: "rgba(37, 55, 45, 0.16)",
  },
  typography: {
    fontFamily: '"DM Sans", Arial, sans-serif',
    h1: {
      fontFamily: '"Bitter", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.045em",
    },
    h2: {
      fontFamily: '"Bitter", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.035em",
    },
    h3: {
      fontFamily: '"Bitter", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.025em",
    },
    h4: {
      fontFamily: '"Bitter", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 2,
          minHeight: 50,
          paddingInline: 24,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export const globalStyles = {
  html: { scrollBehavior: "smooth", scrollPaddingTop: 120 },
  body: { overflowX: "hidden" },
  "::selection": {
    backgroundColor: "#B85C38",
    color: "#FFFFFF",
  },
} as const;
