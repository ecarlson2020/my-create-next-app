import createCache, { EmotionCache } from "@emotion/cache";

// `prepend: true` moves MUI/emotion styles to the top of <head> so they load
// before any other CSS, keeping our overrides predictable.
export default function createEmotionCache(): EmotionCache {
  return createCache({ key: "css", prepend: true });
}
