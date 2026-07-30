import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeIntro } from "@/config/company";
import { homeWelcomeStyles as s } from "./HomeWelcome.styles";

export default function HomeWelcome() {
  return (
    <Box component="section" sx={s.root}>
      <Container maxWidth="lg">
        <Box sx={s.ribbon}>
          <Box component="span">Full-service planning</Box>
          <Box component="span" sx={s.ribbonMark} aria-hidden>
            ✦
          </Box>
          <Box component="span">Intentional design</Box>
          <Box component="span" sx={s.ribbonMark} aria-hidden>
            ✦
          </Box>
          <Box component="span">Seamless coordination</Box>
        </Box>

        <Box sx={s.grid}>
          <Reveal>
            <Box sx={s.collage}>
              <Box sx={s.mainImage}>
                <OptimizedImage
                  name="home-welcome"
                  alt="A reception table set with white florals overlooking the Utah mountains"
                  cover
                  eager
                  sizes="(max-width: 900px) 88vw, 42vw"
                />
              </Box>
              <Box sx={s.accentImage}>
                <OptimizedImage
                  name="gallery-43"
                  alt="A wedding invitation suite with flowers and heirloom details"
                  cover
                  sizes="(max-width: 900px) 42vw, 19vw"
                />
              </Box>
              <Box sx={s.locationSeal}>
                <Box component="span">Based in</Box>
                <strong>Utah</strong>
                <Box component="span">Traveling everywhere</Box>
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={120}>
            <Box sx={s.bodyStack}>
              <SectionHeading
                eyebrow="Welcome"
                title={
                  <>
                    You bring the love.
                    <br />
                    We&apos;ll bring the calm.
                  </>
                }
              />
              {homeIntro.map((text) => (
                <Typography key={text.slice(0, 30)} variant="body1" sx={s.body}>
                  {text}
                </Typography>
              ))}
              <Box component={Link} href="/team" sx={s.link}>
                Meet Planned by Peter
                <Box component="span" aria-hidden>
                  →
                </Box>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
