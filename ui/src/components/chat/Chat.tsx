import { styled, Box, BoxProps } from "@mui/material";

import Messages from "../messages/Messages";
import NewMessage from "../messages/NewMessage";

const StyledChat = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Chat: React.FC = () => {
  return (
    <StyledChat>
      <Messages />
      <NewMessage />
    </StyledChat>
  );
};

export default Chat;
