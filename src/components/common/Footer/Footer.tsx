import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { company } from "@/config/company";
import { navItems } from "@/config/nav";
import Awards from "@/components/common/Awards/Awards";
import SocialLinks from "@/components/common/SocialLinks/SocialLinks";
import { footerStyles as s } from "./Footer.styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={s.root}>
      <Container maxWidth="lg">
        <Box sx={s.invitation}>
          <Typography component="p" sx={s.invitationEyebrow}>
            Utah + destination weddings
          </Typography>
          <Typography component="p" sx={s.invitationTitle}>
            Let&apos;s make it unforgettable.
          </Typography>
        </Box>
        <Box sx={s.top}>
          <Box>
            <Box component="span" sx={s.wordmarkTop} display="block">
              {company.wordmarkTop}
            </Box>
            <Box component="span" sx={s.wordmarkBottom} display="block">
              {company.wordmarkBottom}
            </Box>
            <Typography variant="body2" sx={s.blurb}>
              {company.tagline}
            </Typography>
          </Box>

          <Box>
            <Box component="span" sx={s.colTitle}>
              Explore
            </Box>
            <Box sx={s.linkCol}>
              {navItems.map((item) => (
                <Box
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={s.link}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Box component="span" sx={s.colTitle}>
              Get in touch
            </Box>
            <Box sx={s.linkCol}>
              <Box component="a" href={company.emailHref} sx={s.link}>
                {company.email}
              </Box>
              <Box component="a" href={company.phoneHref} sx={s.link}>
                {company.phone}
              </Box>
              <Box component="span" sx={{ ...s.link, opacity: 0.7 }}>
                {company.serviceAreas.slice(0, 4).join(" · ")}
              </Box>
              <Box sx={{ mt: 1.5 }}>
                <SocialLinks showHandle onDark />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={s.bottom}>
          <Box component="span" sx={s.fineprint}>
            © {year} {company.legalName}
          </Box>
          <Awards compact onDark />
        </Box>
      </Container>
    </Box>
  );
}
