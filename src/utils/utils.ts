import { CartItem } from "../types";

export const delay = (time: number): Promise<true> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  })
}

export const totalCartPrice = (cart: CartItem[]) => cart.reduce((total, item) => (total += item.bookPrice), 0);