import apiSlice from ".";

import {
  ApiEndpoints,
  User,
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/index";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserAuthenticationResponse, User>({
      query: (body) => ({
        url: ApiEndpoints.signup(),
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation<UserAuthenticationResponse, UserLoginPayload>({
      query: (body) => ({
        url: ApiEndpoints.login(),
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = accountsApi;
