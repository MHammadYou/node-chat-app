import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/api/accounts/types";
import { findUserByEmail } from "models/users";
import { SECRET_KEY } from "constants/settings";

export const loginUser = async (
  req: Request<UserLoginPayload>,
  res: Response<UserAuthenticationResponse>
) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) throw new Error("User doesn't exist");

    const isCorrectPassword = await bcrypt.compare(password, user!.password);
    if (isCorrectPassword) {
      const token = jwt.sign({ userId: user._id }, SECRET_KEY);

      const response: UserAuthenticationResponse = {
        success: true,
        message: "Login successful",
        user: { username: user.username, email, token },
      };

      res.status(200).json(response);
    } else {
      throw new Error("Email or password didn't match");
    }
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 401]
        : ["Something went wrong", 500];

    const response: UserAuthenticationResponse = {
      success: false,
      message,
    };

    res.status(status).json(response);
  }
};
