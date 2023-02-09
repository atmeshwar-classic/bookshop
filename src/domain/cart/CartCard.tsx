import classes from "./../../styles/cartCard.module.css";
import { CartItem } from "./types";
import cross from "./../../assets/cross.svg";
import book from "./../../assets/book1.jpg";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../domain/cart/cartSlice";
import { toast } from "react-toastify";
export const CartCard = (props: CartItem): JSX.Element => {
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
          // console.log("clicked");
          dispatch(removeFromCart(props.id));
          toast.info(`${props.name} removed from cart `);
          // remove from cart
        }}
      >
        <button>
          <img src={cross}></img>
        </button>
      </div>
    </div>
  );
};
