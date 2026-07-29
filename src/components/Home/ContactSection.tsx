import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";

import { CONTACT, SERVICES } from "../../config/home";
import {
  contactLinkStyles,
  copyStyles,
  fieldsStyles,
  formStyles,
  gridStyles,
  sectionStyles,
  titleStyles,
} from "./ContactSection.styles";
import { sectionShell, sectionSpacing } from "./shared.styles";

export default function ContactSection() {
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConfirmationOpen(true);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ ...sectionStyles, ...sectionSpacing }}
    >
      <Box sx={{ ...sectionShell, ...gridStyles }}>
        <Box sx={copyStyles}>
          <Typography variant="overline" color="secondary.dark">
            Let&apos;s make room for what matters
          </Typography>
          <Typography variant="h2" sx={titleStyles}>
            Your space starts with a conversation.
          </Typography>
          <Typography
            sx={{
              mt: 3,
              color: "text.secondary",
              lineHeight: 1.75,
              maxWidth: 520,
            }}
          >
            Schedule a complimentary 30-minute consultation. We&apos;ll listen
            to your ideas, walk through what&apos;s possible, and give you a
            clear direction—no pressure.
          </Typography>
          <Box sx={{ mt: 5, maxWidth: 430 }}>
            <Typography
              component="a"
              href={CONTACT.phoneHref}
              sx={contactLinkStyles}
            >
              {CONTACT.phoneDisplay}
            </Typography>
            <Typography
              component="a"
              href={`mailto:${CONTACT.email}`}
              sx={contactLinkStyles}
            >
              {CONTACT.email}
            </Typography>
          </Box>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={formStyles}>
          <Typography variant="overline" color="secondary.dark">
            Tell us about your project
          </Typography>
          <Typography
            variant="h3"
            sx={{ mt: 1.5, fontSize: { xs: "2.2rem", md: "2.8rem" } }}
          >
            Request a free consultation
          </Typography>
          <Box sx={fieldsStyles}>
            <TextField required name="name" label="Your name" fullWidth />
            <TextField
              required
              name="email"
              label="Email address"
              type="email"
              fullWidth
            />
            <TextField name="phone" label="Phone number" type="tel" fullWidth />
            <TextField
              select
              required
              name="service"
              label="Interested in"
              defaultValue=""
              fullWidth
            >
              {SERVICES.map((service) => (
                <MenuItem key={service.number} value={service.shortTitle}>
                  {service.title}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="message"
              label="A few details about your space"
              multiline
              minRows={5}
              fullWidth
              sx={{ gridColumn: { sm: "span 2" } }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<ArrowOutwardIcon />}
            sx={{ mt: 2.5, width: { xs: "100%", sm: "auto" } }}
          >
            Request consultation
          </Button>
          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
              fontSize: "0.76rem",
              lineHeight: 1.5,
            }}
          >
            By submitting, you agree to be contacted about your project. No
            spam—just a real conversation with our team.
          </Typography>
        </Box>
      </Box>

      <Snackbar
        open={confirmationOpen}
        autoHideDuration={6000}
        onClose={() => setConfirmationOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setConfirmationOpen(false)}
        >
          Thanks! Form delivery will be connected before launch.
        </Alert>
      </Snackbar>
    </Box>
  );
}
