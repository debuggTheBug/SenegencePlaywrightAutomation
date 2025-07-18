// import { defineConfig, devices } from '@playwright/test';
//
// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });
//
// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://localhost:3000',
//
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },
//
//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
//
//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
//
//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },
//
//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],
//
//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://localhost:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });

// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import allurePlaywright from 'allure-playwright';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  // Test directory where your test files are located.
  testDir: './tests',
  // Output directory for test results and artifacts.
  outputDir: './test-results',

  // Maximum time one test can run for.
  timeout: 180 * 1000, // 180 seconds

  // Expect timeout for assertions.
  expect: {
    timeout: 5 * 1000 // 5 seconds
  },

  // Run tests in files in parallel.
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: process.env.CI ? true : false,
  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: //'html', // You can also use 'list', 'json', etc.
          [
            ['list'],
            ['html'],           // HTML report
            ['allure-playwright'], // Allure report
  ],

  // Shared settings for all projects. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://dev-shopify.senegence.com/',

    // Headless mode for browsers. Set to false to see the browser UI.
    headless: true,

    // Browser to use. 'chromium' is specified as requested.
    browserName: 'chromium',

    // Record trace for test failures. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',

    // Screenshot options: 'off', 'on', 'only-on-failure'.
    screenshot: 'only-on-failure',

    // Video recording options: 'off', 'on', 'retain-on-failure'.
    video: 'retain-on-failure',
  },

  // Configure projects for different browsers, devices, and configurations.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // You can add other browsers here if needed:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};

export default config;

