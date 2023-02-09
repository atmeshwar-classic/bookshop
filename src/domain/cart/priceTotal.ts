import { CartItem } from "./types";

export const priceTotal = (cart: CartItem[]) => {
  return cart.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.price),
    0
  );
};
