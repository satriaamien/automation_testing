import dotenv from "dotenv";
dotenv.config();
import { refreshToken } from "../../endpoint/refreshToken";
import { login } from "../../endpoint/login_test";
const username = process.env.usernameSodagr;
const password = process.env.passwordSodagr;
describe("user success refresh token ", () => {
  test("refresh token valid", async () => {
    const payloadLogin = {
      email: `${username}`,
      password: `${password}`,
    };
    const responseLogin = await login(payloadLogin);
    const payloadRefreshToken = responseLogin.body.refreshToken;
    const responseRefresher = await refreshToken({
      refreshToken: payloadRefreshToken,
    });
    expect(await responseRefresher.body).toMatchObject({
      success: true,
      message: "Refresh token successful",
      accessToken: expect.any(String),
      newRefreshToken: expect.any(String),
      payload: {
        userId: expect.any(Number),
        email: expect.any(String),
        name: expect.any(String),
      },
    });
    expect(responseRefresher.status).toBe(200);
  });
});
