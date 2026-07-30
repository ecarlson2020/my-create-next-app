import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { sectionHeadingStyles as s } from "./SectionHeading.styles";

interface SectionHeadingProps {
  /** Small tracked-caps label above the title. */
  eyebrow?: string;
  title: ReactNode;
  /** Supporting paragraph(s) below the title. */
  intro?: readonly string[] | string;
  centered?: boolean;
  /** Invert colours for use on the burgundy sections. */
  onDark?: boolean;
  /** Allow a longer measure on the title (for one-line page titles). */
  wide?: boolean;
  component?: "h1" | "h2" | "h3";
  variant?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
  onDark = false,
  wide = false,
  component = "h2",
  variant = "h2",
}: SectionHeadingProps) {
  const paragraphs = typeof intro === "string" ? [intro] : (intro ?? []);

  return (
    <Box sx={{ ...s.root, ...(centered ? s.centered : {}) }}>
      {eyebrow && (
        <Box sx={{ ...s.eyebrow, ...(onDark ? s.eyebrowOnDark : {}) }}>
          <Box component="span" sx={s.rule} />
          {eyebrow}
        </Box>
      )}
      <Typography
        variant={variant}
        component={component}
        sx={{
          ...(wide ? s.titleWide : s.title),
          ...(onDark ? { color: "inherit" } : { color: "primary.main" }),
        }}
      >
        {title}
      </Typography>
      {paragraphs.map((text) => (
        <Typography
          key={text.slice(0, 40)}
          variant="body1"
          sx={{ ...s.intro, ...(onDark ? s.introOnDark : {}) }}
        >
          {text}
        </Typography>
      ))}
    </Box>
  );
}
