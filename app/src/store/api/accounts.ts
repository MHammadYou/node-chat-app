import apiSlice from ".";

import { User } from "@lib/types/entities";
import { UserCreationResponse } from "@lib/api/accounts/types";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserCreationResponse, User>({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = accountsApi;
