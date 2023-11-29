"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import db from "./db";

/* Validate Schema */
const FormUserSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const CreateUserSchema = FormUserSchema.omit({
  id: true,
});

export type UserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

/* Create a New User */
export async function CreateUser(prevState: UserState, formData: FormData) {
  const validateFields = CreateUserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const { name, email, password } = validateFields.data;

  try {
    const usernameFound = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (usernameFound) {
      return {
        success: false,
        message: "Email already in use. Failed to Create User.",
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  try {
    await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  redirect("/");
}

/* Update User */

/* Create a New Product */

/* Update a Product */

/* Delete a Product */

/* Create a New Cart */

/* Update a Cart */

/* Delete a Cart */

/* Create a New Review */

/* Update a Review */

/* Delete a Review */
