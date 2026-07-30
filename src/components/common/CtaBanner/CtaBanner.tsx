import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { company } from "@/config/company";
import { ctaBannerStyles as s } from "./CtaBanner.styles";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Hide the secondary "view services" action on the services page itself. */
  hideSecondary?: boolean;
}

export default function CtaBanner({
  eyebrow = "Begin",
  title = "Let's plan something unforgettable.",
  body = "Tell us about your day — where you're dreaming of, how you want it to feel, and what matters most to the two of you.",
  hideSecondary = false,
}: CtaBannerProps) {
  return (
    <Box sx={s.root}>
      <Typography component="p" sx={s.eyebrow}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" component="h2" sx={s.title}>
        {title}
      </Typography>
      <Typography variant="body1" sx={s.body}>
        {body}
      </Typography>
      <Box sx={s.actions}>
        <Button component={Link} href="/contact" sx={s.primary}>
          Inquire
        </Button>
        {!hideSecondary && (
          <Button
            component={Link}
            href="/services"
            variant="outlined"
            sx={s.secondary}
          >
            View services
          </Button>
        )}
        <Button
          component="a"
          href={company.phoneHref}
          variant="outlined"
          sx={s.secondary}
        >
          {company.phone}
        </Button>
      </Box>
    </Box>
  );
}
