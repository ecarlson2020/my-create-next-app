import Box from "@mui/material/Box";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import { services, servicesIntro } from "@/config/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <>
      <Seo
        title="Services + Investment"
        description="Full wedding planning from $5,000, month-of coordination from $2,300, and day-of coordination from $1,900 — three levels of support from Planned by Peter."
        image="hero-services"
        imageAlt="A long outdoor reception table set with greenery and candlelight"
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      />
      <PageHero
        eyebrow="Services"
        title="However much you need us"
        intro={servicesIntro}
        image="hero-services"
        imageAlt="A long outdoor reception table set with greenery and candlelight"
      />

      <Section>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 10, md: 16 },
          }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              reversed={i % 2 === 1}
            />
          ))}
        </Box>
      </Section>

      <Section bg="muted">
        <SectionHeading
          eyebrow="A note on investment"
          title="Every wedding is quoted individually"
          intro="The figures above are starting points. Final investment depends on guest count, venue, the scope of design, and how many events make up your weekend. We'll give you a clear number before you commit to anything."
          centered
        />
      </Section>

      <Section bg="dark">
        <Testimonials only={2} eyebrow="Kind words" />
      </Section>

      <Section>
        <CtaBanner
          eyebrow="Begin"
          title="Not sure which package fits?"
          body="Tell us where you are in planning and we'll tell you honestly which level of support you actually need."
          hideSecondary
        />
      </Section>
    </>
  );
}
