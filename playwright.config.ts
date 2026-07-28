import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  expect: { timeout: 10_000 },
  use: {
    baseURL: "http://localhost:5001",
    trace: "on-first-retry",
  },
  // Starts the dev server if one isn't already listening on 5001, so `npm run
  // e2e` works from a clean checkout without a second terminal.
  webServer: {
    command: "MY_ENV=development npx next dev -p 5001",
    url: "http://localhost:5001",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
