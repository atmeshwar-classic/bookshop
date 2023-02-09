import { DefaultLoadingState } from "../../types";

export type CartItem = {
  id: string;
  name: string;
  author: string;
  description?: string;
  price: number;
}

export type CartState = DefaultLoadingState & {
  cart: CartItem[];
};