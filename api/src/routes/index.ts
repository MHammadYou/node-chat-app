import express from "express";

import accountsRouter from "./accounts";
import chatRouter from "./chat";

const handleRoutes = (app: express.Express) => {
  app.use("/", accountsRouter);
  app.use("/", chatRouter);

  app.use((_req, res) => {
    res.status(404).send("Not found");
  });
};

export default handleRoutes;
