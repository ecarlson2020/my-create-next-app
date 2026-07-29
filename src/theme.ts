import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#254d3b",
      dark: "#173427",
      light: "#dce8df",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4381a3",
      dark: "#2f617c",
      light: "#d7e8f0",
    },
    background: {
      default: "#f5f1e8",
      paper: "#fffdf8",
    },
    text: {
      primary: "#1d2921",
      secondary: "#5b665f",
    },
    divider: "rgba(29, 41, 33, 0.16)",
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    fontFamily:
      '"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif',
      fontWeight: 400,
      letterSpacing: "-0.045em",
      lineHeight: 0.93,
    },
    h2: {
      fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif',
      fontWeight: 400,
      letterSpacing: "-0.035em",
      lineHeight: 1,
    },
    h3: {
      fontFamily: 'Iowan Old Style, Baskerville, "Times New Roman", serif',
      fontWeight: 400,
      letterSpacing: "-0.025em",
      lineHeight: 1.04,
    },
    button: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.11em",
      textTransform: "uppercase",
    },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "110px",
        },
        body: {
          margin: 0,
          overflowX: "hidden",
        },
        "*::selection": {
          backgroundColor: "#4381a3",
          color: "#ffffff",
        },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "14px 22px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "rgba(255, 255, 255, 0.68)",
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
