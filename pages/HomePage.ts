// pages/HomePage.ts
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage'; // Adjust path if your structure differs

/**
 * HomePage class represents the homepage of the application.
 * It extends BasePage to inherit common functionalities like waits and basic interactions.
 */
export class HomePage extends BasePage {
    // Define Web Elements (Locators) for the Home Page
    // Use meaningful names for your locators.
    // Replace these with actual CSS selectors or other Playwright locators based on the website's HTML structure.

    // Example: A locator for a login/account button
    readonly loginOrAccountLink: Locator;
    // Example: A locator for a search input field
    readonly searchInput: Locator;
    // Example: A locator for a search submit button (if separate from input)
    readonly searchSubmitButton: Locator;
    // Example: A locator for a specific product category link
    readonly productCategoryLink: Locator;
    // Example: A locator for a dropdown menu (e.g., currency, language, sorting)
    readonly languageDropdown: Locator;
    // Example: A locator for a "Shop Now" or main call-to-action button
    readonly mainLogo: Locator;
    // Example: A locator for a cookie consent banner close button
    readonly cookieConsentCloseButton: Locator;
    readonly lipCareValue: Locator;
    readonly lipCareProduct: Locator;
    readonly shopAll: Locator;
    readonly eyesCollection: Locator;
    readonly lashSenseAddToCartButton: Locator;
    readonly lashSenseItem: Locator;
    readonly addToCartFromLashSenseItem: Locator;
    readonly inCartLashSenseItem: Locator;
    readonly loginIcon: Locator;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    /**
     * Constructor for HomePage.
     * Instantiates the Page object and initializes all locators.
     * @param page Playwright Page object.
     */
    constructor(page: Page) {
        super(page); // Call the constructor of the BasePage
        // Initialize your locators here using this.page.locator()
        // It's good practice to make these selectors as robust as possible (e.g., using data-test attributes, IDs)

        this.loginOrAccountLink = this.page.locator('//div[@class=\'header__desktop__bar__r appco_bg\']//div[2]//a[1]//*[name()=\'svg\']//*[name()=\'path\' and contains(@stroke-linecap,\'round\')]'); // Placeholder
        this.searchInput = this.page.locator('[data-popdown-toggle="search-popdown"]'); // Placeholder, try common selectors
        this.lipCareValue = this.page.locator('//li[@id=\'snize-category-0\']')//#snize-category-0
        this.searchSubmitButton = this.page.locator('button[type="submit"][aria-label="Search"]'); // Placeholder
        this.productCategoryLink = this.page.locator('a[href="/collections/lips"]'); // Example: Link to 'Lips' category
        this.languageDropdown = this.page.locator('select[name="language"]'); // Example: A select dropdown
        this.mainLogo = this.page.locator('//div[@class=\'header__desktop__bar__l appco_bg\']//img[@alt=\'SeneGence - Dev\']'); // Placeholder for a button with text "Shop Now"
        this.cookieConsentCloseButton = this.page.locator('button:has-text("Accept all cookies")'); // Placeholder for cookie banner
        this.lipCareProduct = this.page.locator('#product-8829629923581-title');
        this.shopAll = this.page.locator('//span[@class="navtext" and text()="Shop All"]');
        this.eyesCollection = this.page.locator('//p[normalize-space()=\'Eyes\']');
        this.lashSenseItem = this.page.locator('//p[@id=\'product-8829633757437-title\']');
        this.addToCartFromLashSenseItem = this.page.locator('//span[normalize-space()=\'Add to Cart\']');
        this.inCartLashSenseItem = this.page.locator('//a[normalize-space()=\'LashSense® Blooming Bond Lash Adhesive\']');
        //this.loginIcon = this.page.locator('div[class=\'header__desktop__button main-menu--active appco_bg\'] a[class=\'navlink\'] svg');
        this.loginIcon = this.page.locator('a[href="/account"].navlink');
        this.emailInputField = this.page.locator('//input[@id=\'CustomerEmail\']')
        this.passwordInputField = this.page.locator('//input[@id=\'password\']')
        this.loginButton = this.page.locator('//button[@id=\'submit\']')
        this.logoutButton = this.page.locator('//a[@class=\'dashboard-nav-header-button btn--outline btn--primary btn--full\']')
        this.lashSenseAddToCartButton =
            this.page.locator('//html[1]/body[1]/main[1]/div[6]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/product-grid-item[1]/product-grid-item-variant[1]/div[2]/div[1]/form[1]/button[1]/span[1]/span[1]');
    }

