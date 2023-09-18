import { Box } from "@mui/material";

import Message from "./Message";

const Messages: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Message username="abc">Hello, World!</Message>
      <Message username="xyz">A sample text</Message>
    </Box>
  );
};

export default Messages;
