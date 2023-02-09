import classes from "./../../styles/cartPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CartCard } from "./CartCard";
import { cartSelector } from "./cartSlice";

export const CartPage = (): JSX.Element => {
  const cart = useSelector(cartSelector);
  return (
    <div className={classes.CartPageContainer}>
      {/* <p>My Cart Page</p> */}
      {cart.length > 0 &&
        cart.map((cartitem) => (
          <CartCard
            key={cartitem.id}
            id={cartitem.id}
            name={cartitem.name}
            description={cartitem.description}
            price={cartitem.price}
          />
        ))}
      {cart.length === 0 && (
        <div className={classes.cartEmpty}>
          <p>Cart is empty</p>
        </div>
      )}
    </div>
  );
};
