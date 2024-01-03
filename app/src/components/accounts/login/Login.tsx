import { useFormik } from "formik";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";
import { useLoginUserMutation } from "store/api/accounts";

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
        console.log(result.message);
      } catch (error) {
        // TODO: Update this later
        console.log(
          ((error as any).data as UserAuthenticationResponse).message
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
