import { useEffect, useRef } from "react";
import { styled, Box, BoxProps } from "@mui/material";

import { Message as MessageType } from "@lib/index";

import Message from "./Message";

type Props = {
  messages?: MessageType[];
  isGroup?: boolean;
};

const StyledMessages = styled(Box)<BoxProps>(() => ({
  width: "100%",
  // TODO: Update later
  height: "71.5vh",
  overflow: "auto",
}));

const Messages: React.FC<Props> = ({ messages, isGroup }) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [ref, messages]);

  return (
    <StyledMessages ref={ref}>
      {messages?.map(({ id, text, username }) => (
        <Message
          username={username}
          text={text}
          showUsername={isGroup}
          key={id}
        />
      ))}
    </StyledMessages>
  );
};

export default Messages;
