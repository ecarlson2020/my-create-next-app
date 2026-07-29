import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1d4b35",
      dark: "#123324",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d9aa55",
      dark: "#b8862f",
      contrastText: "#183326",
    },
    background: {
      default: "#f7f5ed",
      paper: "#ffffff",
    },
    text: {
      primary: "#183326",
      secondary: "#5d6c64",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily:
      '"Helvetica Neue", "Segoe UI", -apple-system, BlinkMacSystemFont, Arial, sans-serif',
    h1: {
      fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
      fontWeight: 500,
      letterSpacing: "-0.045em",
      lineHeight: 0.96,
    },
    h2: {
      fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.02,
    },
    h3: {
      fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#f7f5ed",
          margin: 0,
        },
        "::selection": {
          backgroundColor: "#d9aa55",
          color: "#183326",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
