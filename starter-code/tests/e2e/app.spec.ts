import { test, expect } from '@playwright/test'

/**
 * E2E tests for the Posts SPA.
 *
 * Instructions:
 *  - Remove test.skip() and implement at least ONE test.
 *  - Run: npm run build && npm run test:e2e
 *
 * Suggested tests:
 *  1. Posts load on initial render
 *  2. Search input filters posts (wait for debounce)
 *  3. Pagination next/prev changes the page
 *  4. Clicking a card shows the post detail
 *  5. Back button returns to the list
 *  6. Error state appears when network is offline
 */

test.describe('Posts SPA', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    // ── TODO: Remove test.skip and implement ──────────────────────────────

    test.skip('posts load on initial render', async ({ page }) => {
        // Hint:
        //   await page.waitForSelector('.post-card')
        //   const cards = await page.$$('.post-card')
        //   expect(cards.length).toBeGreaterThan(0)
    })

    test.skip('search filters posts', async ({ page }) => {
        // Hint:
        //   const input = page.locator('#search-input')
        //   await input.fill('qui est esse')
        //   await page.waitForTimeout(400) // wait for debounce + fetch
        //   const cards = await page.$$('.post-card')
        //   expect(cards.length).toBeGreaterThan(0)
        //   const firstTitle = await page.locator('.post-card h2').first().textContent()
        //   expect(firstTitle?.toLowerCase()).toContain('qui est esse')
    })

    test.skip('clicking a card shows post detail', async ({ page }) => {
        // Hint:
        //   await page.waitForSelector('.post-card')
        //   await page.locator('.post-card').first().click()
        //   await expect(page.locator('#post-detail')).not.toHaveAttribute('hidden')
        //   await expect(page.locator('#posts-container')).toHaveAttribute('hidden')
    })

    test.skip('back button returns to list', async ({ page }) => {
        // Hint:
        //   await page.waitForSelector('.post-card')
        //   await page.locator('.post-card').first().click()
        //   await page.locator('#back-btn').click()
        //   await expect(page.locator('#posts-container')).not.toHaveAttribute('hidden')
    })
})
