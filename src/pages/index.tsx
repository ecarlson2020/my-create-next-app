import Head from "next/head";

import Home from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          C&amp;B Waterworks | Landscape Design &amp; Construction in Colorado
        </title>
        <meta
          name="description"
          content="Thoughtful landscape design, construction, outdoor living, and basement remodels from Denver to Fort Collins. Over 20 years of Colorado craftsmanship."
        />
        <meta
          property="og:title"
          content="C&B Waterworks | Made for Colorado"
        />
        <meta
          property="og:description"
          content="Landscape design and construction made for life along the Colorado Front Range."
        />
        <meta property="og:image" content="/images/hero-landscape.webp" />
        <meta name="theme-color" content="#173427" />
      </Head>
      <Home />
    </>
  );
}
