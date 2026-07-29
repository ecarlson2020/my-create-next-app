import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { artistPreviews } from "@/config/home";
import { revealMotion } from "@/config/motion";

import * as shared from "./shared.styles";
import * as styles from "./Team.styles";

export default function Team() {
  return (
    <Box id="artists" component="section" sx={styles.section}>
      <Box sx={styles.headerGrid}>
        <motion.div {...revealMotion}>
          <Typography component="p" sx={shared.eyebrow}>
            Meet your people
          </Typography>
          <Typography component="h2" variant="h2" sx={shared.sectionTitle}>
            Artists with{" "}
            <Box component="span" sx={shared.editorialItalic}>
              range.
            </Box>
          </Typography>
        </motion.div>
        <Box sx={styles.headerCopy}>
          <Typography component="p" sx={styles.lead}>
            Deep expertise, distinct points of view, and absolutely no one-size-
            fits-all hair.
          </Typography>
          <Box
            component="a"
            href="https://www.studioboomsalons.com/team"
            target="_blank"
            rel="noreferrer"
            sx={shared.textLink}
          >
            Meet the full team ↗
          </Box>
        </Box>
      </Box>

      <Box sx={styles.artistGrid}>
        {artistPreviews.map((artist, index) => (
          <motion.div {...revealMotion} key={artist.name}>
            <Box component="article" sx={styles.artistCard}>
              <Box sx={styles.imageWrap}>
                <Box
                  component="img"
                  src={artist.image}
                  alt={`${artist.name}, Studio Boom stylist`}
                  loading="lazy"
                  data-position={artist.position}
                  sx={styles.artistImage}
                />
                <Typography component="span" sx={styles.artistNumber}>
                  0{index + 1}
                </Typography>
              </Box>
              <Box sx={styles.artistInfo}>
                <Typography component="h3" sx={styles.artistName}>
                  {artist.name}
                </Typography>
                <Typography component="p" sx={styles.artistSpecialty}>
                  {artist.specialty}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Box sx={styles.statement}>
        <Typography component="span" sx={styles.statementSmall}>
          Different hair.
        </Typography>
        <Typography component="p" sx={styles.statementLarge}>
          Different human.{" "}
          <Box component="span" sx={styles.statementItalic}>
            That’s the point.
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
