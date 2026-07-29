import { test, expect } from "@playwright/test";

test("home page presents the core landscape design journey", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Made for life at elevation." }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Landscape design" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Landscape construction" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Basement remodels" }),
  ).toBeVisible();
  await expect(page.getByText("20+ years local")).toBeVisible();
});

test("desktop navigation reaches the selected work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Our work" }).first().click();

  await expect(page).toHaveURL(/#work$/);
  await expect(
    page.getByRole("heading", { name: "Spaces that feel at home here." }),
  ).toBeInViewport();
});

test("mobile visitors can use the navigation drawer", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();

  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Process" })
    .click();
  await expect(page).toHaveURL(/#process$/);
  await expect(
    page.getByRole("heading", { name: "Clear at every turn." }),
  ).toBeVisible();
});

test("consultation form validates and shows the frontend confirmation", async ({
  page,
}) => {
  await page.goto("/#contact");
  await page.getByLabel("Your name").fill("Taylor Smith");
  await page.getByLabel("Email address").fill("taylor@example.com");
  await page.getByLabel("Interested in").click();
  await page.getByRole("option", { name: "Landscape design" }).click();
  await page
    .getByLabel("A few details about your space")
    .fill("A new backyard patio.");
  await page.getByRole("button", { name: "Request consultation" }).click();

  await expect(
    page.getByText("Thanks! Form delivery will be connected before launch."),
  ).toBeVisible();
});
