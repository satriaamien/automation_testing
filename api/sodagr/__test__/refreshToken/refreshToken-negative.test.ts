import randomstring from "randomstring";
import {
  refreshToken,
  refreshTokenBoolean,
  refreshTokenNumber,
} from "../../endpoint/refreshToken";
import { login } from "../../endpoint/login_test";
const username = process.env.usernameSodagr;
const password = process.env.passwordSodagr;

describe("user failed to refresh token", () => {
  test("refresh token with invalid type boolean", async () => {
    const payloadRefresher = {
      refreshToken: true,
    };
    const response = await refreshTokenBoolean(payloadRefresher);
    expect(response.body).toMatchSnapshot();
  });
  test("refresh token with invalid type number", async () => {
    const payloadRefresher = {
      refreshToken: 123456789,
    };
    const response = await refreshTokenNumber(payloadRefresher);
    expect(response.body).toMatchSnapshot();
  });
  test("refresh token with empty payload", async () => {
    const payloadRefresher = {
      refreshToken: "",
    };
    const response = await refreshToken(payloadRefresher);
    expect(response.status).toBe(401);
    expect(response.body).toMatchSnapshot();
  });
  test("refresh token with expired token", async () => {
    const payloadRefresher = {
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU2LCJlbWFpbCI6Imx1cW1hbnVsQGViY29ubmVjdC5jb20iLCJuYW1lIjoiTHVxbWFudWwgSGFraWVtIiwiaWF0IjoxNzQ2NTM1MjEyLCJleHAiOjE3NDY1Mzg4MTJ9.1n8C-WttBY2F5EmFQFDrVo86pDMl0BdLVyqkjaW0LO4",
    };
    const response = await refreshToken(payloadRefresher);
    expect(response.body).toMatchSnapshot();
  });
  test("refresh token with random string", async () => {
    const randomString = randomstring.generate();
    const payloadRefresher = {
      refreshToken: randomString,
    };
    const response = await refreshToken(payloadRefresher);
    expect(response.status).toBe(401);
    expect(response.body).toMatchSnapshot();
  });
});
