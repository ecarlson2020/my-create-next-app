import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { SERVICES } from "../../config/home";
import SectionIntro from "./SectionIntro";
import {
  descriptionStyles,
  detailsStyles,
  detailStyles,
  listStyles,
  numberStyles,
  sectionStyles,
  serviceCopyStyles,
  serviceImageStyles,
  serviceImageWrapStyles,
  serviceRowStyles,
  serviceTitleStyles,
} from "./ServicesSection.styles";
import { sectionShell, sectionSpacing } from "./shared.styles";

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ ...sectionStyles, ...sectionSpacing }}
    >
      <Box sx={sectionShell}>
        <SectionIntro
          label="What we build"
          title="One team, from first line to final stone."
          description="Design and construction stay connected, so your finished space feels intentional—not pieced together."
        />

        <Box sx={listStyles}>
          {SERVICES.map((service, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <motion.div
                key={service.number}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Box sx={serviceRowStyles}>
                  <Box
                    sx={{
                      ...serviceImageWrapStyles,
                      order: { xs: 1, md: imageOnRight ? 2 : 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      sx={serviceImageStyles}
                    />
                    <Typography
                      variant="overline"
                      sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        bgcolor: "primary.dark",
                        color: "common.white",
                        px: 2.5,
                        py: 1.4,
                      }}
                    >
                      {service.shortTitle}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      ...serviceCopyStyles,
                      order: { xs: 2, md: imageOnRight ? 1 : 2 },
                      pr: { md: imageOnRight ? 5 : 0 },
                      pl: {
                        md: imageOnRight ? 0 : 2,
                        lg: imageOnRight ? 0 : 5,
                      },
                    }}
                  >
                    <Typography variant="overline" sx={numberStyles}>
                      {service.number}
                    </Typography>
                    <Typography variant="h3" sx={serviceTitleStyles}>
                      {service.title}
                    </Typography>
                    <Typography sx={descriptionStyles}>
                      {service.description}
                    </Typography>
                    <Box sx={detailsStyles}>
                      {service.details.map((detail) => (
                        <Box key={detail} sx={detailStyles}>
                          <Box
                            aria-hidden="true"
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor: "secondary.main",
                            }}
                          />
                          {detail}
                        </Box>
                      ))}
                    </Box>
                    <Button
                      href="#contact"
                      endIcon={<ArrowOutwardIcon />}
                      sx={{ mt: 2.5, px: 0 }}
                    >
                      Discuss this service
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
