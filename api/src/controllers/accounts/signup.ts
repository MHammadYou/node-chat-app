import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { UserCreationResponse } from "@lib/api/accounts/types";
import Users from "models/users";
import { isExistingEmail, isExsitingUsername } from "models/users";

import { CreateUserPayload } from "./types";

export const createUser = async (
  req: Request<{}, {}, CreateUserPayload>,
  res: Response<UserCreationResponse>
) => {
  const { username, email, password } = req.body;
  const isUsernameUnavailable = await isExsitingUsername(username);
  const isEmailUnavailable = await isExistingEmail(email);

  try {
    if (isUsernameUnavailable && isEmailUnavailable) {
      throw new Error("Username and email already exist");
    } else if (isUsernameUnavailable) {
      throw new Error("Username already exists");
    } else if (isEmailUnavailable) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const response: UserCreationResponse = {
      success: true,
      message: "Account created successfully",
      user: { username, email },
    };

    res.status(201).json(response);
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 409]
        : ["Something went wrong", 500];

    const response: UserCreationResponse = {
      success: false,
      message,
    };

    res.status(status).json(response);
  }
};