    // --- Interaction Methods ---

    /**
     * Navigates to the homepage.
     */
    async gotoHomePage(): Promise<void> {
        await this.navigateTo('/');
        // Optional: Add a wait for a key element on the home page to ensure it's loaded
        await this.waitForElementVisible(this.mainLogo); // Wait for the main button to be visible
        console.log('Navigated to homepage.');
    }

    /**
     * Clicks on the login or account link.
     */
    async loginWithValidCredentialsAndLogout(): Promise<void> {
        await this.waitForElementInteractable(this.loginIcon, 5000);
        await this.clickElement(this.loginIcon);
        //await this.page.waitForSelector('a[href="/account"]', { state: 'visible' });
        //await this.page.locator('a[href="/account"]').click();
        await this.fillInput(this.emailInputField, "paracelzus.nemanja@gmail.com");
        await this.fillInput(this.passwordInputField, "Koliko1994#");
        await this.clickElement(this.loginButton);
        await this.waitForElementVisible(this.logoutButton);
        await this.clickElement(this.logoutButton);
        //console.log('Clicked Login/Account link.');
    }

    /**
     * Fills the search input field with the given text and optionally submits the search.
     * @param searchText The text to enter into the search field.
     * @param submit Whether to press Enter or click a submit button after filling. Defaults to true.
     */
    // async performSearch(searchText: string, submit: boolean = true): Promise<void> {
    //     await this.waitForElementInteractable(this.searchInput);
    //     await this.fillInput(this.searchInput, searchText);
    //     //await this.lipCareValue.click();
    //     console.log(`Filled search input with: "${searchText}"`);
    //
    //     if (submit) {
    //         if (await this.searchSubmitButton.isVisible()) {
    //             await this.clickElement(this.searchSubmitButton);
    //             console.log('Clicked search submit button.');
    //         } else {
    //             await this.page.keyboard.press('Enter');
    //             console.log('Pressed Enter to submit search.');
    //         }
    //     }
    // }

    async searchAndSelectLipCare(): Promise<void> {
        // Click the search icon to open the popdown
        const searchToggle = this.page.locator('[data-popdown-toggle="search-popdown"]');
        await searchToggle.click();
        console.log('Clicked search icon to open the search popdown.');

        // Locate the actual search input that appears
        const searchInput = this.page.locator('#search-popdown input[type="search"]');
        await searchInput.waitFor({ state: 'visible' });
        await searchInput.fill('Lip Ca');
        console.log('Filled search input with "Lip Care".');

        // Wait for the "Lip Care" suggestion to appear and click it
        const lipCareSuggestion = this.page.locator('#snize-category-0');
        await lipCareSuggestion.waitFor({ state: 'visible' });
        await lipCareSuggestion.click();
        console.log('Clicked on "Lip Care" suggestion.');
    }

    async clickOnProduct() {
        await this.lipCareProduct.waitFor({ state: 'visible' });
        await this.lipCareProduct.click();
    }

    /**
     * Clicks on a specific product category link.
     * @param categoryName The name of the category (e.g., 'Lips', 'Eyes').
     * This method assumes the categoryName can be used to construct the locator.
     */
    async clickProductCategory(categoryName: string): Promise<void> {
        // You might need a more generic locator here, e.g., using text content
        const categoryLink = this.page.locator(`a[href*="/collections/${categoryName.toLowerCase()}"]`);
        await this.waitForElementInteractable(categoryLink);
        await this.clickElement(categoryLink);
        console.log(`Clicked product category: "${categoryName}"`);
    }

