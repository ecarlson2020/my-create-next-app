/**
 * Downloads Planned by Peter's photography and generates responsive, optimized
 * AVIF + WebP (+ JPEG fallback) variants into /public/images, plus favicons, an
 * OG image, and an importable manifest (src/config/imageManifest.json) consumed
 * by <OptimizedImage>.
 *
 * Sources are the client's own Wix-hosted originals — `output: "export"` means
 * there is no image optimizer at runtime, so everything is pre-rendered here.
 *
 * Run with:  node scripts/optimize-images.mjs
 *            node scripts/optimize-images.mjs hero-home     (one key, merges)
 *            node scripts/optimize-images.mjs --favicons    (icons only)
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagesDir = path.join(root, "public", "images");
const publicDir = path.join(root, "public");
const manifestPath = path.join(root, "src", "config", "imageManifest.json");

const WIX = "https://static.wixstatic.com/media";
const media = (id, ext = "jpg") => `${WIX}/${id}~mv2.${ext}`;

const LOGO = media("591962_a52a5ec0bdf144ee98f5470ca1e3ed6a", "png");

// The client's existing favicon: a photograph of a couple that Wix square-crops
// on the fly. Kept deliberately so the browser-tab icon doesn't change from what
// visitors and the client already recognise.
const FAVICON = media("fab39b_a8e9e6ba62104eeeb584a563626ccd1b", "jpg");

/**
 * Every wedding photo from the client's gallery, in display order. These are the
 * portfolio — real weddings the team planned. Nothing generated goes in here.
 */
const GALLERY = [
  "591962_cb498361bb094512a47143c96984835e",
  "591962_c4ab14d055f34d4599382f7d15396481",
  "591962_e31e25f2e5fe47f78bf5a5b86b56ae43",
  "591962_2eee17a1e2bc4b06bc6d5bea052c544b",
  "591962_d2a68dee217744bea6d6608b8535bf84",
  "591962_f43cc24270d1423ca28b5517d139e101",
  "591962_48c2140d2d13434ba0545bb895a3f052",
  "591962_0cfbbeb9beac45f982bf280831b25bcc",
  "591962_90603c7d2058484aba67d7033cf68bd0",
  "591962_170b55de2b3c44369372e250eb001245",
  "591962_e0d48e496f0e4b9fa9acd5adbd653c70",
  "591962_c5434cda04644594abc853b34939de1c",
  "591962_fb8d6a130d1d481aac91e1fef10dc53e",
  "591962_7c974cc37b9948be82dafe1945a319ba",
  "591962_b1d34eb2cf214eb7be2170ee2c505bb5",
  "591962_c886a941ecb74689959a09d3b6905dc4",
  "591962_1e99c7848d5d4a90ad7e2749a6e5c0fa",
  "591962_8b7b9cb3c8724853800e4d7751197884",
  "591962_31847fc0823d473e8e7feb861c10bc3d",
  "591962_62ae853bc40041ad870fdbf8919deb70",
  "591962_ac472a7dd6d340eab385da2c9ec44758",
  "591962_e0fdb6509d98403da8e178398b98e4ce",
  "591962_1f9fd13e713d494786a47f1b66a96f8a",
  "591962_0f2d40559cb24d4ab7429385f04246c1",
  "591962_b3c47b61d6fb4683ab1a4f3ff9263f3c",
  "591962_c20896eccb3f430f991d8628dce4c0a8",
  "591962_26ffe8e516484fb89bc931e9ab742f03",
  "591962_a0f2c389a8734132abd9a4ad4fb59270",
  "591962_149930c5a60e441098f89961ccbc20d9",
  "591962_37ecdc719c8045a99e2d78a9b87eeea9",
  "591962_d99effe36d0042a3a0ee8323cb2d71c5",
  "591962_317c86cb74c94db49906f75b276343cd",
  "591962_854869b6eb3f48329e59bbca17043e9d",
  "591962_6c119bbcf4ce4547a00f6ec0c0082849",
  "591962_754fbc2747a7421ab3d5504e200d5324",
  "591962_5309726fff434690b5e92fb81d15c237",
  "591962_bea56014e6104a08905b79fcc8309e06",
  "fab39b_83545b3dcb6248429b83cf1456fe83cd",
  "591962_959734ac2cef44d9ad474d7f5cb2485b",
  "fab39b_feb9222d1a8d4541b73702911d3cba6f",
  "fab39b_b63b8b814f5847ce881390805d869726",
  "fab39b_cb927488073a4164b6f5b8db6013ee0c",
  "591962_c5cb2e718ddb4e92ade9c73be3d18fbc",
  "591962_bd443827acae4653b8b6eb04c59bf6f0",
  "591962_b4febf201c0341ca974ef9aae6693dde",
  "fab39b_e5f97be7e67f47a7a6b701a62d3b24d3",
];

