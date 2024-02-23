// TODO: Add users later
export type ChatResponse = {
  id: string;
  messages: Message[];
  isGroup: boolean;
  name?: string;
};

export type Message = {
  id: string;
  text: string;
  username: string;
};

export type CreateMessagePayload = {
  text: string;
  chatId: string;
};
