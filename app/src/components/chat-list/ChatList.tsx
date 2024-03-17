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

import Loading from "lib/Loading";

import useUser from "hooks/useUser";
import { useGetChatsQuery } from "store/api/chat";

type Props = {
  setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
};

const ChatList: React.FC<Props> = ({ setSelectedChat }) => {
  const { data: chats, isLoading, error } = useGetChatsQuery();

  const { username: user } = useUser();
  const isOwnMessage = (username?: string) => username === user;

  const formatMessageLength = (text: string, maxLength = 32) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  const formatMessage = (isGroup: boolean, text?: string, username?: string) =>
    `${
      text
        ? `${
            isGroup ? (isOwnMessage(username) ? "You" : username) + ": " : ""
          }${formatMessageLength(text)}`
        : "No message yet"
    }`;

  if (isLoading) return <Loading />;
  if (error) return <div>{error.toString()}</div>;

  if (!chats) return <>TODO: Add no available chat screen</>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
      {chats.map(({ id, isGroup, lastMessage, name }) => {
        const { username, text } = lastMessage || {};
        return (
          <Box key={id}>
            <ListItem onClick={() => setSelectedChat(id)}>
              <ListItemAvatar>
                <Avatar>
                  <Image />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name || "TODO: Add chat name"}
                secondary={formatMessage(isGroup, text, username)}
              />
            </ListItem>
            <Divider />
          </Box>
        );
      })}
    </List>
  );
};

export default ChatList;
