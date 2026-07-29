import { pageShell } from "./shared.styles";

export const header = {
  position: "absolute",
  zIndex: 20,
  top: 0,
  left: 0,
  width: "100%",
};

export const headerInner = {
  ...pageShell,
  display: "grid",
  gridTemplateColumns: { xs: "1fr auto", md: "1fr auto 1fr" },
  alignItems: "center",
  minHeight: { xs: 76, md: 94 },
  borderBottom: "1px solid rgba(23, 23, 19, 0.18)",
};

export const brand = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  color: "#171713",
  lineHeight: 1,
  textDecoration: "none",
};

export const brandName = {
  fontSize: { xs: "0.92rem", md: "1rem" },
  fontWeight: 800,
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
};

export const brandMeta = {
  mt: 0.45,
  fontSize: "0.54rem",
  fontWeight: 600,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
};

export const nav = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  gap: { md: 2.5, lg: 4 },
};

export const navLink = {
  position: "relative",
  py: 1,
  color: "#171713",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textDecoration: "none",
  textTransform: "uppercase",
  "&::after": {
    content: '""',
    position: "absolute",
    right: 0,
    bottom: 5,
    left: 0,
    height: 1,
    backgroundColor: "currentColor",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 180ms ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
};

export const actions = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
};

export const bookButton = {
  display: { xs: "none", sm: "inline-flex" },
  minHeight: 40,
  px: 2.25,
  border: "1px solid #171713",
  borderRadius: "999px",
  color: "#171713",
  "&:hover": {
    backgroundColor: "#171713",
    color: "#fffdf8",
  },
};

export const menuButton = {
  display: { xs: "inline-flex", md: "none" },
  minWidth: 0,
  px: 1,
  color: "#171713",
};

export const mobileMenu = {
  position: "fixed",
  zIndex: -1,
  inset: 0,
  display: { xs: "flex", md: "none" },
  flexDirection: "column",
  justifyContent: "space-between",
  p: "116px 24px 36px",
  backgroundColor: "#2947ff",
  color: "#fffdf8",
  opacity: 0,
  pointerEvents: "none",
  transform: "translateY(-16px)",
  transition: "opacity 220ms ease, transform 220ms ease",
};

export const mobileMenuOpen = {
  zIndex: -1,
  opacity: 1,
  pointerEvents: "auto",
  transform: "translateY(0)",
};

export const mobileLinks = {
  display: "flex",
  flexDirection: "column",
};

export const mobileLink = {
  display: "flex",
  alignItems: "flex-start",
  gap: 2,
  py: 1.5,
  borderBottom: "1px solid rgba(255,255,255,0.3)",
  color: "inherit",
  fontSize: { xs: "2.75rem", sm: "4rem" },
  fontWeight: 500,
  letterSpacing: "-0.06em",
  lineHeight: 1,
  textDecoration: "none",
};

export const mobileNumber = {
  pt: 0.5,
  fontSize: "0.62rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
};
