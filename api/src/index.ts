import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import handleRoutes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "";

app.use(express.json());

(async () => {
  try {
    const res = await mongoose.connect(DB_URI);

    if (res) {
      console.log("Connected to the database");
      app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
    }
  } catch (error) {
    console.log(error);
  }
})();

handleRoutes(app);
