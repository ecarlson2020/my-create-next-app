import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { BOOKING_URL, INSTAGRAM_URL } from "@/config/home";
import { imageRevealMotion, revealMotion } from "@/config/motion";

import * as shared from "./shared.styles";
import * as styles from "./Visit.styles";

const contactLinks = [
  { label: "Call", value: "303-774-9880", href: "tel:303-774-9880" },
  {
    label: "Email",
    value: "hello@studioboom.com",
    href: "mailto:hello@studioboom.com",
  },
  { label: "Follow", value: "@studioboomsalon", href: INSTAGRAM_URL },
] as const;

export default function Visit() {
  return (
    <Box id="visit" component="section" sx={styles.section}>
      <Box sx={styles.visitGrid}>
        <Box sx={styles.imagePanel}>
          <motion.div {...imageRevealMotion}>
            <Box
              component="img"
              src="/images/studio-boom/salon-exterior.jpg"
              alt="Studio Boom salon interior in Longmont"
              loading="lazy"
              sx={styles.image}
            />
          </motion.div>
          <Box sx={styles.locationBadge}>
            <Typography component="span" sx={styles.badgeLarge}>
              303
            </Typography>
            <Typography component="span" sx={styles.badgeSmall}>
              Longmont, Colorado
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.copyPanel}>
          <motion.div {...revealMotion}>
            <Typography component="p" sx={shared.eyebrow}>
              Pull up a chair
            </Typography>
            <Typography component="h2" variant="h2" sx={styles.title}>
              Your next good hair day starts{" "}
              <Box component="span" sx={styles.italic}>
                here.
              </Box>
            </Typography>
            <Box sx={styles.addressBlock}>
              <Typography component="span" sx={styles.addressLabel}>
                Find us
              </Typography>
              <Typography component="address" sx={styles.address}>
                1350 Ken Pratt Boulevard
                <br />
                Longmont, Colorado 80501
              </Typography>
              <Box
                component="a"
                href="https://maps.google.com/?q=1350+Ken+Pratt+Boulevard+Longmont+Colorado"
                target="_blank"
                rel="noreferrer"
                sx={shared.textLink}
              >
                Get directions ↗
              </Box>
            </Box>
            <Button
              component="a"
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              sx={shared.primaryButton}
            >
              Book an appointment ↗
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Box sx={styles.contactGrid}>
        {contactLinks.map((item) => (
          <Box
            component="a"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            key={item.label}
            sx={styles.contactItem}
          >
            <Typography component="span" sx={styles.contactLabel}>
              {item.label}
            </Typography>
            <Typography component="span" sx={styles.contactValue}>
              {item.value}
            </Typography>
            <Typography
              component="span"
              aria-hidden="true"
              sx={styles.contactArrow}
            >
              ↗
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
