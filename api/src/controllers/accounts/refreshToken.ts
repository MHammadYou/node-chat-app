import { Request, Response } from "express";

import { verifyToken } from "utils/verifyToken";
import { signToken } from "utils/signToken";

import { UserAuthenticationResponse, ApiError } from "@lib/api";

export const refreshToken = async (
  req: Request,
  res: Response<UserAuthenticationResponse | ApiError>
) => {
  if (req.cookies?.refreshToken) {
    const refreshToken = req.cookies.refreshToken;

    try {
      const userId = await verifyToken(refreshToken);
      const token = signToken(userId);
      res.status(200).json({ token });
    } catch {
      res
        .status(409)
        .json({ status: 409, message: "Unauthorized, Invalid refresh token" });
    }
  } else {
    res.status(409).json({
      status: 409,
      message: "Unauthorized, No refresh token provided",
    });
  }
};
