export const sharedStyles = {
  section: {
    py: { xs: 9, md: 14 },
  },
  sectionDark: {
    py: { xs: 9, md: 14 },
    bgcolor: "primary.dark",
    color: "primary.contrastText",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1.25,
    mb: 2.5,
    color: "secondary.main",
    fontSize: "0.75rem",
    fontWeight: 800,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    "&::before": {
      width: 34,
      height: 2,
      bgcolor: "currentColor",
      content: '""',
    },
  },
  eyebrowLight: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1.25,
    mb: 2.5,
    color: "#E8A27A",
    fontSize: "0.75rem",
    fontWeight: 800,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    "&::before": {
      width: 34,
      height: 2,
      bgcolor: "currentColor",
      content: '""',
    },
  },
} as const;
