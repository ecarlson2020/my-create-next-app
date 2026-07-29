import { editorialItalic, pageShell } from "./shared.styles";

export const hero = {
  position: "relative",
  minHeight: { xs: "auto", md: "min(940px, 100svh)" },
  pt: { xs: 12.5, md: 15 },
  backgroundColor: "#f3f0e8",
};

export const heroGrid = {
  ...pageShell,
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.08fr) minmax(390px, 0.92fr)",
  },
  alignItems: "center",
  gap: { xs: 6, md: 4, lg: 8 },
  minHeight: { md: "calc(min(940px, 100svh) - 190px)" },
};

export const copyColumn = {
  position: "relative",
  zIndex: 2,
  pt: { xs: 3, md: 0 },
};

export const kicker = {
  display: "flex",
  alignItems: "center",
  gap: 1.25,
  mb: { xs: 3, md: 4.5 },
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  "&::before": {
    content: '""',
    width: 28,
    height: 2,
    backgroundColor: "#2947ff",
  },
};

export const title = {
  maxWidth: 900,
  fontSize: {
    xs: "clamp(4.1rem, 18vw, 6.3rem)",
    sm: "7.4rem",
    md: "clamp(6rem, 9.2vw, 9.5rem)",
  },
  textWrap: "balance",
};

export const italic = {
  ...editorialItalic,
  color: "#2947ff",
  whiteSpace: "nowrap",
};

export const intro = {
  maxWidth: 570,
  mt: { xs: 3.5, md: 5 },
  ml: { xs: 0, lg: "15%" },
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  lineHeight: 1.62,
};

export const heroActions = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 3,
  mt: 4,
  ml: { xs: 0, lg: "15%" },
};

export const imageColumn = {
  position: "relative",
  width: "100%",
  maxWidth: { xs: 620, md: "none" },
  mx: "auto",
  mb: { xs: 8, md: 0 },
};

export const imageFrame = {
  position: "relative",
  zIndex: 2,
  overflow: "hidden",
  width: { xs: "91%", md: "100%" },
  ml: "auto",
  aspectRatio: { xs: "4 / 4.6", md: "4 / 5" },
  backgroundColor: "#b06e46",
};

export const heroImage = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1.02)",
};

export const imageStamp = {
  position: "absolute",
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  width: { xs: 170, md: 210 },
  p: { xs: 2.25, md: 3 },
  backgroundColor: "#ddf45f",
  color: "#171713",
};

export const stampTop = {
  mb: 1,
  fontSize: "0.59rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export const stampBottom = {
  fontFamily: "Georgia, serif",
  fontSize: { xs: "1.45rem", md: "1.8rem" },
  fontStyle: "italic",
  letterSpacing: "-0.05em",
  lineHeight: 1,
};

export const blueBlock = {
  position: "absolute",
  zIndex: 1,
  top: { xs: -18, md: -25 },
  right: { xs: "auto", md: -25 },
  left: { xs: 0, md: "auto" },
  width: { xs: "34%", md: "48%" },
  height: { xs: 100, md: 160 },
  backgroundColor: "#2947ff",
};

export const limeDot = {
  position: "absolute",
  zIndex: 3,
  right: { xs: "auto", md: -24 },
  bottom: { xs: -24, md: 50 },
  left: { xs: 0, md: "auto" },
  width: { xs: 54, md: 72 },
  height: { xs: 54, md: 72 },
  borderRadius: "50%",
  backgroundColor: "#ddf45f",
};

export const heroFooter = {
  ...pageShell,
  display: { xs: "none", md: "flex" },
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 82,
  mt: 1,
  borderTop: "1px solid rgba(23,23,19,0.2)",
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};
