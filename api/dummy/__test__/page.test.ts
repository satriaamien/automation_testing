import { page } from "../endpoint/auth";
describe("open page", () => {
  test("login page 1", async () => {
    const result = await page(1);
    console.log(result.data.page);
    expect(result.status).toBe(200);
    expect(result.data.page).toBe(1);
  });
  test("login page 2", async () => {
    const result = await page(1);
    console.log(result.data.page);
    expect(result.status).toBe(200);
    expect(result.data.page).toBe(2);
  });
});
