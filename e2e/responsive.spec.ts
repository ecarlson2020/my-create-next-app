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

test("no page scrolls horizontally on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const route of ROUTES) {
    await page.goto(route);
    // Full-bleed sections cancel the Container's padding with negative margins;
    // overshooting those values pushes the document wider than the viewport and
    // gives every phone a horizontal scrollbar.
    const { docWidth, viewport } = await page.evaluate(() => ({
      docWidth: document.documentElement.scrollWidth,
      viewport: document.documentElement.clientWidth,
    }));
    expect(docWidth, `${route} overflows horizontally`).toBeLessThanOrEqual(
      viewport,
    );
  }
});

test("the mobile gallery strip scrolls within itself", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  // The strip is a horizontal scroller: its content is wider than its own box,
  // but the box itself must still fit the viewport. Polled rather than sampled
  // once — under a cold dev server the tiles are attached before the grid has
  // laid out, and a single read catches scrollWidth === clientWidth.
  const measure = () =>
    page.evaluate(() => {
      const el = [...document.querySelectorAll("main div")].find(
        (d) =>
          getComputedStyle(d).overflowX === "auto" &&
          d.scrollWidth > d.clientWidth,
      );
      return el
        ? { clientWidth: el.clientWidth, scrollWidth: el.scrollWidth }
        : null;
    });

  await expect
    .poll(measure, { message: "expected a horizontal gallery scroller" })
    .not.toBeNull();

  const strip = (await measure())!;
  expect(strip.clientWidth).toBeLessThanOrEqual(390);
  expect(strip.scrollWidth).toBeGreaterThan(strip.clientWidth);
});
