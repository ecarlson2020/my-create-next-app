import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import { CONTACT, NAV_LINKS } from "../../config/home";
import {
  bottomStyles,
  footerLinkStyles,
  footerStyles,
  logoStyles,
  logoWrapStyles,
  topStyles,
} from "./Footer.styles";
import { sectionShell } from "./shared.styles";

export default function Footer() {
  return (
    <Box component="footer" sx={footerStyles}>
      <Box sx={sectionShell}>
        <Box sx={topStyles}>
          <Box>
            <Box sx={logoWrapStyles}>
              <Box
                component="img"
                src="/images/cb-waterworks-logo.webp"
                alt="C and B Waterworks Landscaping"
                sx={logoStyles}
              />
            </Box>
            <Typography
              sx={{
                mt: 2.5,
                color: "rgba(255,255,255,.6)",
                maxWidth: 430,
                lineHeight: 1.7,
              }}
            >
              Thoughtful landscapes and enduring spaces for homes along the
              Colorado Front Range.
            </Typography>
            <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="C and B Waterworks on Instagram"
                sx={{ color: "secondary.light" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="C and B Waterworks on Facebook"
                sx={{ color: "secondary.light" }}
              >
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ color: "secondary.light" }}>
              Explore
            </Typography>
            <Box sx={{ mt: 2 }}>
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={footerLinkStyles}
                >
                  {link.label}
                </Box>
              ))}
              <Box component="a" href="#contact" sx={footerLinkStyles}>
                Contact
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ color: "secondary.light" }}>
              Start a project
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box component="a" href={CONTACT.phoneHref} sx={footerLinkStyles}>
                {CONTACT.phoneDisplay}
              </Box>
              <Box
                component="a"
                href={`mailto:${CONTACT.email}`}
                sx={footerLinkStyles}
              >
                {CONTACT.email}
              </Box>
              <Typography
                sx={{ mt: 2, color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}
              >
                Serving Denver to Fort Collins and surrounding communities.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={bottomStyles}>
          <Typography sx={{ fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} C&amp;B Waterworks. All rights
            reserved.
          </Typography>
          <Typography sx={{ fontSize: "0.72rem" }}>
            Colorado designed · Colorado built
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
