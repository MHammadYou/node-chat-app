import { Socket } from "socket.io";

import { verifyToken } from "utils/verifyToken";

export const socketsAuth = async (
  socket: Socket,
  next: (err?: any) => void
) => {
  const token = socket.handshake.auth.token;
  try {
    await verifyToken(token);
    next();
  } catch (error) {
    next(error);
  }
};
