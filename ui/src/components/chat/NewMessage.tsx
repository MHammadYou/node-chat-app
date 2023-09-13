import { Box } from "@mui/material";

import MessageInput from "./MessageInput";
import SendButton from "./SendButton";

const NewMessage: React.FC = () => {
  return (
    <Box>
      <MessageInput />
      <SendButton />
    </Box>
  );
};

export default NewMessage;
