import apiSlice from ".";

import { CHAT_EVENTS, CreateMessagePayload } from "@lib/index";

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
