import { Server, Socket } from "socket.io";

import { findPopulatedChat } from "models/chats";

export default async (io: Server, socket: Socket) => {
  const chat = await findPopulatedChat();

  socket.emit("chat", chat);
};
