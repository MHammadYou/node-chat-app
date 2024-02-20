import { styled, Box, BoxProps, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";

import { ApiError } from "@lib/index";

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
        const { status, data } = getSerializedError<ApiError>(error);
        if (typeof status === "number") {
          useToast(data.message, ToastType.ERROR);
        } else {
          useToast("Something went wrong", ToastType.ERROR);
        }
      }

      formik.resetForm();
      return;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
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
