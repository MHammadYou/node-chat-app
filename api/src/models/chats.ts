import { Document, Schema, model } from "mongoose";

import { ChatResponse } from "@lib/api/chat/types";

import { PopulatedMessage } from "./messages";

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
export const findPopulatedChat = async (): Promise<ChatResponse | null> => {
  const chat = await Chats.findOne({})
    .populate<{ messages: PopulatedMessage[] }>({
      path: "messages",
      model: "Messages",
      populate: {
        path: "user",
        model: "Users",
      },
    })
    .exec();

  if (chat) {
    return {
      id: chat._id,
      messages: chat.messages.length
        ? chat.messages?.map(({ _id, text, user }) => {
            const username = user.username;
            return {
              id: _id,
              text,
              username,
            };
          })
        : [],
    };
  }
  return null;
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
