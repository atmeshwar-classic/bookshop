import classes from "./../../styles/cartCard.module.css";
import { CartItem } from "./types";
import cross from "./../../assets/cross.svg";
import book from "./../../assets/book1.jpg";
import { AppDispatch } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, cartSelector } from "../../domain/cart/cartSlice";
export const CartCard = (props: CartItem): JSX.Element => {
  const cart = useSelector(cartSelector);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={classes.cartCardContainer}>
      <div className={classes.cardHero}>
        <img src={book}></img>
      </div>
      <div className={classes.cartCardDescription} key={props.id}>
        <div className="description-Info">
          <h3>{props.name}</h3>
          <h5>{props.description}</h5>
        </div>
        <div className="description-price">
          <h2>{props.price} $</h2>
        </div>
      </div>
      <div
        className={classes.BookRemoveicon}
        onClick={() => {
          console.log("clicked");
          dispatch(removeFromCart(props.id));
          // remove from cart  ---- call with bookitem prop
        }}
      >
        <img src={cross}></img>
      </div>
    </div>
  );
};
