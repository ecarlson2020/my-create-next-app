import { Box, Typography } from "@mui/material";
import { serviceAreas } from "../../config/home";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./ServiceAreas.styles";
import { maxContent } from "./shared.styles";

export function ServiceAreas() {
  return (
    <Box component="section" aria-label="Service areas" sx={styles.band}>
      <Box sx={styles.decor} />
      <Box sx={{ ...maxContent, ...styles.content }}>
        <Box sx={styles.headingWrap}>
          <Box sx={styles.pin}>
            <Icon name="pin" />
          </Box>
          <Box>
            <Typography sx={styles.heading}>Proudly serving NoCo</Typography>
            <Typography sx={styles.subheading}>
              And surrounding communities
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.cities}>
          {serviceAreas.map(({ city }) => (
            <Box component="span" key={city} sx={styles.city}>
              {city}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
