import { Box, BoxProps, styled } from "@mui/material";

import ChatList from "components/chat-list";
import Chat from "components/chat/Chat";

const StyledHome = styled(Box)<BoxProps>(() => ({
  display: "flex",
  height: "100%",
}));

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Box flex={3}>
        <ChatList />
      </Box>
      <Box flex={8}>
        <Chat />
      </Box>
    </StyledHome>
  );
};

export default Home;
