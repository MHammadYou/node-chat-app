import { useFormik } from "formik";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";

import { useCreateUserMutation } from "store/api/accounts";
import { getSerializedError } from "store/api";
import useToast, { ToastType } from "hooks/useToast";

import { signupValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";

const Signup: React.FC = () => {
  const [createUser] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async ({ username, email, password }) => {
      try {
        const result = await createUser({ username, email, password }).unwrap();
        useToast(result.message, ToastType.SUCCESS);
      } catch (error) {
        const { status, data } =
          getSerializedError<UserAuthenticationResponse>(error);

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

  const fields = [
    { label: "Username", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  return (
    <AccountsForm
      formik={formik}
      fields={fields}
      formTitle="Create an account"
      submitText="Register"
    />
  );
};

export default Signup;
