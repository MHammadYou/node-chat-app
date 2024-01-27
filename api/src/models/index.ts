import Chats from "./chats";
import Messages from "./messages";
import Users from "./users";

export const registerModels = async () => {
  await Chats.init();
  await Messages.init();
  await Users.init();
};

export { Chats, Messages, Users };
