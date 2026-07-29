import { test, expect } from "@playwright/test";

test("home page presents the core V3 services", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "A better yard starts right here." }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Lawn care" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Landscaping" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Irrigation" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Snow removal" }),
  ).toBeVisible();
});

test("mobile navigation opens and reaches the quote form", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Free quote", exact: true })
    .click();

  await expect(
    page.getByRole("heading", { name: "Tell us about your project" }),
  ).toBeVisible();
});

test("quote form provides immediate frontend confirmation", async ({
  page,
}) => {
  await page.goto("/#quote");

  await page.getByLabel("Your name").fill("Taylor Homeowner");
  await page.getByLabel("Phone number").fill("970-555-0123");
  await page.getByLabel("Email address").fill("taylor@example.com");
  await page.getByRole("button", { name: "Request my free quote" }).click();

  await expect(page.getByRole("status")).toContainText("Thanks!");
});
