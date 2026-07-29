import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { links } from "@/config/homeContent";

import { heroStyles } from "./HeroSection.styles";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box component="section" id="top" sx={heroStyles.section}>
      <Box sx={heroStyles.grid}>
        <Box sx={heroStyles.content}>
          <Box
            component={motion.div}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <Typography component="p" sx={heroStyles.eyebrow}>
              Loveland, Colorado
            </Typography>
            <Typography variant="h1" sx={heroStyles.title}>
              Come as you are.{" "}
              <Box component="span" sx={heroStyles.titleAccent}>
                Meet Jesus here.
              </Box>
            </Typography>
            <Typography sx={heroStyles.description}>
              We’re a Bible-believing church for cowboys, country folks, and
              anyone looking for an honest place to worship, find hope, and feel
              at home.
            </Typography>
            <Box sx={heroStyles.actions}>
              <Button
                component="a"
                href="#visit"
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={heroStyles.primaryAction}
              >
                Plan your visit
              </Button>
              <Button
                component="a"
                href={links.vimeo}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                startIcon={<PlayArrowRoundedIcon />}
                sx={heroStyles.secondaryAction}
              >
                Watch a message
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={heroStyles.imageWrap}>
          <Box
            component={motion.img}
            src="/images/round-pen-service.jpeg"
            alt="A horse and trainer during a round pen service"
            initial={reduceMotion ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            sx={heroStyles.image}
          />
          <Box sx={heroStyles.imageOverlay} />
          <Box sx={heroStyles.serviceBadge}>
            <Typography sx={heroStyles.badgeSmall}>Join us Sunday</Typography>
            <Typography sx={heroStyles.badgeTime}>10:15</Typography>
            <Typography sx={heroStyles.badgeSmall}>Come as you are</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={heroStyles.values}>
        <Container sx={heroStyles.valuesInner}>
          {["Bible believing", "Christ centered", "All are welcome"].map(
            (value) => (
              <Typography key={value} sx={heroStyles.value}>
                {value}
              </Typography>
            ),
          )}
        </Container>
      </Box>
    </Box>
  );
}
