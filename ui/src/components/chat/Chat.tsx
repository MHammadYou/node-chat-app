import { Box } from "@mui/material";

import Message from "./Message";

const Chat: React.FC = () => {
  return (
    <Box>
      <Message text="Hello, World!" username="abc" />
      <Message text="A sample text" username="xyz" />
    </Box>
  );
};

export default Chat;
