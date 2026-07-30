import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CREAM } from "@/theme";
import {
  DARK_BACKGROUNDS,
  sectionBackgrounds,
  sectionStyles as s,
} from "./Section.styles";

interface SectionProps {
  children: ReactNode;
  /** Background treatment, including the accent colour blocks. */
  bg?: keyof typeof sectionBackgrounds;
  /** Render without the inner Container (full-bleed children). */
  disableContainer?: boolean;
  /** Reduced vertical rhythm, for stacked sections that read as one block. */
  tight?: boolean;
  /** Round the top corners and overlap the section above. */
  roundedTop?: boolean;
  /** Round the bottom corners. */
  roundedBottom?: boolean;
  id?: string;
  component?: "section" | "div" | "footer" | "article";
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

/** Consistent vertically-rhythmed page section with optional colour block. */
export default function Section({
  children,
  bg = "default",
  disableContainer = false,
  tight = false,
  roundedTop = false,
  roundedBottom = false,
  id,
  component = "section",
  maxWidth = "lg",
}: SectionProps) {
  const onDark = DARK_BACKGROUNDS.includes(bg);

  return (
    <Box
      component={component}
      id={id}
      sx={{
        ...s.root,
        ...(tight ? s.tight : {}),
        ...(roundedTop ? s.roundedTop : {}),
        ...(roundedBottom ? s.roundedBottom : {}),
        backgroundColor: sectionBackgrounds[bg],
        color: onDark ? CREAM : "text.primary",
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
