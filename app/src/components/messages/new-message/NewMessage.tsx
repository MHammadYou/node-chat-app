import { styled, Box, BoxProps, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";

import { ApiError } from "@lib/api/types";

import TextField from "lib/TextField";
import useToast, { ToastType } from "hooks/useToast";

import { getSerializedError } from "store/api";
import { useCreateMessageMutation } from "store/api/messages";

const StyledNewMessage = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}));

const NewMessage: React.FC = () => {
  const [createMessage] = useCreateMessageMutation();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values) => {
      try {
        await createMessage({
          text: values.message,
          chatId: "TODO: Add chat id",
        }).unwrap();
        useToast("Message created", ToastType.SUCCESS);
      } catch (error) {
        const { status, data } = getSerializedError<ApiError>(error);
        console.log(error);
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
    <form onSubmit={formik.handleSubmit}>
      <StyledNewMessage>
        <TextField formik={formik} label="Type new message" name="message" />
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </StyledNewMessage>
    </form>
  );
};

export default NewMessage;
