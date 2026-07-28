import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Section from "@/components/common/Section/Section";
import PageHero from "@/components/common/PageHero/PageHero";
import Seo from "@/components/common/Seo/Seo";
import CtaBanner from "@/components/common/CtaBanner/CtaBanner";
import type { BlogPost as Post } from "@/config/blog";
import { blogShared as sh } from "./shared.styles";
import { blogPostStyles as s } from "./BlogPost.styles";

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.image}
        article={{ publishedTime: post.isoDate }}
      />
      <PageHero
        eyebrow={`${post.date} · ${post.readingTime}`}
        title={post.title}
        image={post.image}
        imageAlt={post.imageAlt}
      />

      <Section>
        <Box component="article" sx={s.article}>
          <Box component={Link} href="/blog" sx={s.back}>
            — All posts
          </Box>
          <Box sx={sh.meta} mb={4}>
            {post.date}
            <Box component="span" sx={sh.dot} />
            {post.readingTime}
          </Box>
          <Box sx={s.body}>
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <Typography
                    key={block.text.slice(0, 40)}
                    variant="h3"
                    component="h2"
                    sx={s.h2}
                  >
                    {block.text}
                  </Typography>
                );
              }
              if (block.type === "credit") {
                return (
                  <Typography
                    key={block.text.slice(0, 40)}
                    component="p"
                    sx={s.credit}
                  >
                    {block.text}
                  </Typography>
                );
              }
              return (
                <Typography
                  key={`${i}-${block.text.slice(0, 30)}`}
                  component="p"
                  sx={s.p}
                >
                  {block.text}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Section>

      <Section bg="muted">
        <CtaBanner
          eyebrow="Begin"
          title="Begin your planning + design experience"
          body="If you're dreaming of something like this, we'd love to hear about it."
        />
      </Section>
    </>
  );
}
