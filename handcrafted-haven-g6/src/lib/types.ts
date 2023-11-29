export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
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

export type Category = {
  id: number;
  name: string;
};

export type Review = {
  id: string;
  rating: number;
  comment: string | null;
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};
