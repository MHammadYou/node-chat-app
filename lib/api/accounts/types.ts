export type UserAuthenticationResponse = {
  success: boolean;
  message: string;
  user?: UserResponseType;
};

export type UserResponseType = {
  username: string;
  email: string;
  token: string;
};

export type UserLoginPayload = {
  email: string;
  password: string;
};
