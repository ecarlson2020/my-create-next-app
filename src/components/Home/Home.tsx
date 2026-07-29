import Box from "@mui/material/Box";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Hevn from "./Hevn";
import Marquee from "./Marquee";
import Services from "./Services";
import Team from "./Team";
import Visit from "./Visit";
import * as styles from "./Home.styles";

export default function Home() {
  return (
    <Box component="main" sx={styles.root}>
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Hevn />
      <Team />
      <Visit />
      <Footer />
    </Box>
  );
}
