import express from "express";

const handleRoutes = (app: express.Express) => {
  app.use((_req, res) => {
    res.status(404).send("Not found");
  });
};

export default handleRoutes;
