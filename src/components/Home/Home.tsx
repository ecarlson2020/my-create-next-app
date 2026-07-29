import { Box } from "@mui/material";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServiceAreas } from "./ServiceAreas";
import { ServicesSection } from "./ServicesSection";
import { TestimonialsSection } from "./TestimonialsSection";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box component="main">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ServiceAreas />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}
