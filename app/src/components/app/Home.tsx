import { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";

import ChatList from "components/chat-list";
import Chat from "components/chat/Chat";

const Home: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState("");

  return (
    <Stack
      direction={"row"}
      height={"100%"}
      divider={<Divider orientation="vertical" />}
    >
      <Box flex={3}>
        <ChatList setSelectedChat={setSelectedChat} />
      </Box>
      <Box flex={8}>
        {selectedChat ? (
          <Chat selectedChat={selectedChat} />
        ) : (
          <>TODO: Add default no chat selected screen</>
        )}
      </Box>
    </Stack>
  );
};

export default Home;
