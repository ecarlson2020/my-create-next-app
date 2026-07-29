import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { BOOKING_URL } from "@/config/home";
import { imageRevealMotion, revealMotion } from "@/config/motion";

import * as shared from "./shared.styles";
import * as styles from "./Hero.styles";

export default function Hero() {
  return (
    <Box id="home" component="section" sx={styles.hero}>
      <Box sx={styles.heroGrid}>
        <Box sx={styles.copyColumn}>
          <motion.div {...revealMotion}>
            <Typography component="p" sx={styles.kicker}>
              Longmont’s home for very good hair
            </Typography>
            <Typography component="h1" variant="h1" sx={styles.title}>
              Hair that looks like{" "}
              <Box component="span" sx={styles.italic}>
                you
              </Box>
              —only louder.
            </Typography>
            <Typography component="p" sx={styles.intro}>
              Precision cuts, dimensional color, curl expertise, and
              damage-conscious extensions—made personal by artists who listen.
            </Typography>
            <Box sx={styles.heroActions}>
              <Button
                component="a"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                sx={shared.primaryButton}
              >
                Book your chair ↗
              </Button>
              <Box component="a" href="#services" sx={shared.textLink}>
                Explore services ↓
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Box sx={styles.imageColumn}>
          <motion.div {...imageRevealMotion}>
            <Box sx={styles.imageFrame}>
              <Box
                component="img"
                src="/images/studio-boom/salon-exterior.jpg"
                alt="Warm wood styling stations inside Studio Boom salon"
                loading="eager"
                sx={styles.heroImage}
              />
              <Box sx={styles.imageStamp}>
                <Typography component="span" sx={styles.stampTop}>
                  Come as you are
                </Typography>
                <Typography component="span" sx={styles.stampBottom}>
                  Leave more you
                </Typography>
              </Box>
            </Box>
          </motion.div>
          <Box aria-hidden="true" sx={styles.blueBlock} />
          <Box aria-hidden="true" sx={styles.limeDot} />
        </Box>
      </Box>
      <Box sx={styles.heroFooter}>
        <Typography component="span">1350 Ken Pratt Blvd.</Typography>
        <Typography component="span">Longmont, CO</Typography>
        <Typography component="span">Est. 2002</Typography>
      </Box>
    </Box>
  );
}
