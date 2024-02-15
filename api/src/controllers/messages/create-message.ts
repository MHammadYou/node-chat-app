import { Server, Socket } from "socket.io";

import {
  CreateMessagePayload,
  Message,
  CHAT_EVENTS,
  ApiError,
} from "@lib/index";

import {
  createMessage as createMessageObject,
  findPopulatedMessage,
} from "models/messages";
import { verifyToken } from "utils/verifyToken";

export const createMessage = async (io: Server, socket: Socket) => {
  const userId = await verifyToken(socket.handshake.auth.token);

  socket.on(
    CHAT_EVENTS.createMessage,
    async ({ text, chatId }: CreateMessagePayload, callback) => {
      try {
        const message = await createMessageObject(text, userId, chatId);
        if (message instanceof Error) {
          throw message;
        }

        const populatedMessage = await findPopulatedMessage(message._id);

        if (!populatedMessage) throw new Error("Something went wrong");

        const populatedResponse: Message = {
          id: populatedMessage._id,
          text: populatedMessage.text,
          username: populatedMessage.user.username,
        };

        const response = {
          status: 201,
          data: message,
        };
        socket.broadcast.emit(CHAT_EVENTS.sendMessage, populatedResponse);
        callback(response);
      } catch (error: any) {
        const response: ApiError = {
          status: 422,
          message: error.message,
        };
        callback(response);
      }
    }
  );
};
