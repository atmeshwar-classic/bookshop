import { useState } from "react";
import type { Book } from "../../domain/books/types";
import classes from "./../../styles/bookcard.module.css";
import bookpic from "./../../assets/book1.jpg";
import { AppDispatch } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, cartSelector } from "../../domain/cart/cartSlice";
import { CartItem, CartState } from "../../domain/cart/types";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* 
We would define the structure of the props in the same file as the component.
Since, this component has the same props as Type Book, we would assign it to it props.
*/
type BookProps = Book;

export const BookCard = (props: BookProps): JSX.Element => {
  const [togglebutton, setToggleButton] = useState<boolean>(false);
  const cart = useSelector(cartSelector);
  const dispatch: AppDispatch = useDispatch();

  function checkCart<T extends CartItem[], U extends Book>(
    cart: T,
    props: U
  ): boolean {
    for (let c of cart) {
      if (c.id === props.id) return false;
    }
    return true;
  }
  const onAddClickHandler = () => {
    if (!togglebutton) {
      if (checkCart(cart, props)) {
        // console.log("clicked");
        dispatch(addToCart({ ...props }));
        setToggleButton(!togglebutton);
        toast.success(` ${props.name} Added to cart`);
      } else {
        toast.error("Already in cart", {
          closeOnClick: true,
          theme: "light",
          icon: false,
        });
      }
    }
  };

  return (
    <div className={classes.bookCardContainer}>
      <div className={classes.bookCardHeader}>
        <img src={bookpic}></img>
      </div>
      <div className={classes.bookCardDescription} key={props.id}>
        <h3>{props.name}</h3>
        <h3>{props.author}</h3>
        <h5>{props.description}</h5>
        <h2>{props.price} $</h2>
      </div>
      <div className={classes.BookAddicon}>
        <button
          disabled={!checkCart(cart, props) === true}
          onClick={onAddClickHandler}
        >
          {!checkCart(cart, props) ? (
            <i className="fa fa-minus"></i>
          ) : (
            <i className="fa fa-plus" aria-hidden="true"></i>
          )}
        </button>
        
      </div>
    </div>
  );
};
