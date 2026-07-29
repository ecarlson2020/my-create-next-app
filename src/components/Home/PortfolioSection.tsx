import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Typography } from "@mui/material";

import { PROJECT_IMAGES } from "../../config/home";
import {
  galleryStyles,
  projectCaptionStyles,
  projectImageStyles,
  projectStyles,
  sectionStyles,
} from "./PortfolioSection.styles";
import SectionIntro from "./SectionIntro";
import { sectionShell, sectionSpacing } from "./shared.styles";

const gridPlacements = [
  { gridColumn: { md: "span 7" }, gridRow: { md: "span 2" } },
  { gridColumn: { md: "span 5" }, gridRow: { md: "span 1" } },
  { gridColumn: { md: "span 5" }, gridRow: { md: "span 1" } },
  { gridColumn: { md: "3 / span 8" }, gridRow: { md: "span 2" } },
] as const;

export default function PortfolioSection() {
  return (
    <Box
      component="section"
      id="work"
      sx={{ ...sectionStyles, ...sectionSpacing }}
    >
      <Box sx={sectionShell}>
        <SectionIntro
          light
          label="Selected work"
          title="Spaces that feel at home here."
          description="Built for bright days, cool evenings, changing seasons, and the people who make a place their own."
        />
        <Box sx={galleryStyles}>
          {PROJECT_IMAGES.map((project, index) => (
            <Box
              key={project.src}
              sx={{ ...projectStyles, ...gridPlacements[index] }}
            >
              <Box
                component="img"
                src={project.src}
                alt={project.alt}
                loading="lazy"
                sx={projectImageStyles}
              />
              <Box className="project-caption" sx={projectCaptionStyles}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    {project.label}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ color: "rgba(255,255,255,0.66)" }}
                  >
                    {project.location}
                  </Typography>
                </Box>
                <ArrowOutwardIcon aria-hidden="true" />
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 5, md: 7 },
          }}
        >
          <Button
            href="#contact"
            variant="outlined"
            endIcon={<ArrowOutwardIcon />}
            sx={{ borderColor: "rgba(255,255,255,.42)", color: "common.white" }}
          >
            Imagine your space
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
