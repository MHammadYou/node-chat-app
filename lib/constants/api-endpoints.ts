export const ApiEndpoints = {
  signup: () => "/signup",
  login: () => "/login",
  chat: (id: string) => `/chat/${id}`,
  chats: () => "/chats",
  createMessage: () => "/messages/create",
};
