import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { company } from "@/config/company";
import { homeHeroStyles as s } from "./HomeHero.styles";

/** Two arch-topped frames that overlap the hero panel into the section below. */
const PEEK = [
  { name: "gallery-06", alt: "A couple with a horse in the autumn light" },
  {
    name: "gallery-20",
    alt: "A vintage china place setting with gold flatware",
  },
];

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
      </Box>

      <Box sx={s.peekRow} aria-hidden>
        {PEEK.map((frame, i) => (
          <Box
            key={frame.name}
            sx={{ ...s.peek, ...(i === 1 ? s.peekOffset : {}) }}
          >
            <OptimizedImage
              name={frame.name}
              alt={frame.alt}
              cover
              eager
              sizes="140px"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
