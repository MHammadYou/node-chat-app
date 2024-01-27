import apiSlice from ".";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints.ts";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChat: builder.query({
      query: () => ({
        url: API_ENDPOINTS.chat,
      }),
    }),
  }),
});

export const { useGetChatQuery } = chatApi;
