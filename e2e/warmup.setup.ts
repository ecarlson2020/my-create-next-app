import { test } from "@playwright/test";

/**
 * Pre-compiles every route before the suite fans out.
 *
 * `next dev` compiles a page on first request. When several parallel workers
 * request the same uncompiled route at once, the dev server can abort one of
 * the in-flight navigations (`net::ERR_ABORTED`) — which surfaces as a flaky
 * failure in whichever spec happened to get there first, not as a real defect.
 *
 * Requesting each route once, serially, means every worker afterwards hits a
 * warm route.
 */
const ROUTES = [
  "/",
  "/process",
  "/team",
  "/services",
  "/gallery",
  "/blog",
  "/blog/little-sahara-sand-dunes-wedding",
  "/blog/how-far-in-advance-utah-destination-wedding",
  "/contact",
  "/this-route-does-not-exist", // compiles the 404 page
];

test("warm up every route", async ({ page }) => {
  test.setTimeout(180_000);
  for (const route of ROUTES) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
  }
});
