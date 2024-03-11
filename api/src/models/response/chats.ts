import { Chats } from "models/index";
import { PopulatedMessage } from "models/messages";

import { ChatListResponse } from "@lib/api";

export const findPopulatedChatsList = async (): Promise<
  ChatListResponse | undefined
> => {
  const chats = await Chats.find()
    .populate<{ messages: PopulatedMessage[] }>({
      path: "messages",
      model: "Messages",
      populate: {
        path: "user",
        model: "Users",
      },
    })
    .exec();

  if (!chats) return undefined;

  const response = chats.map(({ _id, name, isGroup, messages }) => ({
    id: _id,
    name,
    isGroup,
    lastMessage: (() => {
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage) return undefined;
      const {
        _id,
        text,
        user: { username },
      } = lastMessage;
      return {
        id: _id,
        text,
        username,
      };
    })(),
  }));

  return response;
};
