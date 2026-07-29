export const heroStyles = {
  minHeight: { xs: 690, md: "calc(100svh - 116px)" },
  maxHeight: { md: 960 },
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  overflow: "hidden",
  bgcolor: "primary.dark",
};

export const backgroundImageStyles = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: { xs: "58% center", md: "center" },
};

export const overlayStyles = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(11,28,20,0.91) 0%, rgba(11,28,20,0.62) 45%, rgba(11,28,20,0.12) 78%), linear-gradient(0deg, rgba(9,22,16,0.48) 0%, transparent 45%)",
};

export const contentStyles = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  py: { xs: 9, md: 10 },
};

export const eyebrowStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.5,
  color: "secondary.light",
  mb: 3,
  "&::before": {
    content: '""',
    width: 32,
    height: 1,
    bgcolor: "secondary.light",
  },
};

export const titleStyles = {
  color: "common.white",
  fontSize: { xs: "3.7rem", sm: "5.2rem", md: "6.5rem", lg: "7.4rem" },
  maxWidth: 800,
};

export const italicStyles = {
  color: "secondary.light",
  fontStyle: "italic",
};

export const summaryStyles = {
  maxWidth: 550,
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.16rem" },
  lineHeight: 1.7,
  mt: 3.5,
};

export const detailsPanelStyles = {
  position: { xs: "relative", md: "absolute" },
  right: { md: 0 },
  bottom: { md: 0 },
  zIndex: 2,
  width: { xs: "100%", md: 410 },
  bgcolor: "background.paper",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

export const detailItemStyles = {
  px: { xs: 2.5, sm: 3 },
  py: { xs: 2.2, sm: 3 },
  borderRight: "1px solid",
  borderTop: "1px solid",
  borderColor: "divider",
};
