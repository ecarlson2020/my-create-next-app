import Box from "@mui/material/Box";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import { teamIntro, teamMembers } from "@/config/team";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Meet Peter Ktestakis, owner and lead planner, and Emily Twohig, lead designer — the two people behind every Planned by Peter celebration."
        image="hero-team"
      />
      <PageHero
        eyebrow="Our Team"
        title="The people behind the day"
        intro={teamIntro}
        image="hero-team"
        imageAlt="A couple photographed in the Utah mountains at golden hour"
      />

      <Section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 10, md: 16 },
          }}
        >
          {teamMembers.map((member, i) => (
            <TeamMember
              key={member.name}
              member={member}
              reversed={i % 2 === 1}
            />
          ))}
        </Box>
      </Section>

      <Section bg="dark">
        <Testimonials only={1} eyebrow="From a destination couple" />
      </Section>

      <Section bg="muted">
        <SectionHeading
          eyebrow="Working together"
          title="Led personally, every time"
          intro="Your wedding is never handed to an associate you have not met. The team that designs your celebration is the team standing in the room on the day."
          centered
        />
      </Section>

      <Section>
        <CtaBanner eyebrow="Say hello" title="We'd love to hear your story." />
      </Section>
    </>
  );
}
