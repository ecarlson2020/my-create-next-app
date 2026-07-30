import { test, expect } from "@playwright/test";

test("empty submit surfaces validation errors and sends nothing", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (r) => {
    if (r.method() === "POST") requests.push(r.url());
  });

  await page.goto("/contact");
  await page.getByRole("button", { name: "Send" }).click();

  await expect(page.getByText("Please enter your first name.")).toBeVisible();
  await expect(page.getByText("Please enter your last name.")).toBeVisible();
  await expect(
    page.getByText("Please enter your email so we can reply."),
  ).toBeVisible();
  await expect(
    page.getByText("Tell us a little about your day."),
  ).toBeVisible();
  expect(requests).toHaveLength(0);
});

test("a malformed email is rejected", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("First name").fill("Amanda");
  await page.getByLabel("Last name").fill("Shane");
  await page.getByLabel("Email").fill("not-an-email");
  await page
    .getByLabel("Anything else we should know?")
    .fill("A winter weekend in Deer Valley.");
  await page.getByRole("button", { name: "Send" }).click();

  await expect(
    page.getByText("That doesn't look like a valid email address."),
  ).toBeVisible();
});

test("a field error clears as soon as it is corrected", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.getByText("Please enter your first name.")).toBeVisible();

  await page.getByLabel("First name").fill("Amanda");
  await expect(page.getByText("Please enter your first name.")).toBeHidden();
});

test("a valid inquiry shows the thank-you state without a network call", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (r) => {
    if (r.method() === "POST") requests.push(r.url());
  });

  await page.goto("/contact");
  await page.getByLabel("First name").fill("Amanda");
  await page.getByLabel("Last name").fill("Shane");
  await page.getByLabel("Email").fill("amanda@example.com");
  await page.getByLabel("Phone number").fill("801-555-0148");
  await page.getByLabel("Estimated guest count").fill("120");
  await page
    .getByLabel("Anything else we should know?")
    .fill("A winter weekend in Deer Valley for about 120 guests.");

  await page.getByRole("button", { name: "Send" }).click();

  const success = page.getByRole("status");
  await expect(
    success.getByRole("heading", { name: /Your inquiry is on its way/i }),
  ).toBeVisible();
  await expect(success.getByText(/within 72 hours/i)).toBeVisible();
  // The form itself is gone, replaced in place.
  await expect(page.getByLabel("First name")).toBeHidden();
  // Frontend-only: the success state must not depend on a request being made.
  expect(requests).toHaveLength(0);
});

test("typing a long message key-by-key does not break the form", async ({
  page,
}) => {
  await page.goto("/contact");
  const message = page.getByLabel("Anything else we should know?");
  const text =
    "We are dreaming of a winter weekend in Deer Valley for about 120 guests.";

  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // Wait for React to hydrate before typing. Keystrokes delivered to the
  // server-rendered HTML are discarded when hydration resets the controlled
  // input, which under a loaded dev server left this field empty.
  await message.click();
  await expect(async () => {
    await message.pressSequentially("x");
    await expect(message).toHaveValue(/x/);
  }).toPass({ timeout: 15_000 });
  await message.fill("");

  // Per-keystroke input events, the path a real visitor takes. Guards the
  // controlled-input wiring in setField against re-render churn.
  await message.pressSequentially(text, { delay: 10 });

  await expect(message).toHaveValue(text);
  expect(errors).toEqual([]);
});
