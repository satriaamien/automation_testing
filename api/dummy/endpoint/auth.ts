import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
const BASE_URL = process.env.REQRES_URL; // Mengambil nilai dari .env

export const page = (page: number) =>
  axios.get(`${BASE_URL}api/users?page=${page}`);
