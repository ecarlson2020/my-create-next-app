import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { homeHeroStyles as s } from "./HomeHero.styles";

export default function HomeHero() {
  return (
    <Box sx={s.root}>
      <Box sx={s.panel}>
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
        <Box sx={s.content}>
          <Typography component="p" sx={s.eyebrow}>
            Utah wedding planning &nbsp;·&nbsp; Near + far
          </Typography>
          <Typography variant="h1" component="h1" sx={s.title}>
            <Box component="span" sx={s.titleScript}>
              Artfully planned.
            </Box>{" "}
            <Box component="span" sx={s.titleRoman}>
              Beautifully lived.
            </Box>
          </Typography>
          <Typography component="p" sx={s.tagline}>
            Full-service planning, intentional design, and the calm confidence
            to enjoy every second.
          </Typography>
          <Button component={Link} href="/contact" sx={s.cta}>
            Work with us
          </Button>
        </Box>
        <Box sx={s.scrollCue} aria-hidden>
          <Box component="span" sx={s.scrollLine} />
          Scroll to discover
        </Box>
      </Box>
    </Box>
  );
}
