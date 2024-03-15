export type UserAuthenticationResponse = {
  token?: string;
  username?: string;
};

export type UserLoginPayload = {
  email: string;
  password: string;
};

export type UserDetails = {
  username: string;
  email: string;
};
