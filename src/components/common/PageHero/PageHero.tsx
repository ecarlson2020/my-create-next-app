import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import { pageHeroStyles as s } from "./PageHero.styles";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Manifest key for the background photograph. */
  image: string;
  imageAlt: string;
}

/** Shared banner for every interior page. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <Box sx={s.root}>
      <Box sx={s.media}>
        <OptimizedImage
          name={image}
          alt={imageAlt}
          priority
          cover
          sizes="100vw"
        />
      </Box>
      <Box sx={s.scrim} />
      <Container maxWidth="lg" sx={s.content}>
        {eyebrow && (
          <Box sx={s.eyebrow}>
            <Box component="span" sx={s.rule} />
            {eyebrow}
          </Box>
        )}
        <Typography variant="h1" component="h1" sx={s.title}>
          {title}
        </Typography>
        {intro && (
          <Typography variant="body1" sx={s.intro}>
            {intro}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
