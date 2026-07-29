export const styles = {
  section: {
    bgcolor: "background.default",
    overflow: "hidden",
  },
  grid: {
    alignItems: "center",
    display: "grid",
    gap: { xs: 6, md: 8, lg: 12 },
    gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
  },
  imageColumn: {
    minHeight: { xs: "480px", sm: "620px", md: "680px" },
    position: "relative",
  },
  imageFrame: {
    borderRadius: "30px 30px 110px 30px",
    height: "calc(100% - 42px)",
    overflow: "hidden",
    position: "absolute",
    right: { xs: 0, sm: "8%", md: 0 },
    top: 0,
    width: { xs: "92%", sm: "78%", md: "90%" },
  },
  image: {
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
  },
  experienceCard: {
    bgcolor: "secondary.main",
    borderRadius: "22px",
    bottom: 0,
    color: "primary.dark",
    left: 0,
    maxWidth: { xs: "205px", sm: "235px" },
    p: { xs: 2.5, sm: 3 },
    position: "absolute",
  },
  experienceValue: {
    fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
    fontSize: { xs: "3.6rem", sm: "4.3rem" },
    fontWeight: 600,
    lineHeight: 0.9,
  },
  experienceLabel: {
    fontSize: "0.72rem",
    fontWeight: 800,
    letterSpacing: "0.11em",
    lineHeight: 1.5,
    mt: 1.25,
    textTransform: "uppercase",
  },
  content: {
    maxWidth: "610px",
  },
  heading: {
    fontSize: { xs: "2.8rem", sm: "3.8rem", lg: "4.8rem" },
  },
  body: {
    color: "text.secondary",
    fontSize: { xs: "1rem", md: "1.08rem" },
    lineHeight: 1.85,
    mt: 3,
  },
  values: {
    display: "grid",
    gap: 2,
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    mt: 4,
  },
  value: {
    borderTop: "1px solid rgba(29, 75, 53, 0.18)",
    pt: 2,
  },
  valueTitle: {
    alignItems: "center",
    color: "text.primary",
    display: "flex",
    fontSize: "0.88rem",
    fontWeight: 800,
    gap: 1,
    "& svg": {
      color: "secondary.dark",
      fontSize: "1.05rem",
    },
  },
  valueCopy: {
    color: "text.secondary",
    fontSize: "0.8rem",
    lineHeight: 1.6,
    mt: 0.75,
  },
  link: {
    mt: 3.5,
  },
};
