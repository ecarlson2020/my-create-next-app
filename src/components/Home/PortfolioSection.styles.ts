export const sectionStyles = {
  bgcolor: "#10251b",
  color: "common.white",
};

export const galleryStyles = {
  mt: { xs: 7, md: 10 },
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(12, 1fr)",
  },
  gridAutoRows: { xs: 360, md: 260 },
  gap: { xs: 2, md: 2.5 },
};

export const projectStyles = {
  position: "relative",
  overflow: "hidden",
  bgcolor: "primary.main",
  "&:hover img": { transform: "scale(1.04)" },
  "&:hover .project-caption": { transform: "translateY(0)" },
};

export const projectImageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 750ms cubic-bezier(.22,1,.36,1)",
};

export const projectCaptionStyles = {
  position: "absolute",
  inset: "auto 0 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  gap: 2,
  px: 2.5,
  py: 2,
  color: "common.white",
  background: "linear-gradient(0deg, rgba(7,18,12,.88), transparent)",
  transform: { md: "translateY(8px)" },
  transition: "transform 300ms ease",
};
