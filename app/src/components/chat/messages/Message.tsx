import { Typography, Paper } from "@mui/material";

import useIsAuthor from "hooks/useIsAuthor";

type Props = {
  username: string;
  text: string;
  showUsername?: boolean;
};

const Message: React.FC<Props> = ({ username, text, showUsername }) => {
  const { isAuthor } = useIsAuthor(username);

  return (
    <Paper
      sx={{
        textAlign: isAuthor ? "right" : "left",
        p: 1,
        m: 1,
      }}
      elevation={0}
    >
      {showUsername && !isAuthor && (
        <Typography variant="caption" color="grey">
          {username}
        </Typography>
      )}
      <Typography>{text}</Typography>
    </Paper>
  );
};

export default Message;
