import apiSlice from ".";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = accountsApi;
