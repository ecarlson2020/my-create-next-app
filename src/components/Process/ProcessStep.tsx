import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import type { ProcessStep as Step } from "@/config/process";
import { processStepStyles as s } from "./ProcessStep.styles";

interface ProcessStepProps {
  step: Step;
  /** Alternates the image side down the page. */
  reversed?: boolean;
}

export default function ProcessStep({
  step,
  reversed = false,
}: ProcessStepProps) {
  return (
    <Box sx={{ ...s.root, ...(reversed ? s.reversed : {}) }}>
      <Reveal>
        <Box sx={s.frame}>
          <OptimizedImage
            name={step.image}
            alt={step.imageAlt}
            cover
            sizes="(max-width: 900px) 92vw, 46vw"
          />
        </Box>
      </Reveal>
      <Reveal delay={120}>
        <Box sx={s.body}>
          <Typography component="span" sx={s.number}>
            {step.number}
          </Typography>
          <Typography component="span" sx={s.eyebrow}>
            {step.short}
          </Typography>
          <Typography variant="h3" component="h2" sx={s.title}>
            {step.title}
          </Typography>
          <Typography variant="body1" sx={s.text}>
            {step.body}
          </Typography>
        </Box>
      </Reveal>
    </Box>
  );
}
