"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import db from "./db";
import { RoleType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import { File } from "buffer";

/* --------------- Cloudinary ------------------- */

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ------------------ Validate Schema ----------------------*/
/* Account Schema */
const FormAccountSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const AccountUserSchema = FormAccountSchema.omit({
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

/* User Schema */
const FormUserSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  imageProfile: z
    .object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
    })
    .optional(),
  role: z.string({ required_error: "Role is required" }),
});

const UserSchema = FormUserSchema.omit({
  id: true,
});
export type CreateUserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    imageProfile?: string[];
    role?: string[];
  };
  message?: string | null;
};

/* ----------------- Actions ----------------------- */

/* Create a New Account */
export async function CreateAccount(prevState: UserState, formData: FormData) {
  const validateFields = AccountUserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Account.",
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
        message: "Email already in use. Failed to Create Account.",
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Account.",
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

/* Create a New User */
export async function CreateUser(
  prevState: CreateUserState,
  formData: FormData
) {
  const validateFields = UserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    imageProfile: formData.get("image"),
    role: formData.get("role"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  const { name, email, password, role } = validateFields.data;

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
  let imageProfile: File | null = null;
  const imageProfileValue = formData.get("image");

  if (imageProfileValue instanceof File) {
    imageProfile = imageProfileValue;
  }

  const bytes = await imageProfile?.arrayBuffer();
  let base64Image = "";
  if (bytes) {
    const base64 = Buffer.from(bytes).toString("base64");
    base64Image = `data:image/jpeg;base64,${base64}`;
  }

  console.log(imageProfile);
  const passwordHash = await bcrypt.hash(password, 10);
  const roleType: RoleType = role as RoleType;

  const response: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      })
      .end(base64Image);
  });

  const imageUrl = response.secure_url;
  console.log(imageUrl);
  try {
    await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        imageProfile: imageUrl,
        role: roleType,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
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
