import { Server, Socket } from "socket.io";

import chatSocket from "controllers/chat/chat-socket";

export default async (io: Server, socket: Socket) => {
  await chatSocket(io, socket);
};
