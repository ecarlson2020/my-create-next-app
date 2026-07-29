import { Box, Button, Collapse, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { navItems } from "../../config/home";
import { Icon } from "../common/Icon/Icon";
import { styles } from "./Header.styles";
import { maxContent } from "./shared.styles";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Box component="header" sx={styles.header}>
      <Box sx={styles.utilityBar}>
        <Box sx={{ ...maxContent, ...styles.utilityContent }}>
          <Box sx={styles.utilityItem}>
            <Icon name="pin" />
            Family owned and serving Northern Colorado
          </Box>
          <Box component="a" href="tel:+13037093757" sx={styles.utilityItem}>
            <Icon name="phone" />
            Call (303) 709-3757
          </Box>
        </Box>
      </Box>

      <Box component="nav" aria-label="Main navigation">
        <Box sx={{ ...maxContent, ...styles.nav }}>
          <Box component="a" href="#top" sx={styles.brand}>
            <Box
              component="img"
              src="/images/v3-logo.png"
              alt="V3 Lawn Care"
              sx={styles.logo}
            />
            <Typography component="span" sx={styles.brandName}>
              V3 Lawn Care
              <Box component="span" sx={styles.brandDetail}>
                Lawn · Landscape · Snow
              </Box>
            </Typography>
          </Box>

          <Box sx={styles.desktopNav}>
            {navItems.map((item) => (
              <Box
                component="a"
                href={item.href}
                key={item.href}
                sx={styles.navLink}
              >
                {item.label}
              </Box>
            ))}
            <Button variant="contained" href="#quote" sx={styles.quoteButton}>
              Get a free quote
            </Button>
          </Box>

          <IconButton
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            sx={styles.mobileButton}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={menuOpen} sx={styles.mobileMenu}>
        <Box sx={{ ...maxContent, ...styles.mobileMenuInner }}>
          {navItems.map((item) => (
            <Box
              component="a"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              sx={styles.mobileLink}
            >
              {item.label}
            </Box>
          ))}
          <Box sx={styles.mobileActions}>
            <Button
              href="tel:+13037093757"
              startIcon={<Icon name="phone" />}
              variant="outlined"
            >
              Call us
            </Button>
            <Button href="#quote" onClick={closeMenu} variant="contained">
              Free quote
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
