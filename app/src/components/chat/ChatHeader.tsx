import { Typography, IconButton, Stack } from "@mui/material";
import { CallRounded, VideoCallRounded } from "@mui/icons-material";

type Props = {
  name: string;
};

const ChatHeader: React.FC<Props> = ({ name }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography p={2}>{name}</Typography>
      <Stack direction="row" mr={2} spacing={1}>
        <IconButton size="large">
          <CallRounded />
        </IconButton>
        <IconButton size="large">
          <VideoCallRounded />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ChatHeader;
