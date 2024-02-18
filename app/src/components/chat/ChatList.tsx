import { Box } from "@mui/material";

import ChatListItem from "./ChatListItem";

const ChatList: React.FC = () => {
  return (
    <Box>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Box>
  );
};

export default ChatList;
