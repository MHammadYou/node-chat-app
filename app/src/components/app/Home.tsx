import { Box, BoxProps, styled } from "@mui/material";

import ChatList from "components/chat-list";
import Chat from "components/chat/Chat";

const StyledHome = styled(Box)<BoxProps>(() => ({
  display: "flex",
}));

const Home: React.FC = () => {
  return (
    <StyledHome>
      <ChatList />
      <Chat />
    </StyledHome>
  );
};

export default Home;
