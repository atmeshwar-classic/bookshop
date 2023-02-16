import { useSelector } from "react-redux";
import { CartItemComponent } from "../../components/cartCard";
import Header from "../../components/header";
import { cartSelector } from "./cart.reducer";
import "./cart.styles.css";
import { CartItem } from "./cart.types";
import { totalCartPrice } from "./cart.utils";

export const CartMain = (): JSX.Element => {

  const { cart } = useSelector(cartSelector);

  return (
    <>
      <Header />
      <div className="cart-wrapper">
        {!cart.length ? (
          <span>uh oh! no books inside cart</span>
        ) : (
          <div className="cart-items-wrapper">
            {cart.map((cartitem: CartItem) => (
              <CartItemComponent
                {...cartitem}
                key={cartitem.id}
              />
            ))}
            <div className="cart-total">
              <div className="cart-total-div">
                <strong className="cart-total-price">
                  Total     ₹{totalCartPrice(cart)}
                </strong>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};
