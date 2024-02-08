import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import "module-alias/register";

import handleRoutes from "./routes";
import { PORT, DB_URI, ALLOWED_ORIGIN } from "./constants/settings";
import { registerModels } from "./models";

const app = express();
const server = createServer(app);
export const io = new Server(server);

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
      server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

      io.on("connection", (socket) => {
        console.log("User connected");

        socket.on("disconnect", () => {
          console.log("User disconnected");
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
})();

handleRoutes(app);
