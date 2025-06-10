import dotenv from "dotenv";
dotenv.config();
const username = process.env.usernameSodagr;
const password = process.env.passwordSodagr;
import {
  login,
  loginWrongTypeEmail,
  loginWrongTypePassword,
} from "../../endpoint/login_test";
describe("user login with invalid credential", () => {
  test("login with valid email & invalid type password", async () => {
    const payload = {
      email: 982345678,
      password: `${password}`,
    };
    const response = await loginWrongTypeEmail(payload);
    expect(response.body).toMatchSnapshot();
  });
  test("login with invalid type email & valid password", async () => {
    const payload = {
      email: `${username}`,
      password: 9123456789,
    };
    const response = await loginWrongTypePassword(payload);
    expect(response.body).toMatchSnapshot();
  });
  test("login with invalid type email & password", async () => {
    const payload = {
      email: "",
      password: "",
    };
    const response = await login(payload);
    expect(response.body).toMatchSnapshot();
  });
});
