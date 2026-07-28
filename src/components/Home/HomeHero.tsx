import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { company } from "@/config/company";
import { homeHeroStyles as s } from "./HomeHero.styles";

export default function HomeHero() {
  return (
    <Box sx={s.root}>
      <Box sx={s.media}>
        <OptimizedImage
          name="hero-home"
          alt="A candlelit winter reception beneath crystal chandeliers, planned by Planned by Peter"
          priority
          cover
          sizes="100vw"
        />
      </Box>
      <Box sx={s.scrim} />
      <Box sx={s.scrimGradient} />

      <Box sx={s.content}>
        <Typography component="p" sx={s.eyebrow}>
          {company.region} &nbsp;·&nbsp; Destination Weddings
        </Typography>
        <Typography variant="h1" component="h1" sx={s.title}>
          Artfully planned,
          <br />
          beautifully lived.
        </Typography>
        <Typography component="p" sx={s.tagline}>
          {company.tagline}
        </Typography>
        <Button component={Link} href="/contact" sx={s.cta}>
          Inquire
        </Button>
      </Box>

      <Box sx={s.scrollHint} aria-hidden>
        <Box sx={s.scrollLine} />
        Scroll
      </Box>
    </Box>
  );
}
