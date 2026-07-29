import { pageShell } from "./shared.styles";

export const footer = {
  ...pageShell,
  pt: { xs: 9, md: 12 },
  pb: { xs: 3, md: 4 },
  backgroundColor: "#ddf45f",
  color: "#171713",
};

export const topRow = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", md: "flex-end" },
  gap: 5,
  pb: { xs: 7, md: 9 },
  borderBottom: "1px solid rgba(23,23,19,0.5)",
};

export const eyebrow = {
  mb: 1.5,
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
};

export const signoff = {
  fontFamily: "Georgia, serif",
  fontSize: { xs: "2.2rem", md: "3.2rem" },
  fontStyle: "italic",
  letterSpacing: "-0.06em",
  lineHeight: 1,
};

export const wordmark = {
  display: "block",
  width: { xs: 240, sm: 320, md: 390 },
  height: "auto",
  maxHeight: 150,
  objectFit: "contain",
  objectPosition: "right center",
};

export const linksGrid = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 2fr" },
  gap: { xs: 4, md: 8 },
  py: { xs: 7, md: 9 },
};

export const linkColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 1.2,
};

export const bookingColumn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gridColumn: { xs: "1 / -1", md: "auto" },
};

export const linkHeading = {
  mb: 1,
  fontSize: "0.58rem",
  fontWeight: 800,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
};

export const link = {
  color: "inherit",
  fontSize: "0.88rem",
  lineHeight: 1.5,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
};

export const bigLink = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  width: "100%",
  mt: 1,
  pb: 1.5,
  borderBottom: "2px solid #171713",
  color: "inherit",
  fontSize: { xs: "2.5rem", md: "4.5rem" },
  fontWeight: 500,
  letterSpacing: "-0.065em",
  lineHeight: 0.95,
  textDecoration: "none",
  "& span": {
    fontSize: { xs: "1.5rem", md: "2.4rem" },
    transition: "transform 180ms ease",
  },
  "&:hover span": {
    transform: "translate(4px, -4px)",
  },
};

export const bottomRow = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 2,
  pt: 3,
  borderTop: "1px solid rgba(23,23,19,0.5)",
};

export const legal = {
  fontSize: "0.55rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export const legalLink = {
  color: "inherit",
  fontSize: "0.55rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textDecoration: "none",
  textTransform: "uppercase",
  "&:hover": {
    textDecoration: "underline",
  },
};
