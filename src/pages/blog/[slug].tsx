import { GetStaticPaths, GetStaticProps } from "next";
import BlogPost from "@/components/Blog/BlogPost";
import { blogPosts, getPost, type BlogPost as Post } from "@/config/blog";

interface BlogPostPageProps {
  post: Post;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return <BlogPost post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  // Every post is known at build time and the export is static, so an unknown
  // slug is a 404 rather than an on-demand render.
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const post = getPost(String(params?.slug));
  if (!post) return { notFound: true };
  return { props: { post } };
};
