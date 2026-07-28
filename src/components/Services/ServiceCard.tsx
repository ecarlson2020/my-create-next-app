import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import type { Service } from "@/config/services";
import { serviceCardStyles as s } from "./ServiceCard.styles";

interface ServiceCardProps {
  service: Service;
  reversed?: boolean;
}

export default function ServiceCard({
  service,
  reversed = false,
}: ServiceCardProps) {
  return (
    <Box id={service.slug} sx={{ ...s.root, ...(reversed ? s.reversed : {}) }}>
      <Reveal>
        <Box sx={s.frame}>
          <OptimizedImage
            name={service.image}
            alt={service.imageAlt}
            cover
            sizes="(max-width: 900px) 92vw, 46vw"
          />
        </Box>
      </Reveal>
      <Reveal delay={120}>
        <Box sx={s.body}>
          <Typography component="span" sx={s.price}>
            {service.price}
          </Typography>
          <Typography variant="h2" component="h2" sx={s.title}>
            {service.title}
          </Typography>
          {service.body.map((text) => (
            <Typography key={text.slice(0, 30)} variant="body1" sx={s.text}>
              {text}
            </Typography>
          ))}
          <Box component="ul" sx={s.list}>
            {service.highlights.map((item) => (
              <Box component="li" key={item} sx={s.listItem}>
                <Box component="span" sx={s.bullet} />
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}