    /**
     * Selects an option from a dropdown menu.
     * @param value The value attribute of the option to select.
     */
    async selectLanguageDropdownValue(value: string): Promise<void> {
        await this.waitForElementVisible(this.languageDropdown);
        await this.languageDropdown.selectOption({ value: value });
        console.log(`Selected dropdown option with value: "${value}"`);
    }

    /**
     * Add to Cart one Product.
     */
    async clickShopAllAndAddProductToTheCart(): Promise<void> {
        await this.waitForElementInteractable(this.shopAll);
        await this.clickElement(this.shopAll);
        await this.waitForElementInteractable(this.eyesCollection);
        await this.clickElement(this.eyesCollection);
        await this.waitForElementInteractable(this.lashSenseItem);
        await this.clickElement(this.lashSenseItem);
        await this.waitForElementInteractable(this.addToCartFromLashSenseItem);
        await this.clickElement(this.addToCartFromLashSenseItem);
        await this.waitForElementVisible(this.inCartLashSenseItem);
        //console.log('Clicked "Shop Now" button.');
    }

    /**
     * Accepts (closes) the cookie consent banner if present.
     * This method uses `clickElement` which includes `waitForElementInteractable`.
     * It is made robust by not failing if the element is not found, as the banner might not always appear.
     */
    async acceptCookieConsent(): Promise<void> {
        try {
            // Check if the cookie banner close button is visible within a short timeout
            await this.cookieConsentCloseButton.waitFor({ state: 'visible', timeout: 5000 });
            await this.clickElement(this.cookieConsentCloseButton);
            console.log('Cookie consent accepted.');
        } catch (error) {
            console.log('Cookie consent banner not found or already closed.');
        }
    }
}

/**
 * --- Regarding Teardown/Killing the Driver ---
 *
 * In Playwright, you generally do NOT explicitly "kill the driver" within your Page Object classes.
 * Playwright's test runner automatically manages the lifecycle of the browser and page contexts.
 *
 * The browser instance and page are created for each test (or group of tests, depending on configuration).
 * Playwright automatically closes them down after the test run is complete, or if a test fails and
 * you have `retries` configured, it will set up a new context for the retry.
 *
 * If you need to perform any cleanup *after* a test, you should use Playwright's built-in hooks
 * in your test files (`.spec.ts` files), NOT in your Page Objects:
 *
 * - `test.afterEach(async ({ page }) => { ... });` : Runs after each test in the file.
 * Useful for actions like logging out, clearing cookies, or taking a final screenshot.
 *
 * - `test.afterAll(async ({ browser }) => { ... });` : Runs once after all tests in the file have completed.
 * Less commonly used for browser cleanup as Playwright handles it, but could be for
 * global reporting or external service cleanup.
 *
 * Example of `test.afterEach` in `tests/example.spec.ts`:
 * ```typescript
 * import { test, expect } from '@playwright/test';
 * import { HomePage } from '../pages/HomePage';
 *
 * test.describe('Homepage Functionality', () => {
 * let homePage: HomePage;
 *
 * test.beforeEach(async ({ page }) => {
 * homePage = new HomePage(page);
 * await homePage.gotoHomePage();
 * });
 *
 * // Example: A cleanup action after each test
 * test.afterEach(async ({ page }) => {
 * // This is where you might perform specific cleanups if necessary,
 * // though Playwright's default behavior is often sufficient.
 * // console.log('Cleaning up after test...');
 * // await page.context().clearCookies(); // Example: Clear cookies
 * });
 *
 * test('should successfully search for a product', async ({ page }) => {
 * await homePage.performSearch('Foundation');
 * // Add assertions for search results
 * await expect(page).toHaveURL(/.*search\?q=Foundation/);
 * });
 *
 * // ... other tests
 * });
 * ```
 *
 * By following this pattern, your Page Objects remain focused on representing the UI and
 * encapsulating interactions, while the test files manage the test lifecycle and assertions.
 */
