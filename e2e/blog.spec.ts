import { test, expect } from "@playwright/test";

test("blog index lists both posts", async ({ page }) => {
  await page.goto("/blog");
  await expect(
    page.getByRole("heading", { name: /Little Sahara Sand Dunes Wedding/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /How Far in Advance/i }),
  ).toBeVisible();
});

test("a post opens with its real body copy and credits", async ({ page }) => {
  await page.goto("/blog");
  await page
    .getByRole("link", { name: /Little Sahara Sand Dunes Wedding/i })
    .click();

  await expect(page).toHaveURL(/\/blog\/little-sahara-sand-dunes-wedding$/);
  await expect(
    page.getByRole("heading", { name: /A Design Inspired by the Desert/i }),
  ).toBeVisible();
  // Vendor attribution must survive the migration off Wix.
  await expect(page.getByText(/Photography: Ava J Photo/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /All posts/i })).toBeVisible();
});

test("post pages emit article metadata", async ({ page }) => {
  await page.goto("/blog/how-far-in-advance-utah-destination-wedding");
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "article",
  );
  await expect(
    page.locator('meta[property="article:published_time"]'),
  ).toHaveAttribute("content", "2026-05-28");
});
