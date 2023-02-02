import { useSelector } from "react-redux";
import "./style.css";
import { RootState } from "../../store/store";
import CartCard from "../../components/cartCard/CartCard";
import { CartItem } from "./types";

export const CartPage = (): JSX.Element => {
  const cartdata = useSelector((state: RootState) => state.cart.cart);

  const calTotalPrice = (): number => {
    const total = cartdata.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price;
    }, 0);

    return total;
  };

  return (
    <div className="cart-page-conatiner">
      <div className="title-cart-page">Cart 🛒</div>

      {cartdata.length === 0 ? (
        <></>
      ) : (
        <div className="cart-item-list">
          {cartdata.map((cartitem: CartItem) => {
            return (
              <div className="single-cart-item">
                <CartCard cartitem={cartitem} key={cartitem.id} />
              </div>
            );
          })}
        </div>
      )}

      <div className="total-price">Total price - {calTotalPrice()} $</div>
    </div>
  );
};
