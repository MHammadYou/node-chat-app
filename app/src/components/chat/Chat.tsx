import { Divider, Stack } from "@mui/material";

import { useGetChatQuery } from "store/api/chat";
import Loading from "lib/Loading";

import { Messages, NewMessage } from "./messages";
import ChatHeader from "./ChatHeader";

const Chat: React.FC = () => {
  const { data, error, isLoading } = useGetChatQuery();

  if (isLoading) return <Loading />;
  // TODO: Add Error Boundary
  if (error) console.log(error);

  return (
    <Stack divider={<Divider />}>
      <ChatHeader name={data?.name || "TODO"} />
      <Messages messages={data?.messages} />
      <NewMessage />
    </Stack>
  );
};

export default Chat;
