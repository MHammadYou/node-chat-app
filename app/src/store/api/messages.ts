import apiSlice from ".";

import { CHAT_EVENTS } from "@lib/constants/chat-events.ts";
import { CreateMessagePayload } from "@lib/api/chat/types.ts";

import { getSocket } from "utils/socket";

const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation<void, CreateMessagePayload>({
      queryFn: async (messagePayload: CreateMessagePayload) => {
        const socket = getSocket();
        return new Promise((resolve) => {
          socket.emit(
            CHAT_EVENTS.createMessage,
            messagePayload,
            // TODO: Update response type
            (data: any) => {
              return resolve({ data });
            }
          );
        });
      },
    }),
  }),
});

export const { useCreateMessageMutation } = messagesApi;
