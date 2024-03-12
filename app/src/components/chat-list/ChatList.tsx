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

type Props = {
  setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
};

const ChatList: React.FC<Props> = ({ setSelectedChat }) => {
  const { data: chats, isLoading, error } = useGetChatsQuery();

  const formatMessage = (text: string, maxLength = 32) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  if (isLoading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;

  if (!chats) return <>TODO: Add no available chat screen</>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
      {chats.map(({ id, isGroup, lastMessage, name }) => (
        <Box key={id}>
          <ListItem onClick={() => setSelectedChat(id)}>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={name || "TODO: Add chat name"}
              secondary={
                lastMessage
                  ? `${isGroup ? lastMessage.username + ": " : ""}
                    ${formatMessage(lastMessage.text)}`
                  : "No messages yet"
              }
            />
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
};

export default ChatList;
