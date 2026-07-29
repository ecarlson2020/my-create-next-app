import Head from "next/head";

import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>God’s Country Cowboy Church | Loveland, Colorado</title>
        <meta
          name="description"
          content="A Bible-believing, Christ-centered cowboy church in Loveland, Colorado. Join us Sundays at 10:15 AM—come as you are."
        />
        <meta name="theme-color" content="#17332B" />
        <meta property="og:title" content="God’s Country Cowboy Church" />
        <meta
          property="og:description"
          content="Come as you are and join us Sunday at 10:15 AM in Loveland, Colorado."
        />
        <meta property="og:image" content="/images/round-pen-service.jpeg" />
      </Head>
      <Home />
    </>
  );
}
