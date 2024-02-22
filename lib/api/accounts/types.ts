export type UserAuthenticationResponse = {
  token?: string;
  username?: string;
};

export type UserLoginPayload = {
  email: string;
  password: string;
};
