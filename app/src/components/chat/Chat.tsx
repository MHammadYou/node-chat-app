import { styled, Box, BoxProps } from "@mui/material";

import { useGetChatQuery } from "store/api/chat";
import Loading from "lib/Loading";

import { Messages, NewMessage } from "../messages";

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

  return (
    <StyledChat>
      <Messages messages={data?.messages} />
      <NewMessage />
    </StyledChat>
  );
};

export default Chat;
