import { Schema, Document, model } from "mongoose";

import { User } from "@lib/types/entities";

import { UsersDocument } from "./users";
import Chats, { ChatsDocument } from "./chats";

export type PopulatedMessage = {
  _id: string;
  body: string;
  user: User;
};

export type MessagesDocument = Document & {
  body: string;
  user: Schema.Types.ObjectId;
  chat: Schema.Types.ObjectId;
};

const messagesSchema = new Schema<MessagesDocument>({
  body: String,
  user: { type: Schema.Types.ObjectId, ref: "Users" },
  chat: { type: Schema.Types.ObjectId, ref: "Chats" },
});

const Messages = model<MessagesDocument>("Messages", messagesSchema);

export const createMessage = async (
  body: string,
  userId: UsersDocument,
  chatId: ChatsDocument
): Promise<MessagesDocument> => {
  const message = new Messages({
    body,
    user: userId,
    chat: chatId,
  });

  try {
    await message.save();

    const chat = await Chats.findById(chatId);
    chat?.messages.push(message._id);
    await chat?.save();
  } catch (error) {
    console.log(error);
  }

  return message;
};

export default Messages;
