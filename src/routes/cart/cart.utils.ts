import { CartItem } from "./cart.types";

export const totalCartPrice = (cart: CartItem[]) => cart.reduce((total, item) => (total += item.bookPrice), 0);