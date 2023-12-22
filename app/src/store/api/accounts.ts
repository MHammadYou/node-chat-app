import apiSlice from ".";

const accountsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: () => ({
        url: "/signup",
        method: "POST",
      }),
    }),
  }),
});

export const { useCreateUserMutation } = accountsApi;
