import express from "express";

import accountsRouter from "./accounts";

const handleRoutes = (app: express.Express) => {
  app.use("/", accountsRouter);

  app.use((_req, res) => {
    res.status(404).send("Not found");
  });
};

export default handleRoutes;
