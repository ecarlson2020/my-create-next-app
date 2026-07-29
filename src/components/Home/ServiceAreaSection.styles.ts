export const sectionStyles = {
  bgcolor: "#173427",
  color: "common.white",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    width: { xs: 500, md: 900 },
    height: { xs: 500, md: 900 },
    right: { xs: -380, md: -450 },
    top: { xs: 140, md: -300 },
    border: "1px solid rgba(151,198,217,.22)",
    borderRadius: "50%",
    boxShadow:
      "0 0 0 90px rgba(151,198,217,.035), 0 0 0 180px rgba(151,198,217,.025)",
  },
};

export const gridStyles = {
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
  gap: { xs: 7, md: 4 },
};

export const introStyles = {
  gridColumn: { md: "span 6" },
};

export const titleStyles = {
  mt: 2,
  fontSize: { xs: "3.1rem", md: "5.2rem" },
  maxWidth: 700,
};

export const areaGridStyles = {
  gridColumn: { md: "8 / span 5" },
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 3,
  alignContent: "start",
};

export const areaListStyles = {
  mt: 2,
  pt: 2,
  borderTop: "1px solid rgba(255,255,255,.2)",
  display: "grid",
  gap: 1.1,
};
