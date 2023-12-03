import { RoleType } from "@prisma/client";
import { DateTime } from "next-auth/providers/kakao";

export type UserSession = {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: RoleType;
};

export type UserPersonalInfo = {
  id: string;
  name: string;
};

export type UserEmailInfo = {
  id: string;
  email: string;
};

export type UserPasswordInfo = {
  id: string;
  password: string;
  newPassword: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  quantity: number;
  category: string;
  price: number;
};

export type UpdateProductType = {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  category: string[];
  price: number;
};

export type UpdateProductImageType = {
  id: string;
  image: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Review = {
  id: string;
  createdAt: Date;
  rating: number;
  comment: string | null;
  user: string;
  product: {
    id: string;
    name: string;
    image: string | null;
  };
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};
