import { DefaultLoadingState } from "../../types";

export type CartItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  onClickCross?:any,
  index?:number
}
export type CartState = DefaultLoadingState & {
  cartItems: CartItem[];
}