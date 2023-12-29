import { Box, Button } from "@mui/material";
import { useFormik } from "formik";

import { UserCreationResponse } from "@lib/api/accounts/types";
import { useCreateUserMutation } from "store/api/accounts";

import TextField from "../TextField";
import { signupValidationSchema } from "./utils";

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
        console.log(result.message);

        formik.resetForm();
      } catch (error) {
        // TODO: Update this later
        console.log(((error as any).data as UserCreationResponse).message);
      }
    },
  });

  const fieldsData = [
    { label: "Username", name: "username", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
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
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
