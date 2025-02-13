import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      USER_EMAIL: process.env.VITE_USER_EMAIL,
      USER_PASSWORD: process.env.VITE_USER_PASSWORD,
    },
  },
});
