import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Reveal from "@/components/common/Reveal/Reveal";
import { processSteps } from "@/config/process";
import { homeShared as sh } from "./shared.styles";
import { homeProcessStyles as s, STEP_COLORS } from "./HomeProcess.styles";

/** Five-colour teaser for /process — the full copy lives on that page. */
export default function HomeProcess() {
  return (
    <Section bg="blueSoft" roundedTop roundedBottom>
      <SectionHeading
        eyebrow="Process"
        title="From first conversation to final send-off"
        intro="Five stages, each designed so the day itself feels effortless — because everything behind it was decided long before."
        centered
      />
      <Box sx={s.grid}>
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 80}>
            <Box sx={s.cell}>
              <Box
                sx={{ ...s.disc, backgroundColor: STEP_COLORS[i] }}
                aria-hidden
              >
                {step.number}
              </Box>
              <Typography component="h3" sx={s.short}>
                {step.short}
              </Typography>
              <Typography component="p" sx={s.title}>
                {step.title}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
      <Box sx={s.action}>
        <Box component={Link} href="/process" sx={sh.linkPill}>
          See the full process
        </Box>
      </Box>
    </Section>
  );
}
