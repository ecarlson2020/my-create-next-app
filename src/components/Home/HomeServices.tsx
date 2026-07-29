import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { services } from "@/config/services";
import { homeServicesStyles as s, SERVICE_TINTS } from "./HomeServices.styles";

export default function HomeServices() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="However much you need us"
        intro="Three levels of support, all led personally by our team."
        centered
      />
      <Box sx={s.grid}>
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 110}>
            <Box
              component={Link}
              href={`/services#${service.slug}`}
              sx={{ ...s.card, backgroundColor: SERVICE_TINTS[i] }}
            >
              <Box className="service-media" sx={s.media}>
                <OptimizedImage
                  name={service.image}
                  alt={service.imageAlt}
                  cover
                  sizes="(max-width: 900px) 92vw, 32vw"
                />
              </Box>
              <Box sx={s.body}>
                <Typography component="span" sx={s.price}>
                  {service.price}
                </Typography>
                <Typography variant="h4" component="h3" sx={s.title}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={s.summary}>
                  {service.summary}
                </Typography>
                <Typography component="span" sx={s.more}>
                  Learn more
                </Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Section>
  );
}
