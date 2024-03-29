import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { ApiError } from "@lib/index";
import ROUTES from "constants/routes";

import { useCreateUserMutation } from "store/api/accounts";
import { getSerializedError } from "store/api";
import useToast, { ToastType } from "hooks/useToast";
import useCookie from "hooks/useCookie";

import { signupValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";

const Signup: React.FC = () => {
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const { setCookie } = useCookie("token");

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
        useToast("Account created successfully", ToastType.SUCCESS);
        setCookie(result.token);
        return navigate(ROUTES.default);
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
