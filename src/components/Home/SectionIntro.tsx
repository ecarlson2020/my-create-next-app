import { Box, Typography } from "@mui/material";

import {
  descriptionStyles,
  labelStyles,
  titleStyles,
  wrapperStyles,
} from "./SectionIntro.styles";

interface SectionIntroProps {
  readonly label: string;
  readonly title: string;
  readonly description?: string;
  readonly light?: boolean;
}

export default function SectionIntro({
  label,
  title,
  description,
  light = false,
}: SectionIntroProps) {
  return (
    <Box sx={wrapperStyles}>
      <Typography
        variant="overline"
        sx={{
          ...labelStyles,
          color: light ? "secondary.light" : "secondary.dark",
        }}
      >
        {label}
      </Typography>
      <Box>
        <Typography
          variant="h2"
          sx={{
            ...titleStyles,
            color: light ? "common.white" : "text.primary",
          }}
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            sx={{
              ...descriptionStyles,
              color: light ? "rgba(255,255,255,0.68)" : "text.secondary",
            }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}
