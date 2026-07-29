import { Box, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { introStyles } from "./IntroSection.styles";
import { sharedStyles } from "./shared.styles";

export function IntroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box component="section" id="our-story" sx={introStyles.section}>
      <Typography aria-hidden="true" sx={introStyles.backgroundWord}>
        HOME
      </Typography>
      <Container sx={introStyles.grid}>
        <Box
          component={motion.div}
          initial={reduceMotion ? false : { x: -24 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          sx={introStyles.imageColumn}
        >
          <Box
            component="img"
            src="/images/church-sign.jpg"
            alt="God’s Country Cowboy Church sign in Loveland"
            sx={introStyles.signImage}
          />
          <Box sx={introStyles.photoCard}>
            <Box
              component="img"
              src="/images/pastor-greg-and-mitzi.jpeg"
              alt="Pastor Greg and Mitzi"
              sx={introStyles.pastorImage}
            />
            <Typography sx={introStyles.photoCaption}>
              Greg &amp; Mitzi
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={reduceMotion ? false : { y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          sx={introStyles.content}
        >
          <Typography component="p" sx={sharedStyles.eyebrow}>
            Our story
          </Typography>
          <Typography variant="h2" sx={introStyles.title}>
            No polished boots required.
          </Typography>
          <Typography sx={introStyles.body}>
            God’s Country Cowboy Church began with a backyard Bible study. It
            moved into a small dairy barn and grew into the church family that
            now meets on Highway 34 in west Loveland.
          </Typography>
          <Typography sx={introStyles.body}>
            Greg and Mitzi saw that many people in the cowboy way of life did
            not feel at home in a traditional church. So they made a place where
            cowhands, farmers, families, and neighbors could hear God’s Word in
            a way that felt honest and familiar.
          </Typography>
          <Box sx={introStyles.quote}>
            <Typography sx={introStyles.quoteText}>
              “Our goal is to glorify God every day, in every way.”
            </Typography>
            <Typography sx={introStyles.quoteAttribution}>
              God’s Country Cowboy Church
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
