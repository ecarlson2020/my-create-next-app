import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { CONTACT, NAV_LINKS } from "../../config/home";
import {
  announcementStyles,
  desktopLinksStyles,
  drawerStyles,
  headerStyles,
  logoStyles,
  mobileMenuStyles,
  navLinkStyles,
  navStyles,
} from "./Header.styles";
import { sectionShell } from "./shared.styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box component="header" sx={headerStyles}>
      <Box sx={announcementStyles}>
        <Typography variant="overline" sx={{ fontSize: "0.62rem" }}>
          Local leader for 20+ years
        </Typography>
        <Typography aria-hidden="true" sx={{ opacity: 0.45 }}>
          ·
        </Typography>
        <Typography variant="overline" sx={{ fontSize: "0.62rem" }}>
          Denver to Fort Collins
        </Typography>
      </Box>
      <Box sx={{ ...sectionShell, ...navStyles }}>
        <Box
          component="a"
          href="#content"
          aria-label="C and B Waterworks home"
          sx={{ display: "block", lineHeight: 0 }}
        >
          <Box
            component="img"
            src="/images/cb-waterworks-logo.webp"
            alt="C and B Waterworks Landscaping"
            sx={logoStyles}
          />
        </Box>

        <Box
          component="nav"
          aria-label="Primary navigation"
          sx={desktopLinksStyles}
        >
          {NAV_LINKS.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              sx={navLinkStyles}
            >
              {link.label}
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            endIcon={<ArrowOutwardIcon fontSize="small" />}
          >
            Free consultation
          </Button>
        </Box>

        <IconButton
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(true)}
          sx={mobileMenuStyles}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{ paper: { sx: drawerStyles } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Stack
          component="nav"
          aria-label="Mobile navigation"
          spacing={0}
          sx={{ mt: 5 }}
        >
          {NAV_LINKS.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setMenuOpen(false)}
              sx={{
                py: 2.2,
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.primary",
                fontFamily: "h2.fontFamily",
                fontSize: "2rem",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Box>
          ))}
        </Stack>
        <Button
          href="#contact"
          variant="contained"
          onClick={() => setMenuOpen(false)}
          sx={{ mt: 4 }}
        >
          Book a free consultation
        </Button>
        <Box sx={{ mt: "auto", pt: 5 }}>
          <Typography variant="overline" color="text.secondary">
            Start a conversation
          </Typography>
          <Typography
            component="a"
            href={CONTACT.phoneHref}
            sx={{
              display: "block",
              mt: 1,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            {CONTACT.phoneDisplay}
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
