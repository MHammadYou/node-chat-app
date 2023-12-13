import { Request, Response } from "express";
import bcrypt from "bcrypt";

import Users from "models/users";
import { isExistingEmail, isExsitingUsername } from "models/users";

import { CreateUserPayload } from "./types";

export const createUser = async (
  req: Request<{}, {}, CreateUserPayload>,
  res: Response
) => {
  const { username, email, password } = req.body;

  const isUsernameUnavailable = await isExsitingUsername(username);
  const isEmailUnavailable = await isExistingEmail(email);

  if (isUsernameUnavailable) {
    res.send("Username already exists");
    return;
  } else if (isEmailUnavailable) {
    res.send("Email already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send("user created successfully");
  } catch (error) {
    res.send(error);
  }

  res.json({ username, email, password });
};
