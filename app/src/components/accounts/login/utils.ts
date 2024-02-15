import { object, string, ObjectSchema } from "yup";

import { UserLoginPayload } from "@lib/index";

export const loginValidationSchema: ObjectSchema<UserLoginPayload> = object({
  email: string().email("Invalid email").required("Email is missing"),
  password: string()
    .required("Password is missing")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});
