import { Box, Typography } from "@mui/material";

import { PROCESS_STEPS } from "../../config/home";
import {
  introStyles,
  sectionStyles,
  stepsStyles,
  stepStyles,
  titleStyles,
} from "./ProcessSection.styles";
import { sectionShell, sectionSpacing } from "./shared.styles";

export default function ProcessSection() {
  return (
    <Box
      component="section"
      id="process"
      sx={{ ...sectionStyles, ...sectionSpacing }}
    >
      <Box sx={sectionShell}>
        <Box sx={introStyles}>
          <Box>
            <Typography variant="overline" color="secondary.dark">
              A simple process
            </Typography>
            <Typography variant="h2" sx={titleStyles}>
              Clear at every turn.
            </Typography>
          </Box>
          <Typography
            sx={{ color: "text.secondary", lineHeight: 1.75, maxWidth: 560 }}
          >
            Great work starts with good communication. You’ll know what comes
            next, who is handling it, and how the details support the bigger
            vision.
          </Typography>
        </Box>

        <Box sx={stepsStyles}>
          {PROCESS_STEPS.map((step) => (
            <Box key={step.number} sx={stepStyles}>
              <Typography variant="overline" color="secondary.dark">
                Step {step.number}
              </Typography>
              <Typography
                variant="h3"
                sx={{ mt: 5, fontSize: { xs: "2.5rem", md: "3.2rem" } }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  lineHeight: 1.7,
                  maxWidth: 330,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
