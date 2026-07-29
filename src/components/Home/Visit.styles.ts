import { editorialItalic, pageShell } from "./shared.styles";

export const section = {
  backgroundColor: "#fffdf8",
};

export const visitGrid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.05fr) minmax(420px, 0.95fr)",
  },
  minHeight: { md: 800 },
};

export const imagePanel = {
  position: "relative",
  overflow: "hidden",
  minHeight: { xs: 500, sm: 650, md: 800 },
  "& > div": {
    height: "100%",
  },
};

export const image = {
  display: "block",
  width: "100%",
  height: "100%",
  minHeight: "inherit",
  objectFit: "cover",
  objectPosition: "center",
};

export const locationBadge = {
  position: "absolute",
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: { xs: 155, md: 190 },
  height: { xs: 155, md: 190 },
  p: { xs: 2.5, md: 3 },
  backgroundColor: "#ddf45f",
  color: "#171713",
};

export const badgeLarge = {
  fontSize: { xs: "3rem", md: "3.8rem" },
  fontWeight: 600,
  letterSpacing: "-0.08em",
  lineHeight: 0.85,
};

export const badgeSmall = {
  fontSize: "0.58rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  lineHeight: 1.4,
  textTransform: "uppercase",
};

export const copyPanel = {
  display: "flex",
  alignItems: "center",
  px: { xs: 2.25, sm: 5, md: 7, lg: 10 },
  py: { xs: 10, md: 12 },
  backgroundColor: "#b86f48",
  color: "#171713",
};

export const title = {
  maxWidth: 740,
  fontSize: { xs: "3.8rem", sm: "5.5rem", md: "5.8rem", lg: "7rem" },
};

export const italic = {
  ...editorialItalic,
  color: "#fffdf8",
};

export const addressBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 2,
  my: { xs: 5, md: 6 },
};

export const addressLabel = {
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export const address = {
  fontFamily: "inherit",
  fontSize: { xs: "1.15rem", md: "1.3rem" },
  fontStyle: "normal",
  letterSpacing: "-0.02em",
  lineHeight: 1.5,
};

export const contactGrid = {
  ...pageShell,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
  py: { xs: 5, md: 7 },
};

export const contactItem = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 1.25,
  py: { xs: 3, md: 2 },
  pr: { md: 4 },
  pl: { md: 4 },
  borderBottom: { xs: "1px solid rgba(23,23,19,0.18)", md: "none" },
  borderLeft: { xs: "none", md: "1px solid rgba(23,23,19,0.18)" },
  color: "#171713",
  textDecoration: "none",
  "&:first-of-type": {
    pl: { md: 0 },
    borderLeft: "none",
  },
  "&:hover span:last-of-type": {
    transform: "translate(3px, -3px)",
  },
};

export const contactLabel = {
  color: "text.secondary",
  fontSize: "0.58rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export const contactValue = {
  overflow: "hidden",
  fontSize: { xs: "1.35rem", sm: "1.65rem", lg: "1.9rem" },
  fontWeight: 500,
  letterSpacing: "-0.045em",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const contactArrow = {
  position: "absolute",
  top: { xs: 28, md: 12 },
  right: { xs: 0, md: 8 },
  fontSize: "1.1rem",
  transition: "transform 180ms ease",
};
