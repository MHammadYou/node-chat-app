import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { UserAuthenticationResponse } from "@lib/api/accounts/types";

import { useLoginUserMutation } from "store/api/accounts";
import { getSerializedError } from "store/api";
import useToast, { ToastType } from "hooks/useToast";
import useCookie from "hooks/useCookie";
import ROUTES from "constants/routes";

import { loginValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";

const Login: React.FC = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const { setCookie } = useCookie("token");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const result = await loginUser(values).unwrap();
        useToast(result.message, ToastType.SUCCESS);
        setCookie(result.token);
        return navigate(ROUTES.default);
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
