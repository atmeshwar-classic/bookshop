export type CartItem = {
  id: string;
  name: string;
  author: string;
  description?: string;
  price: number;
}

export interface CartProducts extends CartItem {
  quantity: number
}