import { Box } from "@mui/material";

import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ProcessSection from "./ProcessSection";
import ServiceAreaSection from "./ServiceAreaSection";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <Box
        component="a"
        href="#content"
        sx={{
          position: "fixed",
          left: 16,
          top: -100,
          zIndex: 2000,
          bgcolor: "primary.dark",
          color: "white",
          px: 2,
          py: 1.5,
          textDecoration: "none",
          "&:focus": { top: 16 },
        }}
      >
        Skip to content
      </Box>
      <Header />
      <Box id="content">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <ServiceAreaSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
