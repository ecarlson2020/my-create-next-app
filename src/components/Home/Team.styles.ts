import { editorialItalic, sectionShell } from "./shared.styles";

export const section = {
  ...sectionShell,
  backgroundColor: "#f3f0e8",
};

export const headerGrid = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 320px" },
  alignItems: "end",
  gap: { xs: 4, md: 8 },
  mb: { xs: 7, md: 11 },
};

export const headerCopy = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 3.5,
  pb: { md: 1.5 },
};

export const lead = {
  color: "text.secondary",
  fontSize: "1rem",
  lineHeight: 1.62,
};

export const artistGrid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(2, minmax(0, 1fr))",
    md: "repeat(4, minmax(0, 1fr))",
  },
  gap: { xs: 1.5, sm: 2.5, md: 3 },
  "& > div:nth-of-type(even)": {
    mt: { xs: 5, md: 10 },
  },
};

export const artistCard = {
  width: "100%",
  "&:hover img": {
    filter: "saturate(1)",
    transform: "scale(1.035)",
  },
};

export const imageWrap = {
  position: "relative",
  overflow: "hidden",
  aspectRatio: { xs: "4 / 5.4", md: "4 / 5.7" },
  backgroundColor: "#dfd9cf",
};

export const artistImage = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  filter: "saturate(0.88)",
  transition:
    "filter 350ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
  "&[data-position='top']": {
    objectPosition: "center top",
  },
};

export const artistNumber = {
  position: "absolute",
  top: 12,
  left: 12,
  display: "grid",
  placeItems: "center",
  width: 34,
  height: 34,
  borderRadius: "50%",
  backgroundColor: "#ddf45f",
  color: "#171713",
  fontSize: "0.58rem",
  fontWeight: 800,
};

export const artistInfo = {
  pt: 2,
  borderTop: "1px solid rgba(23,23,19,0.28)",
};

export const artistName = {
  fontSize: { xs: "1.15rem", sm: "1.5rem" },
  fontWeight: 600,
  letterSpacing: "-0.04em",
  lineHeight: 1.05,
};

export const artistSpecialty = {
  mt: 0.75,
  color: "text.secondary",
  fontSize: { xs: "0.58rem", sm: "0.66rem" },
  fontWeight: 700,
  letterSpacing: "0.06em",
  lineHeight: 1.4,
  textTransform: "uppercase",
};

export const statement = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: { xs: 12, md: 18 },
  textAlign: "center",
};

export const statementSmall = {
  mb: 2,
  fontSize: "0.66rem",
  fontWeight: 700,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
};

export const statementLarge = {
  maxWidth: 1100,
  fontSize: { xs: "3rem", sm: "4.8rem", md: "6.4rem" },
  fontWeight: 500,
  letterSpacing: "-0.07em",
  lineHeight: 0.94,
};

export const statementItalic = {
  ...editorialItalic,
  color: "#2947ff",
};
