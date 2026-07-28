import Section from "@/components/common/Section/Section";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery"
        description="A look at weddings planned and designed by Planned by Peter across Utah, Park City, Deer Valley, Moab and beyond."
        image="hero-gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="A peek at some of our work"
        image="hero-gallery"
        imageAlt="A draped ivory reception space with soft floral arrangements"
      />

      <Section>
        <GalleryGrid />
      </Section>

      <Section bg="muted">
        <CtaBanner
          eyebrow="Yours next"
          title="We'd love to design yours."
          body="Every celebration here started with a first conversation. Tell us about yours."
        />
      </Section>
    </>
  );
}
