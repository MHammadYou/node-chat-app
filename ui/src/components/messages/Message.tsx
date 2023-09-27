import { styled, Typography, Box, BoxProps } from "@mui/material";

type Props = {
  username: string;
  children: string;
};

const StyledMessage = styled(Box)<BoxProps>(() => ({
  padding: "0.5rem",
}));

const Message: React.FC<Props> = ({ username, children }) => {
  return (
    <StyledMessage>
      <Typography variant="caption" sx={{ color: "grey" }}>
        {username}
      </Typography>
      <Typography>{children}</Typography>
    </StyledMessage>
  );
};

export default Message;
