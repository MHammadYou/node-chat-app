import { Request, Response } from "express";

import { UserDetails, ApiError } from "@lib/api";

import Users from "models/users";

export const getUserDetails = async (
  req: Request,
  res: Response<UserDetails | ApiError>
) => {
  const { userId } = req;
  try {
    const user = await Users.findById(userId);
    if (!user) throw new Error("User not found");

    const { username, email } = user;

    res.status(200).json({
      username,
      email,
    });
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 401]
        : ["Something went wrong", 500];

    const response: ApiError = {
      status,
      message,
    };

    res.status(status).json(response);
  }
};
