import { styled, Box, BoxProps } from "@mui/material";
import ChatListItem from "./ChatListItem";

const StyledChatList = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const ChatList: React.FC = () => {
  const chats = ["Chat 1", "Chat 2", "Chat 3"];

  return (
    <StyledChatList>
      {chats.map((chat) => (
        <ChatListItem name={chat} key={chat} />
      ))}
    </StyledChatList>
  );
};

export default ChatList;
