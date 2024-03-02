import { Typography, IconButton, Stack, Avatar } from "@mui/material";
import {
  CallRounded,
  VideoCallRounded,
  ImageRounded,
} from "@mui/icons-material";

type Props = {
  name: string;
};

const ChatHeader: React.FC<Props> = ({ name }) => {
  return (
    <Stack direction="row" justifyContent="space-between" px={2} py={0.5}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar>
          <ImageRounded />
        </Avatar>
        <Typography>{name}</Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
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
