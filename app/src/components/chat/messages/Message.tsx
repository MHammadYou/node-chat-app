import { Typography, Paper } from "@mui/material";

import useUser from "hooks/useUser";

type Props = {
  username: string;
  text: string;
  showUsername?: boolean;
};

const Message: React.FC<Props> = ({ username, text, showUsername }) => {
  const user = useUser();
  const isOwnMessage = user === username;

  return (
    <Paper
      sx={{
        textAlign: isOwnMessage ? "right" : "left",
        p: 1,
        m: 1,
      }}
      elevation={0}
    >
      {showUsername && !isOwnMessage && (
        <Typography variant="caption" color="grey">
          {username}
        </Typography>
      )}
      <Typography>{text}</Typography>
    </Paper>
  );
};

export default Message;
