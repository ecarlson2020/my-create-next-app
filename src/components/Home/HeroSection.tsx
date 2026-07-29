import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  backgroundImageStyles,
  contentStyles,
  detailItemStyles,
  detailsPanelStyles,
  eyebrowStyles,
  heroStyles,
  italicStyles,
  overlayStyles,
  summaryStyles,
  titleStyles,
} from "./HeroSection.styles";
import { sectionShell } from "./shared.styles";

export default function HeroSection() {
  return (
    <Box component="section" sx={heroStyles}>
      <Box
        component="img"
        src="/images/hero-landscape.webp"
        alt="Modern Colorado home surrounded by natural landscaping at dusk"
        sx={backgroundImageStyles}
      />
      <Box aria-hidden="true" sx={overlayStyles} />

      <Box sx={{ ...sectionShell, ...contentStyles }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="overline" sx={eyebrowStyles}>
            Crafted along the Colorado Front Range
          </Typography>
          <Typography variant="h1" sx={titleStyles}>
            Made for life
            <br />
            <Box component="span" sx={italicStyles}>
              at elevation.
            </Box>
          </Typography>
          <Typography sx={summaryStyles}>
            Thoughtful landscape design, enduring construction, and comfortable
            spaces shaped around the way Colorado lives.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4.5 }}
          >
            <Button
              href="#contact"
              variant="contained"
              color="secondary"
              endIcon={<ArrowOutwardIcon />}
              sx={{ color: "common.white" }}
            >
              Start your project
            </Button>
            <Button
              href="#work"
              variant="outlined"
              endIcon={<ArrowDownwardIcon />}
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "common.white",
                "&:hover": {
                  borderColor: "common.white",
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Explore our work
            </Button>
          </Stack>
        </motion.div>
      </Box>

      <Box sx={detailsPanelStyles}>
        <Box sx={detailItemStyles}>
          <Typography variant="overline" color="text.secondary">
            Experience
          </Typography>
          <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
            20+ years local
          </Typography>
        </Box>
        <Box sx={{ ...detailItemStyles, borderRight: 0 }}>
          <Typography variant="overline" color="text.secondary">
            First step
          </Typography>
          <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
            Free consultation
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
