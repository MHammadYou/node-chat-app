import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import "module-alias/register";

import handleRoutes from "./routes";
import { PORT, DB_URI, ALLOWED_ORIGIN } from "./constants/settings";
import { registerModels } from "./models";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  })
);

(async () => {
  try {
    const res = await mongoose.connect(DB_URI);

    if (res) {
      console.log("Connected to the database");

      await registerModels();
      app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
    }
  } catch (error) {
    console.log(error);
  }
})();

handleRoutes(app);
