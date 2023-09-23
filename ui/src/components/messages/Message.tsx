import { styled, Typography, TypographyProps } from "@mui/material";

type Props = {
  username: string;
  children: string;
};

const StyledMessage = styled(Typography)<TypographyProps>(() => ({
  padding: "0.5rem",
}));

const Message: React.FC<Props> = ({ username, children }) => {
  return (
    <StyledMessage>
      {children} by {username}
    </StyledMessage>
  );
};

export default Message;
