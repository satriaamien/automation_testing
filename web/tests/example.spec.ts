import { test, expect } from "@playwright/test";

test.describe("My first test suite", () => {
  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.$(`a:has-text("hehe")`).click();
    // await page.getByRole("link", { name: "Get started" }).click();

    // await expect(
    //   page.getByRole("heading", { name: "Installation" })
    // ).toBeVisible();
  });
  test("get started link2", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.$(`a:has-text("Get started")`);
    // await page.getByRole("link", { name: "Get started" }).click();
    // await expect(
    //   page.getByRole("heading", { name: "Installation" })
    // ).toBeVisible();
  });
});
