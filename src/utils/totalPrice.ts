import { CartItem } from "../domain/cart/types";

export const totalPrice = (cart: CartItem[]) => cart.reduce((total, item) => (total += item.price), 0);