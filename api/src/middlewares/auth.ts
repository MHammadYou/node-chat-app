import { Request, Response, NextFunction } from "express";
import { Schema } from "mongoose";

import { verifyToken } from "utils/verifyToken";

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
    const userId = await verifyToken(token);
    res.locals.userId = userId;
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).json({
      status: 401,
      error,
    });
  }
};
