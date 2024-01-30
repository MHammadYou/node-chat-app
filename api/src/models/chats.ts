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

// TODO: Update later, findChat -> findChatById
export const findPopulatedChat = async () => {
  const chat = await Chats.findOne({})
    .populate<{ messages: MessagesDocument[] }>({
      path: "messages",
      model: "Messages",
      populate: {
        path: "user",
        model: "Users",
      },
    })
    .exec();

  return {
    id: chat?._id,
    messages: chat?.messages.map(({ _id, body, user }) => {
      const username = user.username;
      return {
        id: _id,
        body,
        username,
      };
    }),
  };
};

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
