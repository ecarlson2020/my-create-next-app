import { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Cormorant_Garamond, Jost } from "next/font/google";
import theme, { CREAM } from "@/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import Layout from "@/components/common/Layout/Layout";

// Self-hosted at build time by next/font — no external font requests, no
// render-blocking, with font-display: swap to avoid invisible text.
const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  display: "swap",
  // Not preloaded: the hero headline sits over the LCP image, so we let the
  // photograph win the early bandwidth and swap Cormorant in when it arrives.
  preload: false,
});

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ":root": {
              "--font-body": bodyFont.style.fontFamily,
              "--font-display": displayFont.style.fontFamily,
            },
            html: { scrollBehavior: "smooth", backgroundColor: CREAM },
            body: { overflowX: "hidden" },
            // Links inherit their surrounding colour by default. Every link on
            // this site is styled by its container (nav, footer, body copy), so
            // the browser's blue/purple defaults are never wanted.
            a: { color: "inherit", textDecoration: "none" },
            "a, button": { WebkitTapHighlightColor: "transparent" },
            "@keyframes riseIn": {
              from: { opacity: 0, transform: "translateY(28px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
            // The hero photograph drifts almost imperceptibly over 24s — slow
            // enough to read as depth rather than as motion.
            "@keyframes slowDrift": {
              from: { transform: "scale(1.04) translate3d(0, 0, 0)" },
              to: { transform: "scale(1.12) translate3d(-1.5%, -1%, 0)" },
            },
            "@media (prefers-reduced-motion: reduce)": {
              "*": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
