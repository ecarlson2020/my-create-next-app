import { Box, Typography } from "@mui/material";
import { navItems } from "../../config/home";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./Footer.styles";
import { maxContent } from "./shared.styles";

export function Footer() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={maxContent}>
        <Box sx={styles.grid}>
          <Box>
            <Box sx={styles.brand}>
              <Box
                component="img"
                src="/images/v3-logo.png"
                alt=""
                sx={styles.logo}
              />
              <Typography sx={styles.brandName}>V3 Lawn Care</Typography>
            </Box>
            <Typography sx={styles.tagline}>
              Family-owned lawn care, landscaping, irrigation, and snow removal
              for Northern Colorado homes and businesses.
            </Typography>
            <Box
              aria-label="V3 Lawn Care on Facebook"
              component="a"
              href="https://www.facebook.com/v3lawns/"
              rel="noreferrer"
              target="_blank"
              sx={styles.social}
            >
              <Icon name="facebook" />
            </Box>
          </Box>

          <Box>
            <Typography sx={styles.columnTitle}>Explore</Typography>
            <Box sx={styles.links}>
              {navItems.map((item) => (
                <Box
                  component="a"
                  href={item.href}
                  key={item.href}
                  sx={styles.link}
                >
                  {item.label}
                </Box>
              ))}
              <Box component="a" href="#quote" sx={styles.link}>
                Free quote
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography sx={styles.columnTitle}>Get in touch</Typography>
            <Box sx={styles.links}>
              <Box component="a" href="tel:+13037093757" sx={styles.link}>
                (303) 709-3757
              </Box>
              <Typography sx={styles.link}>8130 Lighthouse Lane</Typography>
              <Typography sx={styles.link}>Fort Collins, CO 80528</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.bottom}>
          <Typography component="span">
            © {new Date().getFullYear()} V3 Lawn Care. All rights reserved.
          </Typography>
          <Typography component="span">
            Treat others the way you want to be treated.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
