import io, { Socket } from "socket.io-client";
import Cookies from "js-cookie";

import { WS_SERVER } from "constants/settings";

let socket: Socket;

export const getSocket = () => {
  if (!socket) {
    socket = io(WS_SERVER, {
      transports: ["websocket"],
      withCredentials: true,
      auth: {
        token: Cookies.get("token"),
      },
    });
  }
  return socket;
};
