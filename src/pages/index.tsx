import Head from "next/head";

import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Studio Boom | Longmont Hair Salon + Extensions</title>
        <meta
          name="description"
          content="Studio Boom is a Longmont hair salon specializing in dimensional color, curl care, precision cuts, and damage-conscious HEVN extensions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
    </>
  );
}
