import { useFormik } from "formik";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";
import { useCreateUserMutation } from "store/api/accounts";

import { signupValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";
import useToast from "hooks/useToast";

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
