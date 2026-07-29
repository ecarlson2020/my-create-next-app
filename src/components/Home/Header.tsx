import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { links, navigationItems } from "@/config/homeContent";

import { headerStyles } from "./Header.styles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Box sx={headerStyles.announcement}>
        <Container sx={headerStyles.announcementInner}>
          <Box sx={headerStyles.announcementItem}>
            <AccessTimeRoundedIcon fontSize="inherit" />
            Sunday worship · 10:15 AM
          </Box>
          <Box
            component="a"
            href={links.address}
            rel="noreferrer"
            target="_blank"
            sx={[headerStyles.announcementItem, headerStyles.addressItem]}
          >
            <LocationOnOutlinedIcon fontSize="inherit" />
            5505 W. Highway 34 · Loveland, CO
          </Box>
        </Container>
      </Box>
      <Box component="header" sx={headerStyles.header}>
        <Container
          component="nav"
          aria-label="Main navigation"
          sx={headerStyles.nav}
        >
          <Box component="a" href="#top" sx={headerStyles.brand}>
            <Box sx={headerStyles.brandMark}>
              <LandscapeRoundedIcon />
            </Box>
            <Box>
              <Typography component="span" sx={headerStyles.brandName}>
                God’s Country
                <br />
                Cowboy Church
              </Typography>
              <Typography component="span" sx={headerStyles.brandLocation}>
                Loveland, Colorado
              </Typography>
            </Box>
          </Box>

          <Box sx={headerStyles.desktopNav}>
            {navigationItems.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                sx={headerStyles.navLink}
              >
                {item.label}
              </Box>
            ))}
            <Button
              component="a"
              href={links.donate}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              color="secondary"
              sx={headerStyles.giveButton}
            >
              Give
            </Button>
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
            sx={headerStyles.menuButton}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Container>
      </Box>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        slotProps={{ paper: { sx: headerStyles.drawerPaper } }}
      >
        <Box sx={headerStyles.drawerInner}>
          <Box sx={headerStyles.drawerTop}>
            <Typography sx={headerStyles.brandName}>God’s Country</Typography>
            <IconButton aria-label="Close navigation menu" onClick={closeMenu}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box
            component="nav"
            aria-label="Mobile navigation"
            sx={headerStyles.drawerNav}
          >
            {navigationItems.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                onClick={closeMenu}
                sx={headerStyles.drawerLink}
              >
                {item.label}
              </Box>
            ))}
          </Box>
          <Button
            component="a"
            href={links.donate}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="secondary"
            sx={headerStyles.drawerGive}
          >
            Give online
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
