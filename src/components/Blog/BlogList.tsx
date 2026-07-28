import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import OptimizedImage from "@/components/common/OptimizedImage/OptimizedImage";
import Reveal from "@/components/common/Reveal/Reveal";
import { blogPosts } from "@/config/blog";
import { blogShared as sh } from "./shared.styles";
import { blogListStyles as s } from "./BlogList.styles";

export default function BlogList() {
  return (
    <>
      <Seo
        title="Journal"
        description="Real Utah weddings, planning timelines, and notes from behind the scenes — from the team at Planned by Peter."
        image="hero-blog"
      />
      <PageHero
        eyebrow="Journal"
        title="Notes from the field"
        intro="Real celebrations, planning advice, and what actually goes on behind the scenes."
        image="hero-blog"
        imageAlt="A sweetheart table set with florals overlooking the Utah mountains"
      />

      <Section>
        <Box sx={s.grid}>
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <Box component={Link} href={`/blog/${post.slug}`} sx={s.card}>
                <Box sx={sh.frame}>
                  <OptimizedImage
                    name={post.image}
                    alt={post.imageAlt}
                    cover
                    sizes="(max-width: 900px) 92vw, 46vw"
                  />
                </Box>
                <Box sx={sh.meta}>
                  {post.date}
                  <Box component="span" sx={sh.dot} />
                  {post.readingTime}
                </Box>
                <Typography variant="h3" component="h2" sx={sh.title}>
                  {post.title}
                </Typography>
                <Typography variant="body1" sx={sh.excerpt}>
                  {post.excerpt}
                </Typography>
                <Typography component="span" sx={s.more}>
                  Read the post —
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Section>

      <Section bg="muted">
        <CtaBanner />
      </Section>
    </>
  );
}