// The wedding photos that also do duty as feature images elsewhere on the site.
// Keyed separately from the gallery so a gallery reorder never silently swaps
// the hero out from under the home page.
const FEATURES = {
  // Winter tent reception, chandeliers over a long head table. The widest,
  // highest-resolution frame in the set — the only one that survives a
  // full-bleed hero crop on desktop without going soft.
  "hero-home": { id: "591962_1f9fd13e713d494786a47f1b66a96f8a", maxW: 2000 },
  "hero-process": { id: "591962_fb8d6a130d1d481aac91e1fef10dc53e", maxW: 1600 },
  "hero-services": { id: "591962_5309726fff434690b5e92fb81d15c237", maxW: 1600 },
  "hero-gallery": { id: "591962_317c86cb74c94db49906f75b276343cd", maxW: 1600 },
  "hero-contact": { id: "591962_c20896eccb3f430f991d8628dce4c0a8", maxW: 1600 },
  "hero-team": { id: "591962_c886a941ecb74689959a09d3b6905dc4", maxW: 1600 },
  "hero-blog": { id: "591962_2eee17a1e2bc4b06bc6d5bea052c544b", maxW: 1600 },

  "home-welcome": { id: "591962_c20896eccb3f430f991d8628dce4c0a8", maxW: 1200 },
  "home-approach": { id: "591962_cb498361bb094512a47143c96984835e", maxW: 1200 },

  "process-1": { id: "591962_a0f2c389a8734132abd9a4ad4fb59270", maxW: 1200 },
  "process-2": { id: "591962_c5cb2e718ddb4e92ade9c73be3d18fbc", maxW: 1200 },
  "process-3": { id: "591962_fb8d6a130d1d481aac91e1fef10dc53e", maxW: 1200 },
  "process-4": { id: "591962_7c974cc37b9948be82dafe1945a319ba", maxW: 1200 },
  "process-5": { id: "fab39b_b63b8b814f5847ce881390805d869726", maxW: 1200 },

  "service-full": { id: "591962_5309726fff434690b5e92fb81d15c237", maxW: 1200 },
  "service-month-of": {
    id: "591962_317c86cb74c94db49906f75b276343cd",
    maxW: 1200,
  },
  "service-day-of": { id: "591962_31847fc0823d473e8e7feb861c10bc3d", maxW: 1200 },

  // Blog post headers. `blog-dunes` is the actual Little Sahara wedding the post
  // is about — chandelier suspended over the sand.
  "blog-dunes": { id: "591962_170b55de2b3c44369372e250eb001245", maxW: 1600 },
  "blog-timeline": { id: "591962_2eee17a1e2bc4b06bc6d5bea052c544b", maxW: 1600 },
};

/**
 * AI-generated textures and abstract details, dropped into scripts/sources/ by
 * hand. Deliberately limited to backgrounds and non-representational detail —
 * nothing here may depict a wedding the team didn't plan or a person who
 * doesn't exist. See the README note in scripts/sources/.
 *
 * Missing files are skipped with a warning rather than failing the run, so the
 * site builds before the generated assets land.
 */
