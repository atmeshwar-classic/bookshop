export type CartItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
}

export type CartState ={
  cartItems: CartItem[]
}