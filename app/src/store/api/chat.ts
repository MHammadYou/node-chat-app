import apiSlice from ".";

import { API_ENDPOINTS, CHAT_EVENTS, ChatResponse, Message } from "@lib/index";

import { getSocket } from "utils/socket";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChat: builder.query<ChatResponse, void>({
      query: () => ({
        url: API_ENDPOINTS.chat,
      }),
      async onCacheEntryAdded(
        _arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        try {
          await cacheDataLoaded;

          const socket = getSocket();

          socket.on(CHAT_EVENTS.sendMessage, (message: Message) => {
            updateCachedData((draft) => {
              draft.messages.push(message);
            });
          });

          await cacheEntryRemoved;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetChatQuery } = chatApi;

export default chatApi;
