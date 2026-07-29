import { editorialItalic, sectionShell } from "./shared.styles";

export const section = {
  ...sectionShell,
  position: "relative",
  backgroundColor: "#2947ff",
  color: "#fffdf8",
};

export const grid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "minmax(320px, 0.88fr) minmax(0, 1.12fr)",
  },
  alignItems: "center",
  gap: { xs: 8, md: 10, lg: 15 },
};

export const imageColumn = {
  position: "relative",
  width: "100%",
  maxWidth: 620,
};

export const imageFrame = {
  position: "relative",
  zIndex: 2,
  overflow: "hidden",
  aspectRatio: "4 / 5",
  backgroundColor: "#171713",
};

export const image = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
  "&:hover": {
    transform: "scale(1.025)",
  },
};

export const imageLabel = {
  position: "absolute",
  right: 0,
  bottom: 0,
  px: 2.5,
  py: 2,
  backgroundColor: "#ddf45f",
  color: "#171713",
  fontSize: "0.63rem",
  fontWeight: 700,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
};

export const imageOutline = {
  position: "absolute",
  zIndex: 1,
  top: 24,
  right: -24,
  width: "100%",
  height: "100%",
  border: "1px solid rgba(255,255,255,0.55)",
};

export const copyColumn = {
  position: "relative",
  zIndex: 3,
};

export const title = {
  maxWidth: 850,
  fontSize: { xs: "3.6rem", sm: "5.5rem", md: "6.1rem", lg: "7.2rem" },
};

export const italic = {
  ...editorialItalic,
  color: "#ddf45f",
};

export const lead = {
  maxWidth: 650,
  mt: { xs: 4, md: 5 },
  fontSize: { xs: "1.18rem", md: "1.4rem" },
  letterSpacing: "-0.025em",
  lineHeight: 1.4,
};

export const body = {
  maxWidth: 620,
  mt: 2.5,
  color: "rgba(255,255,255,0.72)",
  fontSize: "0.96rem",
  lineHeight: 1.7,
};

export const details = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  maxWidth: 680,
  my: { xs: 5, md: 6 },
  borderTop: "1px solid rgba(255,255,255,0.35)",
  borderBottom: "1px solid rgba(255,255,255,0.35)",
};

export const detail = {
  display: "flex",
  flexDirection: "column",
  gap: 0.8,
  py: 2.5,
  pr: 1,
  "& + &": {
    pl: { xs: 1.5, sm: 2.5 },
    borderLeft: "1px solid rgba(255,255,255,0.35)",
  },
};

export const detailValue = {
  fontFamily: "Georgia, serif",
  fontSize: { xs: "1.25rem", sm: "1.65rem" },
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: 1,
};

export const detailLabel = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "0.58rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  lineHeight: 1.35,
  textTransform: "uppercase",
};
