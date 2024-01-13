import apiSlice from ".";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints.ts";
import { User } from "@lib/types/entities";
import {
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/api/accounts/types";

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
