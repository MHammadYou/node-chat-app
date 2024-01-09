export type UserAuthenticationResponse = {
  success: boolean;
  message: string;
  token?: string;
};

export type UserLoginPayload = {
  email: string;
  password: string;
};
