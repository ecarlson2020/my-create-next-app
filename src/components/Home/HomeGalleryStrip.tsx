import Link from "next/link";
import Box from "@mui/material/Box";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeShared as sh } from "./shared.styles";
import { homeGalleryStripStyles as s } from "./HomeGalleryStrip.styles";

/** Six frames from the portfolio; the rest live on /gallery. */
const PREVIEW = [
  "gallery-02",
  "gallery-10",
  "gallery-06",
  "gallery-20",
  "gallery-27",
  "gallery-32",
];

export default function HomeGalleryStrip() {
  return (
    <Section bg="sand">
      <Box sx={s.head}>
        <SectionHeading
          eyebrow="Gallery"
          title="A peek at some of our work"
          wide
        />
        <Box component={Link} href="/gallery" sx={sh.linkCaps}>
          View the full gallery —
        </Box>
      </Box>
      <Reveal>
        <Box sx={s.strip}>
          {PREVIEW.map((name) => (
            <Box key={name} component={Link} href="/gallery" sx={s.tile}>
              <OptimizedImage
                name={name}
                alt="A wedding planned and designed by Planned by Peter"
                cover
                sizes="(max-width: 900px) 62vw, 16vw"
              />
            </Box>
          ))}
        </Box>
      </Reveal>
    </Section>
  );
}
