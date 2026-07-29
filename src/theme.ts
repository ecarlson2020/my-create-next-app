import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2947ff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ddf45f",
      contrastText: "#171713",
    },
    background: {
      default: "#f3f0e8",
      paper: "#fffdf8",
    },
    text: {
      primary: "#171713",
      secondary: "#68665f",
    },
  },
  typography: {
    fontFamily:
      '"Helvetica Neue", "Neue Haas Grotesk Text Pro", Arial, sans-serif',
    h1: {
      fontWeight: 500,
      letterSpacing: "-0.075em",
      lineHeight: 0.84,
    },
    h2: {
      fontWeight: 500,
      letterSpacing: "-0.065em",
      lineHeight: 0.9,
    },
    button: {
      fontSize: "0.78rem",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          backgroundColor: "#f3f0e8",
        },
        body: {
          margin: 0,
          backgroundColor: "#f3f0e8",
          color: "#171713",
        },
        "*": {
          boxSizing: "border-box",
        },
        "::selection": {
          backgroundColor: "#ddf45f",
          color: "#171713",
        },
        a: {
          color: "inherit",
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

export default theme;
