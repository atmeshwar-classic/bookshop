import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { cartSelector } from "./cartSlice";
import { CartItem } from "./types";


export const CartPage = (): JSX.Element => {
  const dispatch:AppDispatch = useDispatch()
  const cartItems= useSelector(cartSelector)
  console.log('cart',cartItems);
  const total = cartItems.reduce((a,c) => a+= (c.price,c.quantity),0)
  

  return (
    <div>
      <h1>{cartItems.length}Items</h1>
      {cartItems.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  )
}