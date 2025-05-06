import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 chareters.")
  .max(20, "Username must be not exceed 20 charecters.")
  .regex(/^[a-zA-Z0-9_]+$/, "Userename mustnot contain special charecters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 Charecter Long" }),
});
