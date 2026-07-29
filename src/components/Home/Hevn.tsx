import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { EXTENSION_CONSULTATION_URL } from "@/config/home";
import { imageRevealMotion, revealMotion } from "@/config/motion";

import * as shared from "./shared.styles";
import * as styles from "./Hevn.styles";

const extensionDetails = [
  ["100%", "human Remy hair"],
  ["Custom", "colored for you"],
  ["6–8 wk", "maintenance rhythm"],
] as const;

export default function Hevn() {
  return (
    <Box id="hevn" component="section" sx={styles.section}>
      <Box sx={styles.grid}>
        <Box sx={styles.imageColumn}>
          <motion.div {...imageRevealMotion}>
            <Box sx={styles.imageFrame}>
              <Box
                component="img"
                src="/images/studio-boom/hevn-editorial.webp"
                alt="Editorial view of long dimensional brunette hair"
                loading="lazy"
                sx={styles.image}
              />
              <Typography component="span" sx={styles.imageLabel}>
                Seamless by design
              </Typography>
            </Box>
          </motion.div>
          <Box aria-hidden="true" sx={styles.imageOutline} />
        </Box>

        <Box sx={styles.copyColumn}>
          <motion.div {...revealMotion}>
            <Typography component="p" sx={shared.eyebrow}>
              HEVN Extensions
            </Typography>
            <Typography component="h2" variant="h2" sx={styles.title}>
              More hair.{" "}
              <Box component="span" sx={styles.italic}>
                Zero
              </Box>{" "}
              compromise.
            </Typography>
            <Typography component="p" sx={styles.lead}>
              Created by Studio Boom stylists, the HEVN method is designed to
              deliver natural-looking length and volume while protecting the
              integrity of your own hair.
            </Typography>
            <Typography component="p" sx={styles.body}>
              Every set is customized with highlights, lowlights, shadow
              rooting, and color melting—because “close enough” isn’t a color
              match.
            </Typography>
            <Box sx={styles.details}>
              {extensionDetails.map(([value, label]) => (
                <Box key={value} sx={styles.detail}>
                  <Typography component="strong" sx={styles.detailValue}>
                    {value}
                  </Typography>
                  <Typography component="span" sx={styles.detailLabel}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Button
              component="a"
              href={EXTENSION_CONSULTATION_URL}
              target="_blank"
              rel="noreferrer"
              sx={shared.lightButton}
            >
              Book a free consultation ↗
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
