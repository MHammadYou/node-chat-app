import { Call, VideoCallRounded } from "@mui/icons-material";
import { Typography, IconButton, Stack, Card } from "@mui/material";

type Props = {
  name: string;
};

const ChatHeader: React.FC<Props> = ({ name }) => {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-between">
        <Typography p={2}>{name}</Typography>
        <Stack direction="row" mr={2} spacing={1}>
          <IconButton size="large">
            <Call />
          </IconButton>
          <IconButton size="large">
            <VideoCallRounded />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ChatHeader;
