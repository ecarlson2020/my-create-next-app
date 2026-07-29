import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./HeroSection.styles";
import { maxContent, primaryButton } from "./shared.styles";

const trustItems = [
  { label: "Years of experience", value: "20+" },
  { label: "Locally owned", value: "Family" },
  { label: "Quote & consultation", value: "Free" },
  { label: "Annual contract", value: "None" },
] as const;

export function HeroSection() {
  return (
    <Box component="section" id="top" sx={styles.hero}>
      <Box sx={{ ...maxContent, ...styles.heroInner }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          sx={styles.content}
        >
          <Box sx={styles.eyebrow}>
            <Box component="span" sx={styles.eyebrowDot} />
            Northern Colorado lawn & landscape
          </Box>
          <Typography component="h1" variant="h1" sx={styles.heading}>
            A better yard
            <Box component="span" sx={styles.headingAccent}>
              starts right here.
            </Box>
          </Typography>
          <Typography sx={styles.description}>
            Dependable lawn care, inspired landscapes, irrigation, and snow
            removal from a local family that treats every property like it’s
            their own.
          </Typography>
          <Box sx={styles.actions}>
            <Button
              endIcon={<Icon name="arrow" />}
              href="#quote"
              size="large"
              variant="contained"
              sx={primaryButton}
            >
              Start with a free quote
            </Button>
            <Box component="a" href="tel:+13037093757" sx={styles.callLink}>
              <Icon name="phone" />
              (303) 709-3757
            </Box>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          sx={styles.imageWrap}
        >
          <Box
            component="img"
            src="/images/hero-yard.webp"
            alt="Lawn maintained by V3 Lawn Care in Northern Colorado"
            sx={styles.image}
          />
          <Box sx={styles.imageOverlay} />
          <Box sx={styles.floatingCard}>
            <Box sx={styles.floatingIcon}>
              <Icon name="check" />
            </Box>
            <Box>
              <Typography sx={styles.floatingTitle}>
                Care you can count on
              </Typography>
              <Typography sx={styles.floatingCopy}>
                Residential · Commercial · HOA
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={maxContent}>
        <Box sx={styles.trustRow}>
          {trustItems.map((item) => (
            <Box key={item.label} sx={styles.trustItem}>
              <Typography sx={styles.trustValue}>{item.value}</Typography>
              <Typography sx={styles.trustLabel}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
