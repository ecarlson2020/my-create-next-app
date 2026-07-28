import { test, expect } from "@playwright/test";

test("home hero renders the headline and inquire CTA", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /Artfully planned/i }),
  ).toBeVisible();
  // "Inquire" also appears in the closing CTA banner, so scope to the hero.
  await expect(
    page.getByRole("main").getByRole("link", { name: "Inquire" }).first(),
  ).toBeVisible();
});

test("home hero image actually loads", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("main img").first();
  await expect(hero).toBeVisible();
  // The specific failure this site was rebuilt to fix: the old Wix build left
  // blurred placeholders that never resolved. Assert real pixels decoded.
  await expect
    .poll(() => hero.evaluate((img: HTMLImageElement) => img.naturalWidth))
    .toBeGreaterThan(100);
});

test("home surfaces the process, gallery and services sections", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /From first conversation/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /A peek at some of our work/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /However much you need us/i }),
  ).toBeVisible();
});
