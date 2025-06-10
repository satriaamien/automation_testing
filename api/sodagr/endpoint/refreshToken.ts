import supertest from "supertest";
import dotenv from "dotenv";
import {
  RefreshToken,
  RefreshTokenBooleanType,
  RefreshTokenNumberType,
} from "../interfaces/refreshToken";
dotenv.config();
const sodagr = process.env.SODAGR;
const url = supertest(sodagr!);

export const refreshToken = (payload: RefreshToken) =>
  url
    .post("/api/v1/refresh-token")
    .set("Content-Type", "application/json")
    .send(payload);

export const refreshTokenBoolean = (payload: RefreshTokenBooleanType) =>
  url
    .post("/api/v1/refresh-token")
    .set("Content-Type", "application/json")
    .send(payload)
    .expect(400);

export const refreshTokenNumber = (payload: RefreshTokenNumberType) =>
  url
    .post("/api/v1/refresh-token")
    .set("Content-Type", "application/json")
    .send(payload)
    .expect(400);
