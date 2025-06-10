import supertest from "supertest";
import dotenv from "dotenv";
import {
  LoginPayload,
  LoginPayloadWrongEmail,
  LoginPayloadWrongEmailPassword,
  LoginPayloadWrongPassword,
} from "../interfaces/login_test";
dotenv.config();
const sodagr = process.env.SODAGR;
const url = supertest(sodagr!);

export const login = (payload: LoginPayload) =>
  url
    .post("/api/v1/login/test")
    .set("Content-Type", "application/json")
    .send(payload);
export const loginWrongTypeEmail = (payload: LoginPayloadWrongEmail) =>
  url
    .post("/api/v1/login/test")
    .set("Content-Type", "application/json")
    .send(payload)
    .expect(400);
export const loginWrongTypePassword = (payload: LoginPayloadWrongPassword) =>
  url
    .post("/api/v1/login/test")
    .set("Content-Type", "application/json")
    .send(payload)
    .expect(400);

export const loginWrongTypeEmailPassword = (
  payload: LoginPayloadWrongEmailPassword
) =>
  url
    .post("/api/v1/login/test")
    .set("Content-Type", "application/json")
    .send(payload)
    .expect(400);

export const loginWihoutContentType = (payload: LoginPayload) =>
  url
    .post("/api/v1/login/test")
    .send(payload)
    .set("Content-Type", "text/html")
    .expect(400);
