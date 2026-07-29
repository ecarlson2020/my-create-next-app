import { test, expect } from "@playwright/test";

test("presents the salon and primary booking action", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /Hair that looks like you—only louder\./,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Longmont’s home for very good hair"),
  ).toBeVisible();

  const bookingLink = page
    .locator('a[href*="dashboard.boulevard.io/booking"]')
    .first();
  await expect(bookingLink).toHaveAttribute("target", "_blank");
});

test("moves visitors through services, extensions, and artists", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByRole("link", { name: "Services", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("heading", { name: "What are we making today?" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Cut + shape" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "HEVN Extensions", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("heading", { name: "More hair. Zero compromise." }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "Artists", exact: true })
    .first()
    .click();
  await expect(
    page.getByRole("heading", { name: "Artists with range." }),
  ).toBeVisible();
});

test("offers accessible navigation on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open navigation" });
  await menuButton.click();

  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Visit" })
    .click();
  await expect(
    page.getByRole("heading", { name: /Your next good hair day/ }),
  ).toBeVisible();
});
