import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload } from "jsonwebtoken";

import { SECRET_KEY } from "constants/settings";
import { Schema } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      userId: string | Schema.Types.ObjectId;
    }
  }
}

export type AuthRequest = {
  userId: string | Schema.Types.ObjectId;
} & Request;

export const auth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  try {
    if (!token) throw new Error();

    const decoded = verify(token, SECRET_KEY);
    res.locals.userId = (decoded as JwtPayload).id;
    req.userId = (decoded as JwtPayload).id;

    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};
