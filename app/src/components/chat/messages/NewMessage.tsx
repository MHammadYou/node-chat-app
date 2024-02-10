import { styled, Box, BoxProps, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";

import { ApiError } from "@lib/api/types";

import TextField from "lib/TextField";
import useToast, { ToastType } from "hooks/useToast";

import { getSerializedError } from "store/api";
import { useAppSelector } from "store/hooks";
import { useCreateMessageMutation } from "store/api/messages";
import { selectChat } from "store/api/selectors/chat";

const StyledNewMessage = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const NewMessage: React.FC = () => {
  const [createMessage, { isLoading }] = useCreateMessageMutation();
  const chat = useAppSelector(selectChat);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values) => {
      try {
        await createMessage({
          text: values.message,
          chatId: chat!.id,
        }).unwrap();
        useToast("Message created", ToastType.SUCCESS);
      } catch (error) {
        // TODO: Handle errors
        console.log(error);
        useToast("Something went wrong", ToastType.ERROR);
      }

      formik.resetForm();
      return;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledNewMessage>
        <TextField formik={formik} label="Type new message" name="message" />
        <IconButton type="submit" disabled={isLoading}>
          <SendIcon />
        </IconButton>
      </StyledNewMessage>
    </form>
  );
};

export default NewMessage;
