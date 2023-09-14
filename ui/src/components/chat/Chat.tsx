import { Box } from "@mui/material";
import Messages from "./Messages";
import NewMessage from "./NewMessage";

const Chat: React.FC = () => {
  return (
    <Box>
      <Messages />
      <NewMessage />
    </Box>
  );
};

export default Chat;
