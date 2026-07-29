import { Box } from "@mui/material";

import { Footer } from "./Footer";
import { GatheringsSection } from "./GatheringsSection";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { homeStyles } from "./Home.styles";
import { IntroSection } from "./IntroSection";
import { MinistriesSection } from "./MinistriesSection";
import { RoundPenSection } from "./RoundPenSection";
import { VisitSection } from "./VisitSection";

export default function Home() {
  return (
    <Box sx={homeStyles.root}>
      <Header />
      <Box component="main">
        <HeroSection />
        <IntroSection />
        <MinistriesSection />
        <RoundPenSection />
        <GatheringsSection />
        <VisitSection />
      </Box>
      <Footer />
    </Box>
  );
}
