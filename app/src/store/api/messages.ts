import apiSlice from ".";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints.ts";
import { CreateMessagePayload } from "@lib/api/chat/types.ts";

const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation<void, CreateMessagePayload>({
      query: (body) => ({
        url: API_ENDPOINTS.createMessage,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateMessageMutation } = messagesApi;
