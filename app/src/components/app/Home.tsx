import { useEffect, useState } from "react";
import { Box, Divider, Stack } from "@mui/material";

import ChatList from "components/chat-list";
import Chat from "components/chat/Chat";

import { useAppDispatch } from "store/hooks";
import accountsApi from "store/api/accounts";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedChat, setSelectedChat] = useState("");

  useEffect(() => {
    dispatch(accountsApi.endpoints.getUserDetails.initiate());
  }, []);

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
