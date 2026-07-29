export const wrapperStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "minmax(140px, 0.3fr) 1fr" },
  columnGap: { md: 4 },
  rowGap: 2.5,
  alignItems: "start",
};

export const labelStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  color: "secondary.dark",
  pt: { md: 1 },
  "&::before": {
    content: '""',
    width: 26,
    height: 1,
    bgcolor: "secondary.main",
  },
};

export const titleStyles = {
  maxWidth: 850,
  fontSize: { xs: "2.8rem", sm: "3.7rem", md: "4.9rem" },
};

export const descriptionStyles = {
  mt: 3,
  maxWidth: 620,
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.1rem" },
  lineHeight: 1.75,
};
