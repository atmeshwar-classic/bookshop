import classes from "./../../styles/cartPage.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CartCard } from "./CartCard";
import { cartSelector } from "./cartSlice";

export const CartPage = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0);
  const cart = useSelector(cartSelector);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => (acc += curr.price), 0));
  }, [total,cart]);
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
      {cart.length > 0 && (
        <div className={classes.CartTotal}>
          <p>Total: {total} $</p>
        </div>
      )}
      {cart.length === 0 && (
        <div className={classes.cartEmpty}>
          <p>Cart is empty</p>
        </div>
      )}
    </div>
  );
};
