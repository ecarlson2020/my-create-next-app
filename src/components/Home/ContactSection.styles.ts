export const sectionStyles = {
  bgcolor: "#dce8df",
};

export const gridStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
  gap: { xs: 6, md: 4 },
};

export const copyStyles = {
  gridColumn: { md: "span 5" },
  pr: { md: 4 },
};

export const titleStyles = {
  mt: 2,
  fontSize: { xs: "3.2rem", md: "5.25rem" },
};

export const contactLinkStyles = {
  display: "block",
  color: "primary.dark",
  fontFamily: "h3.fontFamily",
  fontSize: { xs: "1.55rem", sm: "2rem" },
  textDecoration: "none",
  py: 1.2,
  borderBottom: "1px solid rgba(23,52,39,.22)",
};

export const formStyles = {
  gridColumn: { md: "7 / span 6" },
  bgcolor: "background.paper",
  p: { xs: 2.5, sm: 4, md: 5 },
  boxShadow: "0 24px 70px rgba(23,52,39,.09)",
};

export const fieldsStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
  gap: 2,
  mt: 3.5,
};
