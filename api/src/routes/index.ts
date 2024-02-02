import express from "express";

import accountsRouter from "./accounts";
import chatRouter from "./chat";
import messagesRouter from "./messages";

const handleRoutes = (app: express.Express) => {
  app.use("/", accountsRouter);
  app.use("/", chatRouter);
  app.use("/", messagesRouter);

  app.use((_req, res) => {
    res.status(404).send("Not found");
  });
};

export default handleRoutes;
