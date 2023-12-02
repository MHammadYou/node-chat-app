import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  res.json({ username, email, password });
};
