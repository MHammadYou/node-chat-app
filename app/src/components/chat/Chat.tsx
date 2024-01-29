import { styled, Box, BoxProps } from "@mui/material";

import { Messages, NewMessage } from "../messages";
import { useGetChatQuery } from "store/api/chat";
import Loading from "lib/Loading";

const StyledChat = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Chat: React.FC = () => {
  const { data, error, isLoading } = useGetChatQuery();

  if (isLoading) return <Loading />;
  if (error) console.log(error);

  // TODO: Update later
  const messages = data.messages?.map(({ body, user }) => ({
    message: body,
    username: user,
  }));

  return (
    <StyledChat>
      <Messages messages={messages} />
      <NewMessage />
    </StyledChat>
  );
};

export default Chat;
