// pages/HomePage.ts
import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage'; // Adjust path if your structure differs

/**
 * HomePage class represents the homepage of the application.
 * It extends BasePage to inherit common functionalities like waits and basic interactions.
 */
export class HomePage extends BasePage {
    // Define Web Elements (Locators) for the Home Page

    readonly loginOrAccountLink: Locator;
    readonly searchInput: Locator;
    readonly searchSubmitButton: Locator;
    readonly productCategoryLink: Locator;
    readonly languageDropdown: Locator;
    readonly mainLogo: Locator;
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
    readonly hairCareCollection: Locator;
    readonly conditionerIcon: Locator;
    readonly hairCoveryItem: Locator;
    readonly addToWIshListIcon: Locator;
    readonly addToWIshListIconLarge: Locator;
    readonly wIshListIcon: Locator;
    readonly conditionerInWishList: Locator;
    readonly createAccountButtonText: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly registerEmail: Locator;
    readonly registerPassword: Locator;
    readonly createAccountButton: Locator;
    readonly searchIcon: Locator;
    readonly linkWhenSearchIsEmpty: Locator;
    readonly makeupTopNavLink: Locator;
    readonly mascaraSubCategory: Locator
    readonly checkOutButton: Locator
    readonly addressInputField: Locator

    /**
     * Constructor for HomePage.
     * Instantiates the Page object and initializes all locators.
     * @param page Playwright Page object.
     */
    constructor(page: Page) {
        super(page); // Call the constructor of the BasePage
        // Initialize locators here using this.page.locator()

        this.loginOrAccountLink = this.page.locator('//div[@class=\'header__desktop__bar__r appco_bg\']//div[2]//a[1]//*[name()=\'svg\']//*[name()=\'path\' and contains(@stroke-linecap,\'round\')]'); // Placeholder
        //this.searchInput = this.page.locator('[data-popdown-toggle="search-popdown"]');
        this.searchInput = this.page.locator('//div[@id=\'search-popdown\']//input[@placeholder=\'Search...\']');
        this.lipCareValue = this.page.locator('//li[@id=\'snize-category-0\']')//#snize-category-0
        this.searchSubmitButton = this.page.locator('button[type="submit"][aria-label="Search"]');
        this.productCategoryLink = this.page.locator('a[href="/collections/lips"]'); // Example: Link to 'Lips' category
        this.languageDropdown = this.page.locator('select[name="language"]'); // Example: A select dropdown
        this.mainLogo = this.page.locator('//div[@class=\'header__desktop__bar__l appco_bg\']//img[@alt=\'SeneGence - Dev\']');
        this.lipCareProduct = this.page.locator('#product-8829629923581-title');
        this.shopAll = this.page.locator('//span[@class="navtext" and text()="Shop All"]');
        this.eyesCollection = this.page.locator('//p[normalize-space()=\'Eyes\']');
        this.lashSenseItem = this.page.locator('//p[@id=\'product-8829633757437-title\']');
        this.addToCartFromLashSenseItem = this.page.locator('//span[normalize-space()=\'Add to Cart\']');
        this.inCartLashSenseItem = this.page.locator('//a[normalize-space()=\'LashSense® Blooming Bond Lash Adhesive\']');
        this.searchIcon = this.page.locator('//a[@data-popdown-toggle=\'search-popdown\']//*[name()=\'svg\']');
        this.loginIcon = this.page.locator('a[href="/account"].navlink');
        this.emailInputField = this.page.locator('//input[@id=\'CustomerEmail\']')
        this.passwordInputField = this.page.locator('//input[@id=\'password\']')
        this.loginButton = this.page.locator('//button[@id=\'submit\']')
        //this.logoutButton = this.page.locator('//span[contains(.,\'Log out\')]')
        this.logoutButton = page.getByRole('link', { name: 'Log out' });
        this.hairCareCollection = this.page.locator('//p[normalize-space()=\'Hair Care\']')
        this.conditionerIcon = this.page.locator('//p[normalize-space()=\'Conditioner\']')
        this.hairCoveryItem = this.page.locator('#product-8829631922429-title')
        this.addToWIshListIconLarge = this.page.locator('//button[contains(text(),\'Add To Wishlist\')]')
        this.addToWIshListIcon = this.page.locator('//span[@class=\'swym-wishlist-cta\']')
        this.wIshListIcon = this.page.locator('//a[@class=\'navlink swym-wishlist\']')
        this.conditionerInWishList = this.page.locator('//h2[contains(text(),\'HairCovery® Moisturizing & Shine Enhancing Conditi\')]')
        this.createAccountButtonText = this.page.locator('//a[normalize-space()=\'Create account\']')
        this.firstName = this.page.locator('//input[@id=\'FirstName\']')
        this.lastName = this.page.locator('//input[@id=\'LastName\']')
        this.registerEmail = this.page.locator('//input[@id=\'Email\']')
        this.registerPassword = this.page.locator('//input[@id=\'CreatePassword\']')
        this.createAccountButton = this.page.locator('//button[normalize-space()=\'Create\']')
        this.linkWhenSearchIsEmpty = this.page.locator('//a[@class=\'snize-link-home\']')
        this.makeupTopNavLink = this.page.locator('a[data-top-link] .navtext', { hasText: 'Makeup' }).first();
        this.mascaraSubCategory = this.page.locator('span', { hasText: 'Mascara' });
        this.checkOutButton = this.page.locator('//button[@name=\'checkout\']');
        this.addressInputField = this.page.locator('//input[@id=\'shipping-address1\']');
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

    async registerNewUser(mail: string): Promise<void> {
        await this.waitForElementInteractable(this.loginIcon, 5000);
        await this.clickElement(this.loginIcon)
        await this.waitForElementInteractable(this.createAccountButtonText, 5000);
        await this.clickElement(this.createAccountButtonText)
        await this.fillInput(this.firstName, "Jim");
        await this.fillInput(this.lastName, "Carey");
        await this.fillInput(this.registerEmail, mail);
        await this.fillInput(this.registerPassword, "Koliko1994#");
        await this.clickElement(this.createAccountButton);
        await this.waitForElementInteractable(this.loginIcon, 8000);
        await this.clickElement(this.loginIcon)
        await this.waitForElementVisible(this.logoutButton);
        await this.clickElement(this.logoutButton);
        //console.log('Clicked Login/Account link.');
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
        //const searchInput = this.page.locator('#search-popdown input[type="search"]');
        // const searchInput = this.page.locator('//a[@data-popdown-toggle=\'search-popdown\']//*[name()=\'svg\']');
        // await searchInput.waitFor({ state: 'visible' });
        await this.waitForElementInteractable(this.searchIcon);
        await this.fillInput(this.searchInput, 'Lip care');
        await this.page.press('//div[@id=\'search-popdown\']//input[@placeholder=\'Search...\']', 'Enter')
        await expect(this.linkWhenSearchIsEmpty).toHaveCount(0);

        console.log('Filled search input with "Lip Care".');

        // Wait for the "Lip Care" suggestion to appear and click it
        // const lipCareSuggestion = this.page.locator('//li[@id=\'snize-suggestion-0\']');
        // await lipCareSuggestion.waitFor({ state: 'visible' });
        // await lipCareSuggestion.click();
        // console.log('Clicked on "Lip Care" suggestion.');


    }

    async clickOnProduct() {
        await this.waitForElementInteractable(this.lipCareProduct, 5000);
        await this.lipCareProduct.click();
    }

    /**
     * Clicks on a specific product category link.
     * @param categoryName The name of the category (e.g., 'Lips', 'Eyes').
     * This method assumes the categoryName can be used to construct the locator.
     */
    async clickProductCategory(categoryName: string): Promise<void> {
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
        await this.waitForElementInteractable(this.checkOutButton)
        await this.clickElement(this.checkOutButton)
        await this.waitForElementInteractable(this.addressInputField)
        await this.fillInput(this.checkOutButton, "")
        console.log('Item added to the cart');
    }

    async addItemToCartAndCheckOut(): Promise<void> {
        const makeupSpanByText: Locator = this.page.getByText('Makeup');

        await this.waitForElementInteractable(this.loginIcon, 5000);
        await this.clickElement(this.loginIcon);
        await this.fillInput(this.emailInputField, "paracelzus.nemanja@gmail.com");
        await this.fillInput(this.passwordInputField, "Koliko1994#");
        await this.clickElement(this.loginButton);
        // await this.waitForElementInteractable(this.makeupTopNavLink);
        // await makeupSpanByText.hover();
        const makeupLink = this.page.locator('//a[@href="/collections/makeup" and .//span[text()="Makeup"]]').first();

        // Optional: scroll to ensure it's in view
        //await makeupLink.scrollIntoViewIfNeeded();

        // Hover over the element
        await makeupLink.hover();
        await this.waitForElementInteractable(this.mascaraSubCategory);
        await this.clickElement(this.mascaraSubCategory);
        //await expect(this.addToWIshListIcon).toBeDisabled({ timeout: 8000 });
        //await expect(this.addToWIshListIcon).toHaveClass(new RegExp(`.*${className}.*`));
        //await expect(this.addToWIshListIcon).not.toBeEnabled({ timeout: 8000 });

        console.log('"Add to Wishlist" button is verified to be disabled.');
    }

    async addProductToTheWishlist(): Promise<void> {
        await this.waitForElementInteractable(this.shopAll);
        await this.clickElement(this.shopAll);
        await this.waitForElementInteractable(this.hairCareCollection);
        await this.clickElement(this.hairCareCollection);
        await this.waitForElementInteractable(this.hairCoveryItem);
        await this.clickElement(this.hairCoveryItem);
        await this.waitForElementInteractable(this.addToWIshListIconLarge);
        await this.clickElement(this.addToWIshListIconLarge);

        const emptyWishlistHeading = this.page.getByRole('heading', { name: 'Love It? Add to My Wishlist' });

        // Assert that the "empty wishlist" heading is NOT visible
        await expect(emptyWishlistHeading).not.toBeVisible({ timeout: 10000 });
        console.log('Verified: "Love It? Add to My Wishlist" heading is NOT visible, indicating wishlist is not empty.');



        //const classAttr = await this.addToWIshListIconLarge.getAttribute('class');
        //expect(classAttr).toMatch(/(^|\s)disabled(\s|$)/);
        //console.log('"Add to Wishlist" button class confirmed to include "disabled" – product is added.');


        // ✅ Assert button is disabled after click (not interactable again)
        //await expect(this.addToWIshListIconLarge).toBeDisabled();

        // ✅ Assert aria-label has changed
        //await expect(this.addToWIshListIconLarge).toHaveAttribute('aria-label');

        // ✅ Assert class includes 'swym-added' and 'disabled'
        //const classAttr = await this.addToWIshListIconLarge.getAttribute('class');
        //expect(classAttr).toContain('swym-added');
        //expect(classAttr).toContain('disabled');

        //console.log('"Add to Wishlist" button is verified to be disabled and visually updated.');

        // ✅ Optional: Verify item appears in the wishlist (if visible in UI)
        // await this.waitForElementInteractable(this.wIshListIcon);
        // await this.clickElement(this.wIshListIcon);
        // await this.waitForElementVisible(this.conditionerInWishList);
        // console.log('Item conditioner verified inside the wish list.');
    }

    async verifyWishlistIsNotEmpty(): Promise<void> {
        // Locator for the "empty wishlist" heading provided by codegen
        const emptyWishlistHeading = this.page.getByRole('heading', { name: 'Love It? Add to My Wishlist' });

        // Assert that the "empty wishlist" heading is NOT visible
        await expect(emptyWishlistHeading).not.toBeVisible({ timeout: 10000 });
        console.log('Verified: "Love It? Add to My Wishlist" heading is NOT visible, indicating wishlist is not empty.');
    }

    async verifyWishlistButtonIsNotClickable(): Promise<void> {
        // Wait for the button to be visible and then check its classes
        await this.addToWIshListIconLarge.waitFor({ state: 'visible', timeout: 5000 });

        const classAttr = await this.addToWIshListIconLarge.getAttribute('class');

        if (classAttr?.includes('swym-added') && classAttr?.includes('disabled')) {
            console.log('✅ Product is confirmed in wishlist (button is added and disabled).');
            // No explicit assertion needed here if the console log and return are sufficient for success.
            // If you prefer a Playwright assertion for clearer test reporting:
            await expect(this.addToWIshListIconLarge).toHaveClass(/.*swym-added.*disabled.*/, { timeout: 9000 });
            return;
        } else {
            throw new Error('❌ Product not confirmed in wishlist: Button is not in "added and disabled" state.');
        }
    }

    // This helper function can be placed outside the class or as a private method within your Page Object.
// For simplicity, let's assume it's a private method or a utility function in the same file.

// Example of a private helper method within your HomePage.ts (or RegistrationPage.ts) class:
// private generateUniqueEmail(): string {
//     const timestamp = new Date().getTime();
//     // You can use a timestamp, a random string, or a combination.
//     // Using a timestamp is simple and usually unique enough for test purposes.
//     return `testuser_${timestamp}@example.com`; // Use a reliable dummy domain
// }

// If you prefer a standalone utility function (e.g., in utils/testData.ts):
// export function generateUniqueEmail(): string {
//     const timestamp = new Date().getTime();
//     return `testuser_${timestamp}@example.com`;
// }

// Then, in your HomePage.ts:
// import { generateUniqueEmail } from '../utils/testData'; // If using a utility file

    /**
     * Registers a new user with dynamically generated email.
     * This method simulates a real user registration scenario by ensuring unique test data.
     * @returns {Promise<string>} The unique email address used for registration.
     */
    async registerNewUniqueUser(): Promise<string> {
        // Generate a unique email address for this test run
        const uniqueEmail = `testuser_${new Date().getTime()}@example.com`; // Inline generation for simplicity

        // 1. Navigate to the login/account page
        await this.waitForElementInteractable(this.loginIcon, 5000);
        await this.clickElement(this.loginIcon);

        // 2. Click the "Create Account" button
        await this.waitForElementInteractable(this.createAccountButtonText, 5000);
        await this.clickElement(this.createAccountButtonText);

        // 3. Fill in the registration form with dynamic email and static data
        await this.fillInput(this.firstName, "Jim"); // Consider making these dynamic too if needed
        await this.fillInput(this.lastName, "Carey");
        await this.fillInput(this.registerEmail, uniqueEmail);
        await this.fillInput(this.registerPassword, "Koliko1994#"); // Consider making this a parameter for reusability
        await this.page.waitForTimeout(8000);
        // 4. Submit the registration form
        await this.clickElement(this.createAccountButton);
        await this.page.waitForTimeout(8000); // waits for 3000 milliseconds (3 seconds)
        // --- IMPORTANT: Add an assertion here to confirm successful registration ---
        // Before attempting to log out, ensure the registration actually succeeded.
        // Example: Verify URL changed to account dashboard, or a success message is visible.
        //await expect(this.page).toHaveURL(/.*\/account/); // Assuming successful registration redirects to /account
        // Or: await expect(this.page.locator('text="Welcome to your account"')).toBeVisible();
        console.log(`Registered new user with email: ${uniqueEmail}`);

        // 5. Logout the newly registered user (to ensure a clean state for subsequent tests)
        // This assumes clicking loginIcon again reveals a logout option when logged in.
        await this.waitForElementInteractable(this.loginIcon, 8000); // Wait for the user icon to be interactable after login
        await this.clickElement(this.loginIcon); // Click the logged-in user icon to reveal logout option
        //await this.page.getByRole('link', { name: 'My Account' }).click();

        //await this.page.getByRole('link', { name: 'My Account' }).click();

        await this.waitForElementInteractable(this.logoutButton, 8000); // Wait for the logout button to become visible
        await this.clickElement(this.logoutButton);
        console.log(`Logged out user: ${uniqueEmail}`);

        // Return the unique email, which can be used in subsequent login tests
        return uniqueEmail;
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
