export const pageShell = {
  width: "100%",
  maxWidth: "1600px",
  mx: "auto",
  px: { xs: 2.25, sm: 4, md: 6, lg: 8 },
};

export const sectionShell = {
  ...pageShell,
  py: { xs: 10, md: 15, lg: 18 },
};

export const eyebrow = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.25,
  mb: 3,
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  lineHeight: 1,
  textTransform: "uppercase",
  "&::before": {
    content: '""',
    width: 24,
    height: 2,
    backgroundColor: "currentColor",
  },
};

export const sectionTitle = {
  maxWidth: 980,
  fontSize: { xs: "3.25rem", sm: "4.8rem", md: "6.4rem", lg: "7.5rem" },
  letterSpacing: "-0.075em",
  lineHeight: 0.87,
};

export const editorialItalic = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontStyle: "italic",
  fontWeight: 400,
  letterSpacing: "-0.085em",
};

export const primaryButton = {
  minHeight: 54,
  px: 3.25,
  borderRadius: "999px",
  backgroundColor: "#171713",
  color: "#fffdf8",
  transition: "transform 180ms ease, background-color 180ms ease",
  "&:hover": {
    backgroundColor: "#2947ff",
    transform: "translateY(-2px)",
  },
};

export const lightButton = {
  ...primaryButton,
  backgroundColor: "#fffdf8",
  color: "#171713",
  "&:hover": {
    backgroundColor: "#ddf45f",
    transform: "translateY(-2px)",
  },
};

export const textLink = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  width: "fit-content",
  pb: 0.75,
  borderBottom: "1px solid currentColor",
  color: "inherit",
  fontSize: "0.76rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  lineHeight: 1.2,
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "gap 180ms ease, opacity 180ms ease",
  "&:hover": {
    gap: 1.75,
    opacity: 0.68,
  },
};
