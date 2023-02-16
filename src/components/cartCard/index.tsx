import { useDispatch } from "react-redux";
import { removeFromCart } from "../../routes/cart/cart.reducer";
import { CartItem } from "../../routes/cart/cart.types";
import type { AppDispatch } from "../../store/store";
import "./cartCard.styles.css";

type CartProps = CartItem;

export const CartItemComponent = ({ id, bookTitle, bookDescription, bookPrice, bookImgUrl }: CartProps): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-information">
        <div className="cart-image-item">
          <img width={60} height={60} src={bookImgUrl} loading={"lazy"} alt="cartImage" />
        </div>
        <div className="cart-item-info">
          <p className="cart-item-title">{bookTitle.toLowerCase()}</p>
          <p className="cart-item-desc">{bookDescription.toLowerCase()}</p>
        </div>
      </div>
      <div className="cart-price-block">
        <div className="cart-item-price">
          <strong>₹{bookPrice}</strong>
        </div>
        <div className="cart-remove" onClick={() => { dispatch(removeFromCart(id)) }}>
          <button className='cart-remove-button' type="button">X</button>
        </div>
      </div>
    </div>
  );
}