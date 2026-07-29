export const headerStyles = {
  position: "sticky",
  top: 0,
  zIndex: 1200,
  bgcolor: "rgba(255, 253, 248, 0.96)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid",
  borderColor: "divider",
};

export const announcementStyles = {
  bgcolor: "primary.dark",
  color: "rgba(255,255,255,0.82)",
  py: 0.7,
  px: 2.5,
  display: "flex",
  justifyContent: "center",
  gap: { xs: 1, sm: 2 },
  textAlign: "center",
};

export const navStyles = {
  height: { xs: 72, md: 84 },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 3,
};

export const logoStyles = {
  display: "block",
  width: { xs: 190, sm: 220, md: 244 },
  height: "auto",
};

export const desktopLinksStyles = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  gap: { md: 2.5, lg: 4 },
};

export const navLinkStyles = {
  color: "text.primary",
  fontSize: "0.74rem",
  fontWeight: 700,
  letterSpacing: "0.09em",
  textDecoration: "none",
  textTransform: "uppercase",
  position: "relative",
  py: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: "100%",
    bottom: 2,
    height: 1,
    bgcolor: "secondary.main",
    transition: "right 220ms ease",
  },
  "&:hover::after": { right: 0 },
};

export const mobileMenuStyles = {
  display: { xs: "inline-flex", md: "none" },
  color: "primary.dark",
};

export const drawerStyles = {
  width: "min(88vw, 390px)",
  height: "100%",
  bgcolor: "background.default",
  px: 3,
  py: 2.5,
  display: "flex",
  flexDirection: "column",
};
