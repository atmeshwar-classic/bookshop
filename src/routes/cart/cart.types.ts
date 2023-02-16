import { DefaultLoadingState } from "../../types";

export type CartItem = {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookPrice: number;
  bookImgUrl: string;
}

export type CartState = DefaultLoadingState & {
  cart: CartItem[];
};