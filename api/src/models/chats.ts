import { Document, Schema, model } from "mongoose";

// TODO: Add Users later
export type ChatsDocument = Document & {
  messages: Schema.Types.ObjectId[];
  // users: Schema.Types.ObjectId[];
};

const chatsSchema = new Schema<ChatsDocument>({
  messages: [{ type: Schema.Types.ObjectId, ref: "Messages" }],
  // users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
});

const Chats = model<ChatsDocument>("Chats", chatsSchema);

// TODO: Add populate methods later

// export const createChat = async (
//   users?: UsersDocument[]
// ): Promise<ChatsDocument | string> => {
//   const chat = new Chats({
//     ...(users && { users }),
//   });

//   try {
//     await chat.save();

//     users?.map(async (user) => {
//       user.chats.push(chat._id);
//       await user.save();
//     });
//   } catch (error) {
//     console.log(error);
//     return "Failed to create chat";
//   }

//   return chat;
// };

export default Chats;
