import io, { Socket } from "socket.io-client";
import { WS_SERVER } from "constants/settings";

let socket: Socket;

export const getSocket = () => {
  if (!socket) {
    socket = io(WS_SERVER, { transports: ["websocket"] });
  }
  return socket;
};
