import { Document, Schema, model } from "mongoose";
import { MessagesDocument } from "./messages";

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

export const getPopulatedMessages = async (chatId: Schema.Types.ObjectId) => {
  Chats.findOne({ _id: chatId })
    .populate<{ messages: MessagesDocument }>("messages")
    .orFail()
    .then((doc) => {
      console.log(doc.messages);
    });
};

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
