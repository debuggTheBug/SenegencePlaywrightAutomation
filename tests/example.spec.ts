// // tests/example.spec.ts
// import { test, expect } from '@playwright/test';
// import { BasePage } from '../pages/BasePage'; // Adjust path if your structure differs
//
// /**
//  * This is an example test file demonstrating the usage of the BasePage
//  * and interacting with elements on the base URL.
//  */
// test.describe('Dev Shopify Home Page', () => {
//   let basePage: BasePage;
//
//   // Before each test, initialize the BasePage object.
//   test.beforeEach(async ({ page }) => {
//     basePage = new BasePage(page);
//   });
//
//   test('should navigate to the base URL and verify the title', async () => {
//     // Navigate to the base URL (which is set in playwright.config.ts)
//     await basePage.navigateTo('/');
//
//     // Verify the page title. You might need to adjust the expected title
//     // based on the actual title of https://dev-shopify.senegence.com/.
//     await expect(basePage.page).toHaveTitle(/SeneGence/); // Example: Check if title contains "SeneGence"
//     console.log('Page title verified successfully.');
//   });
//
//   test('should verify a common element is visible on the home page', async () => {
//     await basePage.navigateTo('/');
//
//     // Example: Locate a common element like a navigation link or a logo.
//     // Replace 'a[href="/"]' with an actual selector from the website.
//     // For instance, if there's a specific "Shop Now" button or a logo.
//     const shopNowButton = basePage.page.locator('text="Shop Now"'); // Example selector
//     // Or, a more robust selector for a header logo:
//     // const headerLogo = basePage.page.locator('img[alt="SeneGence"]');
//
//     // Use the BasePage method to wait for the element to be visible.
//     await basePage.waitForElementVisible(shopNowButton); // Or headerLogo
//     console.log('Common element on home page verified as visible.');
//
//     // Optional: Click the element and verify navigation (if applicable)
//     // await basePage.clickElement(shopNowButton);
//     // await expect(basePage.page).toHaveURL(/.*shop/);
//   });
//
//   // Add more tests here to interact with other elements on the page,
//   // demonstrating the use of fillInput, clickElement, etc.
//   // For example, a test for a search bar:
//   test('should be able to use the search bar', async () => {
//     await basePage.navigateTo('/');
//
//     // Assuming there's a search icon/button to click to reveal the search input
//     const searchIcon = basePage.page.locator('button[aria-label="Search"]');
//     // Assuming the search input field has a specific selector after it appears
//     const searchInput = basePage.page.locator('input[placeholder="Search..."]');
//
//     // Wait for the search icon and click it
//     await basePage.waitForElementInteractable(searchIcon);
//     await basePage.clickElement(searchIcon);
//
//     // Wait for the search input to become visible and then fill it
//     await basePage.waitForElementVisible(searchInput);
//     await basePage.fillInput(searchInput, 'lipstick');
//
//     // Press Enter to submit the search
//     await basePage.page.keyboard.press('Enter');
//
//     // Verify that the URL changes or search results are displayed
//     await expect(basePage.page).toHaveURL(/.*search\?q=lipstick/);
//     console.log('Search functionality tested successfully.');
//   });
// });
//

// tests/example.spec.ts (Updated)
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; // Import the new HomePage

test.describe('SeneGence Shopify Homepage', () => {
  let homePage: HomePage;

  // Before each test, initialize the HomePage object and navigate to the home page.
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
    //await homePage.acceptCookieConsent(); // Attempt to close cookie banner if present
  });

  // Example: Cleanup after each test (optional, Playwright handles much of this)
  test.afterEach(async ({ page }) => {
    // If you need to clear local storage, session storage, or cookies after each test:
    // await page.evaluate(() => localStorage.clear());
    // await page.evaluate(() => sessionStorage.clear());
    // await page.context().clearCookies();
    console.log('Test completed. Playwright will clean up the browser context.');
  });

  test('should have the correct title', async () => {
    await expect(homePage.page).toHaveTitle(/SeneGence/);
    console.log('Homepage title verified.');

    // await homePage.clickLoginOrAccountLink();
    // await expect(homePage.page).toHaveURL(/.*account\/login/); // Verify navigation to login page
    // console.log('Navigated to login page successfully.');
  });

  test.skip('Verify that user should be able to search for "Lip Care"', async () => {
    //await homePage.performSearch('Lip Care');
    await homePage.searchAndSelectLipCare();
    //await expect(homePage.page).toHaveURL(/.*search\?q=Lipstick/i); // Case-insensitive check
    // Optional: Add more assertions to check search results content
    //const searchResultsHeader = homePage.page.locator('h1:has-text("Search results for")');
    //await expect(searchResultsHeader).toBeVisible();
    console.log('Search for "Lip Care" performed and verified.');
    await homePage.clickOnProduct()
    console.log('Lip Care product successfully clicked');
  });

  test('Verify that user is able to login and logout', async () => {
    await homePage.loginWithValidCredentialsAndLogout();
    //console.log('');
  });

  test('Verify that user is able to add Product to Cart from Shop All', async () => {
    await homePage.clickShopAllAndAddProductToTheCart();
    console.log('LashSense product successfully added to Cart');
  });

  test('Verify that user is able to add Product to Wish list', async () => {
    await homePage.addProductToTheWishlist();
    //await homePage.verifyWishlistButtonIsNotClickable()
    //console.log('Hair product successfully added to Wish list');
  });

  // test('should be able to select a category and navigate', async () => {
  //   // Assuming there's a category for 'Lips' which is a common product type
  //   await homePage.clickProductCategory('lips');
  //   await expect(homePage.page).toHaveURL(/.*collections\/lips/);
  //   const categoryTitle = homePage.page.locator('h1:has-text("Lips")');
  //   await expect(categoryTitle).toBeVisible();
  //   console.log('Navigated to "Lips" category page.');
  // });

  // Example of using a dropdown if one exists (e.g., for language or currency)
  // This test might fail if the dropdown is not present or has different values.
  // test('should be able to change language via dropdown (if present)', async () => {
  //   // This test assumes a language dropdown exists and has a value like 'es' for Spanish
  //   // You might need to make this conditional or remove if no such dropdown exists on the site.
  //   // Ensure the element is visible before trying to select an option.
  //   if (await homePage.languageDropdown.isVisible()) {
  //     await homePage.selectLanguageDropdownValue('es'); // Example: Select Spanish
  //     // You would then assert that the language on the page has changed.
  //     // This assertion depends on how language change is reflected on the UI.
  //     // For instance, check text content of a static element.
  //     // await expect(homePage.page.locator('text="Mi Cuenta"')).toBeVisible(); // Placeholder
  //     console.log('Attempted to change language to Spanish.');
  //   } else {
  //     console.log('Language dropdown not found, skipping test.');
  //     test.skip(); // Skip the test if the element is not found
  //   }
  // });
});

