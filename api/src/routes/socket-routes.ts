import { Server, Socket } from "socket.io";

import { createMessage } from "controllers/messages";

export default async (io: Server, socket: Socket) => {
  await createMessage(io, socket);
};
