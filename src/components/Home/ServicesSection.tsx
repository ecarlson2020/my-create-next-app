import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { services } from "../../config/home";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./ServicesSection.styles";
import {
  maxContent,
  section,
  sectionEyebrow,
  sectionHeading,
  sectionIntro,
} from "./shared.styles";

export function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ ...section, ...styles.section }}
    >
      <Box sx={maxContent}>
        <Box sx={styles.headingRow}>
          <Box>
            <Typography sx={sectionEyebrow}>What we do</Typography>
            <Typography component="h2" variant="h2" sx={sectionHeading}>
              One trusted crew.
              <br /> Every season.
            </Typography>
          </Box>
          <Typography sx={{ ...sectionIntro, ...styles.intro }}>
            From the first spring cleanup to the last winter storm, V3 keeps
            your outdoor spaces healthy, useful, and looking their best.
          </Typography>
        </Box>

        <Box sx={styles.grid}>
          {services.map((service, index) => (
            <Box
              component={motion.article}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              key={service.title}
              sx={styles.card}
            >
              <Box sx={styles.imageWrap}>
                <Box
                  component="img"
                  alt={service.title}
                  src={service.image}
                  sx={styles.image}
                />
              </Box>
              <Box sx={styles.cardBody}>
                <Box sx={styles.icon}>
                  <Icon name={service.icon} />
                </Box>
                <Typography component="h3" variant="h3" sx={styles.title}>
                  {service.title}
                </Typography>
                <Typography sx={styles.description}>
                  {service.description}
                </Typography>
                <Box component="ul" sx={styles.features}>
                  {service.features.map((feature) => (
                    <Box component="li" key={feature} sx={styles.feature}>
                      <Icon name="check" />
                      {feature}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
