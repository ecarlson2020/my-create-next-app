import { test, expect } from "@playwright/test";

const ROUTES = [
  { href: "/", heading: /Artfully planned/i },
  { href: "/process", heading: /Where intention meets expertise/i },
  { href: "/team", heading: /The people behind the day/i },
  { href: "/services", heading: /However much you need us/i },
  { href: "/gallery", heading: /A peek at some of our work/i },
  { href: "/blog", heading: /Notes from the field/i },
  { href: "/contact", heading: /Let's begin/i },
];

test("every route renders its own h1", async ({ page }) => {
  for (const route of ROUTES) {
    await page.goto(route.href);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      route.heading,
    );
  }
});

test("desktop nav links reach every page", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  for (const label of [
    "Our Process",
    "Our Team",
    "Services",
    "Gallery",
    "Blog",
  ]) {
    await nav.getByRole("link", { name: label, exact: true }).click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.goto("/");
  }
});

test("mobile drawer opens and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const drawer = page.getByRole("presentation").last();
  await expect(drawer.getByRole("link", { name: "Our Team" })).toBeVisible();
  await drawer.getByRole("link", { name: "Our Team" }).click();
  await expect(page).toHaveURL(/\/team$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "The people behind the day",
  );
});

test("404 page renders and is noindex", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(
    page.getByRole("heading", { name: /That page has moved/i }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex,nofollow",
  );
});
