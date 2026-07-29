import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Typography } from "@mui/material";

import {
  bodyStyles,
  copyColumnStyles,
  experienceBadgeStyles,
  gridStyles,
  imageColumnStyles,
  imageStyles,
  promisesStyles,
  promiseStyles,
  sectionStyles,
  titleStyles,
} from "./AboutSection.styles";
import { sectionShell, sectionSpacing } from "./shared.styles";

const promises = [
  "Locally owned",
  "Colorado climate expertise",
  "Design-build continuity",
  "Craftsmanship that lasts",
] as const;

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ ...sectionStyles, ...sectionSpacing }}
    >
      <Box sx={{ ...sectionShell, ...gridStyles }}>
        <Box sx={imageColumnStyles}>
          <Box
            component="img"
            src="/images/water-feature.webp"
            alt="Custom water feature and putting green in a Colorado backyard"
            loading="lazy"
            sx={imageStyles}
          />
          <Box sx={experienceBadgeStyles}>
            <Typography
              sx={{
                fontFamily: "h2.fontFamily",
                fontSize: { xs: "3rem", md: "4rem" },
                lineHeight: 0.9,
              }}
            >
              20+
            </Typography>
            <Typography variant="overline" sx={{ mt: 1.2 }}>
              Years of local
              <br />
              experience
            </Typography>
          </Box>
        </Box>

        <Box sx={copyColumnStyles}>
          <Typography variant="overline" color="secondary.dark">
            Rooted here
          </Typography>
          <Typography variant="h2" sx={titleStyles}>
            Local knowledge, built into every detail.
          </Typography>
          <Typography sx={bodyStyles}>
            For more than two decades, C&amp;B Waterworks has shaped residential
            and commercial properties across the Colorado Front Range. We
            combine deep regional knowledge with thoughtful design and
            dependable construction.
          </Typography>
          <Typography sx={bodyStyles}>
            That means materials chosen for the seasons, spaces planned for how
            you actually live, and a crew that takes pride in the work long
            after the final walkthrough.
          </Typography>
          <Box sx={promisesStyles}>
            {promises.map((promise) => (
              <Box key={promise} sx={promiseStyles}>
                <CheckIcon fontSize="small" color="secondary" />
                {promise}
              </Box>
            ))}
          </Box>
          <Button
            href="#contact"
            endIcon={<ArrowOutwardIcon />}
            sx={{ mt: 3.5, px: 0 }}
          >
            Meet your project team
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
