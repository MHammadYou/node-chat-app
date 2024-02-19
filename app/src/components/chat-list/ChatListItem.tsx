import { styled, Box, BoxProps, Typography } from "@mui/material";

type Props = {
  name: string;
  // id: string;
};

const StyledItem = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "2.5rem",
  backgroundColor: "lightgrey",
  marginTop: "0.5rem",
  borderRadius: "0.25rem",
  display: "flex",
  alignItems: "center",
}));

const ChatListItem: React.FC<Props> = ({ name }) => {
  return (
    <StyledItem>
      <Typography ml={1}>{name}</Typography>
    </StyledItem>
  );
};

export default ChatListItem;
