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
    const expected = `https://www.plannedbypeter.com${route === "/" ? "" : route}`;
    expect(canonical, `${route} canonical`).toBe(expected);

    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description?.length ?? 0, `${route} description`).toBeGreaterThan(
      50,
    );
  }
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
