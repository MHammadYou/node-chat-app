import { Box, Stack } from "@mui/material";

import ChatList from "components/chat-list";
import Chat from "components/chat/Chat";

const Home: React.FC = () => {
  return (
    <Stack direction={"row"} height={"100%"}>
      <Box flex={3}>
        <ChatList />
      </Box>
      <Box flex={8}>
        <Chat />
      </Box>
    </Stack>
  );
};

export default Home;
