import apiSlice from ".";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints.ts";
import { ChatResponse } from "@lib/api/chat/types.ts";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChat: builder.query<ChatResponse, void>({
      query: () => ({
        url: API_ENDPOINTS.chat,
      }),
    }),
  }),
});

export const { useGetChatQuery } = chatApi;

export default chatApi;
