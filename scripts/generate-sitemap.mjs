/**
 * Post-build: walks the static export and writes out/sitemap.xml.
 *
 * `public/robots.txt` advertises the sitemap, so this has to run on every build
 * or crawlers follow that pointer to a 404.
 *
 * Run with:  node scripts/generate-sitemap.mjs
 */
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");

// Routes crawlers shouldn't be pointed at.
const EXCLUDED = new Set(["/404"]);

// Rough importance ordering. Everything absent gets the default.
const PRIORITY = {
  "/": "1.0",
  "/services": "0.9",
  "/contact": "0.9",
  "/gallery": "0.8",
  "/process": "0.8",
  "/team": "0.7",
  "/blog": "0.7",
};
const DEFAULT_PRIORITY = "0.6";

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      return entry.name.endsWith(".html") ? [full] : [];
    }),
  );
  return files.flat();
}

/**
 * Reads the base URL back out of an exported page's canonical tag rather than
 * hardcoding it, so a staging build doesn't emit production URLs.
 */
async function detectBaseUrl(htmlFiles) {
  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    const match = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (match) {
      const url = new URL(match[1]);
      return `${url.protocol}//${url.host}`;
    }
  }
  return null;
}

const toRoute = (file) => {
  const rel = path.relative(outDir, file).replace(/\\/g, "/");
  const route = `/${rel.replace(/\.html$/, "")}`;
  return route === "/index" ? "/" : route.replace(/\/index$/, "");
};

async function main() {
  let htmlFiles;
  try {
    htmlFiles = await walk(outDir);
  } catch {
    console.error(`No export found at ${outDir} — run the build first.`);
    process.exit(1);
  }

  const baseUrl = await detectBaseUrl(htmlFiles);
  if (!baseUrl) {
    console.error("No canonical tag found in the export; cannot resolve a base URL.");
    process.exit(1);
  }

  const routes = [];
  for (const file of htmlFiles) {
    const route = toRoute(file);
    if (EXCLUDED.has(route)) continue;
    // Respect any page that opted out of indexing.
    const html = await fs.readFile(file, "utf8");
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
    routes.push(route);
  }

  routes.sort();
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = routes
    .map((route) =>
      [
        "  <url>",
        `    <loc>${baseUrl}${route === "/" ? "/" : route}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <priority>${PRIORITY[route] ?? DEFAULT_PRIORITY}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  await fs.writeFile(path.join(outDir, "sitemap.xml"), xml);
  console.log(`Wrote out/sitemap.xml with ${routes.length} routes (${baseUrl}).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
