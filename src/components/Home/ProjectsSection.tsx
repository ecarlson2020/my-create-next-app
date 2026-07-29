import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../../config/home";
import { styles } from "./ProjectsSection.styles";
import {
  maxContent,
  section,
  sectionEyebrow,
  sectionHeading,
  sectionIntro,
} from "./shared.styles";

export function ProjectsSection() {
  return (
    <Box component="section" id="work" sx={{ ...section, ...styles.section }}>
      <Box sx={maxContent}>
        <Box sx={styles.headingRow}>
          <Box>
            <Typography sx={sectionEyebrow}>Selected projects</Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{ ...sectionHeading, ...styles.heading }}
            >
              Real yards.
              <br /> Remarkable changes.
            </Typography>
          </Box>
          <Typography sx={{ ...sectionIntro, ...styles.intro }}>
            Every photo below comes from V3’s own project gallery—real work for
            real Northern Colorado homeowners.
          </Typography>
        </Box>

        <Box
          component={motion.article}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.65 }}
          sx={styles.beforeAfter}
        >
          <Box sx={styles.beforeAfterCopy}>
            <Typography sx={styles.projectNumber}>
              Project spotlight · 01
            </Typography>
            <Typography
              component="h3"
              variant="h3"
              sx={styles.beforeAfterHeading}
            >
              From overgrown to thoughtfully renewed.
            </Typography>
            <Typography sx={styles.beforeAfterText}>
              A refreshed landscape can completely change how a home feels. V3
              pairs practical plans with clean installation and careful
              finishing.
            </Typography>
          </Box>
          <Box sx={styles.beforeAfterImages}>
            <Box sx={styles.comparisonImage}>
              <Box
                component="img"
                src="/images/project-before.webp"
                alt="Overgrown garden before V3 landscaping"
                sx={styles.image}
              />
              <Box component="span" sx={styles.imageLabel}>
                Before
              </Box>
            </Box>
            <Box sx={styles.comparisonImage}>
              <Box
                component="img"
                src="/images/project-after.webp"
                alt="Freshly landscaped garden after V3's work"
                sx={styles.image}
              />
              <Box component="span" sx={styles.imageLabel}>
                After
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.gallery}>
          {projects.map((project, index) => (
            <Box
              component={motion.article}
              data-size={project.size}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              key={project.label}
              sx={styles.project}
            >
              <Box
                component="img"
                alt={project.alt}
                src={project.image}
                sx={styles.projectImage}
              />
              <Box sx={styles.projectOverlay} />
              <Typography sx={styles.projectLabel}>{project.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
