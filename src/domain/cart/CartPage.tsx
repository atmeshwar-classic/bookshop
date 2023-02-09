import { useSelector } from "react-redux";
import { CartItem } from "./types";
import { cartSelector } from "./cartSlice";
import "./styles.css";
import CartCard from "../../components/CartCard/CartCard";
import { priceTotal } from "./priceTotal";

export const CartPage = (): JSX.Element => {
  const cartData = useSelector(cartSelector);

  return (
    <div className="cart-box">
      {cartData.cart.length === 0 ? (
        <>The Cart is empty</>
      ) : (
        <div className="cart-container">
          {cartData.cart.map((cartitem: CartItem) => {
            return <CartCard cartitem={cartitem} key={cartitem.id} />;
          })}
          <div className="price-container">
            <div className="total-price">
              Total {priceTotal(cartData.cart)} $
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
