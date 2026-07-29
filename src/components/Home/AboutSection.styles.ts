export const sectionStyles = {
  bgcolor: "background.paper",
};

export const gridStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
  gap: { xs: 5, md: 4 },
  alignItems: "center",
};

export const imageColumnStyles = {
  gridColumn: { md: "span 6" },
  position: "relative",
  height: { xs: 440, md: 700 },
};

export const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const experienceBadgeStyles = {
  position: "absolute",
  right: { xs: 0, md: -26 },
  bottom: { xs: 0, md: 38 },
  width: { xs: 160, md: 190 },
  aspectRatio: "1",
  bgcolor: "secondary.main",
  color: "common.white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export const copyColumnStyles = {
  gridColumn: { md: "8 / span 5" },
};

export const titleStyles = {
  mt: 2,
  fontSize: { xs: "3rem", md: "4.8rem" },
};

export const bodyStyles = {
  mt: 3,
  color: "text.secondary",
  fontSize: { xs: "1rem", md: "1.08rem" },
  lineHeight: 1.78,
};

export const promisesStyles = {
  mt: 4.5,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
  borderTop: "1px solid",
  borderColor: "divider",
};

export const promiseStyles = {
  py: 2.2,
  pr: 2,
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  borderBottom: "1px solid",
  borderColor: "divider",
  fontSize: "0.86rem",
  fontWeight: 600,
};
