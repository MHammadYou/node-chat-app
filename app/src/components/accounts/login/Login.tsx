import { useFormik } from "formik";

import { loginValidationSchema } from "./utils";
import AccountsForm from "../AccountsForm";

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      // TODO
    },
  });

  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return <AccountsForm formik={formik} fields={fields} submitText="Login" />;
};

export default Login;