const GENERATED = [
  { key: "texture-linen", file: "scripts/sources/texture-linen.png", maxW: 1600 },
  { key: "texture-paper", file: "scripts/sources/texture-paper.png", maxW: 1600 },
  { key: "texture-silk", file: "scripts/sources/texture-silk.png", maxW: 1600 },
  {
    key: "detail-candles",
    file: "scripts/sources/detail-candles.png",
    maxW: 1200,
  },
  {
    key: "detail-stationery",
    file: "scripts/sources/detail-stationery.png",
    maxW: 1200,
  },
  {
    key: "detail-florals",
    file: "scripts/sources/detail-florals.png",
    maxW: 1200,
  },
  {
    key: "detail-place-setting",
    file: "scripts/sources/detail-place-setting.png",
    maxW: 1200,
  },
  {
    key: "detail-rings-abstract",
    file: "scripts/sources/detail-rings-abstract.png",
    maxW: 1200,
  },
  {
    key: "bg-mountain-dusk",
    file: "scripts/sources/bg-mountain-dusk.png",
    maxW: 1600,
  },
  {
    key: "bg-desert-dunes",
    file: "scripts/sources/bg-desert-dunes.png",
    maxW: 1600,
  },
  { key: "bg-404", file: "scripts/sources/bg-404.png", maxW: 1200 },
  // Real headshots, once the client supplies them. TeamMember falls back to a
  // typographic monogram card while these are absent.
  { key: "team-peter", file: "scripts/sources/team-peter.jpg", maxW: 1000 },
  { key: "team-emily", file: "scripts/sources/team-emily.jpg", maxW: 1000 },
];

/**
 * The Knot "Best of Weddings" award badges, two consecutive years. These are
 * the awarding body's own artwork on a transparent background, so they take the
 * `transparent` path (PNG fallback, no JPEG) — flattening them would box each
 * badge in a solid rectangle against the cream page.
 */
const BADGES = {
  "award-knot-2026": {
    id: "fab39b_264fc519b2f74f5aa93b6640a3c113d1",
    maxW: 400,
  },
  "award-knot-2025": {
    id: "fab39b_175e37d499a5455fa9de9a31461b9e5f",
    maxW: 400,
  },
};

// Keys used as a page's social share image. Social cards are 1.91:1 landscape,
// but most of these heroes are 2:3 portrait — handing the full-size original to
// a crawler gets it hard-cropped or shrunk to a square thumbnail. Each of these
// gets a dedicated 1200x630 crop instead.
const NEEDS_OG_CROP = (key) =>
  key.startsWith("hero-") || key.startsWith("blog-");

const CONTENT = [
  ...Object.entries(FEATURES).map(([key, { id, maxW }]) => ({
    key,
    url: media(id),
    maxW,
    og: NEEDS_OG_CROP(key),
  })),
  ...Object.entries(BADGES).map(([key, { id, maxW }]) => ({
    key,
    url: media(id, "png"),
    maxW,
    transparent: true,
  })),
  ...GALLERY.map((id, i) => ({
    key: `gallery-${String(i + 1).padStart(2, "0")}`,
    // The one .jpeg in an otherwise .jpg set.
    url: media(id, id === "fab39b_e5f97be7e67f47a7a6b701a62d3b24d3" ? "jpeg" : "jpg"),
    maxW: 1400,
  })),
  ...GENERATED,
];

