import apiSlice from ".";

import {
  ApiEndpoints,
  CHAT_EVENTS,
  ChatResponse,
  ChatListResponse,
  Message,
} from "@lib/index";

import { getSocket } from "utils/socket";

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChat: builder.query<ChatResponse, string>({
      query: (id) => ({
        url: ApiEndpoints.chat(id),
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
    getChats: builder.query<ChatListResponse, void>({
      query: () => ({
        url: ApiEndpoints.chats(),
      }),
    }),
  }),
});

export const { useGetChatQuery, useGetChatsQuery } = chatApi;

export default chatApi;
