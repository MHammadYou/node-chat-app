// TODO: Add users later
export type ChatResponse = {
  messages: Message[];
};

export type Message = {
  body: string;
  username: string;
};
