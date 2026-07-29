import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import { links } from "@/config/homeContent";

import { visitStyles } from "./VisitSection.styles";

const expectations = [
  {
    title: "Wear what you wear",
    body: "Jeans, boots, hats—come comfortable and come as yourself.",
  },
  {
    title: "Bring the family",
    body: "Children are welcome, with a Bible-centered space for grades 1–5.",
  },
  {
    title: "Stay awhile",
    body: "Worship is followed by fellowship. We would love to meet you.",
  },
];

export function VisitSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box component="section" id="visit" sx={visitStyles.section}>
      <Container sx={visitStyles.grid}>
        <Box>
          <Typography component="p" sx={visitStyles.kicker}>
            Your first Sunday
          </Typography>
          <Typography variant="h2" sx={visitStyles.title}>
            It can be as simple as showing up.
          </Typography>
          <Typography sx={visitStyles.body}>
            You do not need to know the songs, own a Bible, or have life figured
            out. Come through the doors and we will help with the rest.
          </Typography>
          <Box sx={visitStyles.expectations}>
            {expectations.map((item) => (
              <Box key={item.title} sx={visitStyles.expectation}>
                <Typography sx={visitStyles.expectationTitle}>
                  {item.title}
                </Typography>
                <Typography sx={visitStyles.expectationBody}>
                  {item.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          component={motion.aside}
          initial={reduceMotion ? false : { y: 25 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          sx={visitStyles.card}
        >
          <Box sx={visitStyles.icon}>
            <LocationOnRoundedIcon fontSize="large" />
          </Box>
          <Typography sx={visitStyles.cardKicker}>
            Find us in west Loveland
          </Typography>
          <Typography sx={visitStyles.address}>
            5505 West Highway 34
            <br />
            Loveland, Colorado
          </Typography>
          <Typography sx={visitStyles.cardDetail}>
            Sunday worship · 10:15 AM
          </Typography>
          <Typography sx={visitStyles.cardDetail}>(970) 635-0044</Typography>
          <Box sx={visitStyles.actions}>
            <Button
              component="a"
              href={links.address}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={visitStyles.directionsButton}
            >
              Open in Google Maps
            </Button>
            <Button
              component="a"
              href={links.phone}
              variant="outlined"
              startIcon={<PhoneRoundedIcon />}
              sx={visitStyles.callButton}
            >
              Call the church
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
