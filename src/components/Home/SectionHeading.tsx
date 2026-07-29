import { Box, Typography } from "@mui/material";

import { sectionHeadingStyles } from "./SectionHeading.styles";
import { sharedStyles } from "./shared.styles";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Box sx={sectionHeadingStyles.container(align)}>
      <Typography
        component="p"
        sx={light ? sharedStyles.eyebrowLight : sharedStyles.eyebrow}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h2"
        sx={sectionHeadingStyles.title(Boolean(description), light)}
      >
        {title}
      </Typography>
      {description ? (
        <Typography sx={sectionHeadingStyles.description(light)}>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
