import { sectionShell } from "./shared.styles";

export const section = {
  ...sectionShell,
  backgroundColor: "#fffdf8",
};

export const introGrid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(0, 1.15fr) minmax(320px, 0.65fr)",
  },
  gap: { xs: 5, md: 10 },
  alignItems: "end",
  pb: { xs: 11, md: 18 },
  mb: { xs: 10, md: 14 },
  borderBottom: "1px solid rgba(23,23,19,0.2)",
};

export const introTitle = {
  maxWidth: 850,
  fontSize: { xs: "3.35rem", sm: "5rem", md: "6.8rem", lg: "7.7rem" },
};

export const introCopyWrap = {
  maxWidth: 540,
  pb: { md: 1 },
};

export const introLead = {
  mb: 2.5,
  fontSize: { xs: "1.25rem", md: "1.45rem" },
  fontWeight: 500,
  letterSpacing: "-0.025em",
  lineHeight: 1.3,
};

export const introBody = {
  color: "text.secondary",
  fontSize: "0.98rem",
  lineHeight: 1.68,
};

export const servicesHeader = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  mb: { xs: 6, md: 9 },
};

export const cardGrid = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
  borderTop: "1px solid #171713",
  borderLeft: "1px solid #171713",
  "& > div": {
    display: "flex",
  },
};

export const serviceCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  minHeight: { xs: 430, md: 520 },
  p: { xs: 3, sm: 4, lg: 5 },
  borderRight: "1px solid #171713",
  borderBottom: "1px solid #171713",
  transition: "background-color 220ms ease, color 220ms ease",
  "&[data-tone='cobalt']:hover": {
    backgroundColor: "#2947ff",
    color: "#fffdf8",
  },
  "&[data-tone='clay']:hover": {
    backgroundColor: "#b86f48",
    color: "#fffdf8",
  },
  "&[data-tone='lime']:hover": {
    backgroundColor: "#ddf45f",
    color: "#171713",
  },
};

export const cardTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const cardNumber = {
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
};

export const cardPrice = {
  px: 1.4,
  py: 0.7,
  border: "1px solid currentColor",
  borderRadius: "999px",
  fontSize: "0.61rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

export const cardTitle = {
  maxWidth: 360,
  mb: 2.5,
  fontSize: { xs: "2.9rem", lg: "3.7rem" },
  fontWeight: 500,
  letterSpacing: "-0.06em",
  lineHeight: 0.92,
};

export const cardBody = {
  maxWidth: 390,
  fontSize: "0.92rem",
  lineHeight: 1.6,
};

export const cardLink = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pt: 2,
  borderTop: "1px solid currentColor",
  color: "inherit",
  fontSize: "0.67rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textDecoration: "none",
  textTransform: "uppercase",
};

export const serviceNote = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", md: "center" },
  gap: 3,
  pt: { xs: 5, md: 6 },
};

export const noteText = {
  maxWidth: 650,
  color: "text.secondary",
  fontSize: "0.9rem",
  lineHeight: 1.6,
};

export const inlineLink = {
  color: "text.primary",
  fontWeight: 700,
  textUnderlineOffset: "3px",
};
