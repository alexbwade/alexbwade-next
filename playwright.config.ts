import { defineConfig, devices } from "@playwright/test";

// Set BASE_URL to test a deployed site, such as a Vercel preview, instead of a local build.
const baseURL = process.env["BASE_URL"];

export default defineConfig({
  testDir: "tests",
  reporter: process.env["CI"] ? "github" : "list",
  use: { baseURL: baseURL ?? "http://127.0.0.1:4321" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  ...(!baseURL && {
    webServer: {
      // --ignore-lock keeps the server in the foreground; Astro backgrounds it when it detects a coding agent.
      command: "yarn build && yarn preview --port 4321 --host 127.0.0.1 --ignore-lock",
      url: "http://127.0.0.1:4321",
      reuseExistingServer: !process.env["CI"],
    },
  }),
});
