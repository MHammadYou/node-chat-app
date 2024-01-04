import { useFormik } from "formik";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";

import { useLoginUserMutation } from "store/api/accounts";
import { getSerializedError } from "store/api";
import useToast from "hooks/useToast";

import { loginValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";

const Login: React.FC = () => {
  const [loginUser] = useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const result = await loginUser(values).unwrap();
        useToast(result.message, "success");
      } catch (error) {
        const { status, data } =
          getSerializedError<UserAuthenticationResponse>(error);
        if (typeof status === "number") {
          useToast(data.message, "error");
        } else {
          useToast("Something went wrong", "error");
        }
      }

      formik.resetForm();
      return;
    },
  });

  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <AccountsForm
      formik={formik}
      fields={fields}
      formTitle="Welcome back!"
      submitText="Login"
    />
  );
};

export default Login;
