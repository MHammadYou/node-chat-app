// TODO: Add users later
export type ChatResponse = {
  id: string;
  messages: Message[];
};

export type Message = {
  id: string;
  body: string;
  username: string;
};
