import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { testimonials } from "@/config/testimonials";
import { testimonialsStyles as s } from "./Testimonials.styles";

interface TestimonialsProps {
  eyebrow?: string;
  /** Show one fixed review instead of the switchable set. */
  only?: number;
}

export default function Testimonials({
  eyebrow = "Kind words",
  only,
}: TestimonialsProps) {
  const [index, setIndex] = useState(only ?? 0);
  const active = testimonials[index] ?? testimonials[0];
  const showDots = only === undefined && testimonials.length > 1;

  return (
    <Box sx={s.root}>
      <Typography component="p" sx={s.eyebrow}>
        {eyebrow}
      </Typography>
      <Box aria-hidden sx={s.mark}>
        &ldquo;
      </Box>
      <Typography component="blockquote" sx={s.quote}>
        {active.quote}
      </Typography>
      <Typography component="cite" display="block" sx={s.couple}>
        {active.couple}
      </Typography>

      {showDots && (
        <Box sx={s.dots}>
          {testimonials.map((t, i) => (
            <Box
              key={t.couple}
              component="button"
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${t.couple}`}
              aria-current={i === index}
              sx={{ ...s.dot, ...(i === index ? s.dotActive : {}) }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
