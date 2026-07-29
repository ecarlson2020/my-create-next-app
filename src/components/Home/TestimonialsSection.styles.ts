export const styles = {
  section: {
    bgcolor: "primary.dark",
    color: "#ffffff",
    overflow: "hidden",
    position: "relative",
  },
  glow: {
    background:
      "radial-gradient(circle, rgba(217, 170, 85, 0.16), transparent 68%)",
    height: "580px",
    left: "-220px",
    pointerEvents: "none",
    position: "absolute",
    top: "-210px",
    width: "580px",
  },
  content: {
    position: "relative",
  },
  eyebrow: {
    color: "secondary.main",
  },
  headingRow: {
    alignItems: { md: "end" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    mb: { xs: 5, md: 7 },
  },
  heading: {
    color: "#ffffff",
    fontSize: { xs: "2.8rem", sm: "3.8rem", md: "4.6rem" },
  },
  summary: {
    alignItems: "center",
    display: "flex",
    gap: 1.5,
    mt: { xs: 3, md: 0 },
  },
  rating: {
    color: "secondary.main",
    display: "flex",
    "& svg": {
      fontSize: "1rem",
    },
  },
  summaryText: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  cards: {
    display: "grid",
    gap: 2.5,
    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
  },
  card: {
    bgcolor: "rgba(255, 255, 255, 0.07)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "24px",
    display: "flex",
    flexDirection: "column",
    minHeight: { md: "340px" },
    p: { xs: 3.5, md: 4 },
  },
  quoteMark: {
    color: "secondary.main",
    fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
    fontSize: "4.5rem",
    height: "48px",
    lineHeight: 1,
  },
  quote: {
    color: "rgba(255, 255, 255, 0.9)",
    flexGrow: 1,
    fontFamily: '"Iowan Old Style", "Baskerville", Georgia, serif',
    fontSize: { xs: "1.35rem", md: "1.5rem" },
    lineHeight: 1.45,
    mt: 2,
  },
  authorRow: {
    alignItems: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
    display: "flex",
    justifyContent: "space-between",
    mt: 3,
    pt: 2.5,
  },
  author: {
    color: "#ffffff",
    fontSize: "0.78rem",
    fontWeight: 800,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  reviewStars: {
    color: "secondary.main",
    display: "flex",
    "& svg": {
      fontSize: "0.82rem",
    },
  },
};
