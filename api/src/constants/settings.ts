import dotenv from "dotenv";

dotenv.config();

export const IS_DEV = process.env.IS_DEV;
export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI || "";
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
export const SECRET_KEY = process.env.SECRET_KEY || "";
export const TOKEN_EXPIRE_IN = process.env.TOKEN_EXPIRE_IN || "7d";
export const REFRESH_TOKEN_EXPIRE_IN = (process.env.REFRESH_TOKEN_EXPIRE_IN ||
  1000 * 60 * 60 * 24 * 30) as number;
