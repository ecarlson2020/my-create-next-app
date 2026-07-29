import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, Container, Typography } from "@mui/material";

import { scheduleItems } from "@/config/homeContent";

import { gatheringsStyles } from "./GatheringsSection.styles";
import { sharedStyles } from "./shared.styles";

export function GatheringsSection() {
  return (
    <Box component="section" id="gatherings" sx={gatheringsStyles.section}>
      <Container sx={gatheringsStyles.layout}>
        <Box sx={gatheringsStyles.intro}>
          <Typography component="p" sx={sharedStyles.eyebrow}>
            Gather with us
          </Typography>
          <Typography variant="h2" sx={gatheringsStyles.introTitle}>
            There’s room in the circle.
          </Typography>
          <Typography sx={gatheringsStyles.introBody}>
            Whether Sunday is your first time in church or you have followed
            Jesus for years, you will find a genuine welcome here. Start with
            Sunday worship, then find your place in the week.
          </Typography>
          <Button
            component="a"
            href="#visit"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={gatheringsStyles.visitLink}
          >
            Get directions &amp; details
          </Button>
        </Box>

        <Box>
          <Box sx={gatheringsStyles.schedule}>
            {scheduleItems.map((item) => (
              <Box
                key={item.title}
                component="article"
                sx={gatheringsStyles.item}
              >
                <Typography sx={gatheringsStyles.day}>{item.day}</Typography>
                <Typography sx={gatheringsStyles.itemTitle}>
                  {item.title}
                </Typography>
                <Typography sx={gatheringsStyles.time}>{item.time}</Typography>
                <Typography sx={gatheringsStyles.detail}>
                  {item.detail}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={gatheringsStyles.note}>
            <InfoOutlinedIcon fontSize="small" />
            Group details can change seasonally—call ahead if it’s your first
            time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
