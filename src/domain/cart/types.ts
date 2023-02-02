import { Book } from "../books/types";

export interface CartItem extends Book {
  cartQuantity: number
}

export type CartState = {
  cartItems: CartItem[];
  cartTotalQuantity: number
  cartTotalAmount: number
}