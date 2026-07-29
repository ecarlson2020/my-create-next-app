import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import { Box, Container, Typography } from "@mui/material";

import { links, navigationItems } from "@/config/homeContent";

import { footerStyles } from "./Footer.styles";

export function Footer() {
  return (
    <Box component="footer" sx={footerStyles.footer}>
      <Container>
        <Box sx={footerStyles.grid}>
          <Box>
            <Box sx={footerStyles.brand}>
              <Box sx={footerStyles.mark}>
                <LandscapeRoundedIcon />
              </Box>
              <Typography sx={footerStyles.brandName}>
                God’s Country
                <br />
                Cowboy Church
              </Typography>
            </Box>
            <Typography sx={footerStyles.mission}>
              A Bible-believing, Christ-centered church helping folks find hope
              and purpose in Jesus—every day, in every way.
            </Typography>
          </Box>

          <Box>
            <Typography sx={footerStyles.heading}>Explore</Typography>
            <Box sx={footerStyles.links}>
              {navigationItems.map((item) => (
                <Box
                  key={item.href}
                  component="a"
                  href={item.href}
                  sx={footerStyles.link}
                >
                  {item.label}
                </Box>
              ))}
              <Box component="a" href="#visit" sx={footerStyles.link}>
                Plan a visit
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography sx={footerStyles.heading}>Connect</Typography>
            <Typography sx={footerStyles.contact}>
              5505 West Highway 34
              <br />
              Loveland, CO
            </Typography>
            <Box sx={footerStyles.links}>
              <Box component="a" href={links.phone} sx={footerStyles.link}>
                (970) 635-0044
              </Box>
              <Box
                component="a"
                href={links.vimeo}
                target="_blank"
                rel="noreferrer"
                sx={footerStyles.link}
              >
                Vimeo messages
              </Box>
              <Box
                component="a"
                href={links.facebook}
                target="_blank"
                rel="noreferrer"
                sx={footerStyles.link}
              >
                Facebook group
              </Box>
              <Box
                component="a"
                href={links.donate}
                target="_blank"
                rel="noreferrer"
                sx={footerStyles.link}
              >
                Give online
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={footerStyles.bottom}>
          <Typography sx={footerStyles.legal}>
            © {new Date().getFullYear()} God’s Country Cowboy Church
          </Typography>
          <Typography sx={footerStyles.legal}>
            Come as you are. All are welcome.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
