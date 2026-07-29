export const sectionStyles = {
  bgcolor: "#e7edf0",
};

export const introStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: { xs: 3, md: 8 },
  alignItems: "end",
};

export const titleStyles = {
  fontSize: { xs: "3rem", md: "5.3rem" },
  maxWidth: 720,
};

export const stepsStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
  mt: { xs: 6, md: 9 },
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: "rgba(23,52,39,.28)",
};

export const stepStyles = {
  minHeight: { md: 300 },
  px: { xs: 0, md: 4 },
  py: { xs: 4, md: 5 },
  borderBottom: { xs: "1px solid", md: 0 },
  borderRight: { md: "1px solid" },
  borderColor: "rgba(23,52,39,.28)",
  "&:first-of-type": { pl: 0 },
  "&:last-of-type": { border: 0, pr: 0 },
};
