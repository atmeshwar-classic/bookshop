import { CartItem } from "../domain/cart/types";
export const total = (cart:CartItem[]) => {
  return cart.reduce((a, c) => (a += c.price * c.cartQuantity), 0);
}