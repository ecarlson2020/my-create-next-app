import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { BOOKING_URL, INSTAGRAM_URL, navigationItems } from "@/config/home";

import * as styles from "./Footer.styles";

export default function Footer() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Box sx={styles.topRow}>
        <Box>
          <Typography component="p" sx={styles.eyebrow}>
            Longmont, Colorado
          </Typography>
          <Typography component="p" sx={styles.signoff}>
            See you in the chair.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/images/studio-boom/brand-mark.png"
          alt="Studio Boom"
          sx={styles.wordmark}
        />
      </Box>

      <Box sx={styles.linksGrid}>
        <Box
          component="nav"
          aria-label="Footer navigation"
          sx={styles.linkColumn}
        >
          <Typography component="p" sx={styles.linkHeading}>
            Explore
          </Typography>
          {navigationItems.map((item) => (
            <Box
              component="a"
              href={item.href}
              key={item.href}
              sx={styles.link}
            >
              {item.label}
            </Box>
          ))}
        </Box>
        <Box sx={styles.linkColumn}>
          <Typography component="p" sx={styles.linkHeading}>
            Connect
          </Typography>
          <Box component="a" href="tel:303-774-9880" sx={styles.link}>
            303-774-9880
          </Box>
          <Box
            component="a"
            href="mailto:hello@studioboom.com"
            sx={styles.link}
          >
            Email us
          </Box>
          <Box
            component="a"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            sx={styles.link}
          >
            Instagram ↗
          </Box>
        </Box>
        <Box sx={styles.bookingColumn}>
          <Typography component="p" sx={styles.linkHeading}>
            Ready when you are
          </Typography>
          <Box
            component="a"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            sx={styles.bigLink}
          >
            Book now <span aria-hidden="true">↗</span>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.bottomRow}>
        <Typography component="p" sx={styles.legal}>
          © {new Date().getFullYear()} Studio Boom Salon
        </Typography>
        <Box
          component="a"
          href="https://www.studioboomsalons.com/policies"
          target="_blank"
          rel="noreferrer"
          sx={styles.legalLink}
        >
          Salon policies ↗
        </Box>
        <Typography component="p" sx={styles.legal}>
          Hair for every version of you
        </Typography>
      </Box>
    </Box>
  );
}
