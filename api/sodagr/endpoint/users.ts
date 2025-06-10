import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const sodagr = process.env.SODAGR;
const url = supertest(sodagr!);

export const getAllUsers = (token: string) =>
  url
    .get("/api/v1/users")
    .set("Content-Type", "application/json")
    .set("Authorization", `Bearer ${token}`);
