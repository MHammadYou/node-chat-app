import { Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";

import { ApiError } from "@lib/index";

import TextField from "lib/TextField";
import useToast, { ToastType } from "hooks/useToast";

import { getSerializedError } from "store/api";
import { useCreateMessageMutation } from "store/api/messages";

type Props = {
  chatId: string;
};

const NewMessage: React.FC<Props> = ({ chatId }) => {
  const [createMessage, { isLoading }] = useCreateMessageMutation();

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async (values) => {
      try {
        await createMessage({
          text: values.message,
          chatId,
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
    // TODO: Update height later
    <form onSubmit={formik.handleSubmit} style={{ height: "9.25vh" }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        height="100%"
        px={8}
      >
        <TextField
          formik={formik}
          label="Type new message"
          name="message"
          sx={{ flex: 1 }}
        />
        <Button
          type="submit"
          disabled={isLoading || !formik.values.message}
          variant="contained"
          size="large"
        >
          <SendIcon />
        </Button>
      </Stack>
    </form>
  );
};

export default NewMessage;
