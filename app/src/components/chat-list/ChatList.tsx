import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { Image } from "@mui/icons-material";

const ChatList: React.FC = () => {
  const chats = ["Chat 1", "Chat 2", "Chat 3"];

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }} disablePadding>
      {chats.map((chat) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={chat} secondary="Last message" />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default ChatList;
