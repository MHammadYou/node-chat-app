import { verify, JwtPayload } from "jsonwebtoken";
import { Socket } from "socket.io";

import { SECRET_KEY } from "constants/settings";

export const socketsAuth = (socket: Socket, next: (err?: any) => void) => {
  const token = socket.handshake.auth.token;
  try {
    if (!token) throw new Error("Authentication token missing");
    const decoded = verify(token, SECRET_KEY);
    const userId = (decoded as JwtPayload).id;
    if (!userId) throw new Error("Invalid authentication token");

    next();
  } catch (error: any) {
    next(error);
  }
};
