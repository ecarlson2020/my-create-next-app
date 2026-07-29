import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { roundPenStyles } from "./RoundPenSection.styles";
import { sharedStyles } from "./shared.styles";

export function RoundPenSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box component="section" id="round-pen" sx={roundPenStyles.section}>
      <Container sx={roundPenStyles.grid}>
        <Box
          component={motion.div}
          initial={reduceMotion ? false : { x: -25 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          sx={roundPenStyles.gallery}
        >
          <Box sx={roundPenStyles.mainImageWrap}>
            <Box
              component="img"
              src="/images/round-pen-family.png"
              alt="Horseback riders gathered for a round pen message"
              sx={roundPenStyles.mainImage}
            />
          </Box>
          <Box sx={roundPenStyles.secondaryImageWrap}>
            <Box
              component="img"
              src="/images/round-pen-rider.png"
              alt="A rider circles the round pen during the service"
              sx={roundPenStyles.secondaryImage}
            />
            <Typography sx={roundPenStyles.secondaryCaption}>
              Faith illustrated in the saddle.
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={reduceMotion ? false : { y: 25 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          sx={roundPenStyles.content}
        >
          <Typography component="p" sx={sharedStyles.eyebrowLight}>
            Only at cowboy church
          </Typography>
          <Typography variant="h2" sx={roundPenStyles.title}>
            Worship with a little dust in the air.
          </Typography>
          <Typography sx={roundPenStyles.body}>
            During the summer, some services move outside to the round pen.
            Horse trainer Joe Andrews works with a horse while sharing a message
            rooted in God’s Word—the horse provides the illustration.
          </Typography>
          <Typography sx={roundPenStyles.body}>
            Pull up in your pickup, bring a chair, and experience church in a
            way that could only happen in God’s country.
          </Typography>
          <Box sx={roundPenStyles.highlight}>
            <Box sx={roundPenStyles.highlightIcon}>
              <AutoStoriesRoundedIcon />
            </Box>
            <Box>
              <Typography sx={roundPenStyles.highlightTitle}>
                The setting is different. The message is the same.
              </Typography>
              <Typography sx={roundPenStyles.highlightBody}>
                Christ-centered teaching, honest fellowship, and an open
                invitation.
              </Typography>
            </Box>
          </Box>
          <Button
            component="a"
            href="#gatherings"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={roundPenStyles.link}
          >
            See regular gatherings
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
