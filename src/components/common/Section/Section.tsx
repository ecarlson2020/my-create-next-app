import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CREAM } from "@/theme";
import { sectionBackgrounds, sectionStyles as s } from "./Section.styles";

interface SectionProps {
  children: ReactNode;
  /** Background treatment. */
  bg?: keyof typeof sectionBackgrounds;
  /** Render without the inner Container (full-bleed children). */
  disableContainer?: boolean;
  /** Reduced vertical rhythm, for stacked sections that read as one block. */
  tight?: boolean;
  id?: string;
  component?: "section" | "div" | "footer" | "article";
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

/** Consistent vertically-rhythmed page section with optional background. */
export default function Section({
  children,
  bg = "default",
  disableContainer = false,
  tight = false,
  id,
  component = "section",
  maxWidth = "lg",
}: SectionProps) {
  return (
    <Box
      component={component}
      id={id}
      sx={{
        ...s.root,
        ...(tight ? s.tight : {}),
        backgroundColor: sectionBackgrounds[bg],
        color: bg === "dark" ? CREAM : "text.primary",
      }}
    >
      {disableContainer ? (
        children
      ) : (
        <Container maxWidth={maxWidth}>{children}</Container>
      )}
    </Box>
  );
}
