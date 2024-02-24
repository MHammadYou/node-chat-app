import { VideoCall, VoiceChat } from "@mui/icons-material";
import { styled, Box, BoxProps, Typography, IconButton } from "@mui/material";

type Props = {
  name: string;
};

const StyledChatHeader = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid black",
}));

const ChatHeader: React.FC<Props> = ({ name }) => {
  return (
    <StyledChatHeader>
      <Typography p={2}>{name}</Typography>
      <Box>
        <IconButton sx={{ borderRadius: "0" }} size="large">
          <VoiceChat />
        </IconButton>
        <IconButton sx={{ borderRadius: "0" }} size="large">
          <VideoCall />
        </IconButton>
      </Box>
    </StyledChatHeader>
  );
};

export default ChatHeader;
