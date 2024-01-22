import { Box } from "@mui/material";

import Message from "./Message";

type Props = {
  messages?: {
    message: string;
    username: string;
  }[];
};

const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {messages?.map(({ message, username }) => (
        <Message username={username} message={message} />
      ))}
    </Box>
  );
};

export default Messages;
