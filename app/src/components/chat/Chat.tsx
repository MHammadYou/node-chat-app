import { Divider, Stack } from "@mui/material";

import { useGetChatQuery } from "store/api/chat";
import Loading from "lib/Loading";

import { Messages, NewMessage } from "./messages";
import ChatHeader from "./ChatHeader";

type Props = {
  selectedChat: string;
};

const Chat: React.FC<Props> = ({ selectedChat }) => {
  const { data, error, isLoading } = useGetChatQuery(selectedChat);

  if (isLoading) return <Loading />;
  // TODO: Add Error Boundary
  if (error) console.log(error);

  return (
    <Stack divider={<Divider />}>
      <ChatHeader name={data?.name || "TODO"} />
      <Messages messages={data?.messages} />
      <NewMessage chatId={selectedChat} />
    </Stack>
  );
};

export default Chat;
