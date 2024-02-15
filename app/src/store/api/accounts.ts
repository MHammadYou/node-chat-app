import apiSlice from ".";

import {
  API_ENDPOINTS,
  User,
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/index";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserAuthenticationResponse, User>({
      query: (body) => ({
        url: API_ENDPOINTS.signup,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation<UserAuthenticationResponse, UserLoginPayload>({
      query: (body) => ({
        url: API_ENDPOINTS.login,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = accountsApi;
