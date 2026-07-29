export const footerStyles = {
  bgcolor: "#0b1b13",
  color: "common.white",
  pt: { xs: 7, md: 9 },
  pb: 3,
};

export const topStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1.2fr .8fr .8fr" },
  gap: { xs: 5, md: 7 },
  pb: { xs: 6, md: 8 },
};

export const logoWrapStyles = {
  display: "inline-flex",
  bgcolor: "background.paper",
  p: 1.5,
  width: "fit-content",
};

export const logoStyles = {
  width: { xs: 220, md: 270 },
  height: "auto",
};

export const footerLinkStyles = {
  display: "block",
  width: "fit-content",
  color: "rgba(255,255,255,.68)",
  textDecoration: "none",
  py: 0.65,
  "&:hover": { color: "common.white" },
};

export const bottomStyles = {
  pt: 3,
  borderTop: "1px solid rgba(255,255,255,.14)",
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  gap: 1.5,
  color: "rgba(255,255,255,.45)",
};
