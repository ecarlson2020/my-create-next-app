export const maxContent = {
  maxWidth: "1280px",
  mx: "auto",
  px: { xs: 2.5, sm: 4, lg: 6 },
  width: "100%",
};

export const section = {
  py: { xs: 9, md: 13 },
  scrollMarginTop: "88px",
};

export const sectionEyebrow = {
  alignItems: "center",
  color: "primary.main",
  display: "flex",
  fontSize: "0.72rem",
  fontWeight: 800,
  gap: 1.25,
  letterSpacing: "0.16em",
  mb: 2,
  textTransform: "uppercase",
  "&::before": {
    bgcolor: "secondary.main",
    content: '""',
    height: "2px",
    width: "34px",
  },
};

export const sectionHeading = {
  color: "text.primary",
  fontSize: { xs: "2.6rem", sm: "3.6rem", md: "4.5rem" },
  maxWidth: "780px",
};

export const sectionIntro = {
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  lineHeight: 1.8,
  maxWidth: "580px",
};

export const primaryButton = {
  bgcolor: "primary.main",
  borderRadius: "999px",
  color: "primary.contrastText",
  minHeight: "54px",
  px: 3.25,
  "&:hover": {
    bgcolor: "primary.dark",
    transform: "translateY(-2px)",
  },
  transition: "background-color 180ms ease, transform 180ms ease",
};

export const lightButton = {
  bgcolor: "#ffffff",
  borderRadius: "999px",
  color: "primary.dark",
  minHeight: "54px",
  px: 3.25,
  "&:hover": {
    bgcolor: "#f5f1e4",
    transform: "translateY(-2px)",
  },
  transition: "background-color 180ms ease, transform 180ms ease",
};

export const textLink = {
  alignItems: "center",
  color: "primary.main",
  display: "inline-flex",
  fontSize: "0.86rem",
  fontWeight: 800,
  gap: 0.75,
  letterSpacing: "0.04em",
  textDecoration: "none",
  "&:hover": {
    color: "primary.dark",
    "& svg": {
      transform: "translateX(4px)",
    },
  },
  "& svg": {
    fontSize: "1.1rem",
    transition: "transform 180ms ease",
  },
};
