import { test, expect } from "@playwright/test";

test("welcomes visitors with Sunday service details", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Come as you are. Meet Jesus here." }),
  ).toBeVisible();
  await expect(
    page.getByText("Sunday worship · 10:15 AM").first(),
  ).toBeVisible();
});

test("moves through the primary homepage journey", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Plan your visit" }).click();

  await expect(
    page.getByRole("heading", { name: "It can be as simple as showing up." }),
  ).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "Open in Google Maps" }),
  ).toHaveAttribute("href", /google\.com\/maps/);
});

test("opens and closes the mobile navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();

  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Our story" }).last().click();
  await expect(
    page.getByRole("heading", { name: "No polished boots required." }),
  ).toBeInViewport();
});
