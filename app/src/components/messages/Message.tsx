import { styled, Typography, Box, BoxProps } from "@mui/material";

type Props = {
  username: string;
  message: string;
};

const StyledMessage = styled(Box)<BoxProps>(() => ({
  padding: "0.5rem",
}));

const Message: React.FC<Props> = ({ username, message }) => {
  return (
    <StyledMessage>
      <Typography variant="caption" sx={{ color: "grey" }}>
        {username}
      </Typography>
      <Typography>{message}</Typography>
    </StyledMessage>
  );
};

export default Message;
