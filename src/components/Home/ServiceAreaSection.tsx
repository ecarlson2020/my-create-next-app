import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Typography } from "@mui/material";

import { SERVICE_AREAS } from "../../config/home";
import {
  areaGridStyles,
  areaListStyles,
  gridStyles,
  introStyles,
  sectionStyles,
  titleStyles,
} from "./ServiceAreaSection.styles";
import { sectionShell, sectionSpacing } from "./shared.styles";

export default function ServiceAreaSection() {
  return (
    <Box component="section" sx={{ ...sectionStyles, ...sectionSpacing }}>
      <Box sx={{ ...sectionShell, ...gridStyles }}>
        <Box sx={introStyles}>
          <Typography variant="overline" sx={{ color: "secondary.light" }}>
            Our service area
          </Typography>
          <Typography variant="h2" sx={titleStyles}>
            From Denver to Fort Collins—and the places between.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              maxWidth: 570,
              color: "rgba(255,255,255,.68)",
              lineHeight: 1.75,
            }}
          >
            We bring local insight to homes and properties across the Front
            Range. Don&apos;t see your town? Get in touch and we&apos;ll let you
            know if the project is a fit.
          </Typography>
          <Button
            href="#contact"
            variant="outlined"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              mt: 4,
              borderColor: "rgba(255,255,255,.45)",
              color: "common.white",
            }}
          >
            Ask about your area
          </Button>
        </Box>

        <Box sx={areaGridStyles}>
          <Box>
            <Typography variant="overline" sx={{ color: "secondary.light" }}>
              North
            </Typography>
            <Box sx={areaListStyles}>
              {SERVICE_AREAS.north.map((area) => (
                <Typography key={area} sx={{ color: "rgba(255,255,255,.82)" }}>
                  {area}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant="overline" sx={{ color: "secondary.light" }}>
              South
            </Typography>
            <Box sx={areaListStyles}>
              {SERVICE_AREAS.south.map((area) => (
                <Typography key={area} sx={{ color: "rgba(255,255,255,.82)" }}>
                  {area}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
