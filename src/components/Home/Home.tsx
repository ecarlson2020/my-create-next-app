import Seo from "@/components/common/Seo/Seo";
import Section from "@/components/common/Section/Section";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import Awards from "@/components/common/Awards/Awards";
import HomeHero from "./HomeHero";
import HomeWelcome from "./HomeWelcome";
import HomeStatement from "./HomeStatement";
import HomeProcess from "./HomeProcess";
import HomeServices from "./HomeServices";
import HomeGalleryStrip from "./HomeGalleryStrip";
import HomeReviews from "./HomeReviews";

export default function Home() {
  return (
    <>
      <Seo
        title="Utah Wedding Planner"
        description="Planned by Peter is a Utah-based full-service and destination wedding planning team crafting unforgettable celebrations through curated design and seamless coordination."
        image="hero-home"
        imageAlt="A candlelit winter reception beneath crystal chandeliers"
      />
      <HomeHero />
      <HomeWelcome />
      <HomeServices />
      <HomeStatement />
      <HomeProcess />
      <HomeReviews />
      <HomeGalleryStrip />
      <Section tight>
        <Awards eyebrow="Awards + recognition" />
      </Section>
      <Section bg="ochreSoft">
        <CtaBanner />
      </Section>
    </>
  );
}
