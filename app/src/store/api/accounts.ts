import apiSlice from ".";

import { User } from "@lib/types/entities";
import {
  UserAuthenticationResponse,
  UserLoginPayload,
} from "@lib/api/accounts/types";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserAuthenticationResponse, User>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation<UserAuthenticationResponse, UserLoginPayload>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = accountsApi;
