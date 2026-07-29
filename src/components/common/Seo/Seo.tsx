import Head from "next/head";
import { useRouter } from "next/router";
import { company } from "@/config/company";
import { getImage, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "@/utils/images";

interface SeoProps {
  title: string;
  description: string;
  /** Manifest key for the share image; falls back to the generated OG image. */
  image?: string;
  /** Alt text for the share card. */
  imageAlt?: string;
  /** Renders article metadata and BlogPosting structured data. */
  article?: { publishedTime: string; title: string };
  /** Trail shown to crawlers, excluding Home (added automatically). */
  breadcrumbs?: { name: string; path: string }[];
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
  imageAlt,
  article,
  breadcrumbs,
  noindex = false,
}: SeoProps) {
  const router = useRouter();
  const path = router.asPath.split("?")[0].split("#")[0];
  // Root keeps its trailing slash so the canonical matches the sitemap entry
  // exactly; interior routes never carry one.
  const canonical = `${company.siteUrl}${path}`;

  // Social crawlers don't reliably decode AVIF or WebP, and they render a
  // 1.91:1 landscape card — so this is the dedicated 1200x630 JPEG crop, never
  // the full-size (often portrait) hero.
  const entry = image ? getImage(image) : undefined;
  const ogImage = `${company.siteUrl}${entry?.og ?? entry?.fallback ?? "/images/og-image.jpg"}`;

  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.siteUrl}/#business`,
    name: company.legalName,
    description: company.tagline,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    image: ogImage,
    // Lowest advertised package, from the services page.
    priceRange: "From $1,900",
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

  const schemas: Record<string, unknown>[] = [business];

  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description,
      image: ogImage,
      datePublished: article.publishedTime,
      dateModified: article.publishedTime,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: { "@type": "Organization", name: company.legalName },
      publisher: { "@id": `${company.siteUrl}/#business` },
    });
  }

  if (breadcrumbs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...breadcrumbs].map(
        (crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${company.siteUrl}${crumb.path}`,
        }),
      ),
    });
  }

  const cardAlt = imageAlt ?? `${company.legalName} — ${title}`;

  return (
    <Head>
      <title>{buildTitle(title)}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:image:alt" content={cardAlt} />
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
      <meta name="twitter:image:alt" content={cardAlt} />

      {schemas.map((schema) => (
        <script
          key={String(schema["@type"])}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
