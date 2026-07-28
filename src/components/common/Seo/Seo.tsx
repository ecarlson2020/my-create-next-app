import Head from "next/head";
import { useRouter } from "next/router";
import { company } from "@/config/company";
import { getImage } from "@/utils/images";

interface SeoProps {
  title: string;
  description: string;
  /** Manifest key for the share image; falls back to the generated OG image. */
  image?: string;
  /** Renders article metadata instead of the default website card. */
  article?: { publishedTime: string };
  noindex?: boolean;
}

const SUFFIX = ` | ${company.name}`;

/**
 * Title stays inside the ~60-character SERP budget: the brand suffix is only
 * appended when the page title leaves room for it, so long post titles don't get
 * their tail cut off by Google in favour of boilerplate.
 */
const buildTitle = (title: string): string =>
  title.length + SUFFIX.length <= 60 ? `${title}${SUFFIX}` : title;

export default function Seo({
  title,
  description,
  image,
  article,
  noindex = false,
}: SeoProps) {
  const router = useRouter();
  const path = router.asPath.split("?")[0].split("#")[0];
  const canonical = `${company.siteUrl}${path === "/" ? "" : path}`;

  // Social crawlers don't reliably decode AVIF or WebP, so the card always gets
  // the JPEG fallback.
  const entry = image ? getImage(image) : undefined;
  const ogImage = `${company.siteUrl}${entry?.fallback ?? "/images/og-image.jpg"}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.siteUrl}/#business`,
    name: company.legalName,
    description: company.tagline,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    image: ogImage,
    areaServed: company.serviceAreas.map((n) => ({
      "@type": "Place",
      name: n,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "UT",
      addressCountry: "US",
    },
    sameAs: [company.instagramUrl],
  };

  return (
    <Head>
      <title>{buildTitle(title)}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {article && (
        <meta
          property="article:published_time"
          content={article.publishedTime}
        />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
