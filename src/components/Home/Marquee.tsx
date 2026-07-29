import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { marqueeItems } from "@/config/home";

import * as styles from "./Marquee.styles";

export default function Marquee() {
  return (
    <Box component="aside" aria-label="Studio specialties" sx={styles.marquee}>
      <Box sx={styles.track}>
        {[0, 1].map((round) => (
          <Box aria-hidden={round === 1} key={round} sx={styles.group}>
            {marqueeItems.map((item) => (
              <Box key={`${round}-${item}`} sx={styles.item}>
                <Typography component="span" sx={styles.label}>
                  {item}
                </Typography>
                <Typography
                  component="span"
                  aria-hidden="true"
                  sx={styles.spark}
                >
                  ✦
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
