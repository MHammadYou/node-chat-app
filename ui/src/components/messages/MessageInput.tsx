import { styled, TextField, TextFieldProps } from "@mui/material";

const StyledMessageInput = styled(TextField)<TextFieldProps>(() => ({
  width: "100%",
}));

const MessageInput: React.FC = () => {
  return <StyledMessageInput size="small" />;
};

export default MessageInput;
