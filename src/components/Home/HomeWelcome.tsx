import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeIntro } from "@/config/company";
import { homeShared as sh } from "./shared.styles";

export default function HomeWelcome() {
  return (
    <Section>
      <Box sx={sh.split}>
        <Reveal>
          <Box sx={sh.frame}>
            <OptimizedImage
              name="home-welcome"
              alt="A reception table set with white florals overlooking the Utah mountains"
              cover
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </Box>
        </Reveal>
        <Reveal delay={120}>
          <Box sx={sh.bodyStack}>
            <SectionHeading
              eyebrow="Welcome"
              title="A Utah wedding + event planning company"
            />
            {homeIntro.map((text) => (
              <Typography key={text.slice(0, 30)} variant="body1" sx={sh.body}>
                {text}
              </Typography>
            ))}
            <Box component={Link} href="/team" sx={sh.linkCaps}>
              Meet the team —
            </Box>
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}
