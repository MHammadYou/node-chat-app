import { User } from "@lib/types/entities";

export type CreateUserPayload = User;

export type UserCreationResponse = {
  success: boolean;
  message: string;
  user?: UserResponseType;
};

export type UserResponseType = {
  username: string;
  email: string;
};
