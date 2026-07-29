import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { type FormEvent, useState } from "react";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./ContactSection.styles";
import {
  maxContent,
  primaryButton,
  section,
  sectionEyebrow,
} from "./shared.styles";

const serviceOptions = [
  "Lawn care",
  "Landscaping",
  "Irrigation",
  "Snow removal",
  "Something else",
] as const;

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box component="section" id="quote" sx={{ ...section, ...styles.section }}>
      <Box sx={maxContent}>
        <Box sx={styles.panel}>
          <Box sx={styles.copy}>
            <Box sx={styles.copyDecor} />
            <Box sx={{ position: "relative" }}>
              <Typography sx={{ ...sectionEyebrow, ...styles.eyebrow }}>
                Free estimates
              </Typography>
              <Typography component="h2" variant="h2" sx={styles.heading}>
                Let’s make your outdoor space work better.
              </Typography>
              <Typography sx={styles.description}>
                Tell us what you have in mind. We’ll learn about your property,
                talk through practical options, and build a plan that fits your
                priorities and budget.
              </Typography>
            </Box>

            <Box sx={styles.contactLinks}>
              <Box
                component="a"
                href="tel:+13037093757"
                sx={styles.contactLink}
              >
                <Box sx={styles.contactIcon}>
                  <Icon name="phone" />
                </Box>
                <Box>
                  <Typography sx={styles.contactLabel}>
                    Call us directly
                  </Typography>
                  <Typography sx={styles.contactValue}>
                    (303) 709-3757
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.contactLink}>
                <Box sx={styles.contactIcon}>
                  <Icon name="pin" />
                </Box>
                <Box>
                  <Typography sx={styles.contactLabel}>
                    Based in Fort Collins
                  </Typography>
                  <Typography sx={styles.contactValue}>
                    8130 Lighthouse Lane · 80528
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.formWrap}>
            <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
              <Typography component="h3" variant="h3" sx={styles.formHeading}>
                Tell us about your project
              </Typography>
              <Typography sx={styles.formIntro}>
                A few quick details are all we need to get the conversation
                started.
              </Typography>
              <Box sx={styles.formGrid}>
                <TextField
                  required
                  label="Your name"
                  name="name"
                  sx={styles.field}
                />
                <TextField
                  required
                  label="Phone number"
                  name="phone"
                  type="tel"
                  sx={styles.field}
                />
                <TextField
                  required
                  label="Email address"
                  name="email"
                  type="email"
                  sx={styles.field}
                />
                <TextField
                  defaultValue=""
                  label="Service needed"
                  name="service"
                  select
                  sx={styles.field}
                >
                  {serviceOptions.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Property address or city"
                  name="location"
                  sx={{ ...styles.field, ...styles.fullWidth }}
                />
                <TextField
                  label="How can we help?"
                  minRows={4}
                  multiline
                  name="message"
                  sx={{ ...styles.field, ...styles.fullWidth }}
                />
                <Button
                  endIcon={<Icon name="arrow" />}
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ ...primaryButton, ...styles.submit }}
                >
                  Request my free quote
                </Button>
              </Box>
              {submitted ? (
                <Box role="status" sx={styles.success}>
                  <Icon name="check" />
                  Thanks! Your request has been captured in this preview.
                </Box>
              ) : null}
              <Typography sx={styles.note}>
                No obligation and no annual lawn-care contract required.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
