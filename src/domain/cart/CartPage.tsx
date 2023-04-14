import './CartPageStyles.css'
import { useAppDispatch, useAppSelector } from "../../store/store";
import { removeFromCart } from "./cartSlice";
import { CartItem, CartState } from "./types"

export const CartPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);


  const handleRemoveCartItem = (item: CartItem): void => {
    dispatch(removeFromCart(item));
  };
  const getCartTotalCurrency = ({ cartItems }: CartState): number => {
    let total: number = 0;
    cartItems.forEach((item: CartItem) => (total += item?.price));
    return total;
  };
  return (
    <div className="cart-main">
      <div className="cart-wrapper">
        <h3 style={{textAlign:"center"}}>Checkout</h3>
        <div className="cart-scroll">
      {
          cartItems.map((item,index) => {
          return (<div key={index} className="cart-container">
            <div className="cart-img"></div>
            <div>
            <div className="cart-name">{item.name}</div>
            <div className="cart-desc">{item.description}</div>
            </div>
            <div className="cart-price">{`${item.price}$`}</div>
            <div className="remove" onClick={()=>handleRemoveCartItem(item)}>X</div>
          </div>
          )
        })
      }
      </div>
      {
        cartItems.length ? <div className="cart-container total">
        <h3>Total</h3>
        <h3 className="total">{`${getCartTotalCurrency({cartItems})}$`}</h3>
      </div> :
      <div className="empty-cart">Oops,cart it empty!</div>
      }

    </div>
    </div>
  )
}