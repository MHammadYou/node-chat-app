import { styled, Box, BoxProps } from "@mui/material";

import { useGetChatQuery } from "store/api/chat";
import Loading from "lib/Loading";

import { Messages, NewMessage } from "./messages";

const StyledChat = styled(Box)<BoxProps>(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
}));

const Chat: React.FC = () => {
  const { data, error, isLoading } = useGetChatQuery();

  if (isLoading) return <Loading />;
  // TODO: Add Error Boundary
  if (error) console.log(error);

  return (
    <StyledChat>
      <Messages messages={data?.messages} />
      <NewMessage />
    </StyledChat>
  );
};

export default Chat;
