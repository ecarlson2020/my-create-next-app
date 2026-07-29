import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { services } from "@/config/services";
import { homeServicesStyles as s } from "./HomeServices.styles";

export default function HomeServices() {
  return (
    <Section bg="muted">
      <Box sx={s.grid}>
        <Reveal>
          <Box sx={s.collage}>
            <Box sx={s.mainImage}>
              <OptimizedImage
                name="service-full"
                alt="An elegant outdoor wedding reception table"
                cover
                sizes="(max-width: 900px) 88vw, 44vw"
              />
            </Box>
            <Box sx={s.accentImage}>
              <OptimizedImage
                name="service-month-of"
                alt="A softly draped wedding reception"
                cover
                sizes="(max-width: 900px) 46vw, 20vw"
              />
            </Box>
            <Box sx={s.imageCaption}>
              Designed with feeling. Run with precision.
            </Box>
          </Box>
        </Reveal>

        <Box sx={s.content}>
          <SectionHeading
            eyebrow="Our services"
            title="However much you need us"
            intro="From the first idea to the final send-off, choose the level of support that lets you stay present for all of it."
          />
          <Box sx={s.list}>
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90}>
                <Box
                  component={Link}
                  href={`/services#${service.slug}`}
                  sx={s.row}
                >
                  <Box component="span" sx={s.number}>
                    0{i + 1}
                  </Box>
                  <Box sx={s.rowBody}>
                    <Typography component="h3" sx={s.title}>
                      {service.title}
                    </Typography>
                    <Typography component="p" sx={s.summary}>
                      {service.summary}
                    </Typography>
                    <Typography component="span" sx={s.price}>
                      {service.price}
                    </Typography>
                  </Box>
                  <Box component="span" sx={s.plus} aria-hidden>
                    +
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
          <Box component={Link} href="/services" sx={s.allServices}>
            Explore all services <Box component="span">→</Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
