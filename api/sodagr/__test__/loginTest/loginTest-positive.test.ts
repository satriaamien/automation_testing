import dotenv from "dotenv";
dotenv.config();
import { login_test } from "../../../responseSchema";
const username = process.env.usernameSodagr;
const password = process.env.passwordSodagr;
import { expectToMatchSchema } from "jest-json-schema-extended";
import { login } from "../../endpoint/login_test";
describe("user login with valid credential @satria.amien", () => {
  test("login with valid email & password", async () => {
    const payload = {
      email: `${username}`,
      password: `${password}`,
    };
    const response = await login(payload);
    expectToMatchSchema(response.body, login_test);
    expect(response.body).toMatchObject({
      success: true,
      message: "Login successful",
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
    });
    expect(response.status).toBe(200);
  });
  test("login with valid email & password", async () => {
    
  })
});
