import Section from "@/components/common/Section/Section";
import Seo from "@/components/common/Seo/Seo";
import Testimonials from "@/components/common/Testimonials/Testimonials";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import Awards from "@/components/common/Awards/Awards";
import HomeHero from "./HomeHero";
import HomeWelcome from "./HomeWelcome";
import HomeStatement from "./HomeStatement";
import HomeProcess from "./HomeProcess";
import HomeServices from "./HomeServices";
import HomeGalleryStrip from "./HomeGalleryStrip";

export default function Home() {
  return (
    <>
      <Seo
        title="Utah Wedding Planner"
        description="Planned by Peter is a Utah-based full-service and destination wedding planning team crafting unforgettable celebrations through curated design and seamless coordination."
        image="hero-home"
      />
      <HomeHero />
      <HomeWelcome />
      <HomeStatement />
      <HomeProcess />
      <HomeGalleryStrip />
      <HomeServices />
      <Section bg="dark">
        <Testimonials />
      </Section>
      <Section tight>
        <Awards eyebrow="Recognized by The Knot" />
      </Section>
      <Section bg="muted">
        <CtaBanner />
      </Section>
    </>
  );
}
