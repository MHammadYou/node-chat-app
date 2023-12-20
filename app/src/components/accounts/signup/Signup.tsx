import { Box, Button } from "@mui/material";
import { useFormik } from "formik";

import TextField from "../TextField";
import { signupValidationSchema } from "./utils";

const Signup: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      // TODO
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField formik={formik} label="Username" name="username" />
        <TextField formik={formik} label="Email" name="email" type="email" />
        <TextField
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <TextField
          formik={formik}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
