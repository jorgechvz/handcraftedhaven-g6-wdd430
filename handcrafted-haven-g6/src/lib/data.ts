import { RoleType } from "@prisma/client";
import db from "./db";

/* ------------------ USERS ---------------------- */
/* Get All users */

export async function fetchUsers() {
  try {
    const users = await db.user.findMany();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      imageProfile: user.imageProfile,
      role: user.role,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get All users with Pagination */

export async function fetchUsersWithPagination(page: number) {
  const limit = 5;
  const offset = (page - 1) * limit;

  try {
    const users = await db.user.findMany({
      take: limit,
      skip: offset,
    });

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      imageProfile: user.imageProfile,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get user by Email */

export async function fetchUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return {
      id: user?.id,
      role: user?.role,
    };
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get User by ID */

export async function fetchUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      imageProfile: user?.imageProfile,
    };
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get users by role */

export async function fetchUserByRole(role: RoleType) {
  try {
    const users = await db.user.findMany({
      where: {
        role: role,
      },
    });
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      imageProfile: user.imageProfile,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* ------------------ PRODUCTS ---------------------- */
/* Get Products */

export async function fetchProducts() {
  try {
    const products = await db.product.findMany();
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get Products By User Id */

export async function fetchProductsByUserId(id: string) {
  try {
    const products = await db.product.findMany({
      where: {
        userId: id,
      },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get Product By Id */

export async function fetchProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: {
        id: id,
      },
    });
    return {
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      description: product?.description,
    };
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* ------------------ CART ---------------------- */
