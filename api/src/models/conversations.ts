import { Document, Schema, model } from "mongoose";

import { UsersDocument } from "./users";

// TODO: Add Users later
export type ConversationsDocument = Document & {
  messages: Schema.Types.ObjectId[];
  // users: Schema.Types.ObjectId[];
};

const conversationsSchema = new Schema<ConversationsDocument>({
  messages: [{ type: Schema.Types.ObjectId, ref: "Messages" }],
  // users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
});

const Conversations = model<ConversationsDocument>(
  "Conversations",
  conversationsSchema
);

// TODO: Add populate methods later

// export const createConversation = async (
//   users?: UsersDocument[]
// ): Promise<ConversationsDocument | string> => {
//   const conversation = new Conversations({
//     ...(users && { users }),
//   });

//   try {
//     await conversation.save();

//     users?.map(async (user) => {
//       user.conversations.push(conversation._id);
//       await user.save();
//     });
//   } catch (error) {
//     console.log(error);
//     return "Failed to create conversation";
//   }

//   return conversation;
// };

export default Conversations;
