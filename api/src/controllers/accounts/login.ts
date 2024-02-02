import { Request, Response } from "express";
import bcrypt from "bcrypt";

import {
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/api/accounts/types";
import { ApiError } from "@lib/api/types";

import { findUserByEmail } from "models/users";
import { signToken } from "utils/signToken";

export const loginUser = async (
  req: Request<{}, {}, UserLoginPayload>,
  res: Response<UserAuthenticationResponse | ApiError>
) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) throw new Error("User doesn't exist");

    const isCorrectPassword = await bcrypt.compare(password, user!.password);
    if (isCorrectPassword) {
      const token = signToken(user._id);
      res.status(200).json({ token });
    } else {
      throw new Error("Email or password didn't match");
    }
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
