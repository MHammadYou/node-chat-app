import { styled, Box, BoxProps } from "@mui/material";

import MessageInput from "./MessageInput";
import SendButton from "./SendButton";

const StyledNewMessage = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const NewMessage: React.FC = () => {
  return (
    <StyledNewMessage>
      <MessageInput />
      <SendButton />
    </StyledNewMessage>
  );
};

export default NewMessage;
