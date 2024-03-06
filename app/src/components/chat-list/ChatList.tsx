import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { Image } from "@mui/icons-material";

import { useGetChatsQuery } from "store/api/chat";
import Loading from "lib/Loading";

const ChatList: React.FC = () => {
  const { data: chats, isLoading, error } = useGetChatsQuery();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;

  if (!chats) return <>TODO: Add no available chat screen</>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
      {chats.map(({ id, isGroup, lastMessage, name }) => (
        <Box key={id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={name || "TODO: Add chat name"}
              secondary={lastMessage || "Last message"}
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

export default ChatList;
