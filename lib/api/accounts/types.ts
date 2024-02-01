export type UserAuthenticationResponse = {
  token?: string;
};

export type UserLoginPayload = {
  email: string;
  password: string;
};
