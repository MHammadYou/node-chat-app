// TODO: Add users later
export type ChatResponse = {
  id: string;
  messages: Message[];
};

export type Message = {
  id: string;
  text: string;
  username: string;
};

export type CreateMessagePayload = {
  text: string;
  token: string;
  chatId: string;
};
