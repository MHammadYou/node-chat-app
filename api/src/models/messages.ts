import { Schema, Document, model } from "mongoose";

import { UsersDocument } from "./users";
import { ConversationsDocument } from "./conversations";

export type MessagesDocument = Document & {
  body: string;
  user: Schema.Types.ObjectId;
  conversation: Schema.Types.ObjectId;
};

const messagesSchema = new Schema<MessagesDocument>({
  body: String,
  user: { type: Schema.Types.ObjectId, ref: "Users" },
  conversation: { type: Schema.Types.ObjectId, ref: "Conversations" },
});

const Messages = model<MessagesDocument>("Messages", messagesSchema);

export const createMessage = async (
  body: string,
  user: UsersDocument,
  conversation: ConversationsDocument
): Promise<MessagesDocument> => {
  const message = new Messages({
    body,
    user,
    conversation,
  });

  try {
    await message.save();
    conversation.messages.push(message._id);
    await conversation.save();
  } catch (error) {
    console.log(error);
  }

  return message;
};

export default Messages;
