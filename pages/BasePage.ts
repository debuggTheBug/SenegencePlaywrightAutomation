// pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage class provides common methods and properties for all page objects.
 * It encapsulates interactions with the Playwright Page object, including
 * navigation, waiting for elements, and basic element interactions.
 */
export class BasePage {
    readonly page: Page;

    /**
     * Constructor for the BasePage.
     * @param page Playwright Page object.
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates the browser to the specified URL relative to the baseURL defined in playwright.config.ts.
     * @param path The path to navigate to (e.g., '/', '/products', '/login').
     */
    async navigateTo(path: string): Promise<void> {
        await this.page.goto(path);
        console.log(`Navigated to: ${this.page.url()}`);
    }

    /**
     * Waits for a given locator to be visible in the DOM and viewable.
     * Playwright's `locator.isVisible()` or `locator.waitFor({ state: 'visible' })`
     * handles this robustly.
     * @param locator The Playwright Locator object to wait for.
     * @param timeout Optional timeout in milliseconds. Defaults to page.setDefaultTimeout().
     */
    async waitForElementVisible(locator: Locator, timeout?: number): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout });
        console.log(`Element with locator '${locator}' is visible.`);
    }

    /**
     * Waits for a given locator to be enabled and ready for interaction (e.g., clicking, typing).
     * Playwright's `locator.click()` and `locator.fill()` methods automatically wait
     * for the element to be "actionable" (visible, enabled, receives events).
     * This method explicitly waits for the 'enabled' state.
     * @param locator The Playwright Locator object to wait for.
     * @param timeout Optional timeout in milliseconds. Defaults to page.setDefaultTimeout().
     */
    async waitForElementInteractable(locator: Locator, timeout?: number): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout }); // Ensure it's visible first
        await expect(locator).toBeEnabled({ timeout }); // Then ensure it's enabled
        console.log(`Element with locator '${locator}' is interactable.`);
    }

    /**
     * Clicks on an element identified by the locator.
     * Automatically waits for the element to be actionable.
     * @param locator The Playwright Locator object to click.
     * @param timeout Optional timeout in milliseconds.
     */
    async clickElement(locator: Locator, timeout?: number): Promise<void> {
        await locator.click({ timeout });
        console.log(`Clicked element with locator: '${locator}'`);
    }

    /**
     * Fills a text input field identified by the locator.
     * Automatically waits for the element to be actionable.
     * @param locator The Playwright Locator object for the input field.
     * @param text The text string to fill into the input.
     * @param timeout Optional timeout in milliseconds.
     */
    async fillInput(locator: Locator, text: string, timeout?: number): Promise<void> {
        await locator.fill(text, { timeout });
        console.log(`Filled input with locator '${locator}' with text: '${text}'`);
    }

    /**
     * Gets the text content of an element.
     * @param locator The Playwright Locator object.
     * @returns The text content of the element.
     */
    async getElementText(locator: Locator): Promise<string | null> {
        const text = await locator.textContent();
        console.log(`Got text for locator '${locator}': '${text}'`);
        return text;
    }
}
