import { Typography } from "@mui/material";

type Props = {
  text: string;
  username: string;
};

const Message: React.FC<Props> = ({ text, username }) => {
  return (
    <Typography>
      {text} by {username}
    </Typography>
  );
};

export default Message;
