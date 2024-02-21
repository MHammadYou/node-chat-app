import { styled, Box, BoxProps } from "@mui/material";

import { Message as MessageType } from "@lib/index";

import Message from "./Message";

type Props = {
  messages?: MessageType[];
};

const StyledMessages = styled(Box)<BoxProps>(() => ({
  width: "100%",
  // TODO: Update later
  height: "81vh",
  overflow: "auto",
}));

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <StyledMessages>
      {messages?.map(({ id, text, username }) => (
        <Message username={username} text={text} key={id} />
      ))}
    </StyledMessages>
  );
};

export default Messages;
