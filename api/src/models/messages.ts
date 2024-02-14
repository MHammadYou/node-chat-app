import { Schema, Document, model } from "mongoose";

import { User } from "@lib/types/entities";

import { isExistingUserId } from "./users";
import Chats from "./chats";

export type PopulatedMessage = {
  _id: string;
  text: string;
  user: User;
};

export type PopulatedUser = {
  username: string;
  email: string;
};

export type MessagesDocument = Document & {
  text: string;
  user: Schema.Types.ObjectId;
  chat: Schema.Types.ObjectId;
};

const messagesSchema = new Schema<MessagesDocument>({
  text: String,
  user: { type: Schema.Types.ObjectId, ref: "Users" },
  chat: { type: Schema.Types.ObjectId, ref: "Chats" },
});

const Messages = model<MessagesDocument>("Messages", messagesSchema);

export const createMessage = async (
  text: string,
  userId: Schema.Types.ObjectId | string,
  chatId: Schema.Types.ObjectId | string
): Promise<MessagesDocument | Error> => {
  const isValidUser = await isExistingUserId(userId);
  if (!isValidUser) return new Error("Invalid user");

  const message = new Messages({
    text,
    user: userId,
    chat: chatId,
  });

  try {
    await message.save();

    const chat = await Chats.findById(chatId);
    if (!chat) return new Error("Invalid chat");

    chat.messages.push(message._id);
    await chat?.save();
  } catch (error) {
    return new Error("Failed to create message");
  }

  return message;
};

export const findPopulatedMessage = async (
  id: Schema.Types.ObjectId | string
) => {
  try {
    return await Messages.findById(id)
      .populate<{ user: PopulatedUser }>({
        path: "user",
        model: "Users",
      })
      .exec();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default Messages;
