import express from "express";
import dotenv from "dotenv";
import handleRoutes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => `Listening on port: ${PORT}`);

handleRoutes(app);
