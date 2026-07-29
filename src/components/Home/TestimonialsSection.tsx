import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { testimonials } from "../../config/home";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./TestimonialsSection.styles";
import { maxContent, section, sectionEyebrow } from "./shared.styles";

function Stars() {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <Icon name="star" key={index} />
      ))}
    </>
  );
}

export function TestimonialsSection() {
  return (
    <Box
      component="section"
      id="reviews"
      sx={{ ...section, ...styles.section }}
    >
      <Box sx={styles.glow} />
      <Box sx={{ ...maxContent, ...styles.content }}>
        <Box sx={styles.headingRow}>
          <Box>
            <Typography sx={{ ...sectionEyebrow, ...styles.eyebrow }}>
              Kind words
            </Typography>
            <Typography component="h2" variant="h2" sx={styles.heading}>
              Good work gets noticed.
            </Typography>
          </Box>
          <Box sx={styles.summary}>
            <Box sx={styles.rating}>
              <Stars />
            </Box>
            <Typography sx={styles.summaryText}>
              Five-star customer reviews
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.cards}>
          {testimonials.map((testimonial, index) => (
            <Box
              component={motion.article}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              key={testimonial.author}
              sx={styles.card}
            >
              <Typography aria-hidden="true" sx={styles.quoteMark}>
                “
              </Typography>
              <Typography component="blockquote" sx={styles.quote}>
                {testimonial.quote}
              </Typography>
              <Box sx={styles.authorRow}>
                <Typography sx={styles.author}>{testimonial.author}</Typography>
                <Box
                  aria-label="Five out of five stars"
                  sx={styles.reviewStars}
                >
                  <Stars />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
