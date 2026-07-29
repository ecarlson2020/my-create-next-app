import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import ChildCareRoundedIcon from "@mui/icons-material/ChildCareRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { links, ministryItems } from "@/config/homeContent";

import { ministriesStyles } from "./MinistriesSection.styles";
import { SectionHeading } from "./SectionHeading";

const ministryIcons = [
  ChildCareRoundedIcon,
  VolunteerActivismRoundedIcon,
  Diversity1RoundedIcon,
];

export function MinistriesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box component="section" id="ministries" sx={ministriesStyles.section}>
      <Container>
        <SectionHeading
          eyebrow="There’s a place for you"
          title="Faith grows better together."
          description="Church is more than an hour on Sunday. It is a family learning to follow Jesus, care for neighbors, and walk through real life side by side."
        />
        <Box sx={ministriesStyles.cards}>
          {ministryItems.map((item, index) => {
            const Icon = ministryIcons[index];

            return (
              <Box
                key={item.title}
                component={motion.article}
                initial={reduceMotion ? false : { y: 25 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                sx={ministriesStyles.card}
              >
                <Typography aria-hidden="true" sx={ministriesStyles.number}>
                  {item.accent}
                </Typography>
                <Box sx={ministriesStyles.icon}>
                  <SvgIcon component={Icon} />
                </Box>
                <Typography variant="h3" sx={ministriesStyles.title}>
                  {item.title}
                </Typography>
                <Typography sx={ministriesStyles.body}>
                  {item.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box sx={ministriesStyles.footer}>
          <Box>
            <Typography sx={ministriesStyles.footerTitle}>
              Need someone to pray with you?
            </Typography>
            <Typography sx={ministriesStyles.footerBody}>
              You do not have to carry it alone. Share a request with our church
              family.
            </Typography>
          </Box>
          <Button
            component="a"
            href={links.prayer}
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={ministriesStyles.prayerButton}
          >
            Request prayer
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
