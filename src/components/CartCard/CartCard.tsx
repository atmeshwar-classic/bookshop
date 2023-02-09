import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import type { CartItem } from '../../domain/cart/types'
import { removeFromCart } from "../../domain/cart/cartSlice";
import "./CartCard.css";

type CartProps = CartItem;

export const CartCard = ({ id, name, description, price }: CartProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className='cart-card-wrapper'>
      <div className="cart-card-info">
        <strong>{name.toLowerCase()}</strong>
        <p>{description.toLowerCase()}</p>
      </div>
      <div className="item-price">
        <strong>₹{price}</strong>
      </div>
      <div className="cart-remove" onClick={() => {dispatch(removeFromCart(id))}}>
        <button className='cart-remove-button' type="button">X</button>
      </div>
    </div>
  );
}