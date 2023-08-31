import { Typography } from "@mui/material";

type Props = {
  username: string;
  children: string;
};

const Message: React.FC<Props> = ({ username, children }) => {
  return (
    <Typography>
      {children} by {username}
    </Typography>
  );
};

export default Message;
