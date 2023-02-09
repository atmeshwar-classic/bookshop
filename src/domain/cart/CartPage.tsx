import { useSelector } from "react-redux";
import { cartSelector } from "./cartSlice";
import "./CartPage.css";

export const CartPage = (): JSX.Element => {
  const cartItems = useSelector(cartSelector);

  return (
    <div className="cart-wrapper">
      {!cartItems.cart.length ? (
        <span>uh oh! no items inside cart</span>
      ) : (
        <div className="cart-items-wrapper">
          {/* TODO: add CartCard component here */}
          <div className="cart-total">
            <span className="cart-total-price">
             {/* TODO: add total price here */}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
