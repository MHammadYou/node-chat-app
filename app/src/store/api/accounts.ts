import apiSlice from ".";

import {
  ApiEndpoints,
  User,
  UserAuthenticationResponse,
  UserDetails,
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
    getUserDetails: builder.query<UserDetails, void>({
      query: () => ApiEndpoints.userDetails(),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserDetailsQuery,
} = accountsApi;
export default accountsApi;
