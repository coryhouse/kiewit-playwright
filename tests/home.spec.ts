import { test, expect } from "@playwright/test";

// should x when y
// verb when y
test.describe("Home Page", () => {
  test("increments count when count button is clicked", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    const countButton = page.getByRole("button", { name: "count is 1" });
    await countButton.click();
    await expect(
      page.getByRole("button", { name: "count is 1" })
    ).toBeVisible();
  });

  test("deletes a user when delete button is clicked", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    const deleteButton = page.getByRole("button", { name: "Delete Cory" });
    await deleteButton.click();
    await expect(deleteButton).not.toBeVisible();
  });
});
