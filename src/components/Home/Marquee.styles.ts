export const marquee = {
  overflow: "hidden",
  width: "100%",
  py: 2.25,
  backgroundColor: "#171713",
  color: "#fffdf8",
};

export const track = {
  display: "flex",
  width: "max-content",
  animation: "marquee 28s linear infinite",
  "@keyframes marquee": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
};

export const group = {
  display: "flex",
  alignItems: "center",
};

export const item = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 3, md: 4.5 },
  pl: { xs: 3, md: 4.5 },
};

export const label = {
  fontSize: { xs: "0.75rem", md: "0.82rem" },
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

export const spark = {
  color: "#ddf45f",
  fontSize: "1.1rem",
};