const WIDTHS = [400, 800, 1200, 1600, 2000];

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function processImage({ key, url, file, maxW, transparent, og }, cache) {
  let buf;
  if (file) {
    const abs = path.join(root, file);
    try {
      buf = await fs.readFile(abs);
    } catch {
      return null; // not supplied yet — caller warns and skips
    }
  } else {
    buf = cache.get(url) ?? (await download(url));
    cache.set(url, buf);
  }

  const meta = await sharp(buf).metadata();
  const intrinsic = meta.width ?? maxW;
  const widths = [...new Set(WIDTHS.filter((w) => w <= maxW && w <= intrinsic))];
  if (widths.length === 0) widths.push(Math.min(maxW, intrinsic));
  const largest = Math.max(...widths);
  const aspect = (meta.height ?? 1) / (meta.width ?? 1);

  const avif = [];
  const webp = [];
  for (const w of widths) {
    const resized = sharp(buf).resize({ width: w, withoutEnlargement: true });
    await resized
      .clone()
      .avif({ quality: 50 })
      .toFile(path.join(imagesDir, `${key}-${w}.avif`));
    await resized
      .clone()
      .webp({ quality: 72 })
      .toFile(path.join(imagesDir, `${key}-${w}.webp`));
    avif.push({ w, src: `/images/${key}-${w}.avif` });
    webp.push({ w, src: `/images/${key}-${w}.webp` });
  }
  // JPEG has no alpha channel, so anything transparent gets a PNG fallback
  // instead — a JPEG would render the badge inside a solid rectangle.
  const ext = transparent ? "png" : "jpg";
  const fallback = sharp(buf).resize({ width: largest, withoutEnlargement: true });
  await (transparent
    ? fallback.png({ compressionLevel: 9 })
    : fallback.jpeg({ quality: 78, mozjpeg: true })
  ).toFile(path.join(imagesDir, `${key}-${largest}.${ext}`));

  // Centre crop, not sharp's "attention" heuristic. On these 2:3 portraits
  // attention chases contrast rather than subject — it framed the team hero on
  // treetops with the couple cropped out entirely, and picked empty sky over the
  // tablescape on three others. Wedding photographers centre their subject, so
  // the geometric centre is both better and predictable.
  let ogPath;
  if (og) {
    ogPath = `/images/og-${key}.jpg`;
    await sharp(buf)
      .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover", position: "centre" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(imagesDir, `og-${key}.jpg`));
  }

  return {
    width: largest,
    height: Math.round(largest * aspect),
    avif,
    webp,
    fallback: `/images/${key}-${largest}.${ext}`,
    ...(ogPath ? { og: ogPath } : {}),
  };
}

async function makeOgImage(cache) {
  const url = media(FEATURES["hero-home"].id);
  const buf = cache.get(url) ?? (await download(url));
  await sharp(buf)
    .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(imagesDir, "og-image.jpg"));
}

// The wordmark keeps its transparency, so it gets WebP + PNG (no JPEG).
async function makeLogo() {
  const buf = await download(LOGO);
  const width = 560;
  await sharp(buf)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 92 })
    .toFile(path.join(publicDir, "logo.webp"));
  await sharp(buf)
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "logo.png"));
}

async function makeFavicons() {
  // Square-cropped from the centre, matching how Wix renders the same source
  // today (`/v1/fill/w_32,h_32`).
  const src = await download(FAVICON);
  const sizes = [
    [180, "apple-touch-icon.png"],
    [192, "icon-192.png"],
    [512, "icon-512.png"],
    [32, "favicon-32.png"],
  ];
  for (const [size, name] of sizes) {
    await sharp(src)
      .resize(size, size, { fit: "cover", position: "centre" })
      .png()
      .toFile(path.join(publicDir, name));
  }
  // Wrap the 32x32 PNG in an ICO container (modern browsers read PNG-in-ICO).
  const png = await fs.readFile(path.join(publicDir, "favicon-32.png"));
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(
    path.join(publicDir, "favicon.ico"),
    Buffer.concat([header, png]),
  );
  await fs.rm(path.join(publicDir, "favicon-32.png"));
}

async function main() {
  await fs.mkdir(imagesDir, { recursive: true });
  const cache = new Map();
  const args = process.argv.slice(2);

  if (args.includes("--favicons")) {
    await makeFavicons();
    console.log("Done. Wrote favicons.");
    return;
  }

  const only = new Set(args);
  const items = only.size ? CONTENT.filter((c) => only.has(c.key)) : CONTENT;
  const manifest = only.size
    ? JSON.parse(await fs.readFile(manifestPath, "utf8"))
    : {};

  let written = 0;
  const skipped = [];
  for (const item of items) {
    const entry = await processImage(item, cache);
    if (!entry) {
      skipped.push(item.key);
      continue;
    }
    manifest[item.key] = entry;
    written += 1;
    console.log(`  ${item.key}`);
  }

  if (!only.size) {
    await makeOgImage(cache);
    await makeLogo();
    await makeFavicons();
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\nDone. Wrote ${written} images${only.size ? "" : " + favicons"}.`);
  if (skipped.length) {
    console.log(
      `Skipped ${skipped.length} not-yet-supplied source${
        skipped.length === 1 ? "" : "s"
      }: ${skipped.join(", ")}`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
