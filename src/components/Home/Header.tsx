import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { BOOKING_URL, navigationItems } from "@/config/home";

import * as shared from "./shared.styles";
import * as styles from "./Header.styles";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.headerInner}>
        <Box component="a" href="#home" sx={styles.brand} onClick={closeMenu}>
          <Typography component="span" sx={styles.brandName}>
            Studio Boom
          </Typography>
          <Typography component="span" sx={styles.brandMeta}>
            Salon + extensions
          </Typography>
        </Box>

        <Box component="nav" aria-label="Primary navigation" sx={styles.nav}>
          {navigationItems.map((item) => (
            <Box
              component="a"
              href={item.href}
              key={item.href}
              sx={styles.navLink}
            >
              {item.label}
            </Box>
          ))}
        </Box>

        <Box sx={styles.actions}>
          <Button
            component="a"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            sx={styles.bookButton}
          >
            Book now ↗
          </Button>
          <Button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
            sx={styles.menuButton}
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
        </Box>
      </Box>

      <Box
        id="mobile-navigation"
        component="nav"
        aria-label="Mobile navigation"
        sx={[styles.mobileMenu, menuOpen && styles.mobileMenuOpen]}
      >
        <Box sx={styles.mobileLinks}>
          {navigationItems.map((item, index) => (
            <Box
              component="a"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              sx={styles.mobileLink}
            >
              <Typography component="span" sx={styles.mobileNumber}>
                0{index + 1}
              </Typography>
              {item.label}
            </Box>
          ))}
        </Box>
        <Button
          component="a"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          sx={shared.lightButton}
        >
          Book your chair ↗
        </Button>
      </Box>
    </Box>
  );
}
