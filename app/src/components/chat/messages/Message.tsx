import { styled, Typography, Box, BoxProps } from "@mui/material";

import useCookie from "hooks/useCookie";

type Props = {
  username: string;
  text: string;
};

const StyledMessage = styled(Box)<BoxProps & { ownMessage: boolean }>(
  ({ ownMessage }) => ({
    padding: "0.5rem",
    textAlign: ownMessage ? "right" : "left",
  })
);

const Message: React.FC<Props> = ({ username, text }) => {
  const { cookie } = useCookie("username");
  const isOwnMessage = cookie === username;

  return (
    <StyledMessage ownMessage={isOwnMessage}>
      {!isOwnMessage && (
        <Typography variant="caption" sx={{ color: "grey" }}>
          {username}
        </Typography>
      )}
      <Typography>{text}</Typography>
    </StyledMessage>
  );
};

export default Message;
