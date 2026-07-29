import Head from "next/head";
import Home from "../components/Home/Home";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "V3 Lawn Care",
  url: "https://v3lawncare.com",
  telephone: "+1-303-709-3757",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8130 Lighthouse Lane",
    addressLocality: "Fort Collins",
    addressRegion: "CO",
    postalCode: "80528",
    addressCountry: "US",
  },
  areaServed: [
    "Fort Collins",
    "Loveland",
    "Windsor",
    "Berthoud",
    "Longmont",
    "Johnstown",
    "Timnath",
  ],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          V3 Lawn Care | Lawn Care & Landscaping in Northern Colorado
        </title>
        <meta
          name="description"
          content="Family-owned lawn care, landscaping, irrigation, and snow removal in Fort Collins, Loveland, Windsor, Berthoud, Longmont, and nearby Northern Colorado communities."
        />
        <meta name="theme-color" content="#123324" />
        <meta property="og:title" content="V3 Lawn Care | Northern Colorado" />
        <meta
          property="og:description"
          content="Dependable lawn care, inspired landscapes, irrigation, and snow removal from a local family with 20+ years of experience."
        />
        <meta
          property="og:image"
          content="https://v3lawncare.com/images/hero-yard.webp"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          type="application/ld+json"
        />
      </Head>
      <Home />
    </>
  );
}
