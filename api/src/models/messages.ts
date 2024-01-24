import { Schema, Document, model } from "mongoose";

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

export default Messages;
