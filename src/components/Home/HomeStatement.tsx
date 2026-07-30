import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeStatement } from "@/config/company";
import { homeStatementStyles as s } from "./HomeStatement.styles";

/** A cinematic pause between the services and the planning process. */
export default function HomeStatement() {
  return (
    <Box component="section" sx={s.root}>
      <Box sx={s.media}>
        <OptimizedImage
          name="gallery-28"
          alt="A newly married couple embracing in the Utah mountains"
          cover
          sizes="100vw"
        />
      </Box>
      <Box sx={s.scrim} />
      <Container maxWidth="lg" sx={s.container}>
        <Reveal>
          <Box sx={s.content}>
            <Typography component="p" sx={s.eyebrow}>
              Why Planned by Peter
            </Typography>
            <Typography component="h2" sx={s.title}>
              The plan behind
              <br />
              the party.
            </Typography>
            <Typography component="p" sx={s.statement}>
              {homeStatement}
            </Typography>
            <Button component={Link} href="/contact" sx={s.cta}>
              Let&apos;s work together
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
