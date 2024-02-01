import { styled, Typography, Box, BoxProps } from "@mui/material";

type Props = {
  username: string;
  text: string;
};

const StyledMessage = styled(Box)<BoxProps>(() => ({
  padding: "0.5rem",
}));

const Message: React.FC<Props> = ({ username, text }) => {
  return (
    <StyledMessage>
      <Typography variant="caption" sx={{ color: "grey" }}>
        {username}
      </Typography>
      <Typography>{text}</Typography>
    </StyledMessage>
  );
};

export default Message;
