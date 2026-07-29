export const sectionStyles = {
  bgcolor: "background.default",
};

export const listStyles = {
  mt: { xs: 7, md: 11 },
  display: "grid",
  gap: { xs: 8, md: 12 },
};

export const serviceRowStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
  alignItems: "center",
  columnGap: { md: 4 },
  rowGap: 4,
};

export const serviceImageWrapStyles = {
  gridColumn: { md: "span 7" },
  height: { xs: 370, sm: 490, md: 560 },
  position: "relative",
  overflow: "hidden",
  bgcolor: "primary.light",
};

export const serviceImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 700ms cubic-bezier(.22,1,.36,1)",
  "&:hover": { transform: "scale(1.025)" },
};

export const serviceCopyStyles = {
  gridColumn: { md: "span 5" },
  pl: { md: 2, lg: 5 },
};

export const numberStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  color: "secondary.dark",
  mb: 2.5,
  "&::after": {
    content: '""',
    width: 42,
    height: 1,
    bgcolor: "secondary.main",
  },
};

export const serviceTitleStyles = {
  fontSize: { xs: "2.6rem", md: "3.7rem" },
  maxWidth: 480,
};

export const descriptionStyles = {
  mt: 2.5,
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.08rem" },
  lineHeight: 1.75,
};

export const detailsStyles = {
  mt: 3.5,
  borderTop: "1px solid",
  borderColor: "divider",
};

export const detailStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  py: 1.4,
  borderBottom: "1px solid",
  borderColor: "divider",
  color: "text.primary",
  fontSize: "0.88rem",
};
