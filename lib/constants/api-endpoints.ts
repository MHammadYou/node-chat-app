export const ApiEndpoints = {
  signup: () => "/signup",
  login: () => "/login",
  refreshToken: () => "/refresh-token",
  chat: (id: string) => `/chat/${id}`,
  chats: () => "/chats",
  createMessage: () => "/messages/create",
  userDetails: () => "/user-details",
};
