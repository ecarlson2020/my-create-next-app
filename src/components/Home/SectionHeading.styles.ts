export const sectionHeadingStyles = {
  container: (align: "left" | "center") => ({
    maxWidth: 760,
    mx: align === "center" ? "auto" : 0,
    mb: { xs: 5, md: 7 },
    textAlign: align,
  }),
  title: (hasDescription: boolean, light: boolean) => ({
    mb: hasDescription ? 2.5 : 0,
    color: light ? "#FFF9EE" : "text.primary",
    fontSize: { xs: "2.35rem", sm: "3rem", md: "4rem" },
    lineHeight: 1.06,
  }),
  description: (light: boolean) => ({
    color: light ? "rgba(255, 249, 238, 0.72)" : "text.secondary",
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.8,
  }),
} as const;
