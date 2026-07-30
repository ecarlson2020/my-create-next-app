import Link from "next/link";
import Box from "@mui/material/Box";
import Section from "@/components/common/Section/Section";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { homeShared as sh } from "./shared.styles";
import {
  homeGalleryStripStyles as s,
  TILE_SHAPES,
} from "./HomeGalleryStrip.styles";

/** Six frames from the portfolio; the rest live on /gallery. */
const PREVIEW = ["gallery-35", "gallery-28", "gallery-43", "gallery-42"];

export default function HomeGalleryStrip() {
  return (
    <Section>
      <Box sx={s.head}>
        <SectionHeading
          eyebrow="Gallery"
          title="A peek at some of our work"
          wide
        />
        <Box component={Link} href="/gallery" sx={sh.linkPill}>
          View the full gallery
        </Box>
      </Box>
      <Reveal>
        <Box sx={s.strip}>
          {PREVIEW.map((name, i) => (
            <Box
              key={name}
              component={Link}
              href="/gallery"
              sx={{
                ...s.tile,
                ...(i % 2 === 1 ? s.tileOffset : {}),
                borderRadius: TILE_SHAPES[i].radius,
                aspectRatio: TILE_SHAPES[i].ratio,
              }}
            >
              <OptimizedImage
                name={name}
                alt="A wedding planned and designed by Planned by Peter"
                cover
                sizes="(max-width: 900px) 58vw, 16vw"
              />
            </Box>
          ))}
        </Box>
      </Reveal>
    </Section>
  );
}
