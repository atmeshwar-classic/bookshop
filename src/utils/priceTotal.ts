import { CartItem } from "../domain/cart/types";

export const totalPrice = (cart: CartItem[]) => {
  return cart.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.price),
    0
  );
};
