import { useSelector } from "react-redux";
import { cartSelector } from "./cartSlice";
import { CartItem } from "./types";
import { CartCard } from "../../components/CartCard/CartCard";
import { totalPrice } from "../../utils/totalPrice";
import "./CartPage.css";

export const CartPage = (): JSX.Element => {

  const { cart } = useSelector(cartSelector);

  return (
    <div className="cart-wrapper">
      {!cart.length ? (
        <span>uh oh! no books inside cart</span>
      ) : (
        <div className="cart-items-wrapper">
            {cart.map((cartitem: CartItem) => (
              <CartCard
                {...cartitem}
                key={cartitem.id}
              />
            ))}
          <div className="cart-total">
            <strong className="cart-total-price">
              amount → ₹{totalPrice(cart)}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};
