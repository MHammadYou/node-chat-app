import express from "express";
import mongoose from "mongoose";

import "module-alias/register";

import handleRoutes from "./routes";
import { PORT, DB_URI } from "./constants/settings";

const app = express();

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
