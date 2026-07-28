import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { company } from "@/config/company";
import { navItems } from "@/config/nav";
import { headerStyles as s } from "./Header.styles";

interface HeaderProps {
  /** True on pages whose hero sits under a transparent bar (the home page). */
  overHero?: boolean;
}

export default function Header({ overHero = false }: HeaderProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation, otherwise it stays open over the new page.
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeComplete", close);
    return () => router.events.off("routeChangeComplete", close);
  }, [router.events]);

  const solid = !overHero || scrolled;
  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <Box
      component="header"
      sx={{ ...s.bar, ...(solid ? s.barSolid : s.barTransparent) }}
    >
      <Container maxWidth="lg">
        <Box sx={s.inner}>
          <Box
            component={Link}
            href="/"
            sx={s.wordmark}
            aria-label="Planned by Peter — home"
          >
            <Box component="span" sx={s.wordmarkTop}>
              {company.wordmarkTop}
            </Box>
            <Box component="span" sx={s.wordmarkBottom}>
              {company.wordmarkBottom}
            </Box>
          </Box>

          <Box component="nav" sx={s.navList} aria-label="Primary">
            {navItems.map((item) => (
              <Box
                key={item.href}
                component={Link}
                href={item.href}
                sx={{
                  ...s.navLink,
                  ...(isActive(item.href) ? s.navLinkActive : {}),
                }}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          <Box
            component={Link}
            href="/contact"
            sx={{
              ...s.navLink,
              ...s.inquire,
              ...(solid ? s.inquireOnLight : s.inquireOnDark),
            }}
          >
            Inquire
          </Box>

          <IconButton
            sx={s.menuButton}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: s.drawerPaper } }}
      >
        <Box sx={s.drawerHeader}>
          <Typography sx={s.drawerMeta}>Menu</Typography>
          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            sx={{ color: "inherit", borderRadius: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={s.drawerList}>
          {navItems.map((item) => (
            <Box
              key={item.href}
              component={Link}
              href={item.href}
              sx={s.drawerLink}
            >
              {item.label}
            </Box>
          ))}
        </Box>
        <Box sx={s.drawerFooter}>
          <Box component="a" href={company.phoneHref} sx={s.drawerMeta}>
            {company.phone}
          </Box>
          <Box component="a" href={company.emailHref} sx={s.drawerMeta}>
            {company.email}
          </Box>
          <Box
            component="a"
            href={company.instagramUrl}
            target="_blank"
            rel="noreferrer"
            sx={s.drawerMeta}
          >
            {company.instagram}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
