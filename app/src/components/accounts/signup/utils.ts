import { object, string, ObjectSchema, ref } from "yup";

import { User } from "@lib/types/entities";

type SignupValidationType = User & {
  confirmPassword: string;
};

export const signupValidationSchema: ObjectSchema<SignupValidationType> =
  object({
    username: string()
      .required("Username is missing")
      .min(4, "Username must contain atleast 4 letters")
      .max(20, "Username must be shorter then 20 letters"),
    email: string().email("Invalid email").required("Email is missing"),
    password: string()
      .required("Password is missing")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: string()
      .required("Confirm password is missing")
      .oneOf([ref("password")], "Passwords must match"),
  });
