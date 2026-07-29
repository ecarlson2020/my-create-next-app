import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { BOOKING_URL, servicePreviews } from "@/config/home";
import { revealMotion } from "@/config/motion";

import * as shared from "./shared.styles";
import * as styles from "./Services.styles";

export default function Services() {
  return (
    <Box id="services" component="section" sx={styles.section}>
      <Box sx={styles.introGrid}>
        <motion.div {...revealMotion}>
          <Typography component="p" sx={shared.eyebrow}>
            The Studio Boom difference
          </Typography>
          <Typography component="h2" variant="h2" sx={styles.introTitle}>
            Good hair starts with being heard.
          </Typography>
        </motion.div>
        <motion.div {...revealMotion}>
          <Box sx={styles.introCopyWrap}>
            <Typography component="p" sx={styles.introLead}>
              We’re a collective of independent thinkers, careful listeners, and
              relentless learners.
            </Typography>
            <Typography component="p" sx={styles.introBody}>
              Our level-based team makes specialized care more accessible while
              keeping education, technique, and the integrity of your hair at
              the center of every appointment.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Box sx={styles.servicesHeader}>
        <Typography component="p" sx={shared.eyebrow}>
          Choose your thing
        </Typography>
        <Typography component="h2" variant="h2" sx={shared.sectionTitle}>
          What are we{" "}
          <Box component="span" sx={shared.editorialItalic}>
            making
          </Box>{" "}
          today?
        </Typography>
      </Box>

      <Box sx={styles.cardGrid}>
        {servicePreviews.map((service) => (
          <motion.div {...revealMotion} key={service.title}>
            <Box
              component="article"
              data-tone={service.tone}
              sx={styles.serviceCard}
            >
              <Box sx={styles.cardTop}>
                <Typography component="span" sx={styles.cardNumber}>
                  {service.number}
                </Typography>
                <Typography component="span" sx={styles.cardPrice}>
                  {service.price}
                </Typography>
              </Box>
              <Box>
                <Typography component="h3" sx={styles.cardTitle}>
                  {service.title}
                </Typography>
                <Typography component="p" sx={styles.cardBody}>
                  {service.description}
                </Typography>
              </Box>
              <Box
                component="a"
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                sx={styles.cardLink}
              >
                Find your service <span aria-hidden="true">↗</span>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box sx={styles.serviceNote}>
        <Typography component="p" sx={styles.noteText}>
          Not sure what to book? Call us at{" "}
          <Box component="a" href="tel:303-774-9880" sx={styles.inlineLink}>
            303-774-9880
          </Box>
          —we’ll get you to the right chair.
        </Typography>
        <Box
          component="a"
          href="https://www.studioboomsalons.com/services"
          target="_blank"
          rel="noreferrer"
          sx={shared.textLink}
        >
          View full menu ↗
        </Box>
      </Box>
    </Box>
  );
}
