import { useDispatch } from "react-redux";
import { CartItem } from "../../domain/cart/types";
import { removeBookFromCart } from "../../domain/cart/cartSlice";
import "./styles.css";

interface CartcardProps {
  cartitem: CartItem;
}

const CartCard = ({ cartitem }: CartcardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <div className="item-img"></div>
      <div className="item-info">
        <p>{cartitem.name}</p>
        <p>{cartitem.description}</p>
      </div>
      <div className="item-price">
        <p>$ {cartitem.price}</p>
      </div>
      <div
        className="remove-item"
        onClick={() => {
          dispatch(removeBookFromCart(cartitem.id));
        }}
      >
        <strong>X</strong>
      </div>
    </div>
  );
};

export default CartCard;
