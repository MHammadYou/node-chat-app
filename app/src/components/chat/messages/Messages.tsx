import { Box } from "@mui/material";

import { Message as MessageType } from "@lib/index";

import Message from "./Message";

type Props = {
  messages?: MessageType[];
};

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {messages?.map(({ id, text, username }) => (
        <Message username={username} text={text} key={id} />
      ))}
    </Box>
  );
};

export default Messages;
