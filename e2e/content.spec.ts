import { test, expect } from "@playwright/test";

test("services page lists all three packages with their pricing", async ({
  page,
}) => {
  await page.goto("/services");
  for (const title of [
    "Full Wedding Planning",
    "Month of Wedding Planning",
    "Day of Wedding Planning",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }
  await expect(page.getByText("Investment starting at $5,000")).toBeVisible();
  await expect(page.getByText("Investment starting at $2,300")).toBeVisible();
  await expect(page.getByText("Investment starting at $1,900")).toBeVisible();
});

test("process page renders all five steps", async ({ page }) => {
  await page.goto("/process");
  for (const title of [
    "Discovering your love story",
    "Curating an intentional design",
    "Managing timelines + logistics",
    "Vendor sourcing",
    "Bringing it all together",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }
});

test("team page names both team members", async ({ page }) => {
  await page.goto("/team");
  await expect(
    page.getByRole("heading", { name: "Peter Ktestakis" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Emily Twohig" }),
  ).toBeVisible();
  // Exact match: "Lead Designer" also appears inside Emily's bio paragraph.
  await expect(
    page.getByText("Owner + Lead Planner", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Lead Designer", { exact: true })).toBeVisible();
});

test("gallery renders the full set and opens a lightbox", async ({ page }) => {
  await page.goto("/gallery");
  const tiles = page.getByRole("button", { name: /Open photo \d+ of \d+/ });
  await expect(tiles.first()).toBeVisible();
  expect(await tiles.count()).toBeGreaterThan(40);

  await tiles.first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("1 /", { exact: false })).toBeVisible();

  await page.getByRole("button", { name: "Next photo" }).click();
  await expect(dialog.getByText("2 /", { exact: false })).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();
  await expect(dialog).toBeHidden();
});

test("both Knot award badges render on the home page and load", async ({
  page,
}) => {
  await page.goto("/");
  for (const year of ["2025", "2026"]) {
    const badge = page
      .getByRole("img", {
        name: `The Knot Best of Weddings ${year} award badge`,
      })
      .first();
    await badge.scrollIntoViewIfNeeded();
    await expect(badge).toBeVisible();
    await expect
      .poll(() => badge.evaluate((i: HTMLImageElement) => i.naturalWidth))
      .toBeGreaterThan(50);
  }
});

test("Instagram is linked from the footer and the contact page", async ({
  page,
}) => {
  await page.goto("/");
  const footerSocial = page
    .getByRole("contentinfo")
    .getByRole("link", { name: /Instagram — @plannedbypeter/i });
  await expect(footerSocial).toBeVisible();
  await expect(footerSocial).toHaveAttribute(
    "href",
    "https://www.instagram.com/plannedbypeter",
  );

  // Scoped to <main>: the footer carries the same link on every page.
  await page.goto("/contact");
  await expect(
    page
      .getByRole("main")
      .getByRole("link", { name: /Instagram — @plannedbypeter/i }),
  ).toBeVisible();
});

test("footer carries the real contact details", async ({ page }) => {
  await page.goto("/");
  const footer = page.getByRole("contentinfo");
  await expect(
    footer.getByRole("link", { name: "peterktestakis@plannedbypeter.com" }),
  ).toBeVisible();
  await expect(
    footer.getByRole("link", { name: "801-580-3488" }),
  ).toBeVisible();
  // Exact: the email address also contains "plannedbypeter".
  await expect(
    footer.getByRole("link", { name: "@plannedbypeter", exact: true }),
  ).toBeVisible();
});
