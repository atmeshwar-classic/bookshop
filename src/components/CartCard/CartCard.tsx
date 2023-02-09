import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import type { CartItem } from '../../domain/cart/types'
import { removeFromCart } from "../../domain/cart/cartSlice";

type CartProps = CartItem;

export const CartCard = ( { id, name, description, price }: CartProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className='cart-card-wrapper'>
      <div className="cart-card-info">
        <p>{name.toLowerCase()}</p>
        <p>{description.toLowerCase()}</p>
      </div>
      <div className="item-price">
        <p>₹{price}</p>
      </div>
      <div className="cart-remove" onClick={() => {dispatch(removeFromCart(id))}}>
        <span className='cart-remove-button'>&times;</span>
      </div>
    </div>
  );
}