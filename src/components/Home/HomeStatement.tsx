import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeStatement } from "@/config/company";
import { homeStatementStyles as s } from "./HomeStatement.styles";

/** The brand's thesis, set large on burgundy — the site's one full-stop moment. */
export default function HomeStatement() {
  return (
    <Section bg="terracotta" roundedTop roundedBottom>
      <Reveal>
        <Box sx={s.root}>
          <Typography component="p" sx={s.eyebrow}>
            Our belief
          </Typography>
          <Typography component="p" sx={s.statement}>
            {homeStatement}
          </Typography>
          <Box sx={s.rule} />
        </Box>
      </Reveal>
    </Section>
  );
}
