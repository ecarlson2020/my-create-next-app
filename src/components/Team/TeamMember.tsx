import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { hasImage } from "@/utils/images";
import type { TeamMember as Member } from "@/config/team";
import { teamMemberStyles as s } from "./TeamMember.styles";

interface TeamMemberProps {
  member: Member;
  reversed?: boolean;
}

export default function TeamMember({
  member,
  reversed = false,
}: TeamMemberProps) {
  // Keep a deliberate monogram fallback if generated portrait assets are ever
  // missing rather than shipping a broken image.
  const portrait = hasImage(member.image);

  return (
    <Box sx={{ ...s.root, ...(reversed ? s.reversed : {}) }}>
      <Reveal>
        {portrait ? (
          <Box sx={s.frame}>
            <OptimizedImage
              name={member.image}
              alt={member.imageAlt}
              cover
              sizes="(max-width: 900px) 92vw, 38vw"
            />
          </Box>
        ) : (
          <Box
            sx={s.monogram}
            role="img"
            aria-label={`${member.name}, ${member.role}`}
          >
            <Typography component="span" sx={s.monogramMark}>
              {member.initials}
            </Typography>
            <Box sx={s.monogramRule} />
          </Box>
        )}
      </Reveal>
      <Reveal delay={120}>
        <Box sx={s.body}>
          <Typography component="span" sx={s.role}>
            {member.role}
          </Typography>
          <Typography variant="h2" component="h2" sx={s.name}>
            {member.name}
          </Typography>
          {member.bio.map((text) => (
            <Typography key={text.slice(0, 30)} variant="body1" sx={s.text}>
              {text}
            </Typography>
          ))}
        </Box>
      </Reveal>
    </Box>
  );
}
