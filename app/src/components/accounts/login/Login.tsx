import { useFormik } from "formik";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";
import { useLoginUserMutation } from "store/api/accounts";

import { loginValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";
import useToast from "hooks/useToast";

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
        // TODO: Update this later
        useToast(
          ((error as any).data as UserAuthenticationResponse).message,
          "error"
        );
      }
      formik.resetForm();
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
