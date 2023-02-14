import { useDispatch } from "react-redux";
import { removeFromCart } from "../../routes/cart/cart.reducer";
import type { AppDispatch } from "../../store/store";
import { CartItem } from "../../types";
import "./CartCard.css";

type CartProps = CartItem;

export const CartItemComponent = ({ id, bookTitle, bookDescription, bookPrice }: CartProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className='cart-card-wrapper'>
      <div className="cart-card-info">
        <strong>{bookTitle.toLowerCase()}</strong>
        <p>{bookDescription.toLowerCase()}</p>
      </div>
      <div className="item-price">
        <strong>₹{bookPrice}</strong>
      </div>
      <div className="cart-remove" onClick={() => { dispatch(removeFromCart(id)) }}>
        <button className='cart-remove-button' type="button">X</button>
      </div>
    </div>
  );
}