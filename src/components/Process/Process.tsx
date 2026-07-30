import Box from "@mui/material/Box";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import { processIntro, processSteps } from "@/config/process";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <>
      <Seo
        title="Our Process"
        description="From first conversation to final send-off — the five stages of planning a wedding with Planned by Peter, from discovery and design through vendor sourcing and wedding-day execution."
        image="hero-process"
        imageAlt="A reception table set with gold chairs and white florals"
        breadcrumbs={[{ name: "Our Process", path: "/process" }]}
      />
      <PageHero
        eyebrow="Our Process"
        title="Where intention meets expertise"
        image="hero-process"
        imageAlt="A reception table set with gold chairs and white florals"
      />

      <Section>
        <SectionHeading
          title="A planning experience designed to feel effortless"
          intro={processIntro}
          wide
        />
      </Section>

      <Section bg="muted" tight>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 10, md: 16 },
          }}
        >
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} step={step} reversed={i % 2 === 1} />
          ))}
        </Box>
      </Section>

      <Section bg="dark">
        <Testimonials only={1} eyebrow="From a destination couple" />
      </Section>

      <Section>
        <CtaBanner
          eyebrow="Next"
          title="Ready to begin?"
          body="Tell us your date, your venue if you have one, and how you want the day to feel. We'll take it from there."
        />
      </Section>
    </>
  );
}
