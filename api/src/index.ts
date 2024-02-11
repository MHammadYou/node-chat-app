import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { verify, JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import cors from "cors";
import "module-alias/register";

import { PORT, DB_URI, ALLOWED_ORIGIN, SECRET_KEY } from "constants/settings";
import socketRoutes from "routes/socket-routes";

import handleRoutes from "./routes";
import { registerModels } from "./models";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  })
);

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    if (!token) throw new Error("Authentication token missing");
    const decoded = verify(token, SECRET_KEY);
    const userId = (decoded as JwtPayload).id;
    if (!userId) throw new Error("Invalid authentication token");

    next();
  } catch (error: any) {
    next(error);
  }
});

(async () => {
  try {
    const res = await mongoose.connect(DB_URI);

    if (res) {
      console.log("Connected to the database");

      await registerModels();
      server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

      io.on("connection", async (socket) => {
        console.log("User connected");

        await socketRoutes(io, socket);

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
