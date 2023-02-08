import { CartState } from "../domain/cart/types";
export const total = (cart:CartState) => {
  return cart.cartItems.reduce((a, c) => (a += c.price * c.cartQuantity), 0);
}