import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./AboutSection.styles";
import {
  maxContent,
  section,
  sectionEyebrow,
  sectionHeading,
  textLink,
} from "./shared.styles";

const values = [
  {
    title: "Details matter",
    copy: "Thorough work, thoughtful cleanup, and a property that looks cared for.",
  },
  {
    title: "Communication matters",
    copy: "Clear expectations and a local team you can reach when you need them.",
  },
] as const;

export function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ ...section, ...styles.section }}>
      <Box sx={{ ...maxContent, ...styles.grid }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          sx={styles.imageColumn}
        >
          <Box sx={styles.imageFrame}>
            <Box
              component="img"
              src="/images/v3-family.webp"
              alt="The Vomacka family behind V3 Lawn Care"
              sx={styles.image}
            />
          </Box>
          <Box sx={styles.experienceCard}>
            <Typography sx={styles.experienceValue}>20+</Typography>
            <Typography sx={styles.experienceLabel}>
              Years of hands-on experience
            </Typography>
          </Box>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          sx={styles.content}
        >
          <Typography sx={sectionEyebrow}>Meet V3</Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{ ...sectionHeading, ...styles.heading }}
          >
            Three names.
            <br /> One family standard.
          </Typography>
          <Typography sx={styles.body}>
            V3 gets its name from Rick, Ryan, and Grant Vomacka. What started as
            a family business grew around one straightforward philosophy: treat
            others the way you want to be treated. That means honest
            recommendations, dependable communication, and pride in every last
            detail.
          </Typography>

          <Box sx={styles.values}>
            {values.map((value) => (
              <Box key={value.title} sx={styles.value}>
                <Typography sx={styles.valueTitle}>
                  <Icon name="check" />
                  {value.title}
                </Typography>
                <Typography sx={styles.valueCopy}>{value.copy}</Typography>
              </Box>
            ))}
          </Box>

          <Box component="a" href="#quote" sx={{ ...textLink, ...styles.link }}>
            Work with our family
            <Icon name="arrow" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
