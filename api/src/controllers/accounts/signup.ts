import { Request, Response } from "express";

import { CreateUserPayload } from "./types";

export const createUser = (
  req: Request<{}, {}, CreateUserPayload>,
  res: Response
) => {
  const { username, email, password } = req.body;

  res.json({ username, email, password });
};
