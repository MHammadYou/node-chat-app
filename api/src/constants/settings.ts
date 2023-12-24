import dotenv from "dotenv";

dotenv.config();

export const IS_DEV = process.env.IS_DEV;
export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI || "";
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
