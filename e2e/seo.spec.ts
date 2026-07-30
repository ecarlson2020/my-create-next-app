import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/process",
  "/team",
  "/services",
  "/gallery",
  "/blog",
  "/contact",
];

test("every route has a unique title and a matching canonical", async ({
  page,
}) => {
  const titles = new Set<string>();

  for (const route of ROUTES) {
    await page.goto(route);

    const title = await page.title();
    expect(title, `${route} should have a title`).not.toBe("");
    expect(titles.has(title), `${route} title "${title}" is duplicated`).toBe(
      false,
    );
    titles.add(title);

    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    const expected = `https://www.plannedbypeter.com${route}`;
    expect(canonical, `${route} canonical`).toBe(expected);

    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description?.length ?? 0, `${route} description`).toBeGreaterThan(
      50,
    );
  }
});

test("every route ships a landscape 1200x630 social card", async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(route);

    const image = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    // Must be the dedicated crop, never the full-size hero — most heroes are
    // 2:3 portrait and social cards render 1.91:1 landscape.
    expect(image, `${route} og:image`).toMatch(/\/images\/og-[\w-]+\.jpg$/);

    await expect(
      page.locator('meta[property="og:image:width"]'),
    ).toHaveAttribute("content", "1200");
    await expect(
      page.locator('meta[property="og:image:height"]'),
    ).toHaveAttribute("content", "630");

    const alt = await page
      .locator('meta[property="og:image:alt"]')
      .getAttribute("content");
    expect(alt?.length ?? 0, `${route} og:image:alt`).toBeGreaterThan(10);

    // The card must actually resolve — a 404 here is invisible until someone
    // shares the page and gets a blank preview.
    const res = await page.request.get(
      image!.replace("https://www.plannedbypeter.com", ""),
    );
    expect(res.status(), `${route} og:image fetch`).toBe(200);
  }
});

test("blog posts add BlogPosting and BreadcrumbList schema", async ({
  page,
}) => {
  await page.goto("/blog/little-sahara-sand-dunes-wedding");
  const raw = await page
    .locator('script[type="application/ld+json"]')
    .allInnerTexts();
  const types = raw.map((r) => JSON.parse(r)["@type"]);
  expect(types).toContain("LocalBusiness");
  expect(types).toContain("BlogPosting");
  expect(types).toContain("BreadcrumbList");

  const post = raw
    .map((r) => JSON.parse(r))
    .find((d) => d["@type"] === "BlogPosting");
  expect(post.datePublished).toBe("2026-06-25");
  expect(post.headline).toContain("Little Sahara");
});

test("home page emits LocalBusiness structured data", async ({ page }) => {
  await page.goto("/");
  const raw = await page
    .locator('script[type="application/ld+json"]')
    .innerText();
  const data = JSON.parse(raw);
  expect(data["@type"]).toBe("LocalBusiness");
  expect(data.telephone).toBe("801-580-3488");
  expect(data.email).toBe("peterktestakis@plannedbypeter.com");
});
