import { Box, Button } from "@mui/material";
import { useFormik } from "formik";

import { loginValidationSchema } from "./utils";
import TextField from "../TextField";

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

  const fieldsData = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        {fieldsData.map(({ label, name, type }) => (
          <TextField
            formik={formik}
            label={label}
            name={name}
            type={type}
            key={name}
          />
        ))}

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
