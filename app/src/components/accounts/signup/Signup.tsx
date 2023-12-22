import { Box, Button } from "@mui/material";
import { useFormik } from "formik";

import { useCreateUserMutation } from "store/api/accounts";

import TextField from "../TextField";
import { signupValidationSchema } from "./utils";

const Signup: React.FC = () => {
  const [createUser, result] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: ({ username, email, password }) => {
      try {
        createUser({ username, email, password });
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const fieldsData = [
    { label: "Username", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Passwor", name: "confirmPassword", type: "password" },
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
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
